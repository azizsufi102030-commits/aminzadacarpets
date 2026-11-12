/**
 * AMINZADA CARPETS — Homepage
 * 
 * Complies with Section 5:
 * - Section A: Hero with editorial typography & geometric accents
 * - Section B: Brand introduction ("A Tradition Woven Into Every Detail")
 * - Section C: Featured collections (6 cards with real counts)
 * - Section D: Featured products (selected from initial catalog)
 * - Section E: Design inspiration ("A Carpet Changes the Feeling of a Room")
 * - Section F: Trade and wholesale ("For Designers, Retailers & Trade Partners")
 * - Section G: Contact banner ("Find the Right Carpet for Your Space")
 */

import React from 'react';
import { Link } from '../router/Router';
import { catalogService, useCatalog } from '../services/catalogService';
import { ProductCard } from '../components/ProductCard';
import { CollectionCard } from '../components/CollectionCard';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';
import { buildGeneralWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, ShieldCheck, Compass, Sparkles, Sliders } from 'lucide-react';

export function HomePage() {
  const catalog = useCatalog();
  const collections = catalog.getAllCollections();
  // Highlight 6 featured products across different styles
  const allProducts = catalog.getPublishedProducts();
  const featuredProducts = [
    allProducts.find(p => p.slug === 'heritage-medallion-rug'),
    allProducts.find(p => p.slug === 'afghan-geometric-pattern-rug'),
    allProducts.find(p => p.slug === 'classic-floral-oriental-rug'),
    allProducts.find(p => p.slug === 'deep-burgundy-statement-carpet'),
    allProducts.find(p => p.slug === 'ivory-minimalist-area-rug'),
    allProducts.find(p => p.slug === 'terracotta-heritage-rug'),
  ].filter(Boolean) as typeof allProducts;

  const generalWhatsAppUrl = buildGeneralWhatsAppUrl('Website Consultation Request');

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* SECTION A: HERO */}
      <section className="relative bg-[#FAF8F3] border-b border-[#EED9B9] overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-pattern-subtle opacity-60 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#EED9B9] bg-[#FFFFFF] px-3.5 py-1.5 rounded-xs">
                <span className="w-2 h-2 rotate-45 bg-[#5E0006]"></span>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5E0006]">
                  {BUSINESS_CONFIG.brandPositioning}
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#252321] leading-[1.12]">
                Timeless Carpets. <br />
                <span className="italic font-normal text-[#5E0006]">Enduring Heritage.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#77716B] leading-relaxed max-w-xl font-normal">
                Discover the patterns, colors, and textures that bring character to extraordinary spaces. Explore a curated presentation of rugs and carpets inspired by the richness of traditional design and the art of living well.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors shadow-xs rounded-xs"
                >
                  <span>Explore Our Collections</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  href="/wholesale"
                  className="inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#FAF8F3] text-[#252321] hover:text-[#5E0006] border border-[#EED9B9] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs"
                >
                  <span>Wholesale Inquiries</span>
                </Link>
              </div>

              {/* Verified Information Notice */}
              <div className="pt-4 flex items-center gap-2 text-xs text-[#77716B]">
                <ShieldCheck className="w-4 h-4 text-[#5E0006] shrink-0" />
                <span>Transparent specifications & direct WhatsApp inquiry for every design.</span>
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none bg-[#FFFFFF] p-3 sm:p-4 border-2 border-[#5E0006] shadow-xl">
                {/* Decorative border frame */}
                <div className="border border-[#EED9B9] p-2 bg-[#FAF8F3]">
                  <div className="aspect-[5/4] sm:aspect-[4/3] overflow-hidden relative group">
                    <img
                      src="/assets/aistudio/homepage_hero_showcase_image_b47979ab.webp"
                      alt="AMINZADA CARPETS — Luxury Afghan Heritage Carpet in Architectural Living Interior"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: BRAND INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-block">
          <p className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
            About Our Philosophy
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium mt-2">
            A Tradition Woven Into Every Detail
          </h2>
        </div>

        <GeometricDivider variant="medallion" />

        <p className="text-base sm:text-lg text-[#252321]/90 leading-relaxed font-light">
          At AMINZADA CARPETS, we believe a carpet is more than a furnishing. It brings warmth, defines a space, and expresses a distinctive sense of style. Our collection presentation celebrates the visual richness of carpet design, from intricate geometric motifs and traditional medallions to contemporary patterns and understated palettes.
        </p>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed">
          We invite customers to discover rugs and carpets through their patterns, colors, textures, dimensions, and individual character.
        </p>

        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#5E0006] hover:text-[#9B0F06] transition-colors border-b border-[#5E0006] pb-1"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </section>

      {/* SECTION C: FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EED9B9] pb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
              Curated Catalog
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium mt-1">
              Featured Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-xs font-semibold uppercase tracking-wider text-[#5E0006] hover:text-[#9B0F06] flex items-center gap-1"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>
      </section>

      {/* SECTION D: FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EED9B9] pb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
              Selected Designs
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium mt-1">
              Featured Rugs & Carpets
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs font-semibold uppercase tracking-wider text-[#5E0006] hover:text-[#9B0F06] flex items-center gap-1"
          >
            <span>Explore All 15 Designs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* SECTION E: DESIGN INSPIRATION */}
      <section className="bg-[#FFFFFF] border-y border-[#EED9B9] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
                Interior Philosophy
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium leading-tight">
                A Carpet Changes the Feeling of a Room
              </h2>
              <p className="text-sm text-[#77716B] leading-relaxed">
                The presence of a thoughtfully chosen carpet alters the acoustics, light reflection, and spatial balance of an entire interior. Whether grounding a conversational grouping with a centralized medallion or adding rhythmic architectural structure with repetitive geometric diamonds, the relationship between pattern, scale, and color dictates the room’s composure.
              </p>
              <div className="pt-2">
                <Link
                  href="/craftsmanship"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#5E0006] hover:text-[#9B0F06] border-b border-[#5E0006] pb-1 transition-colors"
                >
                  <span>Explore Carpet Knowledge & Craftsmanship</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs space-y-2">
                <Compass className="w-6 h-6 text-[#5E0006]" />
                <h3 className="font-editorial text-lg font-semibold text-[#252321]">Pattern & Rhythm</h3>
                <p className="text-xs text-[#77716B] leading-relaxed">
                  Stepped polygons, central medallions, and running borders structure the eye's journey across an interior.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs space-y-2">
                <Sparkles className="w-6 h-6 text-[#D53E0F]" />
                <h3 className="font-editorial text-lg font-semibold text-[#252321]">Depth of Palette</h3>
                <p className="text-xs text-[#77716B] leading-relaxed">
                  Deep madder burgundy and warm terracottas create intimacy, while ivory canvas opens light and breath.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs space-y-2">
                <Sliders className="w-6 h-6 text-[#5E0006]" />
                <h3 className="font-editorial text-lg font-semibold text-[#252321]">Proportion & Scale</h3>
                <p className="text-xs text-[#77716B] leading-relaxed">
                  Proper sizing unifies furniture arrangements into composed living zones rather than scattered pieces.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION F: TRADE AND WHOLESALE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252321] text-[#FAF8F3] p-8 sm:p-12 lg:p-16 border-2 border-[#5E0006] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#EED9B9] font-semibold">
              B2B & Trade Services
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF8F3]">
              For Designers, Retailers & Trade Partners
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed font-light">
              Exploring carpet options for a retail collection, an interior design project, a hospitality space, or a private client? Contact AMINZADA CARPETS to discuss product specifications, available options, and your sourcing requirements.
            </p>
            <div className="pt-3">
              <Link
                href="/wholesale"
                className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: CONTACT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#EED9B9] p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium">
            Find the Right Carpet for Your Space
          </h2>
          <p className="text-sm text-[#77716B] max-w-xl mx-auto leading-relaxed">
            Connect with our team to inquire about specific design options, verify dimensions, or request tailored recommendations for your room.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Inquire on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
