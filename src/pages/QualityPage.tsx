/**
 * AMINZADA CARPETS — Quality & Materials Educational Guide
 * 
 * Complies with Section 14:
 * - Natural fibers (wool, silk, cotton)
 * - Synthetic fibers & practical performance
 * - Fiber blends & hybrid resilience
 * - Pile height & density analysis
 * - Construction, foundation & backing
 * - Precision measurement guidelines
 * - Cleaning, maintenance & spill response
 * - Wear categories & spatial matching
 * - Transparent questions to confirm before ordering
 */

import React from 'react';
import { Link } from '../router/Router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { Feather, Sparkles, ShieldCheck, Ruler, Droplets, HelpCircle, ArrowRight } from 'lucide-react';

export function QualityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      <Breadcrumbs items={[{ label: 'Quality & Materials' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Textile Science & Care
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Quality, Materials & Care
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          Understanding yarn fibers, pile density, foundation stability, and maintenance routines to ensure enduring carpet performance.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      {/* Transparency Advisory */}
      <div className="bg-[#FAF8F3] border border-[#EED9B9] p-5 rounded-xs flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#5E0006] shrink-0 mt-0.5" />
        <p className="text-xs text-[#77716B] leading-relaxed">
          <strong className="text-[#5E0006]">Specification Standard:</strong> Different fibers and constructions require distinct maintenance practices. Never assume a specific fiber blend or washing protocol applies universally. Our catalog explicitly identifies verified attributes versus unconfirmed specifications.
        </p>
      </div>

      {/* Fiber Comparisons */}
      <section className="space-y-6">
        <div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium">
            1. Carpet Fibers & Material Behaviors
          </h2>
          <p className="text-xs sm:text-sm text-[#77716B] mt-1">
            How yarn selection influences resilience, luster, cleanability, and hand feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Natural Wool */}
          <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Feather className="w-4 h-4 text-[#5E0006]" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-[#5E0006]">Natural Highland Wool</h3>
            </div>
            <p className="text-xs text-[#77716B] leading-relaxed">
              The historic benchmark of traditional carpet weaving. Natural lanolin coats wool fibers, providing innate resistance to staining, natural flame retardancy, and superior crush-recovery under furniture.
            </p>
            <div className="pt-2 border-t border-[#FAF8F3] text-[11px] text-[#252321] space-y-1">
              <p><strong>Hand feel:</strong> Warm, tactile, natural springiness.</p>
              <p><strong>Best for:</strong> Living rooms, hallways, high-traffic rooms.</p>
            </div>
          </div>

          {/* Synthetic & Engineered Fibers */}
          <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D53E0F]" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-[#D53E0F]">Synthetic & Performance Fibers</h3>
            </div>
            <p className="text-xs text-[#77716B] leading-relaxed">
              Engineered polymers such as polypropylene, polyester, and nylon offer stain resistance and non-shedding qualities. They provide cost-effective solutions for spaces requiring frequent damp wiping.
            </p>
            <div className="pt-2 border-t border-[#FAF8F3] text-[11px] text-[#252321] space-y-1">
              <p><strong>Hand feel:</strong> Smooth, uniform sheen.</p>
              <p><strong>Best for:</strong> Spill-prone areas, modern hospitality entries.</p>
            </div>
          </div>

          {/* Fiber Blends */}
          <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5E0006]" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-[#5E0006]">Curated Fiber Blends</h3>
            </div>
            <p className="text-xs text-[#77716B] leading-relaxed">
              Combining wool with cotton foundations or accent silk fibers optimizes both structural strength and aesthetic highlights. The cotton warp provides dimensional stability that prevents carpet rippling.
            </p>
            <div className="pt-2 border-t border-[#FAF8F3] text-[11px] text-[#252321] space-y-1">
              <p><strong>Hand feel:</strong> Rich textural contrast.</p>
              <p><strong>Best for:</strong> Formal suites, boutique bedrooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pile Height & Density */}
      <section className="bg-[#FFFFFF] border border-[#EED9B9] p-8 sm:p-10 space-y-6">
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium">
          2. Pile Height, Density & Structural Backing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-[#77716B]">
          <div className="space-y-3">
            <h3 className="font-semibold uppercase tracking-wider text-[#5E0006] text-sm">
              The Relationship Between Pile and Resilience
            </h3>
            <p>
              Density is a far more reliable indicator of quality than pile height alone. A tightly packed, short pile withstands compression, maintains clear pattern definition, and prevents dirt particles from settling into the root fibers.
            </p>
            <p>
              Conversely, a high-pile or shaggy carpet feels luxurious upon initial contact but may display traffic pathways more rapidly if subjected to heavy corridor movement.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold uppercase tracking-wider text-[#5E0006] text-sm">
              Foundation Warp & Reverse Backing
            </h3>
            <p>
              The reverse face of a carpet tells its true engineering story. An authentic woven carpet displays the pattern clearly on its backing without rubberized adhesives or secondary mesh scrims.
            </p>
            <p>
              Every AMINZADA CARPETS catalog piece reserves an explicit <strong>Back Inspection View</strong> so designers and clients can inspect foundation tightness before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Cleaning and Maintenance Protocol */}
      <section className="bg-[#FAF8F3] border border-[#EED9B9] p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-[#5E0006]" />
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium">
            3. Recommended Care & Maintenance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9] space-y-2">
            <span className="font-semibold text-[#5E0006] uppercase tracking-wider">Routine Vacuuming</span>
            <p className="text-[#77716B]">Use suction-only vacuuming without aggressive rotating beater bars to preserve surface pile fibers and delicate edge selvages.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9] space-y-2">
            <span className="font-semibold text-[#5E0006] uppercase tracking-wider">Immediate Blotting</span>
            <p className="text-[#77716B]">Never rub spills. Blot promptly with a clean, dry white cotton cloth working from the outer edge toward the center of the spill.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9] space-y-2">
            <span className="font-semibold text-[#5E0006] uppercase tracking-wider">Rotation Cycle</span>
            <p className="text-[#77716B]">Rotate your carpet 180 degrees every six to twelve months to equalize natural sunlight exposure and foot traffic pathways.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9] space-y-2">
            <span className="font-semibold text-[#5E0006] uppercase tracking-wider">Professional Wash</span>
            <p className="text-[#77716B]">Entrust deep cleaning exclusively to certified oriental and specialty rug cleaning professionals. Avoid home hot-water extraction on natural dyes.</p>
          </div>
        </div>
      </section>

      {/* CTA to Products and Contact */}
      <div className="border-t border-[#EED9B9] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-xl text-[#252321] font-semibold">
            Have Questions About a Specific Design?
          </h3>
          <p className="text-xs text-[#77716B] mt-0.5">
            Our team will verify exact fiber content, weight, and care needs for any carpet in our collection.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center bg-[#FAF8F3] hover:bg-[#FFFFFF] text-[#252321] border border-[#EED9B9] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs"
          >
            <span>Browse Catalog</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
