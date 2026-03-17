'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import RevealOnScroll from '@/components/effects/RevealOnScroll';
import TypewriterText from '@/components/effects/TypewriterText';

export default function Room04_TelusHealth() {
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <section
      id="room-4"
      className="min-h-screen relative bg-[#0A0A0A] px-6 py-24"
    >
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-amber-950/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Wall 1 — Role title */}
        <RevealOnScroll className="max-w-3xl mx-auto mb-24">
          <GalleryFrame
            size="large"
            spotlight
            placard={{
              title,
              date: period,
            }}
            className="mx-auto"
          >
            <div className="py-12 px-8 text-center">
              <h2 className="font-display text-3xl md:text-5xl text-gallery-gold leading-tight">
                {title}
              </h2>
              <p className="font-body text-sm text-white/40 mt-4 tracking-wider">
                {period}
              </p>
            </div>
          </GalleryFrame>
        </RevealOnScroll>

        {/* Wall 2 — 2x2 grid of pieces */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {pieces.map((piece, i) => (
              <RevealOnScroll key={piece.title} delay={i * 0.15}>
                <GalleryFrame
                  size="medium"
                  placard={{ title: piece.title }}
                  className="mx-auto h-full"
                >
                  <div className="py-6 px-5">
                    <h3 className="font-display text-lg text-gallery-gold/90 mb-3">
                      {piece.title}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                </GalleryFrame>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Wall 3 — Large typographic quote with typewriter effect */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-body text-xl md:text-2xl text-white/50 italic leading-relaxed">
            &ldquo;
            <TypewriterText
              text={quote}
              speed={25}
              className="inline"
            />
            &rdquo;
          </blockquote>
          <div className="mt-6 w-16 h-[2px] bg-gallery-gold/30 mx-auto" />
        </div>
      </div>
    </section>
  );
}
