/**
 * AMINZADA CARPETS — Initial Product Catalog (Exactly 15 Products)
 * 
 * Strictly adheres to Section 7 & Section 8:
 * - Exactly 15 complete, individually addressable records.
 * - Slugs match the specification exactly.
 * - Exactly 4 independent image slots per product (total 60 distinct slots).
 * - Image roles: front, back, near, detail.
 * - Technical specifications not yet verified by owner use null / explicit unconfirmed state.
 * - No invented pricing or fake stock counts.
 */

import { Product } from '../types';
import { generateCarpetSlotSvg } from '../utils/carpetPlaceholders';

export const PRODUCTS_DATA: Product[] = [
  // 01. Heritage Medallion Rug
  {
    id: 'prod-heritage-medallion',
    name: 'Heritage Medallion Rug',
    slug: 'heritage-medallion-rug',
    sku: 'AC-MED-001',
    collectionId: 'col-flr-med',
    collectionName: 'Floral & Medallion Rugs',
    shortDescription: 'A balanced central medallion composition framed by multi-tiered guard borders and intricate corner spandrels.',
    fullDescription: 'The Heritage Medallion Rug centers on an anchor medallion surrounded by finely balanced floral and geometric vines. Designed to establish symmetry and focal presence in formal living areas and dining rooms, this piece exemplifies classical regional carpet architecture with deep burgundy and antique cream nuances.',
    dimensions: null, // Unconfirmed — will display 'Contact us to confirm'
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '250 x 350 cm (Approx. 8\'2" x 11\'6")',
      'Custom sizing upon inquiry'
    ],
    quality: 'Premium Heritage Grade (Knot count to be verified upon request)',
    materials: 'Natural Wool Pile on Cotton Foundation (To be confirmed)',
    washingType: 'Professional carpet cleaning recommended',
    pileType: 'Medium dense pile (Approx. 8-10 mm to be confirmed)',
    countryOfOrigin: null, // To be verified per carpet
    constructionMethod: 'Traditional loom construction (Hand-knotted verification pending)',
    primaryColors: ['Deep Burgundy', 'Heritage Cream', 'Burnt Terracotta', 'Muted Charcoal'],
    pattern: 'Classical Central Medallion with Botanical Spandrels',
    intendedUse: 'Living Rooms, Formal Dining Spaces, Executive Suites',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Heritage Medallion Rug',
          sku: 'AC-MED-001',
          role: 'front',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Heritage Medallion Rug — Full Front View showing central medallion and border composition',
        caption: 'Full front perspective illustrating central medallion symmetry and guard stripes.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Heritage Medallion Rug',
          sku: 'AC-MED-001',
          role: 'back',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Heritage Medallion Rug — Reverse Weave and Foundation Inspection View',
        caption: 'Reverse side revealing foundation warp, weft, and knotting structure.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Heritage Medallion Rug',
          sku: 'AC-MED-001',
          role: 'near',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Heritage Medallion Rug — Close-up View of Wool Pile Texture and Fiber Twist',
        caption: 'Tactile close-up highlighting yarn density, luster, and pile thickness.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Heritage Medallion Rug',
          sku: 'AC-MED-001',
          role: 'detail',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Heritage Medallion Rug — Detailed View of Corner Spandrel and Border Guard',
        caption: 'Detailed craftsmanship inspection of the intricate multi-tiered border motifs.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Heritage Medallion Rug | Traditional Medallion Collection | AMINZADA CARPETS',
    seoDescription: 'Inquire about the Heritage Medallion Rug (AC-MED-001). Classical central medallion design with deep burgundy and warm cream tones.',
    createdAt: '2026-01-15T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 02. Afghan Geometric Pattern Rug
  {
    id: 'prod-afghan-geometric',
    name: 'Afghan Geometric Pattern Rug',
    slug: 'afghan-geometric-pattern-rug',
    sku: 'AC-GEO-002',
    collectionId: 'col-trad-afg',
    collectionName: 'Traditional Afghan-Inspired Rugs',
    shortDescription: 'This authentic Afghan handmade rug is a masterpiece created with patience, passion, and the skilled hands of Afghan artisans. Every thread and every knot reflects a timeless tradition, bringing the natural warmth of wool and the elegance of handcrafted art into your home.',
    fullDescription: 'This authentic Afghan handmade rug is a masterpiece created with patience, passion, and the skilled hands of Afghan artisans. Every thread and every knot reflects a timeless tradition, bringing the natural warmth of wool and the elegance of handcrafted art into your home.',
    dimensions: null,
    availableSizes: [
      '150 x 240 cm (Approx. 5\'0" x 7\'10")',
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      'Sizes to be confirmed with our team'
    ],
    quality: '40x40',
    materials: 'Wool',
    washingType: 'Regular',
    pileType: '4mm',
    countryOfOrigin: 'Afghanistan',
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Indigo Blue', 'Espresso Brown', 'Antique Cream', 'Slate Grey'],
    pattern: 'Repeating Cruciform Medallions & Acanthus Spandrels',
    intendedUse: 'Living Rooms, Library, Study, Dining Spaces',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: '/carpets/AC-GEO-002-front.webp',
        alt: 'Afghan Geometric Pattern Rug (SKU AC-GEO-002) — Authentic Front View with Fringe Ends',
        caption: 'Authentic front photograph showcasing indigo blue field, cruciform medallions, and finished fringe ends.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: '/carpets/AC-GEO-002-back.webp',
        alt: 'Afghan Geometric Pattern Rug (SKU AC-GEO-002) — Luxury Interior Living Room Showcase',
        caption: 'Authentic living space showcase displaying scale, drape, and harmonious presence with fine furnishings.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: '/carpets/AC-GEO-002-near.webp',
        alt: 'Afghan Geometric Pattern Rug (SKU AC-GEO-002) — Tactile Hand on Wool Pile Detail',
        caption: 'Tactile close-up highlighting natural wool pile density, fiber softness, and handcrafted knotting.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Afghan Geometric Pattern Rug',
          sku: 'AC-GEO-002',
          role: 'detail',
          primaryColors: ['#1E3A5F', '#5A3E28'],
          patternStyle: 'Traditional / Geometric'
        }),
        alt: 'Afghan Geometric Pattern Rug — Detailed Motifs and Guard Stripe Borders',
        caption: 'Inspection of corner diamond cartouches and scrolling acanthus spandrels.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Afghan Geometric Pattern Rug | Traditional Rugs | AMINZADA CARPETS',
    seoDescription: 'Discover the Afghan Geometric Pattern Rug (AC-GEO-002). Symmetrical octagons and timeless madder red palette for distinguished spaces.',
    createdAt: '2026-01-18T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 03. Classic Floral Oriental Rug
  {
    id: 'prod-classic-floral-oriental',
    name: 'Classic Floral Oriental Rug',
    slug: 'classic-floral-oriental-rug',
    sku: 'AC-ORI-003',
    collectionId: 'col-ori-her',
    collectionName: 'Oriental & Heritage Designs',
    shortDescription: 'Graceful floral scrolling arabesques set against an ivory and terracotta canvas.',
    fullDescription: 'The Classic Floral Oriental Rug brings gentle elegance with interlaced palmettes, curving tendrils, and a layered floral border. The soft contrast between terracotta, burgundy, and warm heritage cream allows this carpet to integrate effortlessly with both antique furnishings and modern transitional settings.',
    dimensions: null,
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '240 x 340 cm (Approx. 7\'10" x 11\'2")',
      'Inquire for specific dimension availability'
    ],
    quality: 'Refined Workshop Grade (Specifications to be confirmed)',
    materials: 'Wool or Wool Blend (To be confirmed)',
    washingType: 'Professional rug cleaning recommended',
    pileType: 'Plush cut pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Terracotta', 'Ivory Cream', 'Heritage Burgundy', 'Muted Sage/Stone'],
    pattern: 'All-Over Floral Arabesques & Shah Abbas Motifs',
    intendedUse: 'Living Rooms, Drawing Rooms, Bedrooms',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Classic Floral Oriental Rug',
          sku: 'AC-ORI-003',
          role: 'front',
          primaryColors: ['#D53E0F', '#FAF8F3'],
          patternStyle: 'Oriental / Floral'
        }),
        alt: 'Classic Floral Oriental Rug — Front Complete Overview',
        caption: 'Full-carpet view presenting fluid botanical flourishes and outer border harmony.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Classic Floral Oriental Rug',
          sku: 'AC-ORI-003',
          role: 'back',
          primaryColors: ['#D53E0F', '#FAF8F3'],
          patternStyle: 'Oriental / Floral'
        }),
        alt: 'Classic Floral Oriental Rug — Back Surface and Foundation Weft',
        caption: 'Reverse side showing intricate knot definition of the floral tracery.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Classic Floral Oriental Rug',
          sku: 'AC-ORI-003',
          role: 'near',
          primaryColors: ['#D53E0F', '#FAF8F3'],
          patternStyle: 'Oriental / Floral'
        }),
        alt: 'Classic Floral Oriental Rug — Near View of Pile Softness and Fiber Detail',
        caption: 'Close-up on the soft pile texture and subtle tonal transitions.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Classic Floral Oriental Rug',
          sku: 'AC-ORI-003',
          role: 'detail',
          primaryColors: ['#D53E0F', '#FAF8F3'],
          patternStyle: 'Oriental / Floral'
        }),
        alt: 'Classic Floral Oriental Rug — Detail of Palmette Motif and Border Edge',
        caption: 'Magnified view of fine palmette curvilinear rendering and border finishing.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Classic Floral Oriental Rug | Oriental & Heritage | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Classic Floral Oriental Rug (AC-ORI-003). Intricate botanical palmettes, warm terracotta highlights, and ivory canvas.',
    createdAt: '2026-01-20T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 04. Deep Burgundy Statement Carpet
  {
    id: 'prod-deep-burgundy-statement',
    name: 'Deep Burgundy Statement Carpet',
    slug: 'deep-burgundy-statement-carpet',
    sku: 'AC-PRM-004',
    collectionId: 'col-prem-stmt',
    collectionName: 'Premium Statement Pieces',
    shortDescription: 'A dramatic, rich jewel-toned carpet crafted for commanding interior presence.',
    fullDescription: 'Imbued with the deep heritage burgundy that serves as our hallmark color, this statement carpet features saturated jewel tones complemented by subtle cream and burnt terracotta accents. Its dignified weight and depth of color provide an anchor for grand spaces, libraries, and boutique hotel lounges.',
    dimensions: null,
    availableSizes: [
      '250 x 350 cm (Approx. 8\'2" x 11\'6")',
      '300 x 400 cm (Approx. 9\'10" x 13\'1")',
      'Bespoke sizes to be confirmed'
    ],
    quality: 'Premium Statement Quality (To be confirmed)',
    materials: 'High-Density Wool (To be confirmed)',
    washingType: 'Professional carpet wash only',
    pileType: 'Dense plush pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Construction (Verification pending)',
    primaryColors: ['Deep Heritage Burgundy', 'Carpet Red', 'Warm Cream', 'Dark Charcoal'],
    pattern: 'Saturated Field with Heritage Geometric Border',
    intendedUse: 'Grand Living Rooms, Formal Reception Rooms, Private Studies',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Deep Burgundy Statement Carpet',
          sku: 'AC-PRM-004',
          role: 'front',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Rich Colors'
        }),
        alt: 'Deep Burgundy Statement Carpet — Full Front Image',
        caption: 'Full carpet showcasing dramatic saturation and authoritative border layout.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Deep Burgundy Statement Carpet',
          sku: 'AC-PRM-004',
          role: 'back',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Rich Colors'
        }),
        alt: 'Deep Burgundy Statement Carpet — Reverse Backing Structure',
        caption: 'Reverse side indicating sturdy foundation and balanced knotting tension.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Deep Burgundy Statement Carpet',
          sku: 'AC-PRM-004',
          role: 'near',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Rich Colors'
        }),
        alt: 'Deep Burgundy Statement Carpet — Near View of Saturated Wool Fibers',
        caption: 'Close-up revealing color saturation, light absorption, and pile density.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Deep Burgundy Statement Carpet',
          sku: 'AC-PRM-004',
          role: 'detail',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Rich Colors'
        }),
        alt: 'Deep Burgundy Statement Carpet — Detailed Motif and Border Inspection',
        caption: 'Detail of guard stripe ornament and corner geometric transitions.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Deep Burgundy Statement Carpet | Premium Pieces | AMINZADA CARPETS',
    seoDescription: 'Explore the Deep Burgundy Statement Carpet (AC-PRM-004). Rich jewel-toned centerpiece tailored for luxury spaces.',
    createdAt: '2026-01-22T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 05. Terracotta Heritage Rug
  {
    id: 'prod-terracotta-heritage',
    name: 'Terracotta Heritage Rug',
    slug: 'terracotta-heritage-rug',
    sku: 'AC-TRD-005',
    collectionId: 'col-trad-afg',
    collectionName: 'Traditional Afghan-Inspired Rugs',
    shortDescription: 'Warm earth-toned rug celebrating burnt terracotta hues and traditional tribal motifs.',
    fullDescription: 'Reflecting the natural earthen palettes of regional dye traditions, the Terracotta Heritage Rug combines warm clay tones with cream and deep burgundy highlights. The geometric field patterns invoke ancient decorative dialects while feeling thoroughly warm and inviting underfoot.',
    dimensions: null,
    availableSizes: [
      '160 x 230 cm (Approx. 5\'3" x 7\'6")',
      '200 x 290 cm (Approx. 6\'7" x 9\'6")',
      'Size options to be confirmed'
    ],
    quality: 'Traditional Heritage Grade (To be confirmed)',
    materials: 'Natural Wool (To be confirmed)',
    washingType: 'Professional rug cleaning',
    pileType: 'Medium wool pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Burnt Terracotta', 'Warm Cream', 'Deep Burgundy', 'Earthy Ochre'],
    pattern: 'Traditional Earthen Geometric Motifs',
    intendedUse: 'Dining Areas, Family Rooms, Entry Halls',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Terracotta Heritage Rug',
          sku: 'AC-TRD-005',
          role: 'front',
          primaryColors: ['#D53E0F', '#EED9B9'],
          patternStyle: 'Traditional / Warm Tones'
        }),
        alt: 'Terracotta Heritage Rug — Complete Front Perspective',
        caption: 'Full view highlighting the warm earthen terracotta field and balanced border.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Terracotta Heritage Rug',
          sku: 'AC-TRD-005',
          role: 'back',
          primaryColors: ['#D53E0F', '#EED9B9'],
          patternStyle: 'Traditional / Warm Tones'
        }),
        alt: 'Terracotta Heritage Rug — Reverse Weave and Base Grid',
        caption: 'Back surface showing natural warp threads and firm weft construction.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Terracotta Heritage Rug',
          sku: 'AC-TRD-005',
          role: 'near',
          primaryColors: ['#D53E0F', '#EED9B9'],
          patternStyle: 'Traditional / Warm Tones'
        }),
        alt: 'Terracotta Heritage Rug — Near Texture and Fiber Close-up',
        caption: 'Close-up of warm earthen fibers and tactile wool character.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Terracotta Heritage Rug',
          sku: 'AC-TRD-005',
          role: 'detail',
          primaryColors: ['#D53E0F', '#EED9B9'],
          patternStyle: 'Traditional / Warm Tones'
        }),
        alt: 'Terracotta Heritage Rug — Detail of Tribal Diamond Motifs',
        caption: 'Detail of stepped diamond symbols and terracotta border embellishments.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Terracotta Heritage Rug | Traditional Afghan-Inspired | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Terracotta Heritage Rug (AC-TRD-005). Earthy burnt terracotta tones and heritage geometric patterning.',
    createdAt: '2026-01-25T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 06. Ivory Minimalist Area Rug
  {
    id: 'prod-ivory-minimalist',
    name: 'Ivory Minimalist Area Rug',
    slug: 'ivory-minimalist-area-rug',
    sku: 'AC-CNT-006',
    collectionId: 'col-contemp',
    collectionName: 'Contemporary Rugs',
    shortDescription: 'Quiet, luminous ivory rug with subtle textural relief and minimal geometric line work.',
    fullDescription: 'Conceived for modern spaces that prize calm and light, the Ivory Minimalist Area Rug brings understated luxury through fiber texture rather than busy ornament. A faint, tone-on-tone linear motif hints at traditional geometry while maintaining a serene, contemporary aesthetic.',
    dimensions: null,
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '250 x 350 cm (Approx. 8\'2" x 11\'6")',
      'Sizes to be confirmed'
    ],
    quality: 'Contemporary Premium Grade (To be confirmed)',
    materials: 'Wool or Wool-Silk Blend (To be confirmed)',
    washingType: 'Professional specialized cleaning recommended',
    pileType: 'Low-sheen textured pile',
    countryOfOrigin: null,
    constructionMethod: 'Hand-Tufted or Flat/Loom Weave (To be confirmed)',
    primaryColors: ['Ivory Canvas', 'Warm Heritage Cream', 'Muted Stone'],
    pattern: 'Subtle Minimalist Linear Relief',
    intendedUse: 'Contemporary Living Rooms, Modern Bedrooms, Minimalist Galleries',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Ivory Minimalist Area Rug',
          sku: 'AC-CNT-006',
          role: 'front',
          primaryColors: ['#FAF8F3', '#EED9B9'],
          patternStyle: 'Contemporary / Minimalist'
        }),
        alt: 'Ivory Minimalist Area Rug — Full Overview',
        caption: 'Complete view displaying the light-reflective ivory field and subtle linear texture.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Ivory Minimalist Area Rug',
          sku: 'AC-CNT-006',
          role: 'back',
          primaryColors: ['#FAF8F3', '#EED9B9'],
          patternStyle: 'Contemporary / Minimalist'
        }),
        alt: 'Ivory Minimalist Area Rug — Reverse Surface and Backing',
        caption: 'Inspection of backing structure and edge binding.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Ivory Minimalist Area Rug',
          sku: 'AC-CNT-006',
          role: 'near',
          primaryColors: ['#FAF8F3', '#EED9B9'],
          patternStyle: 'Contemporary / Minimalist'
        }),
        alt: 'Ivory Minimalist Area Rug — Pile Softness and Fiber Sheen Close-up',
        caption: 'Macro view showing light bounce on un-dyed natural wool fibers.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Ivory Minimalist Area Rug',
          sku: 'AC-CNT-006',
          role: 'detail',
          primaryColors: ['#FAF8F3', '#EED9B9'],
          patternStyle: 'Contemporary / Minimalist'
        }),
        alt: 'Ivory Minimalist Area Rug — Detail of Subtle Linear Relief',
        caption: 'Detail of subtle height variations in the textured field.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Ivory Minimalist Area Rug | Contemporary Rugs | AMINZADA CARPETS',
    seoDescription: 'Discover the Ivory Minimalist Area Rug (AC-CNT-006). Luminous neutral palette and understated texture for refined interiors.',
    createdAt: '2026-01-28T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 07. Charcoal Geometric Carpet
  {
    id: 'prod-charcoal-geometric',
    name: 'Charcoal Geometric Carpet',
    slug: 'charcoal-geometric-carpet',
    sku: 'AC-GEO-007',
    collectionId: 'col-geo-pat',
    collectionName: 'Geometric Pattern Carpets',
    shortDescription: 'High-contrast graphic carpet with bold charcoal fields and ivory diamond lattice.',
    fullDescription: 'Providing a confident architectural statement, the Charcoal Geometric Carpet reinterprets tribal rhomboids and stepped lattice motifs through a striking monochrome lens. Charcoal and dark slate hues are paired with sharp cream linear boundaries to produce a dramatic visual anchor.',
    dimensions: null,
    availableSizes: [
      '180 x 280 cm (Approx. 5\'11" x 9\'2")',
      '240 x 300 cm (Approx. 7\'10" x 9\'10")',
      'Custom dimensions to be confirmed'
    ],
    quality: 'Contemporary Architectural Grade (To be confirmed)',
    materials: 'Dense Wool (To be confirmed)',
    washingType: 'Professional carpet cleaning',
    pileType: 'Dense medium pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Construction (Verification pending)',
    primaryColors: ['Dark Charcoal', 'Muted Stone', 'Warm Cream', 'Subtle Burgundy Accent'],
    pattern: 'Graphic Diamond Lattice & Intersecting Triangles',
    intendedUse: 'Modern Lofts, Open-Plan Living Rooms, Commercial Boardrooms',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Charcoal Geometric Carpet',
          sku: 'AC-GEO-007',
          role: 'front',
          primaryColors: ['#252321', '#FAF8F3'],
          patternStyle: 'Contemporary / Geometric'
        }),
        alt: 'Charcoal Geometric Carpet — Front View',
        caption: 'Full carpet showcasing bold charcoal grounding and crisp geometric lattice.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Charcoal Geometric Carpet',
          sku: 'AC-GEO-007',
          role: 'back',
          primaryColors: ['#252321', '#FAF8F3'],
          patternStyle: 'Contemporary / Geometric'
        }),
        alt: 'Charcoal Geometric Carpet — Reverse Foundation Grid',
        caption: 'Reverse side demonstrating warp tension and back finish.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Charcoal Geometric Carpet',
          sku: 'AC-GEO-007',
          role: 'near',
          primaryColors: ['#252321', '#FAF8F3'],
          patternStyle: 'Contemporary / Geometric'
        }),
        alt: 'Charcoal Geometric Carpet — Fiber and Surface Close-up',
        caption: 'Macro focus on deep charcoal yarn depth and matte wool texture.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Charcoal Geometric Carpet',
          sku: 'AC-GEO-007',
          role: 'detail',
          primaryColors: ['#252321', '#FAF8F3'],
          patternStyle: 'Contemporary / Geometric'
        }),
        alt: 'Charcoal Geometric Carpet — Detail of Stepped Diamond Grid',
        caption: 'Close-up of precise color transitions along the geometric diamond grid.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Charcoal Geometric Carpet | Geometric Pattern Carpets | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Charcoal Geometric Carpet (AC-GEO-007). Strong graphic contrast and structural diamond lattice for modern spaces.',
    createdAt: '2026-02-01T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 08. Traditional Border Pattern Rug
  {
    id: 'prod-traditional-border',
    name: 'Traditional Border Pattern Rug',
    slug: 'traditional-border-pattern-rug',
    sku: 'AC-BDR-008',
    collectionId: 'col-trad-afg',
    collectionName: 'Traditional Afghan-Inspired Rugs',
    shortDescription: 'Classic rug distinguished by a wide, elaborately patterned perimeter enclosing an open field.',
    fullDescription: 'The Traditional Border Pattern Rug places emphasis on an intricate multi-band border system, featuring alternating stylized rosettes, running vines, and dog-tooth guard lines. The open, quiet central field provides breathing room, allowing interior furniture to rest comfortably while framed by masterfully rendered perimeter motifs.',
    dimensions: null,
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '240 x 340 cm (Approx. 7\'10" x 11\'2")',
      'Size options to be verified'
    ],
    quality: 'Traditional Workshop Standard (To be confirmed)',
    materials: 'Wool on Cotton Foundation (To be confirmed)',
    washingType: 'Professional rug cleaning',
    pileType: 'Evenly sheared medium pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Heritage Burgundy', 'Cream', 'Terracotta', 'Muted Blue/Charcoal'],
    pattern: 'Multi-Band Guard Border Framing Open Field',
    intendedUse: 'Dining Rooms, Living Rooms, Under-Bed Enclosures',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Traditional Border Pattern Rug',
          sku: 'AC-BDR-008',
          role: 'front',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Border'
        }),
        alt: 'Traditional Border Pattern Rug — Front Overview',
        caption: 'Full front perspective illustrating the expansive border framing the interior field.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Traditional Border Pattern Rug',
          sku: 'AC-BDR-008',
          role: 'back',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Border'
        }),
        alt: 'Traditional Border Pattern Rug — Reverse Weave and Border Backing',
        caption: 'Reverse side demonstrating corner alignment and selvage finish.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Traditional Border Pattern Rug',
          sku: 'AC-BDR-008',
          role: 'near',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Border'
        }),
        alt: 'Traditional Border Pattern Rug — Near View of Pile and Yarn',
        caption: 'Close-up of yarn twist, density, and natural fiber character.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Traditional Border Pattern Rug',
          sku: 'AC-BDR-008',
          role: 'detail',
          primaryColors: ['#5E0006', '#EED9B9'],
          patternStyle: 'Traditional / Border'
        }),
        alt: 'Traditional Border Pattern Rug — Detail of Multi-Tiered Border Band',
        caption: 'Detailed inspection of recurring guard rosette motifs and fine border lines.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Traditional Border Pattern Rug | Afghan-Inspired Rugs | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Traditional Border Pattern Rug (AC-BDR-008). Elaborate perimeter framing and open field composition.',
    createdAt: '2026-02-05T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 09. Vintage-Inspired Decorative Rug
  {
    id: 'prod-vintage-inspired-decorative',
    name: 'Vintage-Inspired Decorative Rug',
    slug: 'vintage-inspired-decorative-rug',
    sku: 'AC-VIN-009',
    collectionId: 'col-ori-her',
    collectionName: 'Oriental & Heritage Designs',
    shortDescription: 'Distressed vintage character with softened antique tones and heirloom patina.',
    fullDescription: 'Evoking the romantic charm of a storied heirloom, the Vintage-Inspired Decorative Rug features subtly softened tones that mimic decades of graceful aging. Muted burgundy, soft terracotta, and gentle ivory blend seamlessly to offer an established, collected atmosphere.',
    dimensions: null,
    availableSizes: [
      '170 x 240 cm (Approx. 5\'7" x 7\'10")',
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      'Sizes to be confirmed'
    ],
    quality: 'Vintage Wash / Distressed Heirloom Finish (To be confirmed)',
    materials: 'Wool or Wool Blend (To be confirmed)',
    washingType: 'Specialist low-moisture cleaning only',
    pileType: 'Low antique-profile sheared pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Muted Burgundy', 'Soft Terracotta', 'Antique Cream', 'Washed Stone'],
    pattern: 'Faded Heirloom Arabesque & Distressed Medallion',
    intendedUse: 'Eclectic Living Rooms, Boutique Bedrooms, Editorial Studios',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Vintage-Inspired Decorative Rug',
          sku: 'AC-VIN-009',
          role: 'front',
          primaryColors: ['#77716B', '#EED9B9'],
          patternStyle: 'Heritage / Vintage-Inspired'
        }),
        alt: 'Vintage-Inspired Decorative Rug — Complete Front View',
        caption: 'Full overview displaying softened antique tonal gradation and distressed elegance.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Vintage-Inspired Decorative Rug',
          sku: 'AC-VIN-009',
          role: 'back',
          primaryColors: ['#77716B', '#EED9B9'],
          patternStyle: 'Heritage / Vintage-Inspired'
        }),
        alt: 'Vintage-Inspired Decorative Rug — Back Inspection and Foundation Grid',
        caption: 'Reverse side demonstrating foundation integrity beneath the vintage wash.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Vintage-Inspired Decorative Rug',
          sku: 'AC-VIN-009',
          role: 'near',
          primaryColors: ['#77716B', '#EED9B9'],
          patternStyle: 'Heritage / Vintage-Inspired'
        }),
        alt: 'Vintage-Inspired Decorative Rug — Near Texture View of Abrash and Fibers',
        caption: 'Close-up of subtle abrash color variations and low-profile sheared pile.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Vintage-Inspired Decorative Rug',
          sku: 'AC-VIN-009',
          role: 'detail',
          primaryColors: ['#77716B', '#EED9B9'],
          patternStyle: 'Heritage / Vintage-Inspired'
        }),
        alt: 'Vintage-Inspired Decorative Rug — Detail of Distressed Motif and Border',
        caption: 'Detailed view of heirloom pattern wear and antique guard stripe fading.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Vintage-Inspired Decorative Rug | Heritage Designs | AMINZADA CARPETS',
    seoDescription: 'Inquire about the Vintage-Inspired Decorative Rug (AC-VIN-009). Softened antique tones and heirloom character.',
    createdAt: '2026-02-10T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 10. Symmetrical Star Motif Rug
  {
    id: 'prod-symmetrical-star-motif',
    name: 'Symmetrical Star Motif Rug',
    slug: 'symmetrical-star-motif-rug',
    sku: 'AC-STR-010',
    collectionId: 'col-geo-pat',
    collectionName: 'Geometric Pattern Carpets',
    shortDescription: 'Striking multi-pointed stars aligned in strict geometric symmetry across the field.',
    fullDescription: 'Centered around eight-pointed stars and intersecting diamond polygons, this carpet reflects the ancient mathematical symmetry found across regional architecture and textiles. The crisp boundaries between rich carpet red, warm cream, and charcoal deliver hypnotic harmony.',
    dimensions: null,
    availableSizes: [
      '180 x 270 cm (Approx. 6\'0" x 8\'10")',
      '220 x 310 cm (Approx. 7\'3" x 10\'2")',
      'Sizes to be confirmed'
    ],
    quality: 'Traditional Geometric Weave (To be confirmed)',
    materials: 'Durable Highland Wool (To be confirmed)',
    washingType: 'Professional carpet wash only',
    pileType: 'Medium resilient wool pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Rich Carpet Red', 'Warm Cream', 'Burnt Terracotta', 'Charcoal'],
    pattern: 'Symmetrical 8-Pointed Stars & Concentric Polygons',
    intendedUse: 'Living Rooms, Entrances, Executive Studies',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Symmetrical Star Motif Rug',
          sku: 'AC-STR-010',
          role: 'front',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Geometric / Star Motif'
        }),
        alt: 'Symmetrical Star Motif Rug — Front Perspective',
        caption: 'Full carpet composition showing eight-pointed stars aligned across the field.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Symmetrical Star Motif Rug',
          sku: 'AC-STR-010',
          role: 'back',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Geometric / Star Motif'
        }),
        alt: 'Symmetrical Star Motif Rug — Reverse Knot Structure',
        caption: 'Underneath inspection highlighting clean knot rows and geometric precision.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Symmetrical Star Motif Rug',
          sku: 'AC-STR-010',
          role: 'near',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Geometric / Star Motif'
        }),
        alt: 'Symmetrical Star Motif Rug — Near View of Wool Pile Texture',
        caption: 'Close-up of resilient wool pile and vibrant dye clarity.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Symmetrical Star Motif Rug',
          sku: 'AC-STR-010',
          role: 'detail',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Geometric / Star Motif'
        }),
        alt: 'Symmetrical Star Motif Rug — Detail of Eight-Pointed Star',
        caption: 'Detail of stepped star points and contrasting inner polygon bands.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Symmetrical Star Motif Rug | Geometric Carpets | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Symmetrical Star Motif Rug (AC-STR-010). Eight-pointed stars and balanced geometric symmetry.',
    createdAt: '2026-02-14T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 11. Botanical Floral Area Rug
  {
    id: 'prod-botanical-floral',
    name: 'Botanical Floral Area Rug',
    slug: 'botanical-floral-area-rug',
    sku: 'AC-FLR-011',
    collectionId: 'col-flr-med',
    collectionName: 'Floral & Medallion Rugs',
    shortDescription: 'Lush botanical garden motifs rendered with delicate curvilinear vines and floral blooms.',
    fullDescription: 'Celebrating the timeless motif of the garden paradise, this carpet is enriched with blossomed lotus, carnations, and spiraling acanthus vines. A gentle background tone lets each botanical element shine with natural grace, making it an uplifting focal point for living rooms.',
    dimensions: null,
    availableSizes: [
      '190 x 290 cm (Approx. 6\'3" x 9\'6")',
      '240 x 330 cm (Approx. 7\'10" x 10\'10")',
      'Dimensions to be confirmed'
    ],
    quality: 'Fine Botanical Workshop Standard (To be confirmed)',
    materials: 'Fine Wool (To be confirmed)',
    washingType: 'Professional rug cleaning',
    pileType: 'Silky smooth cut pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Ivory Cream', 'Burnt Terracotta', 'Heritage Burgundy', 'Muted Gold/Olive'],
    pattern: 'Intricate Botanical Garden & Curvilinear Tendrils',
    intendedUse: 'Sitting Rooms, Elegant Dining Spaces, Master Suites',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Botanical Floral Area Rug',
          sku: 'AC-FLR-011',
          role: 'front',
          primaryColors: ['#FAF8F3', '#D53E0F'],
          patternStyle: 'Floral / Botanical'
        }),
        alt: 'Botanical Floral Area Rug — Front Overview',
        caption: 'Full carpet showcasing delicate curvilinear botanical vines across the field.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Botanical Floral Area Rug',
          sku: 'AC-FLR-011',
          role: 'back',
          primaryColors: ['#FAF8F3', '#D53E0F'],
          patternStyle: 'Floral / Botanical'
        }),
        alt: 'Botanical Floral Area Rug — Reverse Weave Detail',
        caption: 'Back surface demonstrating fine knotting required for curvilinear floral forms.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Botanical Floral Area Rug',
          sku: 'AC-FLR-011',
          role: 'near',
          primaryColors: ['#FAF8F3', '#D53E0F'],
          patternStyle: 'Floral / Botanical'
        }),
        alt: 'Botanical Floral Area Rug — Near Pile Softness View',
        caption: 'Close-up on fiber softness and subtle color gradations within petals.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Botanical Floral Area Rug',
          sku: 'AC-FLR-011',
          role: 'detail',
          primaryColors: ['#FAF8F3', '#D53E0F'],
          patternStyle: 'Floral / Botanical'
        }),
        alt: 'Botanical Floral Area Rug — Detail of Blossom and Border Motifs',
        caption: 'Magnified inspection of hand-rendered floral petals and guard ribbons.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Botanical Floral Area Rug | Floral & Medallion | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Botanical Floral Area Rug (AC-FLR-011). Intricate garden motifs, ivory cream base, and terracotta accents.',
    createdAt: '2026-02-18T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 12. Red and Cream Medallion Carpet
  {
    id: 'prod-red-cream-medallion',
    name: 'Red and Cream Medallion Carpet',
    slug: 'red-and-cream-medallion-carpet',
    sku: 'AC-RCM-012',
    collectionId: 'col-flr-med',
    collectionName: 'Floral & Medallion Rugs',
    shortDescription: 'High-contrast traditional centerpiece pairing intense carpet red with radiant cream accents.',
    fullDescription: 'The Red and Cream Medallion Carpet represents the classic duality of Afghan and regional carpet art. An authoritative red field hosts an ivory-cream lobed medallion with delicate floral appendages, framed by multiple guard stripes that balance bold color with fine ornament.',
    dimensions: null,
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '250 x 350 cm (Approx. 8\'2" x 11\'6")',
      'Sizes to be confirmed'
    ],
    quality: 'Traditional Medallion Standard (To be confirmed)',
    materials: 'Wool on Cotton (To be confirmed)',
    washingType: 'Professional rug cleaning',
    pileType: 'Dense resilient cut pile',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Carpet Red', 'Ivory Cream', 'Deep Burgundy', 'Charcoal'],
    pattern: 'Lobed Central Medallion & Contrast Border Bands',
    intendedUse: 'Grand Living Rooms, Dining Rooms, Entrance Foyers',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Red and Cream Medallion Carpet',
          sku: 'AC-RCM-012',
          role: 'front',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Red and Cream Medallion Carpet — Front View',
        caption: 'Full overview highlighting the high-contrast ivory medallion on rich red field.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Red and Cream Medallion Carpet',
          sku: 'AC-RCM-012',
          role: 'back',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Red and Cream Medallion Carpet — Reverse Weft and Knots',
        caption: 'Reverse side revealing structural knot tension and border alignments.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Red and Cream Medallion Carpet',
          sku: 'AC-RCM-012',
          role: 'near',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Red and Cream Medallion Carpet — Near Pile Texture View',
        caption: 'Close-up of rich madder dye depth and clean ivory wool boundary.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Red and Cream Medallion Carpet',
          sku: 'AC-RCM-012',
          role: 'detail',
          primaryColors: ['#9B0F06', '#EED9B9'],
          patternStyle: 'Traditional / Medallion'
        }),
        alt: 'Red and Cream Medallion Carpet — Detail of Central Pendant and Medallion',
        caption: 'Detailed inspection of intricate floral scrolls radiating from the medallion.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Red and Cream Medallion Carpet | Medallion Rugs | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Red and Cream Medallion Carpet (AC-RCM-012). Dramatic ivory medallion on vibrant red field.',
    createdAt: '2026-02-22T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 13. Neutral Contemporary Textured Rug
  {
    id: 'prod-neutral-contemporary-textured',
    name: 'Neutral Contemporary Textured Rug',
    slug: 'neutral-contemporary-textured-rug',
    sku: 'AC-NTX-013',
    collectionId: 'col-contemp',
    collectionName: 'Contemporary Rugs',
    shortDescription: 'Tactile, understated textured rug crafted in natural stone, beige, and warm cream tones.',
    fullDescription: 'Designed for modern lifestyles that appreciate organic simplicity, this textured piece uses variations in yarn twist, loop and cut pile, and subtle natural wool shades to create visual interest without pattern dominance. It provides an acoustic and physical cushion of comfort.',
    dimensions: null,
    availableSizes: [
      '200 x 300 cm (Approx. 6\'7" x 9\'10")',
      '240 x 340 cm (Approx. 7\'10" x 11\'2")',
      'Custom dimensions to be confirmed'
    ],
    quality: 'Contemporary Textured Grade (To be confirmed)',
    materials: 'Pure Natural Un-dyed Wool (To be confirmed)',
    washingType: 'Professional low-moisture carpet cleaning',
    pileType: 'High-low textured rib / loop pile',
    countryOfOrigin: null,
    constructionMethod: 'Hand-Loom or Tufted Construction (To be confirmed)',
    primaryColors: ['Muted Stone', 'Warm Heritage Cream', 'Ivory Canvas'],
    pattern: 'Organic Ribbed Texture & Minimalist Grid',
    intendedUse: 'Bedrooms, Living Rooms, Private Retreats',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Neutral Contemporary Textured Rug',
          sku: 'AC-NTX-013',
          role: 'front',
          primaryColors: ['#77716B', '#FAF8F3'],
          patternStyle: 'Contemporary / Neutral'
        }),
        alt: 'Neutral Contemporary Textured Rug — Front View',
        caption: 'Full overview presenting the calm organic texture and soft stone color balance.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Neutral Contemporary Textured Rug',
          sku: 'AC-NTX-013',
          role: 'back',
          primaryColors: ['#77716B', '#FAF8F3'],
          patternStyle: 'Contemporary / Neutral'
        }),
        alt: 'Neutral Contemporary Textured Rug — Reverse Backing Structure',
        caption: 'Reverse side showing durable backing and edge binding finish.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Neutral Contemporary Textured Rug',
          sku: 'AC-NTX-013',
          role: 'near',
          primaryColors: ['#77716B', '#FAF8F3'],
          patternStyle: 'Contemporary / Neutral'
        }),
        alt: 'Neutral Contemporary Textured Rug — Near Pile Texture View',
        caption: 'Close-up of the tactile looped wool ribs and un-dyed natural fiber variety.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Neutral Contemporary Textured Rug',
          sku: 'AC-NTX-013',
          role: 'detail',
          primaryColors: ['#77716B', '#FAF8F3'],
          patternStyle: 'Contemporary / Neutral'
        }),
        alt: 'Neutral Contemporary Textured Rug — Detail of Ribbed Edges',
        caption: 'Detailed view of the perimeter binding and subtle relief texture.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Neutral Contemporary Textured Rug | Contemporary | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Neutral Contemporary Textured Rug (AC-NTX-013). Tactile un-dyed wool texture and organic simplicity.',
    createdAt: '2026-02-26T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 14. Large Living Room Statement Carpet
  {
    id: 'prod-large-living-room-statement',
    name: 'Large Living Room Statement Carpet',
    slug: 'large-living-room-statement-carpet',
    sku: 'AC-LRG-014',
    collectionId: 'col-prem-stmt',
    collectionName: 'Premium Statement Pieces',
    shortDescription: 'Grand format carpet designed to encompass expansive seating arrangements with heritage distinction.',
    fullDescription: 'Crafted for stately residences, grand salons, and penthouse reception halls, this large-format carpet provides a cohesive foundation for large spaces. Its composition balances monumental scale with intricate interior detail, uniting generous seating arrangements into an intimate, luxurious gathering place.',
    dimensions: null,
    availableSizes: [
      '300 x 400 cm (Approx. 9\'10" x 13\'1")',
      '350 x 500 cm (Approx. 11\'6" x 16\'5")',
      'Palatial formats to be confirmed with our team'
    ],
    quality: 'Grand Estate Grade (To be confirmed)',
    materials: 'Resilient High-Density Wool (To be confirmed)',
    washingType: 'Specialist on-site or professional cleaning only',
    pileType: 'Substantial medium-high pile',
    countryOfOrigin: null,
    constructionMethod: 'Master Loom Weave (Verification pending)',
    primaryColors: ['Deep Burgundy', 'Carpet Red', 'Terracotta', 'Cream'],
    pattern: 'Expansive Traditional Field with Grand Guard Borders',
    intendedUse: 'Grand Living Rooms, Great Halls, Hospitality Suites',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Large Living Room Statement Carpet',
          sku: 'AC-LRG-014',
          role: 'front',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Large Format'
        }),
        alt: 'Large Living Room Statement Carpet — Front Perspective',
        caption: 'Full overview displaying grand scale and architectural border balance.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Large Living Room Statement Carpet',
          sku: 'AC-LRG-014',
          role: 'back',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Large Format'
        }),
        alt: 'Large Living Room Statement Carpet — Reverse Foundation Structure',
        caption: 'Underneath view showing heavy warp tension required for large format pieces.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Large Living Room Statement Carpet',
          sku: 'AC-LRG-014',
          role: 'near',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Large Format'
        }),
        alt: 'Large Living Room Statement Carpet — Near Wool Pile View',
        caption: 'Close-up on dense wool pile construction capable of enduring high foot traffic.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Large Living Room Statement Carpet',
          sku: 'AC-LRG-014',
          role: 'detail',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Premium / Large Format'
        }),
        alt: 'Large Living Room Statement Carpet — Detail of Grand Corner Border',
        caption: 'Detailed view of the masterfully articulated corner resolution and guard stripes.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Large Living Room Statement Carpet | Statement Pieces | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Large Living Room Statement Carpet (AC-LRG-014). Grand formats tailored for prestigious luxury residences.',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  },

  // 15. Elegant Hallway Runner Rug
  {
    id: 'prod-hallway-runner',
    name: 'Elegant Hallway Runner Rug',
    slug: 'elegant-hallway-runner-rug',
    sku: 'AC-RUN-015',
    collectionId: 'col-trad-afg',
    collectionName: 'Traditional Afghan-Inspired Rugs',
    shortDescription: 'Long, narrow corridor runner featuring a continuous chain of geometric medallions.',
    fullDescription: 'Tailored specifically for transitional passageways, galleries, and grand entrances, the Elegant Hallway Runner Rug guides the eye forward through a continuous axial progression of geometric diamond stars and border guards. Its durable construction handles everyday footfall while adding prestige to corridors.',
    dimensions: null,
    availableSizes: [
      '80 x 300 cm (Approx. 2\'8" x 9\'10")',
      '80 x 400 cm (Approx. 2\'8" x 13\'1")',
      'Custom runner lengths upon inquiry'
    ],
    quality: 'High-Durability Corridor Weave (To be confirmed)',
    materials: 'Dense Wool on Heavy Foundation (To be confirmed)',
    washingType: 'Professional rug cleaning',
    pileType: 'Dense short-to-medium pile for ease of passage',
    countryOfOrigin: null,
    constructionMethod: 'Traditional Loom Weave (Verification pending)',
    primaryColors: ['Deep Burgundy', 'Carpet Red', 'Warm Cream', 'Terracotta'],
    pattern: 'Axial Chain of Geometric Medallions & Border Guards',
    intendedUse: 'Corridors, Long Hallways, Grand Staircase Landings',
    availabilityStatus: 'upon_inquiry',
    price: null,
    showPrice: false,
    images: [
      {
        role: 'front',
        url: generateCarpetSlotSvg({
          productName: 'Elegant Hallway Runner Rug',
          sku: 'AC-RUN-015',
          role: 'front',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Runner / Narrow Format'
        }),
        alt: 'Elegant Hallway Runner Rug — Front Linear Overview',
        caption: 'Full linear view illustrating the repeating axial medallion chain along the runner.',
        sortOrder: 1
      },
      {
        role: 'back',
        url: generateCarpetSlotSvg({
          productName: 'Elegant Hallway Runner Rug',
          sku: 'AC-RUN-015',
          role: 'back',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Runner / Narrow Format'
        }),
        alt: 'Elegant Hallway Runner Rug — Reverse Backing and Selvage',
        caption: 'Reverse side showing reinforced selvages designed for high corridor traffic.',
        sortOrder: 2
      },
      {
        role: 'near',
        url: generateCarpetSlotSvg({
          productName: 'Elegant Hallway Runner Rug',
          sku: 'AC-RUN-015',
          role: 'near',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Runner / Narrow Format'
        }),
        alt: 'Elegant Hallway Runner Rug — Near View of Resilient Pile',
        caption: 'Close-up of tightly packed resilient wool knots designed for longevity.',
        sortOrder: 3
      },
      {
        role: 'detail',
        url: generateCarpetSlotSvg({
          productName: 'Elegant Hallway Runner Rug',
          sku: 'AC-RUN-015',
          role: 'detail',
          primaryColors: ['#5E0006', '#9B0F06'],
          patternStyle: 'Runner / Narrow Format'
        }),
        alt: 'Elegant Hallway Runner Rug — Detail of Axial Star Medallion',
        caption: 'Detail of individual medallion center and repeating side guard motifs.',
        sortOrder: 4
      }
    ],
    seoTitle: 'Elegant Hallway Runner Rug | Traditional Rugs | AMINZADA CARPETS',
    seoDescription: 'Inquire on the Elegant Hallway Runner Rug (AC-RUN-015). Elongated axial medallions for corridors and grand galleries.',
    createdAt: '2026-03-05T08:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z',
    published: true
  }
];
