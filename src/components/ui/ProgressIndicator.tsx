'use client';

import React from 'react';
import { useGalleryStore } from '@/store/galleryStore';

export default function ProgressIndicator() {
  const scrollProgress = useGalleryStore((s) => s.scrollProgress);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-gallery-gold/60 transition-[width] duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
