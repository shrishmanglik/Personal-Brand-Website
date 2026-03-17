'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent02_Origins() {
  const education = SITE_CONTENT.education;
  const india = education.filter((e) => e.region === 'india');
  const canada = education.filter((e) => e.region === 'canada');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Title — "The" small italic above "JOURNEY" large tracked caps */}
      <div data-reveal-heading className="text-center mb-16">
        <span className="block font-display text-lg italic text-white/40 mb-1">The</span>
        <h2
          className="font-display tracking-[0.2em] uppercase"
          style={{ color: 'var(--room-accent)', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Journey
        </h2>
      </div>

      {/* Two-column layout with archway divider */}
      <div className="w-full relative">
        {/* India Section — warm amber glow from left */}
        <div className="relative mb-8 md:mb-0 md:grid md:grid-cols-2 md:gap-16">
          {/* India column */}
          <div className="relative">
            {/* Warm amber radial from left */}
            <div
              className="absolute -left-20 top-0 bottom-0 w-[200px] pointer-events-none hidden md:block"
              style={{
                background: 'radial-gradient(ellipse at left center, rgba(212,165,116,0.06) 0%, transparent 70%)',
              }}
            />
            <p
              data-reveal
              className="font-display text-xs tracking-[4px] uppercase text-center md:text-right mb-6"
              style={{ color: 'rgba(212,165,116,0.6)' }}
            >
              India
            </p>
            <div className="space-y-4">
              {india.map((entry) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="gallery-frame spotlight p-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,240,232,0.03) 0%, rgba(42,24,16,0.08) 100%)',
                    borderColor: 'rgba(42,24,16,0.5)',
                  }}
                >
                  <p className="font-display text-sm" style={{ color: '#D4A574' }}>
                    {entry.degree}
                  </p>
                  <p className="font-body text-xs text-white/40 mt-1.5">{entry.institution}</p>
                  <p className="font-body text-[10px] text-white/25 mt-1">
                    {entry.years} &middot; GPA: {entry.gpa}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Canada column */}
          <div className="relative mt-8 md:mt-0">
            {/* Cool slate-blue radial from right */}
            <div
              className="absolute -right-20 top-0 bottom-0 w-[200px] pointer-events-none hidden md:block"
              style={{
                background: 'radial-gradient(ellipse at right center, rgba(148,163,184,0.06) 0%, transparent 70%)',
              }}
            />
            <p
              data-reveal
              className="font-display text-xs tracking-[4px] uppercase text-center md:text-left mb-6 text-white/50"
            >
              Canada
            </p>
            <div className="space-y-4">
              {canada.map((entry) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="gallery-frame spotlight p-5"
                >
                  <p className="font-display text-sm text-slate-300/90">
                    {entry.degree}
                  </p>
                  <p className="font-body text-xs text-white/40 mt-1.5">{entry.institution}</p>
                  <p className="font-body text-[10px] text-white/25 mt-1">
                    {entry.years} &middot; GPA: {entry.gpa}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Archway divider — only on desktop */}
        <div
          data-reveal
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none"
          style={{ width: '120px', height: '250px' }}
        >
          {/* Arch shape */}
          <div
            className="w-full h-full relative"
            style={{
              background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(245,240,232,0.04) 0%, transparent 100%)',
              borderRadius: '60px 60px 0 0',
              border: '1px solid rgba(201,168,76,0.15)',
              borderBottom: 'none',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[8px] tracking-[3px] uppercase text-gallery-gold/40">
                India &rarr; Canada
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
