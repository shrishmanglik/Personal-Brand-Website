'use client';

import React from 'react';
import { useGalleryStore } from '@/store/galleryStore';

export default function ProgressIndicator() {
  const scrollProgress = useGalleryStore((s) => s.scrollProgress);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full relative transition-[width] duration-100"
        style={{
          width: `${scrollProgress * 100}%`,
          background: 'linear-gradient(90deg, rgba(201,168,76,0.6), rgba(221,188,96,0.8))',
          boxShadow: '0 0 8px rgba(201,168,76,0.4), 0 0 16px rgba(201,168,76,0.2)',
        }}
      >
        {/* Diamond/chevron at leading edge */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          style={{
            width: '6px',
            height: '6px',
            background: 'rgba(201,168,76,0.9)',
            transform: 'translateX(50%) translateY(-50%) rotate(45deg)',
            boxShadow: '0 0 6px rgba(201,168,76,0.5)',
          }}
        />
      </div>
    </div>
  );
}
