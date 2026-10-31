/**
 * AMINZADA CARPETS — Product Detail Page
 * 
 * Complies with Section 9 & Section 10:
 * - Breadcrumb navigation: Home -> Collections -> Collection -> Product
 * - 4-photo gallery (front, back, near, detail) with lightbox
 * - Technical specifications table (explicit 'Contact us to confirm' for unconfirmed fields)
 * - Size selection supporting WhatsApp & quote prefill
 * - Compliant WhatsApp inquiry button with exact message encoding
 * - Related products from same collection
 * - Buyer verification disclosure notice
 */

import React, { useState } from 'react';
import { useRouter, Link } from '../router/Router';
import { catalogService } from '../services/catalogService';
import { ProductGallery } from '../components/ProductGallery';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { GeometricDivider } from '../components/GeometricDivider';
import { buildProductWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, FileText, ArrowLeft, ShieldAlert, Check, HelpCircle } from 'lucide-react';

export function ProductDetailPage() {
  const { params } = useRouter();
  const slug = params.slug || '';
  const product = catalogService.getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string>(() => {
    return product && product.availableSizes.length > 0 ? product.availableSizes[0] : '';
  });

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="font-editorial text-3xl text-[#5E0006]">Product Not Found</h1>
        <p className="text-sm text-[#77716B]">The carpet design you are looking for does not exist in our catalog.</p>
        <div>
          <Link
            href="/products"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#5E0006] border-b border-[#5E0006] pb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Return to All Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = catalogService.getRelatedProducts(product.id, 3);
  const collection = catalogService.getCollectionBySlug(product.collectionId) || 
    catalogService.getAllCollections().find(c => c.id === product.collectionId);

  const whatsappUrl = buildProductWhatsAppUrl({
    productName: product.name,
    sku: product.sku,
    collectionName: product.collectionName,
    selectedSize: selectedSize || undefined,
    productUrl: typeof window !== 'undefined' ? window.location.href : `https://aminzada.com/products/${product.slug}`
  });

  const quoteUrl = `/request-a-quote?product=${encodeURIComponent(product.name)}&sku=${encodeURIComponent(product.sku)}&collection=${encodeURIComponent(product.collectionName)}&size=${encodeURIComponent(selectedSize || 'Size to be confirmed')}`;

  const renderSpecValue = (value: string | null | undefined, unconfirmedLabel: string = 'Contact us to confirm') => {
    if (value && value.trim().length > 0) {
      return <span className="text-[#252321] font-medium">{value}</span>;
    }
    return (
      <span className="inline-flex items-center text-[#77716B] italic text-xs">
        <HelpCircle className="w-3 h-3 text-[#D53E0F] mr-1 shrink-0" />
        {unconfirmedLabel}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* SECTION A: BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: 'Collections', href: '/collections' },
          { label: product.collectionName, href: collection ? `/collections/${collection.slug}` : '/collections' },
          { label: product.name }
        ]}
      />

      {/* PRIMARY PRODUCT HERO & GALLERY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: 4-Photo Gallery with Lightbox */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} productName={product.name} />
          
          <div className="mt-4 p-3 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs text-[11px] text-[#77716B] leading-relaxed">
            <span className="font-semibold text-[#5E0006]">4-Point Visual Inspection:</span> This provisional catalog entry reserves four separate photographic perspectives (Front field, Reverse backing weave, Near pile texture, and Detail motif). Authentic photography will be supplied prior to final delivery.
          </div>
        </div>

        {/* Right Column: Identification, Sizing & Direct Actions */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Header & Badges */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#D53E0F]">
                {product.collectionName}
              </span>
              <span className="text-[#EED9B9]">•</span>
              <span className="text-[11px] uppercase tracking-wider text-[#77716B] font-mono">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-[#252321] leading-tight">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider bg-[#FAF8F3] text-[#5E0006] border border-[#EED9B9] px-2.5 py-1 rounded-xs font-medium">
                {product.pattern}
              </span>
              <span className="text-xs text-[#77716B]">
                Price upon inquiry
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm text-[#77716B] leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Color Palette Indicators */}
          <div className="pt-2 border-t border-[#EED9B9]/60">
            <p className="text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-2">
              Primary Palette
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.primaryColors.map((color, idx) => (
                <span
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#EED9B9] text-[#252321] px-2.5 py-1 text-xs rounded-xs font-light"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Available Sizes Selection */}
          {product.availableSizes.length > 0 && (
            <div className="pt-2 border-t border-[#EED9B9]/60">
              <label htmlFor="size-select" className="block text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-2">
                Available Dimensions / Format
              </label>
              <div className="space-y-2">
                {product.availableSizes.map((sizeOption, idx) => {
                  const isChecked = selectedSize === sizeOption;
                  return (
                    <label
                      key={idx}
                      className={`flex items-center justify-between p-2.5 border text-xs cursor-pointer rounded-xs transition-colors ${
                        isChecked
                          ? 'border-[#5E0006] bg-[#FAF8F3] text-[#5E0006] font-medium'
                          : 'border-[#EED9B9] bg-[#FFFFFF] text-[#252321] hover:border-[#D53E0F]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="product-size"
                          value={sizeOption}
                          checked={isChecked}
                          onChange={() => setSelectedSize(sizeOption)}
                          className="text-[#5E0006] focus:ring-[#5E0006]"
                        />
                        <span>{sizeOption}</span>
                      </div>
                      {isChecked && <Check className="w-3.5 h-3.5 text-[#5E0006]" />}
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="pt-4 border-t border-[#EED9B9] space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Inquire on WhatsApp</span>
            </a>

            <Link
              href={quoteUrl}
              className="w-full flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] py-3.5 px-6 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Ask About This Carpet / Quote</span>
            </Link>

            {collection && (
              <div className="text-center pt-2">
                <Link
                  href={`/collections/${collection.slug}`}
                  className="text-xs text-[#77716B] hover:text-[#5E0006] transition-colors"
                >
                  ← Back to {collection.name}
                </Link>
              </div>
            )}
          </div>

          {/* Section G: Information Note */}
          <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-[#D53E0F] shrink-0 mt-0.5" />
            <p className="text-xs text-[#77716B] leading-relaxed">
              <strong>Product Information Note:</strong> Specifications, dimensions, materials, availability, and care requirements should be confirmed with our team before purchase.
            </p>
          </div>

        </div>

      </div>

      {/* DETAILED SPECIFICATIONS SECTION */}
      <section className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-10 rounded-xs space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
            Technical Details
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium mt-1">
            Product Specifications
          </h2>
        </div>

        {/* Full Editorial Description */}
        <div className="space-y-3 border-b border-[#FAF8F3] pb-6">
          <h3 className="text-xs uppercase tracking-wider text-[#77716B] font-semibold">
            Architectural Character & Living Composure
          </h3>
          <p className="text-sm text-[#252321]/90 leading-relaxed font-light">
            {product.fullDescription}
          </p>
        </div>

        {/* Specifications Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
          
          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Product Name</span>
            <span className="font-medium text-[#252321]">{product.name}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Catalog SKU</span>
            <span className="font-mono font-medium text-[#5E0006]">{product.sku}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Collection Classification</span>
            <span className="font-medium text-[#252321]">{product.collectionName}</span>
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Quality</span>
            {renderSpecValue(product.quality)}
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Materials</span>
            {renderSpecValue(product.materials)}
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Pile Type</span>
            {renderSpecValue(product.pileType)}
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Country of Origin</span>
            {renderSpecValue(product.countryOfOrigin, 'Verified upon inquiry per piece')}
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Washing Type</span>
            {renderSpecValue(product.washingType)}
          </div>

          <div className="flex justify-between py-2.5 border-b border-[#FAF8F3]">
            <span className="text-[#77716B] uppercase tracking-wider">Availability Status</span>
            <span className="text-[#5E0006] font-medium uppercase tracking-wider">
              {product.availabilityStatus === 'in_stock' ? 'In Stock' : 'Available Upon Inquiry'}
            </span>
          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS SECTION */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="border-b border-[#EED9B9] pb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
                Complementary Pieces
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium mt-1">
                Related Carpets
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold uppercase tracking-wider text-[#5E0006] hover:text-[#9B0F06]"
            >
              All Designs →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
