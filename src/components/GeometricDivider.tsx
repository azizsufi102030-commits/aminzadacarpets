import React from 'react';

interface GeometricDividerProps {
  className?: string;
  variant?: 'medallion' | 'diamond' | 'line';
}

export function GeometricDivider({ className = '', variant = 'medallion' }: GeometricDividerProps) {
  if (variant === 'line') {
    return (
      <div className={`flex items-center justify-center my-8 ${className}`}>
        <div className="h-px bg-[#EED9B9] w-24 sm:w-36"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#D53E0F] mx-3"></div>
        <div className="h-px bg-[#EED9B9] w-24 sm:w-36"></div>
      </div>
    );
  }

  if (variant === 'diamond') {
    return (
      <div className={`flex items-center justify-center space-x-2 my-8 ${className}`}>
        <div className="h-px bg-[#EED9B9] w-16 sm:w-28"></div>
        <div className="w-2 h-2 rotate-45 bg-[#5E0006]"></div>
        <div className="w-3 h-3 rotate-45 bg-[#D53E0F]"></div>
        <div className="w-2 h-2 rotate-45 bg-[#5E0006]"></div>
        <div className="h-px bg-[#EED9B9] w-16 sm:w-28"></div>
      </div>
    );
  }

  // Default Medallion Emblem
  return (
    <div className={`flex items-center justify-center my-10 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#EED9B9] to-[#EED9B9] flex-1 max-w-[120px] sm:max-w-[200px]"></div>
      <div className="mx-4 flex items-center space-x-1.5">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#5E0006]"></div>
        <div className="w-2.5 h-2.5 rotate-45 border border-[#5E0006] bg-[#FAF8F3] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#D53E0F]"></div>
        </div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#5E0006]"></div>
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-[#EED9B9] to-[#EED9B9] flex-1 max-w-[120px] sm:max-w-[200px]"></div>
    </div>
  );
}
