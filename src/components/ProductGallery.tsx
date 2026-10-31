/**
 * AMINZADA CARPETS — Product Gallery & Lightbox
 * 
 * Supports the 4 required independent image views:
 * front, back, near, detail.
 * Accessible keyboard navigation, touch friendly, scroll lock restore.
 */

import React, { useEffect, useState } from 'react';
import { ProductImage } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, Eye } from 'lucide-react';

interface ProductGalleryProps {
  images: [ProductImage, ProductImage, ProductImage, ProductImage];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const activeImage = images[selectedIndex] || images[0];

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, images.length]);

  const roleNameMap: Record<string, string> = {
    front: 'Front View',
    back: 'Back / Weave',
    near: 'Near / Pile',
    detail: 'Detail Motif',
  };

  return (
    <div className="w-full">
      {/* Primary Display Area */}
      <div className="relative group bg-[#FFFFFF] border border-[#EED9B9] overflow-hidden aspect-[4/3] flex items-center justify-center">
        {imageErrors[selectedIndex] ? (
          <div className="flex flex-col items-center justify-center p-8 text-center text-[#77716B]">
            <span className="text-sm font-medium uppercase tracking-wider text-[#5E0006]">Image slot: {roleNameMap[activeImage.role]}</span>
            <p className="mt-2 text-xs">Authentic image to be uploaded by catalog administrator.</p>
          </div>
        ) : (
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            onError={() => setImageErrors((prev) => ({ ...prev, [selectedIndex]: true }))}
            className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300"
            onClick={() => setIsLightboxOpen(true)}
          />
        )}

        {/* Lightbox Trigger Button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={`Open full-screen lightbox for ${productName} (${roleNameMap[activeImage.role]})`}
          className="absolute bottom-3 right-3 bg-[#FAF8F3]/95 hover:bg-[#FFFFFF] text-[#5E0006] p-2 rounded-sm shadow-sm border border-[#EED9B9] opacity-90 group-hover:opacity-100 transition-opacity"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Previous & Next overlay buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FAF8F3]/90 hover:bg-[#FFFFFF] text-[#252321] p-1.5 rounded-full shadow-sm border border-[#EED9B9] opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FAF8F3]/90 hover:bg-[#FFFFFF] text-[#252321] p-1.5 rounded-full shadow-sm border border-[#EED9B9] opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Four Accessible Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
        {images.map((img, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleThumbnailClick(idx)}
              aria-label={`View ${roleNameMap[img.role]} for ${productName}`}
              aria-current={isSelected ? 'true' : undefined}
              className={`relative aspect-[4/3] bg-white border overflow-hidden p-0.5 text-left transition-all ${
                isSelected
                  ? 'border-[#5E0006] ring-2 ring-[#5E0006]/30 shadow-xs'
                  : 'border-[#EED9B9] hover:border-[#D53E0F] opacity-75 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer for ${productName}`}
          className="fixed inset-0 z-50 bg-[#252321]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between text-[#FAF8F3] max-w-6xl mx-auto w-full z-10">
            <div>
              <p className="text-sm font-editorial font-semibold tracking-wide text-[#EED9B9]">
                {productName}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close image viewer"
              className="text-[#FAF8F3] hover:text-[#EED9B9] p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Image */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 text-[#FAF8F3] hover:text-[#EED9B9] p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={activeImage.url}
              alt={activeImage.alt}
              className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl border border-white/10"
            />

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 text-[#FAF8F3] hover:text-[#EED9B9] p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Thumbnails */}
          <div
            className="max-w-2xl mx-auto w-full text-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-14 h-10 border overflow-hidden rounded-xs transition-all ${
                    idx === selectedIndex
                      ? 'border-[#EED9B9] scale-105 opacity-100 ring-1 ring-[#EED9B9]'
                      : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-contain bg-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
