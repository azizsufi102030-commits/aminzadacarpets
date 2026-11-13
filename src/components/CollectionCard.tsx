/**
 * AMINZADA CARPETS — Collection Card
 * 
 * Elegant editorial card showing collection title, description,
 * verified product count, and link.
 */

import React from 'react';
import { Collection } from '../types';
import { Link } from '../router/Router';
import { catalogService, useCatalog } from '../services/catalogService';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  collection: Collection;
  className?: string;
}

export function CollectionCard({ collection, className = '' }: CollectionCardProps) {
  const catalog = useCatalog();
  const productsInCollection = catalog.getProductsByCollection(collection.id);
  const count = productsInCollection.length;

  return (
    <article className={`group flex flex-col bg-[#FFFFFF] border border-[#EED9B9] hover:border-[#5E0006] transition-all duration-300 shadow-xs hover:shadow-md ${className}`}>
      <Link href={`/collections/${collection.slug}`} className="relative block aspect-[16/10] bg-[#FAF8F3] overflow-hidden">
        <img
          src={collection.coverImage}
          alt={collection.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-[#FAF8F3]/90 text-[#5E0006] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-[#EED9B9]">
          {count} {count === 1 ? 'Design' : 'Designs'}
        </div>
        <div className="absolute inset-0 bg-[#5E0006]/0 group-hover:bg-[#5E0006]/5 transition-colors duration-300 pointer-events-none"></div>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#252321] group-hover:text-[#5E0006] transition-colors">
            <Link href={`/collections/${collection.slug}`}>
              {collection.name}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#77716B] mt-2 line-clamp-3 leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#EED9B9]/50 flex items-center justify-between">
          <Link
            href={`/collections/${collection.slug}`}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#5E0006] group-hover:text-[#9B0F06] transition-colors"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-xs text-[#77716B]">
            {count} {count === 1 ? 'carpet' : 'carpets'}
          </span>
        </div>
      </div>
    </article>
  );
}
