'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent02_Origins() {
  const education = SITE_CONTENT.education;
  const india = education.filter((e) => e.region === 'india');
  const canada = education.filter((e) => e.region === 'canada');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Section title */}
      <h2 data-reveal-heading className="font-display text-5xl md:text-6xl text-center mb-3" style={{ color: 'var(--room-accent)' }}>
        The Journey
      </h2>
      <p data-reveal className="font-body text-xs tracking-[6px] uppercase text-white/30 text-center mb-16">
        India &rarr; Canada
      </p>

      {/* Two-column layout with timeline connector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full relative">
        {/* Center timeline line */}
        <div data-reveal-line className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] origin-top" style={{ background: 'linear-gradient(to bottom, transparent, rgba(var(--room-accent-rgb), 0.2), transparent)' }} />

        {/* India column */}
        <div className="space-y-6">
          <p data-reveal className="font-display text-sm tracking-[4px] uppercase text-center md:text-right" style={{ color: 'rgba(var(--room-accent-rgb), 0.6)' }}>
            India
          </p>
          {india.map((entry, i) => (
            <div
              key={entry.id}
              data-reveal
              className="p-5 rounded-sm border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
              style={{ borderLeftColor: `rgba(var(--room-accent-rgb), 0.3)`, borderLeftWidth: '2px' }}
            >
              <p className="font-display text-sm" style={{ color: 'var(--room-accent)' }}>
                {entry.degree}
              </p>
              <p className="font-body text-xs text-white/40 mt-1.5">{entry.institution}</p>
              <p className="font-body text-[10px] text-white/25 mt-1">
                {entry.years} &middot; GPA: {entry.gpa}
              </p>
            </div>
          ))}
        </div>

        {/* Canada column */}
        <div className="space-y-6">
          <p data-reveal className="font-display text-sm tracking-[4px] uppercase text-center md:text-left text-white/50">
            Canada
          </p>
          {canada.map((entry, i) => (
            <div
              key={entry.id}
              data-reveal
              className="p-5 rounded-sm border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
              style={{ borderLeftColor: 'rgba(148,163,184,0.3)', borderLeftWidth: '2px' }}
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
  );
}
