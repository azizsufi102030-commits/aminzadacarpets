/**
 * AMINZADA CARPETS — Footer
 * 
 * Complies with Section 5.H & Section 2:
 * - Original brand logo
 * - Verified contact details (Email, Tel, WhatsApp)
 * - Instagram and Facebook links preserved verbatim
 * - Dynamic copyright year
 * - Privacy Policy & Terms links
 */

import React from 'react';
import { Link } from '../router/Router';
import { BUSINESS_CONFIG } from '../config/business';
import { Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#252321] text-[#FAF8F3] border-t-2 border-[#5E0006]">
      {/* Upper Footer: Brand, Navigation, Collections, Inquiries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-[#FAF8F3] p-2 rounded-xs">
              <img
                src={BUSINESS_CONFIG.logoUrl}
                alt="AMINZADA CARPETS"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-[#FAF8F3]/70 leading-relaxed font-light">
              Centering on an appreciation for expressive design, enduring beauty, and the role textiles play in shaping meaningful spaces. Inspired by traditional Afghan and regional carpet artistry.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EED9B9] hover:text-[#FAF8F3] flex items-center gap-1 transition-colors"
                aria-label="Visit AMINZADA CARPETS on Instagram"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#FAF8F3]/30">•</span>
              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EED9B9] hover:text-[#FAF8F3] flex items-center gap-1 transition-colors"
                aria-label="Visit AMINZADA CARPETS on Facebook"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-editorial text-lg tracking-wider text-[#EED9B9] uppercase font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link href="/" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Craftsmanship Knowledge
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Quality & Materials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="font-editorial text-lg tracking-wider text-[#EED9B9] uppercase font-semibold mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link href="/collections/traditional-afghan-inspired-rugs" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Traditional Afghan-Inspired
                </Link>
              </li>
              <li>
                <Link href="/collections/oriental-heritage-designs" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Oriental & Heritage
                </Link>
              </li>
              <li>
                <Link href="/collections/geometric-pattern-carpets" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Geometric Pattern Carpets
                </Link>
              </li>
              <li>
                <Link href="/collections/floral-medallion-rugs" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Floral & Medallion Rugs
                </Link>
              </li>
              <li>
                <Link href="/collections/contemporary-rugs" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Contemporary Rugs
                </Link>
              </li>
              <li>
                <Link href="/collections/premium-statement-pieces" className="text-[#FAF8F3]/75 hover:text-[#EED9B9] transition-colors">
                  Premium Statement Pieces
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div>
            <h4 className="font-editorial text-lg tracking-wider text-[#EED9B9] uppercase font-semibold mb-4">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D53E0F] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-[#FAF8F3]/80 hover:text-[#EED9B9] transition-colors break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D53E0F] shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_CONFIG.telephoneDial}`}
                  className="text-[#FAF8F3]/80 hover:text-[#EED9B9] transition-colors"
                >
                  {BUSINESS_CONFIG.telephoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_CONFIG.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF8F3]/80 hover:text-[#EED9B9] transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/wholesale"
                className="text-xs uppercase tracking-wider text-[#EED9B9] hover:text-[#FAF8F3] font-medium block"
              >
                Trade & Wholesale Inquiries →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/10 bg-[#1A1817] py-6 text-xs text-[#FAF8F3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#EED9B9] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#EED9B9] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#EED9B9] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
