/**
 * AMINZADA CARPETS — Frequently Asked Questions (FAQ)
 * 
 * Complies with Section 17:
 * - Covers all 8 prompted topics:
 *   1. How to inquire about a product
 *   2. How to confirm sizes
 *   3. How to ask about materials
 *   4. How to confirm cleaning requirements
 *   5. How to inquire about wholesale opportunities
 *   6. How to contact the company
 *   7. How to request additional photographs
 *   8. How to confirm availability and price
 * - Accessible accordion controls
 * - Honest, un-invented policies
 */

import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { ChevronDown, MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react';
import { Link } from '../router/Router';
import { BUSINESS_CONFIG } from '../config/business';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function FaqPage() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-inquire', 'faq-photos']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqList: FaqItem[] = [
    {
      id: 'faq-inquire',
      question: 'How do I inquire about a specific carpet in the collection?',
      answer: (
        <p>
          Every carpet in our catalog has an individual detail page with a direct <strong>Inquire on WhatsApp</strong> button and an <strong>Ask About This Carpet / Quote</strong> option. Clicking either will automatically package the product name, catalog SKU, collection name, and requested dimensions so our team can provide you with confirmed specifications promptly.
        </p>
      )
    },
    {
      id: 'faq-sizes',
      question: 'How do I verify exact carpet dimensions before ordering?',
      answer: (
        <p>
          Due to the individual weaving characteristics of traditional carpets, dimensions are listed with standard approximations (e.g. 200 x 300 cm / approx. 6'7" x 9'10"). Before purchase, our team will measure the exact physical piece end-to-end, including or excluding fringe tassels as required by your interior floor plan.
        </p>
      )
    },
    {
      id: 'faq-materials',
      question: 'How can I ask about specific fiber materials and foundation?',
      answer: (
        <p>
          We do not publish unverified fiber claims. When you inquire about a specific SKU, our team can verify whether the pile is natural highland wool, fine silk highlights, or an engineered fiber blend, as well as confirm whether the foundation warp and weft are cotton or wool.
        </p>
      )
    },
    {
      id: 'faq-cleaning',
      question: 'How should I confirm cleaning and maintenance requirements?',
      answer: (
        <p>
          Different natural dyes and fibers require distinct care routines. While general guidance suggests routine suction-only vacuuming and immediate blotting of spills, we provide custom care recommendations upon inquiry tailored to the specific piece and the flooring surface (e.g., hardwood, marble, or tile) where it will reside.
        </p>
      )
    },
    {
      id: 'faq-wholesale',
      question: 'How do interior designers and retailers inquire about wholesale opportunities?',
      answer: (
        <p>
          We welcome commercial trade partnerships. Please visit our <Link href="/wholesale" className="text-[#5E0006] underline font-medium">Wholesale & Trade Inquiries page</Link> where you can detail your project timeline, desired formats, and scope. We will connect directly via WhatsApp or email to discuss tailored pricing and lead times.
        </p>
      )
    },
    {
      id: 'faq-contact',
      question: 'What is the fastest way to reach AMINZADA CARPETS?',
      answer: (
        <p>
          For real-time discussions, our official WhatsApp channel at <strong>{BUSINESS_CONFIG.whatsappDisplay}</strong> provides the most immediate response. Alternatively, you can reach us by phone at <strong>{BUSINESS_CONFIG.telephoneDisplay}</strong> or by emailing <strong>{BUSINESS_CONFIG.email}</strong>.
        </p>
      )
    },
    {
      id: 'faq-photos',
      question: 'Can I request additional high-resolution photographs or video walkthroughs?',
      answer: (
        <p>
          Yes. While our online catalog displays 4 distinct perspectives (Front, Back weave, Near pile texture, and Detail motif), we are pleased to record custom high-resolution video clips or daylight close-ups for clients upon request through WhatsApp to assist in remote evaluations.
        </p>
      )
    },
    {
      id: 'faq-price',
      question: 'How do I confirm pricing and availability for a design?',
      answer: (
        <p>
          To maintain transparency without publishing fictitious or outdated prices, prices and availability are confirmed on an inquiry basis. When you send an inquiry, we confirm current inventory status or production lead times and share formal price quotations.
        </p>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Customer & Trade Help
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light max-w-2xl mx-auto">
          Clear, transparent guidance on discovering our carpets, verifying specifications, and initiating trade or private inquiries.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      {/* Accordion Container */}
      <div className="space-y-3">
        {faqList.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#EED9B9] rounded-xs overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FAF8F3] transition-colors focus:outline-hidden"
              >
                <span className="font-editorial text-lg sm:text-xl font-semibold text-[#252321]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5E0006] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`${item.id}-answer`}
                  className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#77716B] leading-relaxed border-t border-[#FAF8F3]"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="bg-[#FAF8F3] border border-[#EED9B9] p-8 text-center space-y-4">
        <h2 className="font-editorial text-2xl text-[#252321] font-semibold">
          Have an Unanswered Question?
        </h2>
        <p className="text-xs sm:text-sm text-[#77716B] max-w-md mx-auto">
          Our team is available to assist with custom room dimensions, high-resolution imagery requests, or trade sourcing.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
          >
            <span>Contact Our Specialists</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
