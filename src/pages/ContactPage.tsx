/**
 * AMINZADA CARPETS — Contact Page
 * 
 * Complies with Section 16:
 * - Original company logo
 * - Verified direct channels: Email, Tel, WhatsApp, Instagram, Facebook
 * - Clickable tel: and mailto: links
 * - Validated general inquiry form with transparent delivery feedback
 * - No invented physical address or fictitious map coordinates
 */

import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GeometricDivider } from '../components/GeometricDivider';
import { BUSINESS_CONFIG } from '../config/business';
import { GeneralContactData } from '../types';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState<GeneralContactData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const validate = (): boolean => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      err.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      err.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) err.message = 'Please enter your message.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hello ${BUSINESS_CONFIG.name},`,
      '',
      'GENERAL WEBSITE INQUIRY',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.subject ? `Subject: ${formData.subject}` : '',
      '',
      `Message:\n${formData.message}`,
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
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.fullName}`);
    const body = encodeURIComponent(generateWhatsAppMessage());
    window.location.href = `mailto:${BUSINESS_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
          Direct Communication
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#252321] font-medium">
          Contact AMINZADA CARPETS
        </h1>
        <p className="text-sm sm:text-base text-[#77716B] leading-relaxed font-light">
          Whether inquiring about a specific carpet design, requesting detailed high-resolution photographs, or discussing commercial trade sourcing, we welcome your direct communication.
        </p>
        <GeometricDivider variant="medallion" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Channels & Social */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-4 pb-4 border-b border-[#FAF8F3]">
              <img
                src={BUSINESS_CONFIG.logoUrl}
                alt="AMINZADA CARPETS"
                className="h-14 w-auto object-contain"
              />
              <div>
                <p className="font-editorial text-lg font-semibold text-[#5E0006]">
                  AMINZADA CARPETS
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#77716B]">
                  Rugs & Carpets
                </p>
              </div>
            </div>

            {/* Direct Links */}
            <div className="space-y-4 text-xs">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#5E0006]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#77716B] font-semibold">Email Channel</p>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-[#252321] hover:text-[#5E0006] font-medium break-all"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D53E0F]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#77716B] font-semibold">Telephone Inquiries</p>
                  <a
                    href={`tel:${BUSINESS_CONFIG.telephoneDial}`}
                    className="text-[#252321] hover:text-[#5E0006] font-medium"
                  >
                    {BUSINESS_CONFIG.telephoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#FAF8F3] border border-[#EED9B9] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#77716B] font-semibold">WhatsApp Destination</p>
                  <a
                    href={BUSINESS_CONFIG.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#252321] hover:text-[#25D366] font-medium"
                  >
                    {BUSINESS_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

            </div>

            {/* Social channels */}
            <div className="pt-4 border-t border-[#EED9B9] space-y-2">
              <p className="text-[11px] uppercase tracking-wider text-[#77716B] font-semibold">
                Social Presentations
              </p>
              <div className="space-y-1.5 text-xs">
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 bg-[#FAF8F3] hover:bg-[#EED9B9]/30 rounded-xs transition-colors"
                >
                  <span className="text-[#252321] font-medium">Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5E0006]" />
                </a>
                <a
                  href={BUSINESS_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 bg-[#FAF8F3] hover:bg-[#EED9B9]/30 rounded-xs transition-colors"
                >
                  <span className="text-[#252321] font-medium">Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5E0006]" />
                </a>
              </div>
            </div>

            {/* Note regarding office location */}
            <div className="p-3 bg-[#FAF8F3] border border-[#EED9B9] text-[11px] text-[#77716B] leading-relaxed">
              <span className="font-semibold text-[#5E0006]">Direct Appointment:</span> Physical viewings and showroom visits are arranged by advance inquiry through our phone or WhatsApp channels.
            </div>

          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#FFFFFF] border border-[#EED9B9] p-6 sm:p-10 shadow-xs">
            
            {submittedSummary ? (
              <div className="text-center py-6 space-y-5">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-semibold">
                  Inquiry Message Ready
                </h2>
                <p className="text-xs sm:text-sm text-[#77716B] max-w-md mx-auto leading-relaxed">
                  Your message is formatted and ready to send. Click either channel below to transmit directly:
                </p>

                <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] text-xs font-mono text-[#252321] text-left whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {submittedSummary}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenEmail}
                    className="inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmittedSummary(null)}
                    className="text-xs text-[#77716B] hover:text-[#5E0006] underline"
                  >
                    ← Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-editorial text-2xl text-[#252321] font-medium">
                    Send a Message
                  </h2>
                  <p className="text-xs text-[#77716B] mt-0.5">
                    We typically respond to inquiries within 24 business hours.
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Your Name <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                      errors.fullName ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                    }`}
                    placeholder="e.g. Tariq Ahmad"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                      Email Address <span className="text-[#D53E0F]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                        errors.email ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                      }`}
                      placeholder="e.g. tariq@example.com"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                      Phone / WhatsApp <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                      placeholder="+93 78 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Subject / Design of Interest <span className="text-[#77716B] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    placeholder="e.g. Inquiry on Heritage Medallion Carpet"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Message <span className="text-[#D53E0F]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden ${
                      errors.message ? 'border-[#D53E0F] ring-1 ring-[#D53E0F]' : 'border-[#EED9B9] focus:border-[#5E0006]'
                    }`}
                    placeholder="How may our team assist you with your space or collection inquiry?"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-[#D53E0F] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] disabled:opacity-50 text-[#FAF8F3] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors rounded-xs shadow-xs"
                >
                  <span>Prepare Inquiry</span>
                  <Send className="w-3.5 h-3.5 ml-2" />
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
