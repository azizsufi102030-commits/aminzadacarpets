/**
 * AMINZADA CARPETS — Core Domain Types
 */

export type ImageRole = 'front' | 'back' | 'near' | 'detail';

export interface ProductImage {
  role: ImageRole;
  url: string;
  alt: string;
  caption?: string;
  sortOrder: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  collectionId: string;
  collectionName: string;
  shortDescription: string;
  fullDescription: string;
  dimensions: string | null;
  availableSizes: string[];
  quality: string | null;
  materials: string | null;
  washingType: string | null;
  pileType: string | null;
  countryOfOrigin: string | null;
  constructionMethod: string | null;
  primaryColors: string[];
  pattern: string;
  intendedUse: string | null;
  availabilityStatus: 'in_stock' | 'upon_inquiry' | 'made_to_order' | null;
  price: number | null;
  showPrice: boolean;
  // Four independent images required: front, back, near, detail
  images: [ProductImage, ProductImage, ProductImage, ProductImage];
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  relatedProductIds: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
}

export interface CatalogFilterOptions {
  query?: string;
  collectionId?: string;
  pattern?: string;
  color?: string;
  size?: string;
  sortBy?: 'name-asc' | 'name-desc' | 'newest';
}

export interface WholesaleInquiryData {
  fullName: string;
  companyName?: string;
  email: string;
  phoneOrWhatsApp?: string;
  country?: string;
  inquiryType: 'retail_collection' | 'interior_design' | 'hospitality' | 'custom_sourcing' | 'other';
  productsOfInterest?: string;
  projectScopeOrQuantity?: string;
  preferredSizes?: string;
  message: string;
}

export interface GeneralContactData {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface QuoteRequestData {
  productName: string;
  sku: string;
  collectionName: string;
  selectedSize: string;
  quantity?: string;
  fullName: string;
  email: string;
  phoneOrWhatsApp?: string;
  companyName?: string;
  projectScopeNotes?: string;
  preferredChannel: 'email' | 'whatsapp';
}
