/**
 * AMINZADA CARPETS — Craftsmanship & Carpet Knowledge
 * 
 * Complies with Section 13:
 * - Geometric patterns & medallions
 * - Traditional & contemporary design approaches
 * - Color composition & natural dye history
 * - Surface texture & pile dynamics
 * - Room proportions & dimension guidelines
 * - Carpet terminology glossary (warp, weft, abrash, selvage)
 * - Questions to ask before purchasing
 * - Clear disclaimer distinguishing general knowledge from specific product specs
 */

import React from 'react';
import { Link } from '../router/Router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { Compass, BookOpen, Layers, Maximize, Palette, HelpCircle, ArrowRight } from 'lucide-react';

export function CraftsmanshipPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      <Breadcrumbs items={[{ label: 'Craftsmanship & Carpet Knowledge' }]} />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Educational Guide
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Craftsmanship & Carpet Artistry
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          An exploration of regional design traditions, structural anatomy, color harmony, and room placement to guide informed carpet selections.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      {/* Advisory Banner */}
      <div className="bg-[#FAF8F3] border border-[#EED9B9] p-5 rounded-xs flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#5E0006] shrink-0 mt-0.5" />
        <p className="text-xs text-[#77716B] leading-relaxed">
          <strong className="text-[#5E0006]">Educational Advisory:</strong> The insights below represent general textile scholarship and classical carpet design history. Specific origins, fiber compositions, and weaving techniques for individual AMINZADA CARPETS catalog pieces should always be verified directly with our team.
        </p>
      </div>

      {/* Grid of Knowledge Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1: Geometric Patterns & Medallions */}
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#5E0006]" />
            </div>
            <h2 className="font-editorial text-2xl text-[#252321] font-medium">
              Geometric Motifs & Central Medallions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
            In regional Afghan and neighboring carpet traditions, patterns are mathematical and symbolic. The <strong>Gul</strong> (elephant-foot octagon) represents tribal unity and seasonal rhythm, often repeated in continuous axial grids. By contrast, a <strong>Central Medallion</strong> acts as a micro-cosmos, anchoring visual weight directly to the center of a room with radiating floral pendants or stepped polygons.
          </p>
          <ul className="text-xs text-[#252321] space-y-1.5 list-disc list-inside pt-2 border-t border-[#FAF8F3]">
            <li><strong>Lobed Medallions:</strong> Ideal for formal dining and circular seating configurations.</li>
            <li><strong>Repeating Diamond Grids:</strong> Lengthen rooms and impart architectural order.</li>
            <li><strong>Guard Stripes:</strong> Protect the central field and balance visual proportions.</li>
          </ul>
        </div>

        {/* Pillar 2: Color Composition & Tonal Harmony */}
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center">
              <Palette className="w-5 h-5 text-[#D53E0F]" />
            </div>
            <h2 className="font-editorial text-2xl text-[#252321] font-medium">
              Color Composition & Depth
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
            Classical carpet palettes draw from indigenous mineral and botanical dye references: deep madder reds, burnt terracottas from iron-rich clays, indigo blues, and warm creams from un-dyed sheep fleece. Natural dye processes traditionally result in <em>abrash</em>—subtle, horizontal variations in shade that bring breathing life and tactile warmth to the floor.
          </p>
          <ul className="text-xs text-[#252321] space-y-1.5 list-disc list-inside pt-2 border-t border-[#FAF8F3]">
            <li><strong>Deep Burgundy & Red:</strong> Radiates warmth and anchors grand spaces.</li>
            <li><strong>Terracotta & Ochre:</strong> Harmonizes with natural wood, leather, and clay plaster.</li>
            <li><strong>Ivory & Cream:</strong> Reflects natural light and opens compact interiors.</li>
          </ul>
        </div>

        {/* Pillar 3: Surface Texture & Pile */}
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#5E0006]" />
            </div>
            <h2 className="font-editorial text-2xl text-[#252321] font-medium">
              Surface Texture & Pile Height
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
            The tactile experience of a carpet depends on yarn twist, knot density, and pile shearing height. Low-sheared piles (5-8 mm) provide razor-sharp motif clarity and effortless furniture sliding, making them favored in dining and corridor settings. Medium-to-plush piles (9-12 mm) soften room acoustics and invite bare-foot comfort in bedrooms and intimate lounges.
          </p>
          <ul className="text-xs text-[#252321] space-y-1.5 list-disc list-inside pt-2 border-t border-[#FAF8F3]">
            <li><strong>Low Pile:</strong> Crisp motif definition, resilient under heavy chairs.</li>
            <li><strong>Medium Pile:</strong> Balanced comfort and everyday residential durability.</li>
            <li><strong>Textured Ribs:</strong> Modern organic feel with varied light refraction.</li>
          </ul>
        </div>

        {/* Pillar 4: Dimensions & Room Proportions */}
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center">
              <Maximize className="w-5 h-5 text-[#D53E0F]" />
            </div>
            <h2 className="font-editorial text-2xl text-[#252321] font-medium">
              Carpet Proportions & Spatial Flow
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
            A common interior design mistake is selecting a carpet that is too small, creating a "floating island" effect. Ideally, front sofa legs should rest securely on the rug perimeter with at least 30 to 45 cm of exposed floor between the carpet edge and surrounding room walls.
          </p>
          <ul className="text-xs text-[#252321] space-y-1.5 list-disc list-inside pt-2 border-t border-[#FAF8F3]">
            <li><strong>Living Rooms:</strong> Either all seating legs or front legs on the carpet.</li>
            <li><strong>Dining Rooms:</strong> Carpet should extend 60 cm past table edges on all sides.</li>
            <li><strong>Hallways:</strong> Maintain 10-15 cm border of bare floor on both runner edges.</li>
          </ul>
        </div>

      </div>

      {/* Carpet Terminology Glossary */}
      <section className="bg-[#FAF8F3] border border-[#EED9B9] p-8 sm:p-10 rounded-xs space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#5E0006]" />
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium">
            Essential Carpet Terminology
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Warp & Weft</h3>
            <p className="text-[#77716B] leading-relaxed">The internal foundation framework. Warp runs lengthwise (often forming fringes), while weft threads pass horizontally across the loom.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Abrash</h3>
            <p className="text-[#77716B] leading-relaxed">Natural, artistic color variations across a rug's field, arising from distinct dye batches or hand-spun wool characteristics.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Selvage / Edge Binding</h3>
            <p className="text-[#77716B] leading-relaxed">The reinforced outer longitudinal edges of the carpet that prevent unravelling and preserve structural alignment.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Guard Borders</h3>
            <p className="text-[#77716B] leading-relaxed">The narrower secondary decorative stripes flanking the main primary border band on either side.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Spandrels</h3>
            <p className="text-[#77716B] leading-relaxed">The four triangular corner areas surrounding a central field, frequently adorned with complementary floral or geometric arabesques.</p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border border-[#EED9B9]">
            <h3 className="font-semibold text-[#5E0006] uppercase tracking-wider mb-1">Knot Density (KPSI)</h3>
            <p className="text-[#77716B] leading-relaxed">Knots per square inch. Higher counts allow more intricate detail in curved motifs, while bold geometrics excel in sturdy medium densities.</p>
          </div>
        </div>
      </section>

      {/* Questions to Ask Before Purchasing */}
      <section className="bg-[#FFFFFF] border-2 border-[#5E0006] p-8 sm:p-12 space-y-6">
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium text-center">
          Questions to Confirm Before Acquiring a Carpet
        </h2>
        <p className="text-xs sm:text-sm text-[#77716B] text-center max-w-xl mx-auto leading-relaxed">
          We encourage every client and interior professional to verify key practical details with our team prior to finalizing an order:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4">
          <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] space-y-1.5">
            <span className="font-semibold text-[#5E0006]">1. Verified Dimensions & Tolerances:</span>
            <p className="text-[#77716B]">Does the listed size include the end fringes and selvage edges, or pile surface only?</p>
          </div>
          <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] space-y-1.5">
            <span className="font-semibold text-[#5E0006]">2. Fiber Foundation & Pile Ratio:</span>
            <p className="text-[#77716B]">What is the confirmed composition of the surface yarn and underlying foundation?</p>
          </div>
          <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] space-y-1.5">
            <span className="font-semibold text-[#5E0006]">3. Intended Foot-Traffic Environment:</span>
            <p className="text-[#77716B]">Is this specific piece intended for light residential, heavy lounge, or hospitality use?</p>
          </div>
          <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] space-y-1.5">
            <span className="font-semibold text-[#5E0006]">4. Tailored Care & Underlay Advice:</span>
            <p className="text-[#77716B]">What underlay pad and cleaning methodology is recommended for your flooring type?</p>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
          >
            <span>Ask Our Team Directly</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
}
