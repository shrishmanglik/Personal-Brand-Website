'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent05_Innovation() {
  const mds = SITE_CONTENT.mds;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* Bottom gradient: transition from blue-black back to warm */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.3) 100%)',
        }}
      />

      {/* Studio name with enhanced neon glow */}
      <h2
        data-reveal-heading
        className="font-display text-5xl md:text-6xl text-center text-white mb-3"
        style={{
          textShadow:
            '0 0 10px rgba(79,184,255,0.5), 0 0 30px rgba(79,184,255,0.3), 0 0 60px rgba(79,184,255,0.15), 0 0 100px rgba(79,184,255,0.05)',
        }}
      >
        {mds.name}
      </h2>
      <p
        data-reveal
        className="font-body text-base text-center mb-2"
        style={{ color: 'rgba(79,184,255,0.7)' }}
      >
        {mds.tagline}
      </p>
      <p data-reveal className="font-body text-[10px] tracking-[3px] text-white/25 text-center mb-14">
        Founded: {mds.founded}
      </p>

      {/* Three pillars — display cases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mb-16">
        {mds.pillars.map((pillar) => (
          <div
            key={pillar.name}
            data-reveal
            className="display-case p-6"
            style={{ borderTopColor: 'rgba(79,184,255,0.3)', borderTopWidth: '2px' }}
          >
            <h3 className="font-display text-sm mb-3" style={{ color: '#4FB8FF' }}>
              {pillar.name}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-4">
              {pillar.description}
            </p>
            {'range' in pillar && pillar.range && (
              <p className="font-display text-lg" style={{ color: '#4FB8FF' }}>
                {pillar.range}
              </p>
            )}
            {'products' in pillar && pillar.products && (
              <p className="font-body text-[10px] text-white/30 tracking-[2px] uppercase">
                {pillar.products}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* MIDAS Framework — blueprint aesthetic */}
      <div data-reveal className="text-center max-w-2xl">
        <div
          className="p-8 gallery-frame relative"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(79,184,255,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <h3
            className="font-display text-xl mb-1"
            style={{ color: '#4FB8FF' }}
          >
            {mds.midas.name}
          </h3>
          <p className="font-mono text-[10px] text-white/30 tracking-[2px] mb-4">
            {mds.midas.full}
          </p>
          <p className="font-body text-xs text-white/40 leading-relaxed mb-6">
            {mds.midas.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {mds.midas.stats.map((stat) => (
              <span
                key={stat}
                className="font-mono text-[9px] tracking-[1px] uppercase px-3 py-1.5 border border-[rgba(79,184,255,0.2)] text-[rgba(79,184,255,0.6)]"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
