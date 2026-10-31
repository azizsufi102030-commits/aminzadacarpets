/**
 * AMINZADA CARPETS — About Us Page
 * 
 * Verbatim text from Section 6 approved draft.
 * Editorial typography, generous spacing, and refined geometric borders.
 */

import React from 'react';
import { Link } from '../router/Router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      <Breadcrumbs items={[{ label: 'About AMINZADA CARPETS' }]} />

      {/* Hero Editorial Header */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 border border-[#EED9B9] bg-[#FFFFFF] px-3.5 py-1 rounded-xs">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#5E0006]"></span>
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5E0006]">
            About AMINZADA CARPETS
          </span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#252321] font-medium tracking-tight">
          “Where Heritage Meets the Art of Living”
        </h1>

        <GeometricDivider variant="medallion" />
      </div>

      {/* Brand Emblem & Introduction Block */}
      <div className="bg-[#FFFFFF] border border-[#EED9B9] p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-36 h-36 shrink-0 bg-[#FAF8F3] p-3 border border-[#EED9B9] flex items-center justify-center">
            <img
              src={BUSINESS_CONFIG.logoUrl}
              alt="AMINZADA CARPETS Heritage Emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <p className="font-editorial text-xl sm:text-2xl text-[#5E0006] leading-relaxed">
              AMINZADA CARPETS is a rugs and carpets brand centered on an appreciation for expressive design, enduring beauty, and the role textiles play in shaping meaningful spaces.
            </p>
            <p className="text-sm text-[#77716B] leading-relaxed">
              Our visual identity draws inspiration from the rich design traditions associated with Afghan and regional carpet artistry, where geometry, symmetry, color, and intricate motifs can transform a floor covering into a defining element of an interior.
            </p>
            <p className="text-sm text-[#77716B] leading-relaxed">
              We believe that the right carpet does more than complete a room. It introduces warmth, establishes visual harmony, creates a focal point, and reflects the character of the people who live, gather, and work within that space.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Content Sections */}
      <div className="space-y-12">
        
        {/* Section 1: Our Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start border-t border-[#EED9B9] pt-8">
          <div className="md:col-span-4">
            <h2 className="font-editorial text-2xl text-[#5E0006] font-semibold">
              Our Perspective
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm text-[#252321]/90 leading-relaxed font-light">
            <p>
              At AMINZADA CARPETS, we see carpet design as a meeting point between artistic expression and everyday living.
            </p>
            <p>
              A traditional medallion can establish balance in a room. A repeating geometric pattern can create rhythm and structure. A carefully considered color palette can make an interior feel welcoming, composed, or distinctive.
            </p>
            <p>
              Our collection presentation is designed to help customers explore these possibilities through different patterns, colors, sizes, textures, and styles.
            </p>
            <p>
              Whether a customer is drawn to heritage-inspired designs or the understated character of contemporary interiors, we aim to make the discovery process clear, informative, and inspiring.
            </p>
          </div>
        </div>

        {/* Section 2: Our Design Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start border-t border-[#EED9B9] pt-8">
          <div className="md:col-span-4">
            <h2 className="font-editorial text-2xl text-[#5E0006] font-semibold">
              Our Design Heritage
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm text-[#252321]/90 leading-relaxed font-light">
            <p>
              Afghanistan and the wider region are associated with a remarkable tradition of carpet artistry. Across generations and communities, carpets have served practical, decorative, and cultural purposes. Their patterns can reflect regional design languages, geometric traditions, natural forms, and distinctive approaches to color.
            </p>
            <p>
              AMINZADA CARPETS celebrates this broader design heritage through a brand identity inspired by traditional geometric forms and rich carpet colors.
            </p>
            <p>
              We recognize that every carpet has its own visual character. We encourage customers to explore the details that make a particular piece suitable for their homes, businesses, and creative projects.
            </p>
            <p className="bg-[#FAF8F3] p-4 border border-[#EED9B9] text-xs text-[#77716B] italic">
              Specific origins, weaving communities, fibers, and production techniques should always be verified for each individual product.
            </p>
          </div>
        </div>

        {/* Section 3: Our Approach to Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start border-t border-[#EED9B9] pt-8">
          <div className="md:col-span-4">
            <h2 className="font-editorial text-2xl text-[#5E0006] font-semibold">
              Our Approach to Product Information
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm text-[#252321]/90 leading-relaxed font-light">
            <p>
              Choosing a carpet is a considered decision. Dimensions, materials, pile characteristics, construction, intended use, and care requirements can all influence how a piece performs in a particular environment.
            </p>
            <p>
              We aim to present product information in a clear and organized format, helping customers ask informed questions before making a purchasing decision.
            </p>
            <p>
              Where a specification has not yet been confirmed, we encourage direct communication with our team rather than relying on assumptions.
            </p>
            <p>
              Our goal is to make every product inquiry straightforward, informative, and personal.
            </p>
          </div>
        </div>

        {/* Section 4: Our Customers and Trade Partners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start border-t border-[#EED9B9] pt-8">
          <div className="md:col-span-4">
            <h2 className="font-editorial text-2xl text-[#5E0006] font-semibold">
              Our Customers & Trade Partners
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm text-[#252321]/90 leading-relaxed font-light">
            <p>
              We welcome conversations with individuals, interior designers, retailers, hospitality professionals, and other businesses exploring carpet options for their projects or collections.
            </p>
            <p>
              Whether you are considering a single statement rug or researching products for a wider sourcing requirement, our contact channels offer a direct way to discuss your needs, request available specifications, and explore suitable options.
            </p>
            <p>
              We believe a strong business relationship begins with clear communication, realistic expectations, and attention to the details that matter to the customer.
            </p>
          </div>
        </div>

        {/* Section 5: Our Vision */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start border-t border-[#EED9B9] pt-8">
          <div className="md:col-span-4">
            <h2 className="font-editorial text-2xl text-[#5E0006] font-semibold">
              Our Vision
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm text-[#252321]/90 leading-relaxed font-light">
            <p>
              Our vision is to develop AMINZADA CARPETS into a recognizable destination for thoughtfully presented rugs and carpets, bringing together design appreciation, product transparency, and a considered customer experience.
            </p>
            <p>
              We want our digital collection to help customers discover distinctive designs, understand the characteristics of individual pieces, and identify carpets that complement their homes, businesses, and creative projects.
            </p>
            <p>
              Through an elegant digital experience and clear communication, we aim to make exploring our collection as considered as the interiors our products are intended to complement.
            </p>
          </div>
        </div>

      </div>

      {/* Closing Statement & CTA */}
      <div className="bg-[#FAF8F3] border-2 border-[#5E0006] p-8 sm:p-12 text-center space-y-6">
        <GeometricDivider variant="diamond" />
        <p className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium italic max-w-xl mx-auto">
          “Every space has a story. Discover the patterns, colors, and textures that help bring yours to life.”
        </p>
        <div className="pt-2">
          <Link
            href="/collections"
            className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
          >
            <span>Explore Our Collection</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
