/**
 * AMINZADA CARPETS — Individual Collection Detail Page
 * 
 * Complies with Section 11:
 * - Shows ONLY the products actually assigned to this collection.
 * - Breadcrumbs: Home -> Collections -> Collection Name
 * - Product cards with full details and WhatsApp inquiry
 */

import React from 'react';
import { useRouter } from '../router/Router';
import { catalogService } from '../services/catalogService';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { Link } from '../router/Router';
import { ArrowLeft } from 'lucide-react';

export function CollectionDetailPage() {
  const { params } = useRouter();
  const slug = params.slug || '';
  const collection = catalogService.getCollectionBySlug(slug);

  if (!collection) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="font-editorial text-3xl text-[#5E0006]">Collection Not Found</h1>
        <p className="text-sm text-[#77716B]">The collection you requested does not exist or has been relocated.</p>
        <div>
          <Link
            href="/collections"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#5E0006] border-b border-[#5E0006] pb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Return to All Collections</span>
          </Link>
        </div>
      </div>
    );
  }

  const products = catalogService.getProductsByCollection(collection.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      <Breadcrumbs
        items={[
          { label: 'Collections', href: '/collections' },
          { label: collection.name }
        ]}
      />

      <div className="bg-[#FFFFFF] border border-[#EED9B9] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Curated Collection
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252321] font-medium">
          {collection.name}
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed max-w-2xl mx-auto font-light">
          {collection.description}
        </p>

        <GeometricDivider variant="medallion" />

        <div className="inline-block bg-[#FAF8F3] border border-[#EED9B9] px-4 py-1.5 text-xs text-[#5E0006] font-medium uppercase tracking-wider">
          {products.length} {products.length === 1 ? 'Design Available' : 'Designs Available'}
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-12 text-center space-y-4 max-w-md mx-auto">
          <p className="text-sm text-[#77716B]">No carpets currently published under this category.</p>
          <Link
            href="/products"
            className="inline-block text-xs uppercase tracking-wider text-[#5E0006] font-semibold border-b border-[#5E0006] pb-1"
          >
            Explore Full Catalog
          </Link>
        </div>
      )}

      <div className="pt-6 border-t border-[#EED9B9] flex items-center justify-between">
        <Link
          href="/collections"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#77716B] hover:text-[#5E0006] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to All Collections</span>
        </Link>
        <Link
          href="/products"
          className="text-xs font-semibold uppercase tracking-wider text-[#5E0006] hover:text-[#9B0F06]"
        >
          View All 15 Products →
        </Link>
      </div>

    </div>
  );
}
