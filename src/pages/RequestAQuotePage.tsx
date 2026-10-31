/**
 * AMINZADA CARPETS — Request a Quote
 * 
 * Complies with Section 18:
 * - Focused inquiry experience
 * - Prefills product name, SKU, collection, and size when arriving from product page
 * - Accessible form fields, input validation, and direct WhatsApp / Email submission options
 * - Fully responsive, free-flowing container (no fixed heights)
 */

import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../router/Router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';
import { QuoteRequestData } from '../types';
import { MessageCircle, Mail, Send, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export function RequestAQuotePage() {
  const { search } = useRouter();

  // Parse query parameters
  const getQueryParam = (name: string): string => {
    if (typeof window === 'undefined' || !search) return '';
    const params = new URLSearchParams(search);
    return params.get(name) || '';
  };

  const [formData, setFormData] = useState<QuoteRequestData>({
    productName: '',
    sku: '',
    collectionName: '',
    selectedSize: '',
    quantity: '1',
    fullName: '',
    email: '',
    phoneOrWhatsApp: '',
    companyName: '',
    projectScopeNotes: '',
    preferredChannel: 'whatsapp'
  });

  useEffect(() => {
    const prodParam = getQueryParam('product');
    const skuParam = getQueryParam('sku');
    const colParam = getQueryParam('collection');
    const sizeParam = getQueryParam('size');

    setFormData((prev) => ({
      ...prev,
      productName: prodParam || prev.productName,
      sku: skuParam || prev.sku,
      collectionName: colParam || prev.collectionName,
      selectedSize: sizeParam || prev.selectedSize
    }));
  }, [search]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedSummary, setPreparedSummary] = useState<string | null>(null);

  const validate = (): boolean => {
    const err: Record<string, string> = {};
    if (!formData.productName.trim()) {
      err.productName = 'Please specify the carpet design or name.';
    }
    if (!formData.fullName.trim()) {
      err.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      err.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      err.email = 'Please enter a valid email address.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const generateQuoteMessage = () => {
    const lines = [
      `Hello ${BUSINESS_CONFIG.name},`,
      '',
      'FORMAL QUOTE REQUEST',
      '',
      `Product: ${formData.productName}`,
      formData.sku ? `SKU: ${formData.sku}` : '',
      formData.collectionName ? `Collection: ${formData.collectionName}` : '',
      `Requested Size: ${formData.selectedSize || 'Size to be confirmed'}`,
      `Quantity: ${formData.quantity || '1'}`,
      '',
      `Client Name: ${formData.fullName}`,
      formData.companyName ? `Company: ${formData.companyName}` : '',
      `Email: ${formData.email}`,
      formData.phoneOrWhatsApp ? `Phone/WhatsApp: ${formData.phoneOrWhatsApp}` : '',
      formData.projectScopeNotes ? `Project Notes:\n${formData.projectScopeNotes}` : '',
      '',
      'Please provide price quotation, confirmed physical dimensions, and availability status.',
      '',
      'Thank you.'
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPreparedSummary(generateQuoteMessage());
    }, 400);
  };

  const handleOpenWhatsApp = () => {
    const msg = generateQuoteMessage();
    const cleanDigits = BUSINESS_CONFIG.whatsappDigits.replace(/[^\d]/g, '');
    const url = `https://wa.me/${cleanDigits}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent(`Quote Request: ${formData.productName} [${formData.sku || 'Carpet'}] - ${formData.fullName}`);
    const body = encodeURIComponent(generateQuoteMessage());
    window.location.href = `mailto:${BUSINESS_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Tailored Quotation
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Request a Carpet Quote
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          Specify your desired piece, required room proportions, and quantity. Our specialists will review specifications and share an itemized quote.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      <div className="bg-[#FFFFFF] border-2 border-[#5E0006] p-6 sm:p-10 shadow-lg">
        
        {preparedSummary ? (
          <div className="text-center py-6 space-y-6">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <div className="space-y-2">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-semibold">
                Quotation Request Assembled
              </h2>
              <p className="text-xs sm:text-sm text-[#77716B] max-w-md mx-auto leading-relaxed">
                Your request details have been composed. Click below to submit directly to our official customer desk:
              </p>
            </div>

            <div className="text-left bg-[#FAF8F3] border border-[#EED9B9] p-4 text-xs font-mono text-[#252321] whitespace-pre-wrap max-h-60 overflow-y-auto">
              {preparedSummary}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Submit via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleOpenEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Submit via Email</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#EED9B9]">
              <button
                type="button"
                onClick={() => setPreparedSummary(null)}
                className="text-xs text-[#77716B] hover:text-[#5E0006] underline"
              >
                ← Modify Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Carpet Identification Section */}
            <div className="space-y-4 pb-6 border-b border-[#EED9B9]">
              <h2 className="font-editorial text-xl font-semibold text-[#5E0006]">
                1. Carpet Identification & Format
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-productName" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Product / Carpet Name <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    id="quote-productName"
                    type="text"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                      errors.productName ? 'border-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                    }`}
                    placeholder="e.g. Heritage Medallion Rug"
                  />
                  {errors.productName && (
                    <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.productName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-sku" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Catalog SKU <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="quote-sku"
                    type="text"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="e.g. AC-MED-001"
                  />
                </div>

                <div>
                  <label htmlFor="quote-size" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Requested Size / Dimensions
                  </label>
                  <input
                    id="quote-size"
                    type="text"
                    value={formData.selectedSize}
                    onChange={(e) => setFormData({ ...formData, selectedSize: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="e.g. 200 x 300 cm, 8x10 ft, custom corridor"
                  />
                </div>

                <div>
                  <label htmlFor="quote-quantity" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Quantity
                  </label>
                  <input
                    id="quote-quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>

            {/* Client Contact Details */}
            <div className="space-y-4 pb-6 border-b border-[#EED9B9]">
              <h2 className="font-editorial text-xl font-semibold text-[#5E0006]">
                2. Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-fullName" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Full Name <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    id="quote-fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                      errors.fullName ? 'border-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Email Address <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                      errors.email ? 'border-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Phone / WhatsApp <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="+93 78 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="quote-company" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Company / Firm <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="quote-company"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="Studio or project name"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="quote-notes" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                Project Scope & Room Context <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
              </label>
              <textarea
                id="quote-notes"
                rows={3}
                value={formData.projectScopeNotes}
                onChange={(e) => setFormData({ ...formData, projectScopeNotes: e.target.value })}
                className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                placeholder="Mention specific flooring types, room usage, or lighting factors..."
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] disabled:opacity-50 text-[#FAF8F3] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <span>Compose Quote Request</span>
                <Send className="w-3.5 h-3.5 ml-2" />
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
