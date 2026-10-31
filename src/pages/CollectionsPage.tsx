/**
 * AMINZADA CARPETS — Collections Directory
 * 
 * Shows all 6 curated collections with verified product counts.
 */

import React from 'react';
import { catalogService } from '../services/catalogService';
import { CollectionCard } from '../components/CollectionCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';

export function CollectionsPage() {
  const collections = catalogService.getAllCollections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      <Breadcrumbs items={[{ label: 'Collections' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Curated Merchandising
        </p>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          The Rug & Carpet Collections
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          Explore our provisional collection categories organized by decorative character, geometric heritage, and spatial application. Each collection highlights a distinct design dialect within regional weaving artistry.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 text-center max-w-2xl mx-auto text-xs text-[#77716B]">
        <p>
          <strong className="text-[#5E0006]">Collection Note:</strong> Product counts reflect current catalog records. Specific provenance, weaving technique, and fiber composition are verified per individual product inquiry.
        </p>
      </div>

    </div>
  );
}
