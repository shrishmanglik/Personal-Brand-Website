'use client';

import React from 'react';

interface PlacardInfo {
  title: string;
  subtitle?: string;
  date?: string;
}

interface GalleryFrameProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'hero';
  placard?: PlacardInfo;
  spotlight?: boolean;
  className?: string;
}

const sizeStyles = {
  small: 'max-w-sm p-4',
  medium: 'max-w-md p-5',
  large: 'max-w-lg p-6',
  hero: 'max-w-2xl p-8',
};

export default function GalleryFrame({
  children,
  size = 'medium',
  placard,
  spotlight = false,
  className = '',
}: GalleryFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {spotlight && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-20 spotlight-strong pointer-events-none" />
      )}
      <div
        className={`
          relative bg-gallery-black/80
          border-[8px] border-white/90
          shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(0,0,0,0.3)]
          transition-shadow duration-500
          hover:shadow-[0_4px_30px_rgba(201,168,76,0.2),inset_0_2px_10px_rgba(0,0,0,0.3)]
          ${sizeStyles[size]}
        `}
      >
        {children}
      </div>
      {placard && (
        <div className="mt-3 mx-auto max-w-[90%]">
          <div className="bg-gallery-placard px-4 py-2 shadow-sm">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gallery-black/80">
              {placard.title}
            </p>
            {placard.subtitle && (
              <p className="font-body text-xs italic text-gallery-black/60 mt-0.5">
                {placard.subtitle}
              </p>
            )}
            {placard.date && (
              <p className="font-mono text-[10px] text-gallery-black/50 mt-0.5">
                {placard.date}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
