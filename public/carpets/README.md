# AMINZADA CARPETS — Product Photography Guide

Place your high-resolution product photography files into this folder (`/public/carpets/`).
Any file stored here is immediately accessible in the browser via `/carpets/<filename>`.

## Recommended File Naming Convention

For each of the 15 products, name your four images according to the SKU and view role:

```
/public/carpets/
  ├── AC-MED-001-front.jpg
  ├── AC-MED-001-back.jpg
  ├── AC-MED-001-near.jpg
  ├── AC-MED-001-detail.jpg
  ├── AC-GEO-002-front.jpg
  ├── AC-GEO-002-back.jpg
  ├── AC-GEO-002-near.jpg
  ├── AC-GEO-002-detail.jpg
  └── ...
```

## How to Link Them in Code

Open `/src/data/products.ts` and update the `url` property for that product's image slot:

```typescript
// Example for AC-MED-001 (Heritage Medallion Rug):
images: [
  {
    role: 'front',
    url: '/carpets/AC-MED-001-front.jpg', // <-- Replace with your file path
    alt: 'Heritage Medallion Rug — Full Front Perspective',
    caption: 'Full front perspective illustrating central medallion symmetry and guard stripes.',
    sortOrder: 1
  },
  {
    role: 'back',
    url: '/carpets/AC-MED-001-back.jpg',
    alt: 'Heritage Medallion Rug — Reverse Weave and Foundation Inspection',
    caption: 'Reverse side revealing foundation warp, weft, and knotting structure.',
    sortOrder: 2
  },
  {
    role: 'near',
    url: '/carpets/AC-MED-001-near.jpg',
    alt: 'Heritage Medallion Rug — Wool Pile Texture and Fiber Twist',
    caption: 'Tactile close-up highlighting yarn density, luster, and pile thickness.',
    sortOrder: 3
  },
  {
    role: 'detail',
    url: '/carpets/AC-MED-001-detail.jpg',
    alt: 'Heritage Medallion Rug — Detailed View of Corner Spandrel and Border Guard',
    caption: 'Detailed craftsmanship inspection of the intricate multi-tiered border motifs.',
    sortOrder: 4
  }
]
```

## Supported Formats & Recommended Specs
- **Formats:** JPG, PNG, WebP
- **Aspect Ratio:** 4:3 (e.g. 1600 × 1200 px or 2000 × 1500 px)
- **Front view:** Clean, evenly lit overhead or floor view on a neutral or white background.
- **Back view:** Clear macro photograph of the reverse foundation and knots.
- **Near view:** Close-up showing pile height, yarn twist, and wool texture.
- **Detail view:** Close-up of corner resolution, border guard stripes, or central medallion pendant.
