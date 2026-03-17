'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room03_Enterprise() {
  const career = SITE_CONTENT.career;
  const smallEntries = career.filter((c) => c.size === 'small');
  const mediumEntries = career.filter((c) => c.size === 'medium');
  const heroEntry = career.find((c) => c.size === 'hero');

  return (
    <section
      id="room-3"
      className="min-h-screen relative bg-[#0A0A0A] px-6 py-24"
    >
      {/* Section title */}
      <RevealOnScroll className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl text-gallery-gold tracking-wide">
          The Enterprise Wing
        </h2>
      </RevealOnScroll>

      {/* Small frames grouped */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {smallEntries.map((entry, i) => (
            <RevealOnScroll key={entry.id} delay={i * 0.1}>
              <GalleryFrame
                size="small"
                placard={{
                  title: entry.role,
                  subtitle: entry.company,
                  date: entry.years,
                }}
                className="mx-auto"
              >
                <div className="py-4 px-3 text-center">
                  <p className="font-display text-sm text-gallery-gold/80">
                    {entry.role}
                  </p>
                  <p className="font-body text-xs text-white/50 mt-1">
                    {entry.company}
                  </p>
                  {'highlight' in entry && entry.highlight && (
                    <p className="font-body text-xs text-gallery-gold/50 mt-2 italic">
                      {entry.highlight}
                    </p>
                  )}
                </div>
              </GalleryFrame>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Medium frames */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mediumEntries.map((entry, i) => (
            <RevealOnScroll key={entry.id} delay={0.3 + i * 0.15}>
              <GalleryFrame
                size="medium"
                placard={{
                  title: entry.role,
                  subtitle: entry.company,
                  date: entry.years,
                }}
                className="mx-auto"
              >
                <div className="py-6 px-4 text-center">
                  <p className="font-display text-lg text-gallery-gold/90">
                    {entry.role}
                  </p>
                  <p className="font-body text-sm text-white/50 mt-2">
                    {entry.company}
                  </p>
                  {'highlight' in entry && entry.highlight && (
                    <p className="font-body text-xs text-gallery-gold/50 mt-3 italic">
                      {entry.highlight}
                    </p>
                  )}
                </div>
              </GalleryFrame>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Hero frame — TELUS */}
      {heroEntry && (
        <div className="max-w-3xl mx-auto mb-20">
          <RevealOnScroll delay={0.6}>
            <GalleryFrame
              size="hero"
              spotlight
              placard={{
                title: heroEntry.role,
                subtitle: `${heroEntry.company} — ${heroEntry.highlight ?? ''}`,
                date: `${heroEntry.years} • Step closer to explore this story →`,
              }}
              className="mx-auto"
            >
              <div className="py-10 px-6 text-center">
                <p className="font-display text-2xl md:text-3xl text-gallery-gold">
                  {heroEntry.role}
                </p>
                <p className="font-body text-base text-white/60 mt-3">
                  {heroEntry.company}
                </p>
                {'highlight' in heroEntry && heroEntry.highlight && (
                  <p className="font-body text-sm text-gallery-gold/70 mt-4 italic">
                    {heroEntry.highlight}
                  </p>
                )}
              </div>
            </GalleryFrame>
          </RevealOnScroll>
        </div>
      )}

      {/* Narrative quote */}
      <RevealOnScroll className="max-w-3xl mx-auto text-center mt-10" delay={0.8}>
        <blockquote className="font-body text-base md:text-lg text-white/40 italic leading-relaxed border-l-2 border-gallery-gold/30 pl-6 text-left">
          &ldquo;From customer support in Kerala to managing enterprise benefits
          portfolios worth millions in Toronto — every role was a room in the
          gallery of becoming.&rdquo;
        </blockquote>
      </RevealOnScroll>
    </section>
  );
}
