'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room02_Origins() {
  const education = SITE_CONTENT.education;
  const indiaEntries = education.filter((e) => e.region === 'india');
  const canadaEntries = education.filter((e) => e.region === 'canada');

  return (
    <section
      id="room-2"
      className="min-h-screen relative bg-[#0A0A0A] px-6 py-24"
    >
      {/* Section title */}
      <RevealOnScroll className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl text-gallery-gold tracking-wide">
          The Journey: India &rarr; Canada
        </h2>
      </RevealOnScroll>

      {/* India section */}
      <div className="max-w-4xl mx-auto mb-16">
        <RevealOnScroll className="mb-10">
          <h3 className="font-display text-2xl text-amber-400/90 tracking-wider text-center">
            India
          </h3>
        </RevealOnScroll>

        <div className="space-y-10">
          {indiaEntries.map((entry, i) => (
            <RevealOnScroll key={entry.id} delay={i * 0.15}>
              <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-lg p-6">
                <GalleryFrame
                  size="medium"
                  placard={{
                    title: entry.degree,
                    subtitle: entry.institution,
                    date: `${entry.years} | GPA: ${entry.gpa}`,
                  }}
                  className="mx-auto"
                >
                  <div className="py-6 px-4 text-center">
                    <p className="font-display text-lg text-gallery-gold/90">
                      {entry.degree}
                    </p>
                    <p className="font-body text-sm text-white/60 mt-2">
                      {entry.institution}
                    </p>
                    <p className="font-body text-xs text-white/40 mt-1">
                      {entry.years}
                    </p>
                  </div>
                </GalleryFrame>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Archway divider */}
      <RevealOnScroll className="flex justify-center my-16">
        <div className="relative w-40 h-24">
          <div
            className="absolute inset-0 border-t-[3px] border-l-[3px] border-r-[3px] border-gallery-gold/40 rounded-t-full"
          />
          <div className="absolute bottom-0 left-0 w-[3px] h-6 bg-gallery-gold/40" />
          <div className="absolute bottom-0 right-0 w-[3px] h-6 bg-gallery-gold/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-display text-xs text-gallery-gold/50 tracking-[0.3em] uppercase">
              Crossing
            </span>
          </div>
        </div>
      </RevealOnScroll>

      {/* Canada section */}
      <div className="max-w-4xl mx-auto mt-16">
        <RevealOnScroll className="mb-10">
          <h3 className="font-display text-2xl text-slate-300/90 tracking-wider text-center">
            Canada
          </h3>
        </RevealOnScroll>

        <div className="space-y-10">
          {canadaEntries.map((entry, i) => (
            <RevealOnScroll key={entry.id} delay={i * 0.15}>
              <div className="bg-gradient-to-br from-slate-700/20 to-slate-600/10 rounded-lg p-6">
                <GalleryFrame
                  size="medium"
                  placard={{
                    title: entry.degree,
                    subtitle: entry.institution,
                    date: `${entry.years} | GPA: ${entry.gpa}`,
                  }}
                  className="mx-auto"
                >
                  <div className="py-6 px-4 text-center">
                    <p className="font-display text-lg text-gallery-gold/90">
                      {entry.degree}
                    </p>
                    <p className="font-body text-sm text-white/60 mt-2">
                      {entry.institution}
                    </p>
                    <p className="font-body text-xs text-white/40 mt-1">
                      {entry.years}
                    </p>
                  </div>
                </GalleryFrame>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
