/**
 * AMINZADA CARPETS — Central Business Configuration
 * 
 * Centralized, strongly typed configuration file for all business information.
 * Strictly adheres to verified company data.
 * 
 * NOTE FOR OWNER:
 * Please confirm the WhatsApp destination number (93781964444) and telephone number (+93786424295)
 * prior to public advertising campaign launches.
 */

export interface BusinessConfig {
  name: string;
  category: string;
  tagline: string;
  brandPositioning: string;
  email: string;
  telephoneDisplay: string;
  telephoneDial: string;
  whatsappDisplay: string;
  whatsappDigits: string;
  whatsappBaseUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  logoUrl: string;
  defaultOgImage: string;
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "AMINZADA CARPETS",
  category: "Rugs & Carpets",
  tagline: "Timeless Carpets. Enduring Heritage.",
  brandPositioning: "Luxury Afghan Heritage",
  email: "Zabiullah.aminyar22@gmail.com",
  telephoneDisplay: "+93 78 642 4295",
  telephoneDial: "+93786424295",
  whatsappDisplay: "+93 78 196 4444",
  // International digits without spaces or leading '+' for wa.me format
  whatsappDigits: "93781964444",
  whatsappBaseUrl: "https://wa.me/93781964444",
  instagramUrl: "https://www.instagram.com/aminzada_carpets?cplk=cXRlYnl1MzZwdHMx",
  facebookUrl: "https://www.facebook.com/share/1CcbQ4YTTD/",
  logoUrl: "/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg",
  defaultOgImage: "/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg",
  meta: {
    siteTitle: "AMINZADA CARPETS | Luxury Afghan Heritage",
    siteDescription: "Discover curated rugs and carpets inspired by traditional Afghan heritage, geometric motifs, and the art of living well."
  }
};
