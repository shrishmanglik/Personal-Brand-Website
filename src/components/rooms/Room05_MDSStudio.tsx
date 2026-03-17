'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import PlacardLabel from '@/components/ui/PlacardLabel';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room05_MDSStudio() {
  const mds = SITE_CONTENT.mds;

  return (
    <section
      id="room-5"
      className="min-h-screen relative bg-gradient-to-b from-gallery-black via-blue-950/10 to-gallery-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Studio Title */}
        <RevealOnScroll className="text-center mb-16">
          <h2 className="neon-glow text-3xl md:text-5xl font-display text-white mb-4">
            {mds.name}
          </h2>
          <p className="font-body text-lg text-white/70 mb-2">{mds.tagline}</p>
          <p className="font-body text-sm text-white/40">
            Founded: {mds.founded}
          </p>
        </RevealOnScroll>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mds.pillars.map((pillar, index) => (
            <RevealOnScroll key={pillar.name} delay={index * 0.15}>
              <GalleryFrame
                size="medium"
                placard={{ title: pillar.name }}
                spotlight
                className="h-full"
              >
                <p className="font-body text-sm text-white/70 mb-4">
                  {pillar.description}
                </p>
                {'range' in pillar && pillar.range && (
                  <p className="font-display text-gallery-gold text-lg">
                    {pillar.range}
                  </p>
                )}
                {'products' in pillar && pillar.products && (
                  <p className="font-body text-xs text-white/50 tracking-wider uppercase">
                    {pillar.products}
                  </p>
                )}
              </GalleryFrame>
            </RevealOnScroll>
          ))}
        </div>

        {/* MIDAS Framework */}
        <RevealOnScroll className="text-center mb-10">
          <h3 className="font-display text-2xl md:text-3xl text-gallery-gold mb-3">
            {mds.midas.name}
          </h3>
          <p className="font-body text-sm text-white/50 max-w-2xl mx-auto mb-2">
            {mds.midas.full}
          </p>
          <p className="font-body text-sm text-white/60 max-w-3xl mx-auto">
            {mds.midas.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {mds.midas.stats.map((stat) => (
              <PlacardLabel key={stat} title={stat} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
