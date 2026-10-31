/**
 * AMINZADA CARPETS — Privacy Policy & Terms and Conditions
 * 
 * Complies with Section 22:
 * - Transparent terms reflecting current catalog & inquiry model
 * - Data integrity & privacy guarantees for client communications
 * - Grounded strictly in verified business contact details
 */

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Legal & Privacy
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#77716B]">
          Last updated: March 2026 • AMINZADA CARPETS
        </p>
        <GeometricDivider variant="line" />
      </div>

      <div className="bg-[#FFFFFF] border border-[#EED9B9] p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-[#252321]/90 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">1. Information We Collect</h2>
          <p>
            AMINZADA CARPETS respects your privacy. When you interact with our website to inquire about a carpet or request a trade quotation, you may voluntarily provide contact details including your full name, company affiliation, email address, telephone/WhatsApp number, and project notes.
          </p>
          <p>
            We do not collect payment credentials, credit card numbers, or unnecessary personal identifiers through this public presentation website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">2. Purpose of Communication</h2>
          <p>
            The details you share are utilized exclusively to:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Respond to carpet product inquiries and clarify technical specifications.</li>
            <li>Provide requested dimensions, knot counts, and high-resolution photographic inspections.</li>
            <li>Coordinate bespoke trade quotations and logistical arrangements.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">3. Third-Party Messaging Platforms</h2>
          <p>
            When you select WhatsApp inquiry links, your message is transferred to WhatsApp in accordance with Meta's privacy and terms of service. You retain full review and control over the message content prior to sending.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">4. Information Sharing & Security</h2>
          <p>
            We do not sell, rent, or trade your contact information to external advertisers or marketing agencies. Data transmitted to our direct email ({BUSINESS_CONFIG.email}) is maintained strictly for commercial relationship management.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">5. Contact Regarding Privacy</h2>
          <p>
            For any inquiries regarding your communication records, please contact us at:
            <br />
            <strong>Email:</strong> {BUSINESS_CONFIG.email}
            <br />
            <strong>WhatsApp:</strong> {BUSINESS_CONFIG.whatsappDisplay}
          </p>
        </section>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Commercial Terms
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#252321] font-medium">
          Terms & Conditions
        </h1>
        <p className="text-xs text-[#77716B]">
          Last updated: March 2026 • AMINZADA CARPETS
        </p>
        <GeometricDivider variant="line" />
      </div>

      <div className="bg-[#FFFFFF] border border-[#EED9B9] p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-[#252321]/90 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">1. Catalog Presentation & Specifications</h2>
          <p>
            The products displayed on this website represent a curated design presentation by AMINZADA CARPETS. Technical specifications, including exact knot density, foundation materials, pile height, and finished dimensions, should always be confirmed with our team prior to concluding an order.
          </p>
          <p>
            Because traditional and regional weavings involve individual human craftsmanship, minor variations in tone (abrash), weave tension, and perimeter dimensions (within customary industry tolerances) are natural characteristics of textile artistry.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">2. Quotations & Pricing</h2>
          <p>
            Catalog presentations do not constitute binding commercial offers until confirmed through a written quotation provided by AMINZADA CARPETS. Quotations will detail product specifications, price, delivery options, and payment terms agreed upon directly with the customer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">3. Brand Identity & Intellectual Property</h2>
          <p>
            The AMINZADA CARPETS brand name, geometric emblem, editorial texts, and catalog compositions are protected by intellectual property rights. Reproduction or unauthorized commercial exploitation without prior written consent is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-editorial text-lg font-semibold text-[#5E0006]">4. Inquiries & Direct Communication</h2>
          <p>
            To initiate inquiries, customers may use our official WhatsApp channel ({BUSINESS_CONFIG.whatsappDisplay}), telephone line ({BUSINESS_CONFIG.telephoneDisplay}), or verified email ({BUSINESS_CONFIG.email}).
          </p>
        </section>
      </div>
    </div>
  );
}
