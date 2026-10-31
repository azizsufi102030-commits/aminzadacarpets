/**
 * AMINZADA CARPETS — Custom 404 Not Found Page
 * 
 * Complies with Section 3:
 * - Luxury heritage styling
 * - Helpful links to Home, Collections, Products, Contact
 */

import React from 'react';
import { Link } from '../router/Router';
import { GeometricDivider } from '../components/GeometricDivider';
import { ArrowRight, Compass, Home, Phone } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 sm:py-28 text-center space-y-8">
      <div className="inline-flex items-center gap-2 border border-[#EED9B9] bg-[#FFFFFF] px-3 py-1 rounded-xs">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#5E0006]"></span>
        <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5E0006]">
          404 Page Not Found
        </span>
      </div>

      <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
        This Design or Pathway Cannot Be Located
      </h1>

      <GeometricDivider variant="medallion" />

      <p className="text-sm sm:text-base text-[#77716B] leading-relaxed max-w-lg mx-auto font-light">
        The page you requested may have been relocated, updated, or does not exist in our current catalog. We invite you to explore our curated collections or connect directly with our team.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
        >
          <Home className="w-4 h-4 mr-1.5" />
          <span>Return Home</span>
        </Link>

        <Link
          href="/collections"
          className="inline-flex items-center bg-[#FFFFFF] hover:bg-[#FAF8F3] text-[#252321] border border-[#EED9B9] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs"
        >
          <Compass className="w-4 h-4 mr-1.5 text-[#5E0006]" />
          <span>Explore Collections</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center bg-[#FFFFFF] hover:bg-[#FAF8F3] text-[#252321] border border-[#EED9B9] px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs"
        >
          <Phone className="w-4 h-4 mr-1.5 text-[#D53E0F]" />
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
