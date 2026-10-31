import test from 'node:test';
import assert from 'node:assert/strict';
import { catalogService } from './catalogService';
import { buildProductWhatsAppUrl, buildGeneralWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';

test('catalog contains exactly 15 products', () => {
  const products = catalogService.getAllProducts();
  assert.equal(products.length, 15, 'Should have exactly 15 products');
});

test('every product has unique slug and unique SKU', () => {
  const products = catalogService.getAllProducts();
  const slugs = new Set(products.map(p => p.slug));
  const skus = new Set(products.map(p => p.sku));

  assert.equal(slugs.size, 15, 'All slugs must be unique');
  assert.equal(skus.size, 15, 'All SKUs must be unique');
});

test('the 15 required slugs are present verbatim', () => {
  const requiredSlugs = [
    'heritage-medallion-rug',
    'afghan-geometric-pattern-rug',
    'classic-floral-oriental-rug',
    'deep-burgundy-statement-carpet',
    'terracotta-heritage-rug',
    'ivory-minimalist-area-rug',
    'charcoal-geometric-carpet',
    'traditional-border-pattern-rug',
    'vintage-inspired-decorative-rug',
    'symmetrical-star-motif-rug',
    'botanical-floral-area-rug',
    'red-and-cream-medallion-carpet',
    'neutral-contemporary-textured-rug',
    'large-living-room-statement-carpet',
    'elegant-hallway-runner-rug'
  ];

  for (const slug of requiredSlugs) {
    const product = catalogService.getProductBySlug(slug);
    assert.ok(product, `Product with slug "${slug}" must exist and be published`);
    assert.equal(product?.slug, slug);
  }
});

test('every product contains exactly 4 independent image slots with correct roles', () => {
  const products = catalogService.getAllProducts();
  let totalSlots = 0;
  const expectedRoles = ['front', 'back', 'near', 'detail'];

  for (const product of products) {
    assert.equal(product.images.length, 4, `Product ${product.slug} must have 4 images`);
    totalSlots += product.images.length;

    const roles = product.images.map(img => img.role);
    assert.deepEqual(roles, expectedRoles, `Product ${product.slug} must have front, back, near, detail in order`);

    // Verify all 4 images have distinct URLs
    const urls = new Set(product.images.map(img => img.url));
    assert.equal(urls.size, 4, `Product ${product.slug} must have 4 distinct image URLs/assets`);
  }

  assert.equal(totalSlots, 60, 'Total catalog must have exactly 60 independent image slots');
});

test('searchProducts filters by query, collection, and sorting', () => {
  // Query by name
  const medallionResults = catalogService.searchProducts({ query: 'Medallion' });
  assert.ok(medallionResults.length >= 2, 'Should find multiple medallion carpets');

  // Query by SKU
  const skuResult = catalogService.searchProducts({ query: 'AC-GEO-002' });
  assert.equal(skuResult.length, 1);
  assert.equal(skuResult[0].slug, 'afghan-geometric-pattern-rug');

  // Filter by collection
  const contemporary = catalogService.searchProducts({ collectionId: 'col-contemp' });
  assert.ok(contemporary.length >= 2, 'Contemporary collection should have products');
  contemporary.forEach(p => assert.equal(p.collectionId, 'col-contemp'));

  // Sort alphabetical ascending
  const sortedAsc = catalogService.searchProducts({ sortBy: 'name-asc' });
  for (let i = 0; i < sortedAsc.length - 1; i++) {
    assert.ok(sortedAsc[i].name.localeCompare(sortedAsc[i + 1].name) <= 0);
  }
});

test('WhatsApp URL builder generates valid, encoded URL with correct destination number', () => {
  const url = buildProductWhatsAppUrl({
    productName: 'Heritage Medallion Rug',
    sku: 'AC-MED-001',
    collectionName: 'Floral & Medallion Rugs',
    selectedSize: '200 x 300 cm',
    productUrl: 'https://aminzada.com/products/heritage-medallion-rug'
  });

  assert.ok(url.startsWith('https://wa.me/93781964444?text='), 'Must start with wa.me/93781964444?text=');
  assert.ok(!url.includes('+93781964444'), 'Must not have plus in phone path');
  assert.ok(url.includes(encodeURIComponent('Heritage Medallion Rug')));
  assert.ok(url.includes(encodeURIComponent('AC-MED-001')));
  assert.ok(url.includes(encodeURIComponent('200 x 300 cm')));
  assert.ok(url.includes(encodeURIComponent('Please share the confirmed specifications')));
});

test('WhatsApp URL builder handles undefined size gracefully with fallback', () => {
  const url = buildProductWhatsAppUrl({
    productName: 'Ivory Minimalist Area Rug',
    sku: 'AC-CNT-006',
    collectionName: 'Contemporary Rugs'
  });

  assert.ok(url.includes(encodeURIComponent('Requested Size: Size to be confirmed')));
});

test('general WhatsApp URL builder formats correctly', () => {
  const generalUrl = buildGeneralWhatsAppUrl('Wholesale Trade Inquiry', 'Need 10 carpets for hospitality project');
  assert.ok(generalUrl.startsWith(`https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=`));
  assert.ok(generalUrl.includes(encodeURIComponent('Wholesale Trade Inquiry')));
});
