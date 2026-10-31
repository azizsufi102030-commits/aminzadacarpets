/**
 * AMINZADA CARPETS — Product Card
 * 
 * Clean luxury heritage editorial presentation.
 * Displays front photograph, name, collection, size status, and direct actions.
 */

import React from 'react';
import { Product } from '../types';
import { Link } from '../router/Router';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const frontImage = product.images.find(img => img.role === 'front') || product.images[0];
  const sizeDisplay = product.dimensions 
    ? product.dimensions 
    : (product.availableSizes && product.availableSizes.length > 0 ? product.availableSizes[0] : 'Dimensions upon inquiry');

  const whatsappUrl = buildProductWhatsAppUrl({
    productName: product.name,
    sku: product.sku,
    collectionName: product.collectionName,
    selectedSize: product.availableSizes[0] || undefined
  });

  return (
    <article className={`group flex flex-col bg-[#FFFFFF] border border-[#EED9B9] hover:border-[#5E0006] transition-all duration-300 shadow-xs hover:shadow-md ${className}`}>
      {/* Visual Image container */}
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] bg-[#FAF8F3] overflow-hidden">
        <img
          src={frontImage.url}
          alt={frontImage.alt}
          loading="lazy"
          className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-2 left-2 bg-[#5E0006]/90 text-[#FAF8F3] text-[10px] uppercase tracking-widest px-2 py-0.5 font-medium">
          {product.sku}
        </div>
        <div className="absolute inset-0 bg-[#5E0006]/0 group-hover:bg-[#5E0006]/5 transition-colors duration-300 pointer-events-none"></div>
      </Link>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#D53E0F] font-semibold mb-1">
            {product.collectionName}
          </p>
          <h3 className="font-editorial text-lg sm:text-xl font-semibold text-[#252321] group-hover:text-[#5E0006] transition-colors line-clamp-1">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-[#77716B] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          
          <div className="mt-3 pt-3 border-t border-[#FAF8F3] flex items-center justify-between text-xs text-[#77716B]">
            <span className="truncate max-w-[170px]" title={sizeDisplay}>
              {sizeDisplay}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#5E0006] font-medium bg-[#FAF8F3] px-2 py-0.5 rounded-xs border border-[#EED9B9]/60">
              Inquire
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-[#EED9B9]/50 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#5E0006] hover:text-[#9B0F06] transition-colors py-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire about ${product.name} via WhatsApp`}
            className="inline-flex items-center text-xs text-[#252321] hover:text-[#25D366] transition-colors p-1"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#5E0006] hover:text-[#25D366] transition-colors" />
          </a>
        </div>
      </div>
    </article>
  );
}
