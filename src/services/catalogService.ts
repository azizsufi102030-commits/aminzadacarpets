/**
 * AMINZADA CARPETS — Catalog Repository & CMS Adapter Service
 * 
 * Centralized, decoupled data access layer.
 * Future CMS integration (e.g. Supabase, Sanity, Strapi) can swap the underlying
 * data providers in this service without modifying the UI components.
 */

import { COLLECTIONS_DATA } from '../data/collections';
import { PRODUCTS_DATA } from '../data/products';
import { CatalogFilterOptions, Collection, Product } from '../types';

export interface ICatalogRepository {
  getAllProducts(): Promise<Product[]> | Product[];
  getPublishedProducts(): Promise<Product[]> | Product[];
  getProductBySlug(slug: string): Promise<Product | undefined> | (Product | undefined);
  getProductsByCollection(collectionSlugOrId: string): Promise<Product[]> | Product[];
  searchProducts(filters: CatalogFilterOptions): Promise<Product[]> | Product[];
  getAllCollections(): Promise<Collection[]> | Collection[];
  getCollectionBySlug(slug: string): Promise<Collection | undefined> | (Collection | undefined);
  getRelatedProducts(productId: string, limit?: number): Promise<Product[]> | Product[];
}

class LocalCatalogRepository implements ICatalogRepository {
  private products: Product[] = PRODUCTS_DATA;
  private collections: Collection[] = COLLECTIONS_DATA;

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getPublishedProducts(): Product[] {
    return this.products.filter(p => p.published);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug.toLowerCase() === slug.toLowerCase() && p.published);
  }

  getProductsByCollection(collectionSlugOrId: string): Product[] {
    const col = this.collections.find(
      c => c.slug.toLowerCase() === collectionSlugOrId.toLowerCase() || c.id === collectionSlugOrId
    );
    if (!col) return [];

    return this.products.filter(
      p => p.published && (p.collectionId === col.id || col.relatedProductIds.includes(p.id))
    );
  }

  searchProducts(filters: CatalogFilterOptions): Product[] {
    let result = this.getPublishedProducts();

    // 1. Text Query (Search across name, SKU, pattern, primary colors, descriptions)
    if (filters.query && filters.query.trim().length > 0) {
      const q = filters.query.trim().toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.pattern.toLowerCase().includes(q) ||
        p.collectionName.toLowerCase().includes(q) ||
        p.primaryColors.some(c => c.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

    // 2. Collection Filter
    if (filters.collectionId && filters.collectionId !== 'all') {
      result = result.filter(p => p.collectionId === filters.collectionId);
    }

    // 3. Pattern / Style Filter
    if (filters.pattern && filters.pattern !== 'all') {
      const targetPattern = filters.pattern.toLowerCase();
      result = result.filter(p => p.pattern.toLowerCase().includes(targetPattern));
    }

    // 4. Color Filter
    if (filters.color && filters.color !== 'all') {
      const targetColor = filters.color.toLowerCase();
      result = result.filter(p => 
        p.primaryColors.some(c => c.toLowerCase().includes(targetColor))
      );
    }

    // 5. Size Filter
    if (filters.size && filters.size !== 'all') {
      const targetSize = filters.size.toLowerCase();
      result = result.filter(p => 
        p.availableSizes.some(s => s.toLowerCase().includes(targetSize))
      );
    }

    // 6. Sorting
    if (filters.sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }

  getAllCollections(): Collection[] {
    return this.collections.filter(c => c.published);
  }

  getCollectionBySlug(slug: string): Collection | undefined {
    return this.collections.find(c => c.slug.toLowerCase() === slug.toLowerCase() && c.published);
  }

  getRelatedProducts(productId: string, limit: number = 3): Product[] {
    const current = this.products.find(p => p.id === productId);
    if (!current) return this.getPublishedProducts().slice(0, limit);

    // Products in the same collection, excluding current
    const sameCollection = this.products.filter(
      p => p.published && p.id !== productId && p.collectionId === current.collectionId
    );

    if (sameCollection.length >= limit) {
      return sameCollection.slice(0, limit);
    }

    // Fill remaining with other products
    const others = this.products.filter(
      p => p.published && p.id !== productId && p.collectionId !== current.collectionId
    );

    return [...sameCollection, ...others].slice(0, limit);
  }
}

export const catalogService = new LocalCatalogRepository();
