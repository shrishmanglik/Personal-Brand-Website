'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent03_Enterprise() {
  const career = SITE_CONTENT.career;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h2 data-reveal-heading className="font-display text-5xl md:text-6xl text-center mb-16" style={{ color: 'var(--room-accent)' }}>
        The Enterprise Wing
      </h2>

      {/* Career timeline */}
      <div className="relative w-full max-w-2xl">
        {/* Vertical timeline line */}
        <div data-reveal-line className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] origin-top" style={{ background: 'linear-gradient(to bottom, transparent, rgba(var(--room-accent-rgb), 0.15), transparent)' }} />

        <div className="space-y-8">
          {career.map((entry, i) => {
            const isHero = entry.size === 'hero';
            const isRight = i % 2 === 1;

            return (
              <div
                key={entry.id}
                data-reveal
                className={`relative pl-14 md:pl-0 ${isRight ? 'md:ml-[52%]' : 'md:mr-[52%] md:text-right'}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 w-3 h-3 rounded-full border"
                  style={{
                    borderColor: isHero ? '#C9A84C' : 'rgba(var(--room-accent-rgb), 0.3)',
                    background: isHero ? '#C9A84C' : 'transparent',
                    boxShadow: isHero ? '0 0 12px rgba(201,168,76,0.4)' : 'none',
                    left: undefined,
                  }}
                />

                {/* Card */}
                <div
                  className={`p-5 rounded-sm border backdrop-blur-sm ${
                    isHero
                      ? 'border-gallery-gold/30 bg-gallery-gold/[0.03]'
                      : 'border-white/[0.06] bg-white/[0.02]'
                  }`}
                >
                  <p className={`font-display ${isHero ? 'text-lg text-gallery-gold' : 'text-sm'}`} style={!isHero ? { color: 'var(--room-accent)' } : undefined}>
                    {entry.role}
                  </p>
                  <p className="font-body text-xs text-white/40 mt-1.5">
                    {entry.company} &middot; {entry.years}
                  </p>
                  {entry.highlight && (
                    <p className={`font-body text-[11px] mt-2 italic ${isHero ? 'text-gallery-gold/60' : 'text-white/25'}`}>
                      {entry.highlight}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote */}
      <blockquote data-reveal className="max-w-lg text-center mt-16">
        <p className="font-body text-xs text-white/25 italic leading-relaxed">
          &ldquo;From customer support in Kerala to managing enterprise benefits portfolios worth millions in Toronto — every role was a room in the gallery of becoming.&rdquo;
        </p>
        <div className="w-8 h-[1px] bg-white/10 mx-auto mt-4" />
      </blockquote>
    </div>
  );
}
