/**
 * AMINZADA CARPETS — WhatsApp URL & Message Construction System
 * 
 * Complies with Section 10 specification:
 * - Reads digits from central business config.
 * - Enforces zero spaces and no plus sign in the URL path.
 * - Formats exact prefilled messages with proper URI encoding.
 */

import { BUSINESS_CONFIG } from '../config/business';

export interface ProductInquiryParams {
  productName: string;
  sku: string;
  collectionName: string;
  selectedSize?: string | null;
  productUrl?: string;
}

/**
 * Builds the exact compliant WhatsApp inquiry URL for an individual carpet product.
 */
export function buildProductWhatsAppUrl(params: ProductInquiryParams): string {
  const {
    productName,
    sku,
    collectionName,
    selectedSize,
    productUrl = typeof window !== 'undefined' ? window.location.href : ''
  } = params;

  const sizeText = selectedSize && selectedSize.trim().length > 0
    ? selectedSize.trim()
    : 'Size to be confirmed';

  const messageLines = [
    `Hello ${BUSINESS_CONFIG.name},`,
    '',
    'I would like to inquire about this carpet.',
    '',
    `Product: ${productName}`,
    `Product Code: ${sku}`,
    `Collection: ${collectionName}`,
    `Requested Size: ${sizeText}`,
    `Product Page: ${productUrl}`,
    '',
    'Please share the confirmed specifications, available sizes, current availability, and price.',
    '',
    'Thank you.'
  ];

  const fullMessage = messageLines.join('\n');
  const encodedMessage = encodeURIComponent(fullMessage);

  // Ensure no spaces or '+' in the digits
  const cleanDigits = BUSINESS_CONFIG.whatsappDigits.replace(/[^\d]/g, '');

  return `https://wa.me/${cleanDigits}?text=${encodedMessage}`;
}

/**
 * Builds a general inquiry WhatsApp URL for homepage, contact, or wholesale requests.
 */
export function buildGeneralWhatsAppUrl(subject?: string, details?: string): string {
  const cleanDigits = BUSINESS_CONFIG.whatsappDigits.replace(/[^\d]/g, '');
  
  const lines = [
    `Hello ${BUSINESS_CONFIG.name},`,
    '',
    subject ? `I would like to inquire regarding: ${subject}` : 'I would like to inquire about your rugs and carpet collections.',
    details ? `\nDetails:\n${details}` : '',
    '',
    'Please share further information with me.',
    '',
    'Thank you.'
  ].filter(line => line !== null);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${cleanDigits}?text=${encoded}`;
}
