/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter, parseRoute } from './router/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { QualityPage } from './pages/QualityPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { RequestAQuotePage } from './pages/RequestAQuotePage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminPage } from './pages/AdminPage';
import { catalogService } from './services/catalogService';
import { BUSINESS_CONFIG } from './config/business';

function AppContent() {
  const { path } = useRouter();
  const { routeName, params } = parseRoute(path);

  // Dynamic document title update per route
  useEffect(() => {
    let title = BUSINESS_CONFIG.meta.siteTitle;

    if (routeName === 'collections') {
      title = `Carpet Collections | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'collection-detail' && params.slug) {
      const col = catalogService.getCollectionBySlug(params.slug);
      title = col ? col.seoTitle : `Collection | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'products') {
      title = `Rugs & Carpet Catalog | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'product-detail' && params.slug) {
      const prod = catalogService.getProductBySlug(params.slug);
      title = prod ? prod.seoTitle : `Product Detail | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'about') {
      title = `About Us — Where Heritage Meets the Art of Living | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'craftsmanship') {
      title = `Craftsmanship & Carpet Artistry | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'quality') {
      title = `Quality, Materials & Care Guide | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'wholesale') {
      title = `Trade & Wholesale Inquiries | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'contact') {
      title = `Contact Us | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'faq') {
      title = `Frequently Asked Questions | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'request-a-quote') {
      title = `Request a Quote | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'privacy') {
      title = `Privacy Policy | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'terms') {
      title = `Terms & Conditions | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'admin') {
      title = `Owner Admin Portal | ${BUSINESS_CONFIG.name}`;
    } else if (routeName === 'not-found') {
      title = `404 Not Found | ${BUSINESS_CONFIG.name}`;
    }

    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [routeName, params.slug]);

  const renderCurrentView = () => {
    switch (routeName) {
      case 'home':
        return <HomePage />;
      case 'collections':
        return <CollectionsPage />;
      case 'collection-detail':
        return <CollectionDetailPage />;
      case 'products':
        return <ProductsPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'about':
        return <AboutPage />;
      case 'craftsmanship':
        return <CraftsmanshipPage />;
      case 'quality':
        return <QualityPage />;
      case 'wholesale':
        return <WholesalePage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FaqPage />;
      case 'request-a-quote':
        return <RequestAQuotePage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <NotFoundPage />;
    }
  };

  if (routeName === 'admin') {
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#252321]">
      <Header />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
