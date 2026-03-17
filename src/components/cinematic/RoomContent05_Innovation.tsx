'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent05_Innovation() {
  const mds = SITE_CONTENT.mds;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Studio name with neon glow */}
      <h2 data-reveal-heading className="font-display text-5xl md:text-6xl text-center text-white neon-glow mb-3">
        {mds.name}
      </h2>
      <p data-reveal className="font-body text-base text-center mb-2" style={{ color: 'rgba(var(--room-accent-rgb), 0.7)' }}>
        {mds.tagline}
      </p>
      <p data-reveal className="font-body text-[10px] tracking-[3px] text-white/25 text-center mb-14">
        Founded: {mds.founded}
      </p>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mb-16">
        {mds.pillars.map((pillar) => (
          <div
            key={pillar.name}
            data-reveal
            className="p-6 rounded-sm border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            style={{ borderTopColor: `rgba(var(--room-accent-rgb), 0.3)`, borderTopWidth: '2px' }}
          >
            <h3 className="font-display text-sm mb-3" style={{ color: 'var(--room-accent)' }}>
              {pillar.name}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-4">
              {pillar.description}
            </p>
            {'range' in pillar && pillar.range && (
              <p className="font-display text-lg text-gallery-gold">{pillar.range}</p>
            )}
            {'products' in pillar && pillar.products && (
              <p className="font-body text-[10px] text-white/30 tracking-[2px] uppercase">{pillar.products}</p>
            )}
          </div>
        ))}
      </div>

      {/* MIDAS Framework */}
      <div data-reveal className="text-center max-w-2xl">
        <div className="p-8 rounded-sm border border-gallery-gold/20 bg-gallery-gold/[0.02]">
          <h3 className="font-display text-xl text-gallery-gold mb-1">{mds.midas.name}</h3>
          <p className="font-body text-[10px] text-white/30 tracking-[2px] mb-4">{mds.midas.full}</p>
          <p className="font-body text-xs text-white/40 leading-relaxed mb-6">{mds.midas.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {mds.midas.stats.map((stat) => (
              <span key={stat} className="font-display text-[9px] tracking-[1px] uppercase px-3 py-1.5 bg-gallery-placard text-gallery-black/70">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
