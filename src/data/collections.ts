/**
 * AMINZADA CARPETS — Collections Dataset
 * 
 * 6 provisional merchandising categories as specified in Section 5.C:
 * - Traditional Afghan-Inspired Rugs
 * - Oriental & Heritage Designs
 * - Geometric Pattern Carpets
 * - Floral & Medallion Rugs
 * - Contemporary Rugs
 * - Premium Statement Pieces
 */

import { Collection } from '../types';

export const COLLECTIONS_DATA: Collection[] = [
  {
    id: 'col-trad-afg',
    slug: 'traditional-afghan-inspired-rugs',
    name: 'Traditional Afghan-Inspired Rugs',
    description: 'Rugs characterized by rich regional red tones, repeating octagons, elephant-foot (gul) motifs, and storied geometric balance.',
    coverImage: '/carpets/traditional-afghan-collection.webp',
    relatedProductIds: [
      'prod-afghan-geometric',
      'prod-terracotta-heritage',
      'prod-traditional-border',
      'prod-hallway-runner'
    ],
    seoTitle: 'Traditional Afghan-Inspired Rugs | AMINZADA CARPETS',
    seoDescription: 'Explore our curated collection of traditional Afghan-inspired carpets featuring geometric octagons, rich madder reds, and enduring heritage motifs.',
    published: true
  },
  {
    id: 'col-ori-her',
    slug: 'oriental-heritage-designs',
    name: 'Oriental & Heritage Designs',
    description: 'Timeless compositions drawing from classical regional workshops, featuring elegant arabesques, interlaced vines, and softened vintage patinas.',
    coverImage: '/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg',
    relatedProductIds: [
      'prod-classic-floral-oriental',
      'prod-vintage-inspired-decorative'
    ],
    seoTitle: 'Oriental & Heritage Designs | AMINZADA CARPETS',
    seoDescription: 'Classical oriental and vintage-inspired floor coverings composed with graceful botanical borders and heritage dye palettes.',
    published: true
  },
  {
    id: 'col-geo-pat',
    slug: 'geometric-pattern-carpets',
    name: 'Geometric Pattern Carpets',
    description: 'Structured carpets rooted in rhythmic diamond grids, multi-pointed stars, serrated leaf borders, and architectural symmetry.',
    coverImage: '/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg',
    relatedProductIds: [
      'prod-charcoal-geometric',
      'prod-symmetrical-star-motif'
    ],
    seoTitle: 'Geometric Pattern Carpets | AMINZADA CARPETS',
    seoDescription: 'Architectural rugs and geometric carpets delivering rhythmic structure and spatial harmony to contemporary and classic interiors.',
    published: true
  },
  {
    id: 'col-flr-med',
    slug: 'floral-medallion-rugs',
    name: 'Floral & Medallion Rugs',
    description: 'Statement centerpieces anchored by harmonious central medallions, radiating floral motifs, and multi-tiered guard borders.',
    coverImage: '/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg',
    relatedProductIds: [
      'prod-heritage-medallion',
      'prod-botanical-floral',
      'prod-red-cream-medallion'
    ],
    seoTitle: 'Floral & Medallion Rugs | AMINZADA CARPETS',
    seoDescription: 'Centrally anchored medallion carpets and floral borders designed to ground living spaces and formal dining rooms.',
    published: true
  },
  {
    id: 'col-contemp',
    slug: 'contemporary-rugs',
    name: 'Contemporary Rugs',
    description: 'Understated textural rugs combining heritage sensibilities with restrained color palettes, muted creams, and modern interior simplicity.',
    coverImage: '/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg',
    relatedProductIds: [
      'prod-ivory-minimalist',
      'prod-neutral-contemporary-textured'
    ],
    seoTitle: 'Contemporary Rugs | AMINZADA CARPETS',
    seoDescription: 'Modern, minimalist, and textured rugs offering tactile warmth and understated sophistication for contemporary living.',
    published: true
  },
  {
    id: 'col-prem-stmt',
    slug: 'premium-statement-pieces',
    name: 'Premium Statement Pieces',
    description: 'Substantial, large-format carpets and saturated jewel-toned masterworks curated for prestigious architectural environments and expansive residences.',
    coverImage: '/assets/aistudio/342899367_796800991873200_5588820064674164492_n_6b4106de.jpg',
    relatedProductIds: [
      'prod-deep-burgundy-statement',
      'prod-large-living-room-statement'
    ],
    seoTitle: 'Premium Statement Pieces | AMINZADA CARPETS',
    seoDescription: 'Commanding statement rugs, grand formats, and rich burgundy carpets designed to transform luxury spaces.',
    published: true
  }
];
