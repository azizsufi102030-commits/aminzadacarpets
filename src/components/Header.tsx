/**
 * AMINZADA CARPETS — Header & Navigation
 * 
 * Complies with Section 1 & Section 4:
 * - Preserves original uploaded AMINZADA CARPETS logo without distortion or substitution.
 * - Desktop horizontal navigation with refined spacing.
 * - Mobile accessible slide drawer with proper ARIA controls.
 * - Prominent "Request a Quote" CTA button.
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useRouter } from '../router/Router';
import { BUSINESS_CONFIG } from '../config/business';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Craftsmanship', href: '/craftsmanship' },
    { label: 'Quality & Materials', href: '/quality' },
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileDrawerContent = isMobileMenuOpen && mounted ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="lg:hidden fixed inset-0 z-[9999] bg-[#252321]/75 backdrop-blur-xs flex justify-end"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className="w-full max-w-xs bg-[#FAF8F3] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#EED9B9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#EED9B9]">
            <img
              src={BUSINESS_CONFIG.logoUrl}
              alt="AMINZADA CARPETS"
              className="h-12 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation"
              className="p-2 text-[#252321] hover:text-[#5E0006] hover:bg-[#EED9B9]/30 rounded-xs transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 space-y-1.5" aria-label="Mobile Menu">
            {navLinks.map((link) => {
              const isActive = path === link.href || (link.href !== '/' && path.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2.5 text-xs uppercase tracking-widest font-medium rounded-xs transition-colors ${
                    isActive
                      ? 'bg-[#5E0006] text-[#FAF8F3] font-semibold'
                      : 'text-[#252321] hover:bg-[#EED9B9]/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#EED9B9] space-y-4">
          <Link
            href="/request-a-quote"
            onClick={handleLinkClick}
            className="w-full text-center block bg-[#5E0006] text-[#FAF8F3] py-3 text-xs font-semibold uppercase tracking-widest rounded-xs shadow-xs hover:bg-[#9B0F06] transition-colors"
          >
            Request a Quote
          </Link>
          <div className="text-xs text-[#77716B] space-y-1.5 text-center">
            <p>
              <a href={`tel:${BUSINESS_CONFIG.telephoneDial}`} className="hover:text-[#5E0006]">
                Tel: {BUSINESS_CONFIG.telephoneDisplay}
              </a>
            </p>
            <p>
              <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#5E0006]">
                WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#EED9B9]">
        {/* Top micro-bar for phone & WhatsApp contact */}
        <div className="bg-[#5E0006] text-[#FAF8F3] text-[11px] py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="tracking-widest uppercase font-medium">
              {BUSINESS_CONFIG.brandPositioning}
            </span>
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${BUSINESS_CONFIG.telephoneDial}`}
                className="hover:text-[#EED9B9] transition-colors"
              >
                Tel: {BUSINESS_CONFIG.telephoneDisplay}
              </a>
              <span className="text-[#EED9B9]/50">•</span>
              <a
                href={BUSINESS_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EED9B9] transition-colors"
              >
                WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Definitive Brand Logo */}
            <Link
              href="/"
              className="flex items-center py-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E0006]"
              aria-label="AMINZADA CARPETS — Return to Homepage"
            >
              <img
                src={BUSINESS_CONFIG.logoUrl}
                alt="AMINZADA CARPETS — Rugs & Carpets"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = path === link.href || (link.href !== '/' && path.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest font-medium transition-colors py-2 relative ${
                      isActive
                        ? 'text-[#5E0006] font-semibold'
                        : 'text-[#252321] hover:text-[#5E0006]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#5E0006]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors shadow-xs rounded-xs"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <Link
                href="/request-a-quote"
                className="bg-[#5E0006] text-[#FAF8F3] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-xs"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
                className="p-2 text-[#252321] hover:text-[#5E0006] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E0006]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Render Mobile Drawer via Portal into body */}
      {mounted && typeof document !== 'undefined' && mobileDrawerContent
        ? createPortal(mobileDrawerContent, document.body)
        : null}
    </>
  );
}
