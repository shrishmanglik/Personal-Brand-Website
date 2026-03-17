'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

const SKILL_COLUMNS = [
  { title: 'AI & Intelligence', key: 'ai' as const },
  { title: 'Engineering & Data', key: 'engineering' as const },
  { title: 'Strategy & Operations', key: 'strategy' as const },
];

export default function Room07_Capabilities() {
  const skills = SITE_CONTENT.skills;

  return (
    <section
      id="room-7"
      className="min-h-screen relative bg-gallery-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-gallery-gold mb-4">
            The Workshop
          </h2>
        </RevealOnScroll>

        {/* Three glass display cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_COLUMNS.map((column, colIndex) => (
            <RevealOnScroll key={column.key} delay={colIndex * 0.15}>
              <div className="glass-case rounded-lg p-6">
                <h3 className="font-display text-lg text-gallery-gold mb-4 text-center">
                  {column.title}
                </h3>
                <div className="flex flex-wrap justify-center">
                  {skills[column.key].map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 text-xs font-body border border-white/10 rounded-full text-white/70 bg-white/5 m-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Certification */}
        <RevealOnScroll delay={0.3} className="flex justify-center">
          <GalleryFrame
            size="small"
            placard={{
              title: 'Google Data Analytics Professional Certificate',
              subtitle: 'Professional Certification',
            }}
          >
            <p className="font-body text-sm text-white/60 text-center">
              Google Data Analytics Professional Certificate
            </p>
          </GalleryFrame>
        </RevealOnScroll>
      </div>
    </section>
  );
}
