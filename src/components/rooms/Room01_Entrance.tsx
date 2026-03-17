'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import PlacardLabel from '@/components/ui/PlacardLabel';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room01_Entrance() {
  const { name, title, location, availability } = SITE_CONTENT.hero;

  return (
    <section
      id="room-1"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[#0A0A0A] px-6 py-20"
    >
      {/* Grand Foyer heading */}
      <RevealOnScroll className="text-center mb-10">
        <h1 className="font-display text-6xl md:text-8xl text-gallery-gold tracking-wide leading-tight">
          {name}
        </h1>
      </RevealOnScroll>

      {/* Subtitle placard */}
      <RevealOnScroll className="mb-12" delay={0.2}>
        <PlacardLabel title={title} />
      </RevealOnScroll>

      {/* Headshot in hero GalleryFrame */}
      <RevealOnScroll className="mb-10" delay={0.4}>
        <GalleryFrame
          size="hero"
          spotlight
          placard={{ title: name, subtitle: title }}
        >
          <img
            src="/images/shrish-headshot.png"
            alt="Shrish Manglik portrait"
            className="w-full h-auto object-cover"
          />
        </GalleryFrame>
      </RevealOnScroll>

      {/* Location & availability */}
      <RevealOnScroll className="text-center mb-16" delay={0.6}>
        <p className="font-body text-sm text-white/50 tracking-widest uppercase">
          {location}
        </p>
        <p className="font-body text-xs text-gallery-gold/70 mt-2 tracking-wider">
          {availability}
        </p>
      </RevealOnScroll>

      {/* Pulsing scroll-down chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gallery-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
