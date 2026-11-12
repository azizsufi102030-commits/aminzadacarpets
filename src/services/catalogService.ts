/**
 * AMINZADA CARPETS — Catalog Repository & CMS Adapter Service
 * 
 * Centralized, decoupled data access layer backed by Firebase Firestore
 * with synchronous in-memory caching and offline fallback to ensure instantaneous renders.
 */

import { useState, useEffect, useMemo } from 'react';
import { COLLECTIONS_DATA } from '../data/collections';
import { PRODUCTS_DATA } from '../data/products';
import { CatalogFilterOptions, Collection, Product, InquiryRecord } from '../types';
import { db } from './firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

export interface ICatalogRepository {
  getAllProducts(): Product[];
  getPublishedProducts(): Product[];
  getProductBySlug(slug: string): Product | undefined;
  getProductsByCollection(collectionSlugOrId: string): Product[];
  searchProducts(filters: CatalogFilterOptions): Product[];
  getAllCollections(): Collection[];
  getCollectionBySlug(slug: string): Collection | undefined;
  getRelatedProducts(productId: string, limit?: number): Product[];
}

type ChangeListener = () => void;

class HybridFirestoreCatalogRepository implements ICatalogRepository {
  private products: Product[] = [];
  private collections: Collection[] = [];
  private listeners: Set<ChangeListener> = new Set();
  private isInitialized = false;

  constructor() {
    this.initLocalCache();
    if (typeof window !== 'undefined') {
      this.initFirestoreSync();
    }
  }

  private initLocalCache() {
    let cachedProducts: Product[] = [];
    let cachedCollections: Collection[] = [];

    if (typeof window !== 'undefined') {
      try {
        const pRaw = localStorage.getItem('aminzada_cached_products');
        if (pRaw) cachedProducts = JSON.parse(pRaw);
        const cRaw = localStorage.getItem('aminzada_cached_collections');
        if (cRaw) cachedCollections = JSON.parse(cRaw);
      } catch (e) {
        // Fall back to static
      }
    }

    // Merge cached with static: match by id or slug
    const prodMap = new Map<string, Product>();
    PRODUCTS_DATA.forEach((p) => prodMap.set(p.id, p));
    cachedProducts.forEach((cp) => {
      let matchedKey: string | null = null;
      for (const [key, val] of prodMap.entries()) {
        if (key === cp.id || val.id === cp.id || val.slug === cp.slug) {
          matchedKey = key;
          break;
        }
      }
      if (matchedKey) prodMap.delete(matchedKey);
      prodMap.set(cp.id, cp);
    });
    this.products = Array.from(prodMap.values());

    const colMap = new Map<string, Collection>();
    COLLECTIONS_DATA.forEach((c) => colMap.set(c.id, c));
    cachedCollections.forEach((cc) => {
      let matchedKey: string | null = null;
      for (const [key, val] of colMap.entries()) {
        if (key === cc.id || val.id === cc.id || val.slug === cc.slug) {
          matchedKey = key;
          break;
        }
      }
      if (matchedKey) colMap.delete(matchedKey);
      colMap.set(cc.id, cc);
    });
    this.collections = Array.from(colMap.values());
  }

  public subscribe(listener: ChangeListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('Error in catalog change listener:', err);
      }
    });
  }

  private async initFirestoreSync() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    try {
      // 1. Listen for real-time live updates on Products collection
      const productsRef = collection(db, 'products');
      onSnapshot(
        productsRef,
        (snapshot) => {
          const remoteProducts: Product[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as Product;
            remoteProducts.push({
              ...data,
              id: docSnap.id
            });
          });

          // Merge: remote updates override static defaults by id or slug
          const prodMap = new Map<string, Product>();
          PRODUCTS_DATA.forEach((p) => prodMap.set(p.id, p));

          remoteProducts.forEach((rp) => {
            let matchedKey: string | null = null;
            for (const [key, val] of prodMap.entries()) {
              if (key === rp.id || val.id === rp.id || val.slug === rp.slug) {
                matchedKey = key;
                break;
              }
            }
            if (matchedKey) {
              prodMap.delete(matchedKey);
            }
            prodMap.set(rp.id, rp);
          });

          this.products = Array.from(prodMap.values());

          try {
            localStorage.setItem('aminzada_cached_products', JSON.stringify(this.products));
          } catch (e) {}

          this.notify();
        },
        (error) => {
          console.warn('Firestore products listener:', error.message);
        }
      );

      // 2. Listen for real-time live updates on Collections
      const collectionsRef = collection(db, 'collections');
      onSnapshot(
        collectionsRef,
        (snapshot) => {
          const remoteCollections: Collection[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as Collection;
            remoteCollections.push({
              ...data,
              id: docSnap.id
            });
          });

          const colMap = new Map<string, Collection>();
          COLLECTIONS_DATA.forEach((c) => colMap.set(c.id, c));

          remoteCollections.forEach((rc) => {
            let matchedKey: string | null = null;
            for (const [key, val] of colMap.entries()) {
              if (key === rc.id || val.id === rc.id || val.slug === rc.slug) {
                matchedKey = key;
                break;
              }
            }
            if (matchedKey) {
              colMap.delete(matchedKey);
            }
            colMap.set(rc.id, rc);
          });

          this.collections = Array.from(colMap.values());

          try {
            localStorage.setItem('aminzada_cached_collections', JSON.stringify(this.collections));
          } catch (e) {}

          this.notify();
        },
        (error) => {
          console.warn('Firestore collections listener:', error.message);
        }
      );
    } catch (err) {
      console.warn('Failed to attach Firestore listeners, using local cache:', err);
    }
  }

  /**
   * Seeds the initial collections and products to Firestore if the remote database is empty
   */
  public async seedInitialDataIfEmpty(): Promise<{ seededProducts: number; seededCollections: number }> {
    try {
      const prodSnap = await getDocs(collection(db, 'products'));
      const colSnap = await getDocs(collection(db, 'collections'));

      let seededCollections = 0;
      let seededProducts = 0;

      if (colSnap.empty) {
        for (const col of COLLECTIONS_DATA) {
          await setDoc(doc(db, 'collections', col.id), col);
          seededCollections++;
        }
      }

      if (prodSnap.empty) {
        for (const prod of PRODUCTS_DATA) {
          await setDoc(doc(db, 'products', prod.id), prod);
          seededProducts++;
        }
      }

      return { seededProducts, seededCollections };
    } catch (err) {
      console.error('Error seeding initial data to Firestore:', err);
      throw err;
    }
  }

  // ================= ADMIN MUTATIONS =================

  public async saveProduct(product: Product): Promise<void> {
    const productId = product.id || `prod_${Date.now()}`;
    const cleanProduct: Product = {
      ...product,
      id: productId,
      updatedAt: new Date().toISOString()
    };

    // Update in-memory cache immediately
    const idx = this.products.findIndex((p) => p.id === productId || p.slug === cleanProduct.slug);
    if (idx >= 0) {
      this.products[idx] = cleanProduct;
    } else {
      this.products.unshift(cleanProduct);
    }

    try {
      localStorage.setItem('aminzada_cached_products', JSON.stringify(this.products));
    } catch (e) {}

    this.notify();

    // Save to Firestore
    try {
      await setDoc(doc(db, 'products', productId), cleanProduct);
    } catch (remoteErr) {
      console.error('Failed to write to remote Firestore:', remoteErr);
      throw remoteErr;
    }
  }

  public async deleteProduct(productId: string): Promise<void> {
    this.products = this.products.filter((p) => p.id !== productId);
    try {
      localStorage.setItem('aminzada_cached_products', JSON.stringify(this.products));
    } catch (e) {}
    this.notify();

    try {
      await deleteDoc(doc(db, 'products', productId));
    } catch (err) {
      console.warn('Remote deletion note:', err);
    }
  }

  public async saveCollection(collectionData: Collection): Promise<void> {
    const colId = collectionData.id || `col_${Date.now()}`;
    const cleanCol: Collection = {
      ...collectionData,
      id: colId
    };

    const idx = this.collections.findIndex((c) => c.id === colId);
    if (idx >= 0) {
      this.collections[idx] = cleanCol;
    } else {
      this.collections.push(cleanCol);
    }

    try {
      localStorage.setItem('aminzada_cached_collections', JSON.stringify(this.collections));
    } catch (e) {}

    this.notify();

    try {
      await setDoc(doc(db, 'collections', colId), cleanCol);
    } catch (remoteErr) {
      console.error('Failed to write collection to remote Firestore:', remoteErr);
      throw remoteErr;
    }
  }

  public async deleteCollection(collectionId: string): Promise<void> {
    this.collections = this.collections.filter((c) => c.id !== collectionId);
    try {
      localStorage.setItem('aminzada_cached_collections', JSON.stringify(this.collections));
    } catch (e) {}
    this.notify();

    try {
      await deleteDoc(doc(db, 'collections', collectionId));
    } catch (err) {
      console.warn('Remote collection deletion note:', err);
    }
  }

  // ================= INQUIRIES & QUOTE LEADS =================

  public async recordInquiry(
    inquiryData: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>
  ): Promise<string> {
    const id = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const record: InquiryRecord = {
      ...inquiryData,
      id,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    try {
      await setDoc(doc(db, 'inquiries', id), record);
    } catch (err) {
      console.warn('Could not save inquiry to remote Firestore:', err);
    }
    return id;
  }

  public async getAllInquiries(): Promise<InquiryRecord[]> {
    try {
      const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const items: InquiryRecord[] = [];
      snapshot.forEach((snap) => {
        items.push({
          ...(snap.data() as InquiryRecord),
          id: snap.id
        });
      });
      return items;
    } catch (err) {
      console.warn('Could not fetch inquiries:', err);
      return [];
    }
  }

  public async updateInquiryStatus(id: string, status: InquiryRecord['status']): Promise<void> {
    await setDoc(doc(db, 'inquiries', id), { status }, { merge: true });
  }

  public async deleteInquiry(id: string): Promise<void> {
    await deleteDoc(doc(db, 'inquiries', id));
  }

  // ================= PUBLIC QUERIES =================

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getPublishedProducts(): Product[] {
    return this.products.filter((p) => p.published);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(
      (p) => p.slug.toLowerCase() === slug.toLowerCase() && p.published
    );
  }

  getProductsByCollection(collectionSlugOrId: string): Product[] {
    const col = this.collections.find(
      (c) =>
        c.slug.toLowerCase() === collectionSlugOrId.toLowerCase() ||
        c.id === collectionSlugOrId
    );
    if (!col) return [];

    return this.products.filter(
      (p) =>
        p.published &&
        (p.collectionId === col.id || (col.relatedProductIds && col.relatedProductIds.includes(p.id)))
    );
  }

  searchProducts(filters: CatalogFilterOptions): Product[] {
    let result = this.getPublishedProducts();

    // 1. Text Query
    if (filters.query && filters.query.trim().length > 0) {
      const q = filters.query.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.pattern.toLowerCase().includes(q) ||
          p.collectionName.toLowerCase().includes(q) ||
          (p.primaryColors && p.primaryColors.some((c) => c.toLowerCase().includes(q))) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // 2. Collection Filter
    if (filters.collectionId && filters.collectionId !== 'all') {
      result = result.filter((p) => p.collectionId === filters.collectionId);
    }

    // 3. Pattern / Style Filter
    if (filters.pattern && filters.pattern !== 'all') {
      const targetPattern = filters.pattern.toLowerCase();
      result = result.filter((p) => p.pattern.toLowerCase().includes(targetPattern));
    }

    // 4. Color Filter
    if (filters.color && filters.color !== 'all') {
      const targetColor = filters.color.toLowerCase();
      result = result.filter(
        (p) => p.primaryColors && p.primaryColors.some((c) => c.toLowerCase().includes(targetColor))
      );
    }

    // 5. Size Filter
    if (filters.size && filters.size !== 'all') {
      const targetSize = filters.size.toLowerCase();
      result = result.filter(
        (p) => p.availableSizes && p.availableSizes.some((s) => s.toLowerCase().includes(targetSize))
      );
    }

    // 6. Sorting
    if (filters.sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === 'newest') {
      result.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return result;
  }

  getAllCollections(): Collection[] {
    return this.collections.filter((c) => c.published);
  }

  getCollectionBySlug(slug: string): Collection | undefined {
    return this.collections.find(
      (c) => c.slug.toLowerCase() === slug.toLowerCase() && c.published
    );
  }

  getRelatedProducts(productId: string, limit: number = 3): Product[] {
    const current = this.products.find((p) => p.id === productId);
    if (!current) return this.getPublishedProducts().slice(0, limit);

    const sameCollection = this.products.filter(
      (p) => p.published && p.id !== productId && p.collectionId === current.collectionId
    );

    if (sameCollection.length >= limit) {
      return sameCollection.slice(0, limit);
    }

    const others = this.products.filter(
      (p) => p.published && p.id !== productId && p.collectionId !== current.collectionId
    );

    return [...sameCollection, ...others].slice(0, limit);
  }
}

export const catalogService = new HybridFirestoreCatalogRepository();

/**
 * React hook that subscribes the calling component to live catalog updates
 * Returns a stable reference that updates whenever the database syncs,
 * ensuring React useMemo and re-renders pick up updated products/collections immediately.
 */
export function useCatalog() {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    return catalogService.subscribe(() => {
      setVersion((v) => v + 1);
    });
  }, []);

  return useMemo(
    () => ({
      version,
      getAllProducts: () => catalogService.getAllProducts(),
      getPublishedProducts: () => catalogService.getPublishedProducts(),
      getProductBySlug: (slug: string) => catalogService.getProductBySlug(slug),
      getProductsByCollection: (col: string) => catalogService.getProductsByCollection(col),
      searchProducts: (filters: CatalogFilterOptions) => catalogService.searchProducts(filters),
      getAllCollections: () => catalogService.getAllCollections(),
      getCollectionBySlug: (slug: string) => catalogService.getCollectionBySlug(slug),
      getRelatedProducts: (id: string, limit?: number) => catalogService.getRelatedProducts(id, limit),
      saveProduct: (p: Product) => catalogService.saveProduct(p),
      deleteProduct: (id: string) => catalogService.deleteProduct(id),
      saveCollection: (c: Collection) => catalogService.saveCollection(c),
      deleteCollection: (id: string) => catalogService.deleteCollection(id),
      recordInquiry: (inq: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>) =>
        catalogService.recordInquiry(inq),
      getAllInquiries: () => catalogService.getAllInquiries(),
      updateInquiryStatus: (id: string, status: InquiryRecord['status']) =>
        catalogService.updateInquiryStatus(id, status),
      deleteInquiry: (id: string) => catalogService.deleteInquiry(id),
      seedInitialDataIfEmpty: () => catalogService.seedInitialDataIfEmpty(),
    }),
    [version]
  );
}
