'use client';

import React from 'react';

interface PlacardLabelProps {
  title: string;
  subtitle?: string;
  date?: string;
  className?: string;
}

export default function PlacardLabel({
  title,
  subtitle,
  date,
  className = '',
}: PlacardLabelProps) {
  return (
    <div className={`bg-gallery-placard px-5 py-3 shadow-sm inline-block ${className}`}>
      <p className="font-display text-sm uppercase tracking-[0.2em] text-gallery-black/80">
        {title}
      </p>
      {subtitle && (
        <p className="font-body text-xs italic text-gallery-black/60 mt-1">
          {subtitle}
        </p>
      )}
      {date && (
        <p className="font-mono text-[10px] text-gallery-black/50 mt-1">
          {date}
        </p>
      )}
    </div>
  );
}
