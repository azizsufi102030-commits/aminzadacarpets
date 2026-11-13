/**
 * AMINZADA CARPETS — Mobile & Desktop Owner Admin Portal
 * 
 * Secure, intuitive management dashboard allowing non-technical owners
 * to upload photos, edit descriptions, adjust sizes, manage collections,
 * and track customer inquiries directly from their phone, tablet, or laptop.
 */

import React, { useState, useEffect, useRef } from 'react';
import { catalogService } from '../services/catalogService';
import { Product, Collection, ProductImage, InquiryRecord } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { uploadCarpetImage } from '../services/firebase';
import {
  Lock,
  Plus,
  Edit,
  Trash2,
  Upload,
  CheckCircle2,
  AlertCircle,
  Eye,
  Camera,
  Layers,
  ShoppingBag,
  Inbox,
  RefreshCw,
  LogOut,
  ExternalLink,
  MessageCircle,
  Mail,
  Search,
  Filter,
  X,
  Sparkles
} from 'lucide-react';

const ADMIN_PASSCODE = 'aminzada2026';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('aminzada_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'collections' | 'inquiries' | 'sync'>('products');

  // Catalog State
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollectionFilter, setSelectedCollectionFilter] = useState('all');

  // Modals & Notifications
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCollection, setEditingCollection] = useState<Collection | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  // Subscribe to live catalog updates
  useEffect(() => {
    const unsubscribe = catalogService.subscribe(() => {
      loadData();
    });
    return () => unsubscribe();
  }, []);

  const loadData = () => {
    setProducts(catalogService.getAllProducts());
    setCollections(catalogService.getAllCollections());
    catalogService.getAllInquiries().then(setInquiries);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('aminzada_admin_auth', 'true');
      setAuthError('');
      showFeedback('Welcome to AMINZADA CARPETS Admin Portal', 'success');
    } else {
      setAuthError('Incorrect passcode. Please verify with the store administrator.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('aminzada_admin_auth');
  };

  const showFeedback = (text: string, type: 'success' | 'error') => {
    setFeedbackMessage({ text, type });
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 4000);
  };

  // Product Form State
  const [productForm, setProductForm] = useState<{
    name: string;
    sku: string;
    collectionId: string;
    shortDescription: string;
    fullDescription: string;
    pattern: string;
    primaryColors: string;
    availableSizes: string[];
    newSizeInput: string;
    quality: string;
    materials: string;
    pileType: string;
    washingType: string;
    countryOfOrigin: string;
    availabilityStatus: 'in_stock' | 'upon_inquiry' | 'made_to_order';
    images: {
      front: string;
      back: string;
      near: string;
      detail: string;
    };
  }>({
    name: '',
    sku: '',
    collectionId: '',
    shortDescription: '',
    fullDescription: '',
    pattern: 'Traditional Afghan Motif',
    primaryColors: 'Burgundy, Gold, Cream',
    availableSizes: ['6 x 9 ft (183 x 274 cm)', '8 x 10 ft (244 x 305 cm)', '9 x 12 ft (274 x 366 cm)'],
    newSizeInput: '',
    quality: 'Master Workshop Hand-Knotted',
    materials: '100% Hand-Spun Ghazni Wool on Cotton Foundation',
    pileType: 'Dense Hand-Sheared Low-Medium Pile',
    washingType: 'Traditional Herbal & Mineral Wash',
    countryOfOrigin: 'Afghanistan (Northern Traditional Weaving Regions)',
    availabilityStatus: 'in_stock',
    images: {
      front: '',
      back: '',
      near: '',
      detail: ''
    }
  });

  const [uploadingImageRole, setUploadingImageRole] = useState<string | null>(null);

  // Collection Form State
  const [collectionForm, setCollectionForm] = useState<{
    name: string;
    slug: string;
    description: string;
    coverImage: string;
  }>({
    name: '',
    slug: '',
    description: '',
    coverImage: ''
  });

  const openAddProductModal = () => {
    setEditingProduct(null);
    const defaultCol = collections[0]?.id || 'heritage-afghan';
    setProductForm({
      name: '',
      sku: `AC-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      collectionId: defaultCol,
      shortDescription: '',
      fullDescription: '',
      pattern: 'Traditional Afghan Medallion & Floral Weave',
      primaryColors: 'Rust Red, Natural Wool, Deep Navy',
      availableSizes: ['5 x 8 ft (152 x 244 cm)', '6 x 9 ft (183 x 274 cm)', '8 x 10 ft (244 x 305 cm)'],
      newSizeInput: '',
      quality: 'Hand-Knotted Heritage Wool',
      materials: 'Hand-Spun High-Altitude Wool on Cotton Warp',
      pileType: 'Refined Low-Medium Cut Pile',
      washingType: 'Herbal Wash & Sun Luster Finish',
      countryOfOrigin: 'Afghanistan',
      availabilityStatus: 'in_stock',
      images: {
        front: '',
        back: '',
        near: '',
        detail: ''
      }
    });
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (prod: Product) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name,
      sku: prod.sku,
      collectionId: prod.collectionId,
      shortDescription: prod.shortDescription,
      fullDescription: prod.fullDescription,
      pattern: prod.pattern,
      primaryColors: prod.primaryColors.join(', '),
      availableSizes: [...prod.availableSizes],
      newSizeInput: '',
      quality: prod.quality || '',
      materials: prod.materials || '',
      pileType: prod.pileType || '',
      washingType: prod.washingType || '',
      countryOfOrigin: prod.countryOfOrigin || '',
      availabilityStatus: prod.availabilityStatus || 'in_stock',
      images: {
        front: prod.images.find((i) => i.role === 'front')?.url || '',
        back: prod.images.find((i) => i.role === 'back')?.url || '',
        near: prod.images.find((i) => i.role === 'near')?.url || '',
        detail: prod.images.find((i) => i.role === 'detail')?.url || ''
      }
    });
    setIsProductModalOpen(true);
  };

  const handleImageFileUpload = async (role: 'front' | 'back' | 'near' | 'detail', file: File) => {
    setUploadingImageRole(role);
    try {
      const url = await uploadCarpetImage(file, 'carpets');
      setProductForm((prev) => ({
        ...prev,
        images: {
          ...prev.images,
          [role]: url
        }
      }));
      showFeedback(`${role.toUpperCase()} perspective uploaded successfully!`, 'success');
    } catch (err) {
      showFeedback('Failed to upload image. Please try again.', 'error');
    } finally {
      setUploadingImageRole(null);
    }
  };

  const handleAddSizePreset = (sizePreset: string) => {
    if (!productForm.availableSizes.includes(sizePreset)) {
      setProductForm((prev) => ({
        ...prev,
        availableSizes: [...prev.availableSizes, sizePreset]
      }));
    }
  };

  const handleAddCustomSize = () => {
    if (productForm.newSizeInput.trim() && !productForm.availableSizes.includes(productForm.newSizeInput.trim())) {
      setProductForm((prev) => ({
        ...prev,
        availableSizes: [...prev.availableSizes, prev.newSizeInput.trim()],
        newSizeInput: ''
      }));
    }
  };

  const handleRemoveSize = (sizeToRemove: string) => {
    setProductForm((prev) => ({
      ...prev,
      availableSizes: prev.availableSizes.filter((s) => s !== sizeToRemove)
    }));
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name.trim()) {
      showFeedback('Carpet name is required', 'error');
      return;
    }

    setIsSaving(true);
    try {
      const col = collections.find((c) => c.id === productForm.collectionId) || collections[0];
      const slug = editingProduct?.slug || productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const id = editingProduct?.id || `prod_${Date.now()}`;

      // Assemble 4 required images
      const fallbackUrl = productForm.images.front || '/assets/aistudio/homepage_hero_showcase_image_b47979ab.webp';
      const images: [ProductImage, ProductImage, ProductImage, ProductImage] = [
        {
          role: 'front',
          url: productForm.images.front || fallbackUrl,
          alt: `${productForm.name} - Front View`,
          caption: 'Full Field Perspective',
          sortOrder: 1
        },
        {
          role: 'back',
          url: productForm.images.back || productForm.images.front || fallbackUrl,
          alt: `${productForm.name} - Reverse Weave`,
          caption: 'Back Weave & Knot Foundation',
          sortOrder: 2
        },
        {
          role: 'near',
          url: productForm.images.near || productForm.images.front || fallbackUrl,
          alt: `${productForm.name} - Near Pile`,
          caption: 'Close-Up Wool Texture',
          sortOrder: 3
        },
        {
          role: 'detail',
          url: productForm.images.detail || productForm.images.front || fallbackUrl,
          alt: `${productForm.name} - Detail Motif`,
          caption: 'Artisan Border & Ornament',
          sortOrder: 4
        }
      ];

      const productToSave: Product = {
        id,
        name: productForm.name.trim(),
        slug,
        sku: productForm.sku.trim() || `AC-${id.slice(-4).toUpperCase()}`,
        collectionId: col ? col.id : 'heritage-afghan',
        collectionName: col ? col.name : 'Afghan Heritage',
        shortDescription: productForm.shortDescription.trim() || `${productForm.name} is a fine hand-knotted carpet inspired by enduring regional rug traditions.`,
        fullDescription: productForm.fullDescription.trim() || `${productForm.name} exemplifies meticulous hand-knotting, expressive geometric harmony, and natural hand-spun wool fibers crafted for discerning interior spaces.`,
        dimensions: productForm.availableSizes[0] || '6 x 9 ft',
        availableSizes: productForm.availableSizes.length > 0 ? productForm.availableSizes : ['6 x 9 ft (183 x 274 cm)'],
        quality: productForm.quality,
        materials: productForm.materials,
        washingType: productForm.washingType,
        pileType: productForm.pileType,
        countryOfOrigin: productForm.countryOfOrigin,
        constructionMethod: 'Traditional Hand-Knotted Loom',
        primaryColors: productForm.primaryColors.split(',').map((s) => s.trim()).filter(Boolean),
        pattern: productForm.pattern,
        intendedUse: 'Living Room, Dining Hall, Private Gallery, Executive Suite',
        availabilityStatus: productForm.availabilityStatus,
        price: null,
        showPrice: false,
        images,
        seoTitle: `${productForm.name} | AMINZADA CARPETS`,
        seoDescription: `${productForm.name} - Premium Afghan hand-knotted carpet with authentic heritage motifs.`,
        createdAt: editingProduct?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        published: true
      };

      await catalogService.saveProduct(productToSave);
      setIsProductModalOpen(false);
      showFeedback(`Carpet "${productForm.name}" published successfully!`, 'success');
    } catch (err) {
      console.error(err);
      showFeedback('Failed to save carpet. Please check connection.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from the catalog?`)) {
      try {
        await catalogService.deleteProduct(id);
        showFeedback(`"${name}" removed from catalog.`, 'success');
      } catch (err) {
        showFeedback('Could not delete product.', 'error');
      }
    }
  };

  // ---------------- COLLECTIONS CRUD ----------------

  const openAddCollectionModal = () => {
    setEditingCollection(null);
    setCollectionForm({
      name: '',
      slug: '',
      description: '',
      coverImage: ''
    });
    setIsCollectionModalOpen(true);
  };

  const openEditCollectionModal = (col: Collection) => {
    setEditingCollection(col);
    setCollectionForm({
      name: col.name,
      slug: col.slug,
      description: col.description,
      coverImage: col.coverImage
    });
    setIsCollectionModalOpen(true);
  };

  const handleCollectionCoverUpload = async (file: File) => {
    setUploadingImageRole('collection-cover');
    try {
      const url = await uploadCarpetImage(file, 'collections');
      setCollectionForm((prev) => ({ ...prev, coverImage: url }));
      showFeedback('Collection cover image uploaded!', 'success');
    } catch (err) {
      showFeedback('Failed to upload cover image.', 'error');
    } finally {
      setUploadingImageRole(null);
    }
  };

  const handleSaveCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!collectionForm.name.trim()) {
      showFeedback('Collection name is required.', 'error');
      return;
    }

    setIsSaving(true);
    try {
      const id = editingCollection?.id || `col_${Date.now()}`;
      const slug =
        editingCollection?.slug ||
        collectionForm.slug.trim() ||
        collectionForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      const collectionToSave: Collection = {
        id,
        name: collectionForm.name.trim(),
        slug,
        description:
          collectionForm.description.trim() ||
          `Curated selection of fine ${collectionForm.name.trim()} crafted with traditional artistry.`,
        coverImage:
          collectionForm.coverImage ||
          editingCollection?.coverImage ||
          '/assets/aistudio/homepage_hero_showcase_image_b47979ab.webp',
        seoTitle: `${collectionForm.name.trim()} | AMINZADA CARPETS`,
        seoDescription:
          collectionForm.description.trim() ||
          `Explore ${collectionForm.name.trim()} at AMINZADA CARPETS.`,
        relatedProductIds: editingCollection?.relatedProductIds || [],
        published: true
      };

      await catalogService.saveCollection(collectionToSave);
      setIsCollectionModalOpen(false);
      showFeedback(`Collection "${collectionToSave.name}" saved and published!`, 'success');
    } catch (err) {
      console.error(err);
      showFeedback('Failed to save collection. Please check connection.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteCollection = async (id: string, name: string) => {
    if (window.confirm(`Remove collection "${name}" from the storefront?`)) {
      try {
        await catalogService.deleteCollection(id);
        showFeedback(`Collection "${name}" removed.`, 'success');
      } catch (err) {
        showFeedback('Could not delete collection.', 'error');
      }
    }
  };

  const handleSeedCatalogToCloud = async () => {
    setIsSaving(true);
    try {
      const result = await catalogService.seedInitialDataIfEmpty();
      showFeedback(`Synced ${result.seededProducts} carpets & ${result.seededCollections} collections to Cloud database!`, 'success');
      loadData();
    } catch (err) {
      showFeedback('Failed to sync to cloud database.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Filter products for display
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.collectionName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCollection =
      selectedCollectionFilter === 'all' || p.collectionId === selectedCollectionFilter;

    return matchesSearch && matchesCollection;
  });

  // ---------------- AUTH SCREEN ----------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#FFFFFF] border-2 border-[#5E0006] p-8 shadow-xl rounded-xs space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-[#5E0006] text-[#FAF8F3] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-[#252321]">
              Owner Admin Portal
            </h1>
            <p className="text-xs text-[#77716B]">
              Enter your secret administrator passcode to manage products, collections, and view inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                Admin Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-4 py-3 text-sm text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                autoFocus
              />
              {authError && (
                <p className="text-[11px] text-[#D53E0F] mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{authError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-xs"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="text-center pt-2 border-t border-[#EED9B9]/60">
            <p className="text-[11px] text-[#77716B]">
              Authorized store administrators only.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- MAIN DASHBOARD ----------------
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      
      {/* Toast Feedback Notification */}
      {feedbackMessage && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xs shadow-lg text-xs font-medium transition-all ${
            feedbackMessage.type === 'success'
              ? 'bg-[#25D366] text-white'
              : 'bg-[#D53E0F] text-white'
          }`}
        >
          {feedbackMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          <span>{feedbackMessage.text}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-[#FFFFFF] border-b border-[#EED9B9] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_CONFIG.logoUrl}
                alt="AMINZADA CARPETS"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="font-editorial text-lg sm:text-xl font-semibold text-[#5E0006] block leading-tight">
                  Admin Dashboard
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#77716B] hidden sm:block">
                  Live Catalog & Inquiries Manager
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#5E0006] border border-[#5E0006] hover:bg-[#5E0006] hover:text-[#FAF8F3] px-3 py-1.5 rounded-xs transition-colors font-medium"
              >
                <span>View Live Site</span>
                <ExternalLink className="w-3 h-3 ml-1.5" />
              </a>

              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-[#77716B] hover:text-[#D53E0F] p-2 flex items-center gap-1 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Navigation Tabs Bar */}
      <div className="bg-[#FFFFFF] border-b border-[#EED9B9] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto py-2">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 py-2 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'products'
                  ? 'border-[#5E0006] text-[#5E0006]'
                  : 'border-transparent text-[#77716B] hover:text-[#252321]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Carpets Catalog ({products.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('collections')}
              className={`flex items-center gap-2 py-2 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'collections'
                  ? 'border-[#5E0006] text-[#5E0006]'
                  : 'border-transparent text-[#77716B] hover:text-[#252321]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Collections ({collections.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center gap-2 py-2 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'inquiries'
                  ? 'border-[#5E0006] text-[#5E0006]'
                  : 'border-transparent text-[#77716B] hover:text-[#252321]'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Customer Inquiries ({inquiries.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sync')}
              className={`flex items-center gap-2 py-2 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'sync'
                  ? 'border-[#5E0006] text-[#5E0006]'
                  : 'border-transparent text-[#77716B] hover:text-[#252321]'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Cloud Sync</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ================= TAB 1: PRODUCTS ================= */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            {/* Header Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#FFFFFF] p-4 sm:p-5 border border-[#EED9B9] rounded-xs shadow-xs">
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#77716B] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search carpet name, SKU, or collection..."
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] pl-9 pr-3 py-2 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#77716B] hover:text-[#252321]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <select
                  value={selectedCollectionFilter}
                  onChange={(e) => setSelectedCollectionFilter(e.target.value)}
                  className="bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                >
                  <option value="all">All Collections</option>
                  {collections.map((col) => (
                    <option key={col.id} value={col.id}>
                      {col.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={openAddProductModal}
                className="inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                <span>Add New Carpet</span>
              </button>

            </div>

            {/* Products List / Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFFFF] border border-[#EED9B9] p-12 text-center space-y-4 rounded-xs">
                <ShoppingBag className="w-12 h-12 text-[#EED9B9] mx-auto" />
                <h3 className="font-editorial text-xl text-[#252321]">No carpets match your filter</h3>
                <p className="text-xs text-[#77716B]">Try adjusting your search query or collection filter.</p>
                <button
                  type="button"
                  onClick={openAddProductModal}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#5E0006] border-b border-[#5E0006] pb-1"
                >
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  <span>Create a New Carpet</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => {
                  const frontImage = prod.images.find((i) => i.role === 'front')?.url || prod.images[0]?.url;

                  return (
                    <div
                      key={prod.id}
                      className="bg-[#FFFFFF] border border-[#EED9B9] rounded-xs overflow-hidden shadow-xs hover:border-[#5E0006] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Preview with Badges */}
                        <div className="relative aspect-4/3 bg-[#FAF8F3] overflow-hidden border-b border-[#EED9B9]">
                          <img
                            src={frontImage}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                            <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#252321]/90 text-white px-2 py-0.5 rounded-xs backdrop-blur-xs">
                              {prod.collectionName}
                            </span>
                            <span
                              className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs ${
                                prod.availabilityStatus === 'in_stock'
                                  ? 'bg-[#25D366] text-white'
                                  : 'bg-[#D53E0F] text-white'
                              }`}
                            >
                              {prod.availabilityStatus === 'in_stock' ? 'In Stock' : 'Upon Inquiry'}
                            </span>
                          </div>
                          <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-[#FFFFFF]/90 border border-[#EED9B9] px-1.5 py-0.5 rounded-xs text-[#252321]">
                            SKU: {prod.sku}
                          </span>
                        </div>

                        {/* Carpet Information */}
                        <div className="p-4 space-y-2">
                          <h3 className="font-editorial text-lg text-[#252321] font-medium line-clamp-1">
                            {prod.name}
                          </h3>
                          <p className="text-xs text-[#77716B] line-clamp-2 leading-relaxed">
                            {prod.shortDescription}
                          </p>

                          <div className="pt-2 border-t border-[#FAF8F3] flex flex-wrap gap-1">
                            {prod.availableSizes.slice(0, 2).map((s, idx) => (
                              <span key={idx} className="text-[10px] bg-[#FAF8F3] border border-[#EED9B9] text-[#252321] px-2 py-0.5 rounded-xs">
                                {s}
                              </span>
                            ))}
                            {prod.availableSizes.length > 2 && (
                              <span className="text-[10px] text-[#77716B] self-center">
                                +{prod.availableSizes.length - 2} more sizes
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="p-3 bg-[#FAF8F3] border-t border-[#EED9B9] flex items-center justify-between">
                        <a
                          href={`/products/${prod.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#77716B] hover:text-[#5E0006] flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </a>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openEditProductModal(prod)}
                            className="inline-flex items-center text-xs text-[#5E0006] hover:bg-[#EED9B9]/30 p-1.5 rounded-xs transition-colors font-medium"
                          >
                            <Edit className="w-3.5 h-3.5 mr-1" />
                            <span>Edit</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(prod.id, prod.name)}
                            className="inline-flex items-center text-xs text-[#D53E0F] hover:bg-[#D53E0F]/10 p-1.5 rounded-xs transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ================= TAB 2: COLLECTIONS ================= */}
        {activeTab === 'collections' && (
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] p-5 border border-[#EED9B9] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-2xl text-[#252321] font-medium">Design Collections</h2>
                <p className="text-xs text-[#77716B]">Create, edit, or update carpet collections and banner cover photographs.</p>
              </div>
              <button
                type="button"
                onClick={openAddCollectionModal}
                className="inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                <span>Add New Collection</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((col) => {
                const count = products.filter((p) => p.collectionId === col.id).length;

                return (
                  <div key={col.id} className="bg-[#FFFFFF] border border-[#EED9B9] rounded-xs overflow-hidden shadow-xs flex flex-col">
                    <div className="relative aspect-16/9 bg-[#FAF8F3] overflow-hidden border-b border-[#EED9B9]">
                      <img src={col.coverImage} alt={col.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-[#5E0006] text-[#FAF8F3] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs">
                        {count} Rugs Linked
                      </div>
                    </div>

                    <div className="p-4 space-y-2 flex-1">
                      <h3 className="font-editorial text-xl text-[#252321] font-medium">{col.name}</h3>
                      <p className="text-xs text-[#77716B] line-clamp-2 leading-relaxed">{col.description}</p>
                    </div>

                    <div className="p-3 bg-[#FAF8F3] border-t border-[#EED9B9] flex items-center justify-between text-xs">
                      <a
                        href={`/collections/${col.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5E0006] hover:underline flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Public Page</span>
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => openEditCollectionModal(col)}
                          className="inline-flex items-center text-xs text-[#5E0006] hover:bg-[#EED9B9]/30 p-1.5 rounded-xs transition-colors font-medium"
                        >
                          <Edit className="w-3.5 h-3.5 mr-1" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteCollection(col.id, col.name)}
                          className="inline-flex items-center text-xs text-[#D53E0F] hover:bg-[#D53E0F]/10 p-1.5 rounded-xs transition-colors"
                          title="Delete Collection"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 3: INQUIRIES ================= */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] p-5 border border-[#EED9B9] rounded-xs flex items-center justify-between">
              <div>
                <h2 className="font-editorial text-2xl text-[#252321] font-medium">Customer Quote Requests & Leads</h2>
                <p className="text-xs text-[#77716B]">Messages submitted through the website forms.</p>
              </div>
              <button
                type="button"
                onClick={loadData}
                className="text-xs text-[#5E0006] border border-[#5E0006] px-3 py-1.5 rounded-xs hover:bg-[#5E0006] hover:text-white transition-colors"
              >
                Refresh Inbox
              </button>
            </div>

            {inquiries.length === 0 ? (
              <div className="bg-[#FFFFFF] border border-[#EED9B9] p-12 text-center space-y-3 rounded-xs">
                <Inbox className="w-12 h-12 text-[#EED9B9] mx-auto" />
                <h3 className="font-editorial text-xl text-[#252321]">Your inquiry inbox is clear</h3>
                <p className="text-xs text-[#77716B]">New formal quote requests and customer notes will appear here automatically.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-[#FFFFFF] border border-[#EED9B9] p-5 rounded-xs shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#FAF8F3] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-editorial text-lg text-[#252321] font-medium">{inq.fullName}</h4>
                          <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#FAF8F3] border border-[#EED9B9] text-[#5E0006] px-2 py-0.5 rounded-xs">
                            {inq.type}
                          </span>
                        </div>
                        <p className="text-xs text-[#77716B]">{new Date(inq.createdAt).toLocaleString()}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {inq.phoneOrWhatsApp && (
                          <a
                            href={`https://wa.me/${inq.phoneOrWhatsApp.replace(/[^\d]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 text-xs font-semibold rounded-xs shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5 mr-1" />
                            <span>WhatsApp Client</span>
                          </a>
                        )}

                        <a
                          href={`mailto:${inq.email}`}
                          className="inline-flex items-center bg-[#5E0006] hover:bg-[#9B0F06] text-white px-3 py-1.5 text-xs font-semibold rounded-xs"
                        >
                          <Mail className="w-3.5 h-3.5 mr-1" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[#77716B] block">Product / SKU:</span>
                        <span className="font-medium text-[#252321]">{inq.productName || 'General Inquiry'} {inq.sku && `(${inq.sku})`}</span>
                      </div>
                      <div>
                        <span className="text-[#77716B] block">Requested Dimensions:</span>
                        <span className="font-medium text-[#252321]">{inq.selectedSize || 'To be confirmed'}</span>
                      </div>
                      <div>
                        <span className="text-[#77716B] block">Client Contact:</span>
                        <span className="font-medium text-[#252321]">{inq.email} {inq.phoneOrWhatsApp && `• ${inq.phoneOrWhatsApp}`}</span>
                      </div>
                    </div>

                    {inq.message && (
                      <div className="p-3 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs text-xs text-[#252321] whitespace-pre-wrap">
                        {inq.message}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: CLOUD SYNC & TOOLS ================= */}
        {activeTab === 'sync' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-[#FFFFFF] border-2 border-[#5E0006] p-6 sm:p-8 rounded-xs space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
                  Cloud Infrastructure
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#252321] font-medium">
                  Cloud Database Sync
                </h2>
                <p className="text-xs text-[#77716B] leading-relaxed">
                  Your store is connected to Firebase Firestore and Firebase Storage. Click below to synchronize all existing Afghan rug collections and carpets directly into your live database.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F3] border border-[#EED9B9] rounded-xs space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#252321]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span className="font-medium">Firebase Firestore Connected</span>
                </div>
                <div className="flex items-center gap-2 text-[#252321]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span className="font-medium">Cloudflare Pages Live Edge Hosting</span>
                </div>
                <div className="flex items-center gap-2 text-[#252321]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span className="font-medium">Mobile Camera Upload Support Active</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSeedCatalogToCloud}
                disabled={isSaving}
                className="w-full inline-flex items-center justify-center bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-xs disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isSaving ? 'animate-spin' : ''}`} />
                <span>{isSaving ? 'Syncing...' : 'Sync Catalog to Cloud Database'}</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* ================= MODAL: ADD / EDIT CARPET ================= */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#252321]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#FFFFFF] border-2 border-[#5E0006] w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#EED9B9] pb-4">
              <div>
                <h2 className="font-editorial text-2xl text-[#252321] font-semibold">
                  {editingProduct ? 'Edit Carpet Design' : 'Add New Carpet to Catalog'}
                </h2>
                <p className="text-xs text-[#77716B]">
                  Fill in the details below. Tap any camera icon to upload photos straight from your phone or laptop.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="p-2 text-[#77716B] hover:text-[#5E0006]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-6">
              
              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Carpet Name <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g. Sultan Gold Kazak Carpet"
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Catalog SKU Code <span className="text-[#D53E0F]">*</span>
                  </label>
                  <input
                    type="text"
                    value={productForm.sku}
                    onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                    placeholder="e.g. AC-KAZ-004"
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs font-mono text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Collection Category <span className="text-[#D53E0F]">*</span>
                  </label>
                  <select
                    value={productForm.collectionId}
                    onChange={(e) => setProductForm({ ...productForm, collectionId: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  >
                    {collections.map((col) => (
                      <option key={col.id} value={col.id}>
                        {col.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Availability Status
                  </label>
                  <select
                    value={productForm.availabilityStatus}
                    onChange={(e) => setProductForm({ ...productForm, availabilityStatus: e.target.value as any })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  >
                    <option value="in_stock">In Stock (Ready to Deliver)</option>
                    <option value="upon_inquiry">Available Upon Inquiry</option>
                    <option value="made_to_order">Custom Made to Order</option>
                  </select>
                </div>
              </div>

              {/* 4-PERSPECTIVE PHOTOS UPLOAD (Section 9 Compliance) */}
              <div className="space-y-3 pt-4 border-t border-[#EED9B9]">
                <div>
                  <h3 className="font-editorial text-lg text-[#5E0006] font-semibold">
                    4-Perspective Visual Inspection Photos
                  </h3>
                  <p className="text-xs text-[#77716B]">
                    Upload all 4 inspection perspectives. Tap any box on your phone to open your camera or gallery.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* 1. FRONT VIEW */}
                  {(['front', 'back', 'near', 'detail'] as const).map((role) => {
                    const labelMap = {
                      front: '1. Front Field',
                      back: '2. Reverse Weave',
                      near: '3. Near Pile',
                      detail: '4. Detail Motif'
                    };
                    const currentUrl = productForm.images[role];
                    const isUploading = uploadingImageRole === role;

                    return (
                      <div key={role} className="space-y-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77716B] block">
                          {labelMap[role]}
                        </span>
                        
                        <label className="relative aspect-square border-2 border-dashed border-[#EED9B9] hover:border-[#5E0006] rounded-xs bg-[#FAF8F3] flex flex-col items-center justify-center p-2 cursor-pointer transition-colors overflow-hidden group">
                          {currentUrl ? (
                            <>
                              <img src={currentUrl} alt={role} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-semibold transition-opacity">
                                Tap to Replace
                              </div>
                            </>
                          ) : (
                            <div className="text-center space-y-1">
                              <Camera className="w-6 h-6 text-[#77716B] mx-auto group-hover:text-[#5E0006]" />
                              <span className="text-[10px] text-[#77716B] block group-hover:text-[#5E0006]">
                                {isUploading ? 'Uploading...' : 'Upload Photo'}
                              </span>
                            </div>
                          )}

                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            disabled={isUploading}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageFileUpload(role, file);
                            }}
                          />
                        </label>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* SIZES MANAGEMENT */}
              <div className="space-y-3 pt-4 border-t border-[#EED9B9]">
                <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold">
                  Available Proportions & Dimensions
                </label>
                
                <div className="flex flex-wrap gap-1.5">
                  {productForm.availableSizes.map((size) => (
                    <span
                      key={size}
                      className="inline-flex items-center gap-1.5 bg-[#FAF8F3] border border-[#EED9B9] text-[#252321] px-2.5 py-1 text-xs rounded-xs"
                    >
                      <span>{size}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSize(size)}
                        className="text-[#77716B] hover:text-[#D53E0F]"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>

                {/* Quick Size Presets */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#77716B] block mb-1">
                    Quick Add Common Rug Sizes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      '4 x 6 ft (122 x 183 cm)',
                      '5 x 8 ft (152 x 244 cm)',
                      '6 x 9 ft (183 x 274 cm)',
                      '8 x 10 ft (244 x 305 cm)',
                      '9 x 12 ft (274 x 366 cm)',
                      '10 x 14 ft (305 x 427 cm)',
                      'Runner 2.5 x 10 ft (76 x 305 cm)'
                    ].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleAddSizePreset(preset)}
                        className="text-[10px] bg-[#FFFFFF] border border-[#EED9B9] hover:border-[#5E0006] text-[#77716B] hover:text-[#5E0006] px-2 py-0.5 rounded-xs transition-colors"
                      >
                        + {preset.split('(')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Size Input */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={productForm.newSizeInput}
                    onChange={(e) => setProductForm({ ...productForm, newSizeInput: e.target.value })}
                    placeholder="Or type custom size (e.g. 12 x 15 ft)"
                    className="bg-[#FAF8F3] border border-[#EED9B9] px-3 py-1.5 text-xs text-[#252321] rounded-xs flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomSize}
                    className="bg-[#FAF8F3] border border-[#5E0006] text-[#5E0006] hover:bg-[#5E0006] hover:text-white px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors"
                  >
                    Add Size
                  </button>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-4 pt-4 border-t border-[#EED9B9]">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Short Description (Catalog Summary)
                  </label>
                  <input
                    type="text"
                    value={productForm.shortDescription}
                    onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                    placeholder="Brief architectural overview for cards and listings..."
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                    Full Editorial Story & Craft Description
                  </label>
                  <textarea
                    rows={4}
                    value={productForm.fullDescription}
                    onChange={(e) => setProductForm({ ...productForm, fullDescription: e.target.value })}
                    placeholder="Detailed craftsmanship narrative, history of the motif, and textural presence..."
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  />
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EED9B9]">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Pattern / Motif Style
                  </label>
                  <input
                    type="text"
                    value={productForm.pattern}
                    onChange={(e) => setProductForm({ ...productForm, pattern: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Primary Colors (comma separated)
                  </label>
                  <input
                    type="text"
                    value={productForm.primaryColors}
                    onChange={(e) => setProductForm({ ...productForm, primaryColors: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Materials
                  </label>
                  <input
                    type="text"
                    value={productForm.materials}
                    onChange={(e) => setProductForm({ ...productForm, materials: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Quality / Knot Density
                  </label>
                  <input
                    type="text"
                    value={productForm.quality}
                    onChange={(e) => setProductForm({ ...productForm, quality: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Pile Type / Height
                  </label>
                  <input
                    type="text"
                    value={productForm.pileType}
                    onChange={(e) => setProductForm({ ...productForm, pileType: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Washing Type
                  </label>
                  <input
                    type="text"
                    value={productForm.washingType}
                    onChange={(e) => setProductForm({ ...productForm, washingType: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    value={productForm.countryOfOrigin}
                    onChange={(e) => setProductForm({ ...productForm, countryOfOrigin: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-6 border-t border-[#EED9B9] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-5 py-2.5 text-xs text-[#77716B] hover:text-[#252321] font-semibold uppercase tracking-wider"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving || uploadingImageRole !== null}
                  className="bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-8 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-xs disabled:opacity-50"
                >
                  {uploadingImageRole !== null
                    ? 'Uploading Photo...'
                    : isSaving
                    ? 'Publishing...'
                    : editingProduct
                    ? 'Save Changes'
                    : 'Publish Carpet to Live Site'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT COLLECTION ================= */}
      {isCollectionModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#252321]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#FFFFFF] border-2 border-[#5E0006] w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#EED9B9] pb-4">
              <div>
                <h2 className="font-editorial text-2xl text-[#252321] font-semibold">
                  {editingCollection ? 'Edit Collection' : 'Add New Collection'}
                </h2>
                <p className="text-xs text-[#77716B]">
                  Update the collection title, editorial description, or cover photograph.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCollectionModalOpen(false)}
                className="p-2 text-[#77716B] hover:text-[#5E0006]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveCollection} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Collection Name <span className="text-[#D53E0F]">*</span>
                </label>
                <input
                  type="text"
                  value={collectionForm.name}
                  onChange={(e) => setCollectionForm({ ...collectionForm, name: e.target.value })}
                  placeholder="e.g. Royal Silk & Ghazni Wool"
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold mb-1">
                  Collection Description
                </label>
                <textarea
                  rows={3}
                  value={collectionForm.description}
                  onChange={(e) => setCollectionForm({ ...collectionForm, description: e.target.value })}
                  placeholder="Describe the heritage motifs and space character of this collection..."
                  className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2.5 text-xs text-[#252321] rounded-xs focus:outline-hidden focus:border-[#5E0006]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#252321] font-semibold">
                  Collection Cover Photograph
                </label>
                <label className="relative block aspect-16/9 border-2 border-dashed border-[#EED9B9] hover:border-[#5E0006] rounded-xs bg-[#FAF8F3] cursor-pointer overflow-hidden group">
                  {collectionForm.coverImage ? (
                    <>
                      <img src={collectionForm.coverImage} alt="Collection Cover" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-opacity">
                        Tap to Replace Cover Image
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-1">
                      <Camera className="w-7 h-7 text-[#77716B]" />
                      <span className="text-xs text-[#77716B]">
                        {uploadingImageRole === 'collection-cover' ? 'Uploading...' : 'Tap to Upload Cover Photo'}
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploadingImageRole === 'collection-cover'}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleCollectionCoverUpload(file);
                    }}
                  />
                </label>
              </div>

              <div className="pt-4 border-t border-[#EED9B9] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCollectionModalOpen(false)}
                  className="px-5 py-2.5 text-xs text-[#77716B] hover:text-[#252321] font-semibold uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving || uploadingImageRole !== null}
                  className="bg-[#5E0006] hover:bg-[#9B0F06] text-[#FAF8F3] px-8 py-3 text-xs font-semibold uppercase tracking-widest rounded-xs transition-colors shadow-xs disabled:opacity-50"
                >
                  {uploadingImageRole === 'collection-cover'
                    ? 'Uploading Photo...'
                    : isSaving
                    ? 'Saving...'
                    : editingCollection
                    ? 'Save Collection'
                    : 'Publish Collection'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
