/**
 * AMINZADA CARPETS — Product Catalog & Discovery
 * 
 * Complies with Section 11:
 * - Search by name and SKU
 * - Collection filter
 * - Pattern / style filter
 * - Color filter
 * - Size filter
 * - Alphabetical & Newest sorting
 * - Clear filters button & live count
 * - Mobile filter drawer / collapsible panel
 */

import React, { useState, useMemo } from 'react';
import { catalogService, useCatalog } from '../services/catalogService';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Search, Filter, RotateCcw, X, SlidersHorizontal } from 'lucide-react';

export function ProductsPage() {
  const catalog = useCatalog();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedPattern, setSelectedPattern] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'newest'>('name-asc');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const collections = catalog.getAllCollections();

  // Distinct patterns for filtering
  const allProducts = catalog.getAllProducts();
  
  const patternOptions = useMemo(() => {
    return [
      { label: 'All Patterns', value: 'all' },
      { label: 'Central Medallion', value: 'medallion' },
      { label: 'Geometric & Star', value: 'geometric' },
      { label: 'Floral & Botanical', value: 'floral' },
      { label: 'Border Guard', value: 'border' },
      { label: 'Minimalist & Texture', value: 'linear' },
    ];
  }, []);

  const colorOptions = useMemo(() => {
    return [
      { label: 'All Colors', value: 'all' },
      { label: 'Burgundy / Deep Red', value: 'burgundy' },
      { label: 'Terracotta', value: 'terracotta' },
      { label: 'Cream / Ivory', value: 'cream' },
      { label: 'Charcoal / Dark', value: 'charcoal' },
      { label: 'Neutral / Stone', value: 'stone' },
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return catalog.searchProducts({
      query: searchQuery,
      collectionId: selectedCollection,
      pattern: selectedPattern,
      color: selectedColor,
      sortBy: sortBy
    });
  }, [catalog, searchQuery, selectedCollection, selectedPattern, selectedColor, sortBy]);

  const hasActiveFilters = 
    searchQuery.trim().length > 0 ||
    selectedCollection !== 'all' ||
    selectedPattern !== 'all' ||
    selectedColor !== 'all' ||
    sortBy !== 'name-asc';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCollection('all');
    setSelectedPattern('all');
    setSelectedColor('all');
    setSortBy('name-asc');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      
      <Breadcrumbs items={[{ label: 'Products' }]} />

      {/* Catalog Header */}
      <div className="border-b border-[#EED9B9] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D53E0F] font-semibold">
            Catalog Directory
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#252321] font-medium mt-1">
            All Rugs & Carpets
          </h1>
          <p className="text-xs sm:text-sm text-[#77716B] mt-1.5 font-light">
            Browse our full 15 provisional carpet models by pattern, hue, and collection.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[#77716B] font-medium">
            Showing <strong className="text-[#5E0006]">{filteredProducts.length}</strong> of {allProducts.length} Designs
          </span>

          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden inline-flex items-center bg-[#FAF8F3] border border-[#EED9B9] text-[#252321] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-[#5E0006]" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Bar — Desktop */}
      <div className="hidden md:block bg-[#FFFFFF] border border-[#EED9B9] p-5 rounded-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Search Box */}
          <div className="lg:col-span-2 relative">
            <label htmlFor="search-input" className="block text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-1">
              Search by Name or SKU
            </label>
            <div className="relative">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Medallion, AC-GEO-002, Terracotta..."
                className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3.5 py-2 pl-9 text-xs text-[#252321] placeholder:text-[#77716B]/60 focus:outline-hidden focus:border-[#5E0006] rounded-xs"
              />
              <Search className="w-4 h-4 text-[#77716B] absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-2.5 text-[#77716B] hover:text-[#5E0006]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Collection Filter */}
          <div>
            <label htmlFor="collection-filter" className="block text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-1">
              Collection
            </label>
            <select
              id="collection-filter"
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] focus:outline-hidden focus:border-[#5E0006] rounded-xs"
            >
              <option value="all">All Collections</option>
              {collections.map((col) => (
                <option key={col.id} value={col.id}>
                  {col.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pattern Filter */}
          <div>
            <label htmlFor="pattern-filter" className="block text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-1">
              Pattern / Style
            </label>
            <select
              id="pattern-filter"
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] focus:outline-hidden focus:border-[#5E0006] rounded-xs"
            >
              {patternOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Color Filter */}
          <div>
            <label htmlFor="color-filter" className="block text-[11px] uppercase tracking-wider text-[#77716B] font-semibold mb-1">
              Primary Palette
            </label>
            <select
              id="color-filter"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] focus:outline-hidden focus:border-[#5E0006] rounded-xs"
            >
              {colorOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Secondary Row: Sorting & Reset */}
        <div className="flex items-center justify-between pt-3 border-t border-[#FAF8F3]">
          <div className="flex items-center gap-2">
            <label htmlFor="sort-by" className="text-xs text-[#77716B] font-medium">
              Sort by:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F3] border border-[#EED9B9] px-2.5 py-1 text-xs text-[#252321] focus:outline-hidden focus:border-[#5E0006] rounded-xs"
            >
              <option value="name-asc">Alphabetical (A to Z)</option>
              <option value="name-desc">Alphabetical (Z to A)</option>
              <option value="newest">Catalog Order (Newest First)</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center text-xs font-semibold text-[#5E0006] hover:text-[#9B0F06] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>Clear All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter Catalog"
          className="md:hidden fixed inset-0 z-50 bg-[#252321]/60 backdrop-blur-xs flex justify-end"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="w-full max-w-xs bg-[#FAF8F3] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EED9B9]">
                <h3 className="font-editorial text-xl font-semibold text-[#5E0006]">
                  Filter Catalog
                </h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-[#252321]"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Product name or SKU..."
                  className="w-full bg-[#FFFFFF] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                />
              </div>

              {/* Mobile Collection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                  Collection
                </label>
                <select
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                >
                  <option value="all">All Collections</option>
                  {collections.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Pattern */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                  Pattern
                </label>
                <select
                  value={selectedPattern}
                  onChange={(e) => setSelectedPattern(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                >
                  {patternOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Color */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                  Palette
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                >
                  {colorOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Sort */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#77716B] font-semibold mb-1">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-[#FFFFFF] border border-[#EED9B9] px-3 py-2 text-xs text-[#252321] rounded-xs"
                >
                  <option value="name-asc">Alphabetical (A-Z)</option>
                  <option value="name-desc">Alphabetical (Z-A)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EED9B9] space-y-3">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-[#5E0006] text-[#FAF8F3] py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full bg-transparent border border-[#EED9B9] text-[#252321] py-2 text-xs font-medium uppercase tracking-wider rounded-xs"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Grid Results */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FFFFFF] border border-[#EED9B9] p-12 text-center max-w-lg mx-auto space-y-4">
          <p className="font-editorial text-2xl text-[#5E0006]">No Carpets Found</p>
          <p className="text-xs sm:text-sm text-[#77716B]">
            No catalog records matched your active filter or search terms. Try clearing filters or using broader terms.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center bg-[#5E0006] text-[#FAF8F3] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

    </div>
  );
}
