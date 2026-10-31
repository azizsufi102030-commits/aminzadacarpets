/**
 * AMINZADA CARPETS — Wholesale & Trade Inquiries
 * 
 * Complies with Section 15:
 * - Trade introduction for designers, retailers, hospitality buyers
 * - Fully validated form with accessible labels and clear errors
 * - Explicit WhatsApp and Email direct submission fallbacks
 * - Transparent status reporting (no simulated backend success claims)
 */

import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';
import { WholesaleInquiryData } from '../types';
import { MessageCircle, Mail, Send, CheckCircle2, AlertCircle, Building2, Briefcase } from 'lucide-react';

export function WholesalePage() {
  const [formData, setFormData] = useState<WholesaleInquiryData>({
    fullName: '',
    companyName: '',
    email: '',
    phoneOrWhatsApp: '',
    country: '',
    inquiryType: 'interior_design',
    productsOfInterest: '',
    projectScopeOrQuantity: '',
    preferredSizes: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project, sourcing requirements, or question.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hello ${BUSINESS_CONFIG.name},`,
      '',
      'TRADE & WHOLESALE INQUIRY',
      '',
      `Name: ${formData.fullName}`,
      formData.companyName ? `Company: ${formData.companyName}` : '',
      `Email: ${formData.email}`,
      formData.phoneOrWhatsApp ? `Phone/WhatsApp: ${formData.phoneOrWhatsApp}` : '',
      formData.country ? `Country: ${formData.country}` : '',
      `Inquiry Type: ${formData.inquiryType}`,
      formData.productsOfInterest ? `Products of Interest: ${formData.productsOfInterest}` : '',
      formData.projectScopeOrQuantity ? `Scope / Quantity: ${formData.projectScopeOrQuantity}` : '',
      formData.preferredSizes ? `Preferred Sizes: ${formData.preferredSizes}` : '',
      '',
      `Message:\n${formData.message}`,
      '',
      'Please let me know available specifications, lead times, and trade options.',
      '',
      'Thank you.'
    ].filter(Boolean);

    return lines.join('\n');
  };

  const generateEmailSubject = () => {
    const company = formData.companyName ? ` [${formData.companyName}]` : '';
    return `Trade Inquiry: ${formData.inquiryType.toUpperCase()}${company} - ${formData.fullName}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Prepare the structured inquiry package
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSummary(generateWhatsAppMessage());
    }, 400);
  };

  const handleOpenWhatsApp = () => {
    const msg = generateWhatsAppMessage();
    const cleanDigits = BUSINESS_CONFIG.whatsappDigits.replace(/[^\d]/g, '');
    const url = `https://wa.me/${cleanDigits}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateWhatsAppMessage());
    window.location.href = `mailto:${BUSINESS_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Trade & Wholesale Inquiries' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Commercial Partnerships
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Wholesale & Trade Inquiries
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          We welcome conversations with interior architects, hospitality developers, retailers, and private trade consultants seeking distinctive Afghan and regional carpet designs.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      {/* Partnership Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-5 rounded-xs space-y-2">
          <Building2 className="w-5 h-5 text-[#5E0006]" />
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#252321]">Hospitality & Projects</h3>
          <p className="text-[#77716B]">Customized room sizing and cohesive palette planning for boutique hotels, lounges, and luxury residential developments.</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-5 rounded-xs space-y-2">
          <Briefcase className="w-5 h-5 text-[#D53E0F]" />
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#252321]">Retail Collections</h3>
          <p className="text-[#77716B]">Curated groupings for specialty rug galleries and home furnishing retailers looking to introduce genuine regional motifs.</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-5 rounded-xs space-y-2">
          <MessageCircle className="w-5 h-5 text-[#5E0006]" />
          <h3 className="font-semibold text-sm uppercase tracking-wider text-[#252321]">Direct Specification</h3>
          <p className="text-[#77716B]">Direct access to confirmed knot counts, pile heights, fiber verification, and high-resolution photographic inspections.</p>
        </div>
      </div>

      {/* Inquiry Form Card */}
      <div className="bg-[#FFFFFF] border-2 border-[#5E0006] p-6 sm:p-10 shadow-lg">
        
        {submittedSummary ? (
          <div className="space-y-6 text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <div className="space-y-2">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-semibold">
                Inquiry Form Prepared
              </h2>
              <p className="text-xs sm:text-sm text-[#77716B] max-w-lg mx-auto leading-relaxed">
                Your trade specifications are formatted. To complete the inquiry, transmit your details directly via our verified WhatsApp channel or official email below.
              </p>
            </div>

            {/* Formatted Text Box */}
            <div className="text-left bg-[#FAF8F3] border border-[#EED9B9] p-4 text-xs font-mono text-[#252321] whitespace-pre-wrap max-h-60 overflow-y-auto">
              {submittedSummary}
            </div>

            {/* Direct Send Triggers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Send to WhatsApp ({BUSINESS_CONFIG.whatsappDisplay})</span>
              </button>

              <button
                type="button"
                onClick={handleOpenEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Send via Email ({BUSINESS_CONFIG.email})</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#EED9B9]">
              <button
                type="button"
                onClick={() => setSubmittedSummary(null)}
                className="text-xs text-[#77716B] hover:text-[#5E0006] underline"
              >
                ← Edit Form Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <h2 className="font-editorial text-2xl text-[#252321] font-medium">
                Trade Sourcing Inquiry
              </h2>
              <p className="text-xs text-[#77716B] mt-1">
                Please complete the required details below. We review every project with meticulous care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Full Name <span className="text-[#D53E0F]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                    errors.fullName ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                  }`}
                  placeholder="e.g. Eleanor Vance"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Company / Design Studio <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  placeholder="e.g. Vance Interiors Ltd."
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Email Address <span className="text-[#D53E0F]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                    errors.email ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                  }`}
                  placeholder="e.g. eleanor@vanceinteriors.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phoneOrWhatsApp" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Phone or WhatsApp <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="phoneOrWhatsApp"
                  type="tel"
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  placeholder="+44 7700 900077"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Country / Region <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  placeholder="e.g. United Kingdom, UAE, United States"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Inquiry Type <span className="text-[#D53E0F]">*</span>
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                >
                  <option value="interior_design">Interior Design Project</option>
                  <option value="retail_collection">Retail Store Collection</option>
                  <option value="hospitality">Hospitality / Commercial Space</option>
                  <option value="custom_sourcing">Custom Carpet Sourcing</option>
                  <option value="other">General Trade Inquiry</option>
                </select>
              </div>

            </div>

            {/* Scope and Preferred Sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div>
                <label htmlFor="productsOfInterest" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Products or Collections of Interest <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="productsOfInterest"
                  type="text"
                  value={formData.productsOfInterest}
                  onChange={(e) => setFormData({ ...formData, productsOfInterest: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  placeholder="e.g. Heritage Medallion, Large Statement..."
                />
              </div>

              <div>
                <label htmlFor="projectScopeOrQuantity" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Project Scope or Quantity <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="projectScopeOrQuantity"
                  type="text"
                  value={formData.projectScopeOrQuantity}
                  onChange={(e) => setFormData({ ...formData, projectScopeOrQuantity: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  placeholder="e.g. 3 dining pieces, entire boutique floor"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                Project Details & Requirements <span className="text-[#D53E0F]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                  errors.message ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                }`}
                placeholder="Share your timeline, required dimensions, spatial context, or specific questions..."
              />
              {errors.message && (
                <p id="message-error" className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] disabled:opacity-50 text-[#FAF8F3] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
              >
                {isSubmitting ? (
                  <span>Preparing Inquiry...</span>
                ) : (
                  <>
                    <span>Prepare Trade Inquiry</span>
                    <Send className="w-3.5 h-3.5 ml-2" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
