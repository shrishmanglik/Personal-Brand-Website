'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent05_Innovation() {
  const mds = SITE_CONTENT.mds;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.3) 100%)',
        }}
      />

      {/* Decorative LED dots scattered around */}
      {[
        { top: '8%', left: '5%', delay: '0s' },
        { top: '15%', right: '8%', delay: '1.2s' },
        { top: '35%', left: '3%', delay: '0.6s' },
        { top: '55%', right: '4%', delay: '2.1s' },
        { top: '70%', left: '7%', delay: '0.3s' },
        { top: '85%', right: '6%', delay: '1.8s' },
        { top: '25%', left: '12%', delay: '2.5s' },
        { top: '45%', right: '10%', delay: '0.9s' },
        { top: '65%', left: '2%', delay: '1.5s' },
        { top: '90%', right: '12%', delay: '3.0s' },
      ].map((pos, i) => (
        <div
          key={`led-${i}`}
          className="absolute pointer-events-none"
          style={{
            ...pos,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: '#4FB8FF',
            boxShadow: '0 0 6px #4FB8FF, 0 0 12px rgba(79,184,255,0.4)',
            animation: `led-blink 2.5s ease-in-out ${pos.delay} infinite`,
          }}
        />
      ))}

      {/* LED blink keyframes */}
      <style jsx>{`
        @keyframes led-blink {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.8; }
        }
        @keyframes circuit-dash {
          to { stroke-dashoffset: -40; }
        }
      `}</style>

      {/* Studio name with dramatic cyan neon glow */}
      <h2
        data-reveal-heading
        className="font-display text-5xl md:text-7xl text-center text-white mb-4 relative"
        style={{
          textShadow:
            '0 0 7px rgba(79,184,255,0.8), 0 0 20px rgba(79,184,255,0.6), 0 0 40px rgba(79,184,255,0.4), 0 0 80px rgba(79,184,255,0.2), 0 0 120px rgba(79,184,255,0.1)',
        }}
      >
        {mds.name}
      </h2>

      {/* Tagline */}
      <p
        data-reveal
        className="font-body text-lg md:text-xl text-center mb-4 tracking-wide"
        style={{ color: '#4FB8FF' }}
      >
        {mds.tagline}
      </p>

      {/* Founded badge */}
      <div
        data-reveal
        className="inline-flex items-center gap-2 px-5 py-2 mb-16 rounded-full"
        style={{
          background: 'rgba(79,184,255,0.05)',
          border: '1px solid rgba(79,184,255,0.2)',
          boxShadow: '0 0 20px rgba(79,184,255,0.08), inset 0 0 20px rgba(79,184,255,0.03)',
        }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: '#4FB8FF',
            boxShadow: '0 0 6px #4FB8FF',
          }}
        />
        <span className="font-mono text-[10px] tracking-[3px] uppercase" style={{ color: 'rgba(79,184,255,0.6)' }}>
          Founded: {mds.founded}
        </span>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-20 px-4">
        {mds.pillars.map((pillar, i) => (
          <div
            key={pillar.name}
            data-reveal
            className="group relative p-7 rounded-lg transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(79,184,255,0.1)',
              borderTopWidth: '2px',
              borderTopColor: 'rgba(79,184,255,0.5)',
              boxShadow: '0 0 15px rgba(79,184,255,0.03)',
              backgroundImage:
                'radial-gradient(circle, rgba(79,184,255,0.04) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(79,184,255,0.15), 0 0 60px rgba(79,184,255,0.05)';
              e.currentTarget.style.borderTopColor = '#4FB8FF';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(79,184,255,0.03)';
              e.currentTarget.style.borderTopColor = 'rgba(79,184,255,0.5)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Pillar number watermark */}
            <span
              className="absolute top-3 right-4 font-mono text-[40px] font-bold leading-none pointer-events-none select-none"
              style={{ color: 'rgba(79,184,255,0.04)' }}
            >
              0{i + 1}
            </span>

            <h3 className="font-display text-sm tracking-widest uppercase mb-3" style={{ color: '#4FB8FF' }}>
              {pillar.name}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-5">
              {pillar.description}
            </p>
            {'range' in pillar && pillar.range && (
              <p
                className="font-display text-2xl mb-1"
                style={{
                  color: '#4FB8FF',
                  textShadow: '0 0 20px rgba(79,184,255,0.3)',
                }}
              >
                {pillar.range}
              </p>
            )}
            {'products' in pillar && pillar.products && (
              <p className="font-body text-[10px] text-white/35 tracking-[2px] uppercase">
                {pillar.products}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* MIDAS Framework — Blueprint style */}
      <div data-reveal className="w-full max-w-3xl px-4 relative">
        {/* Circuit-board decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top left circuit */}
          <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(79,184,255,0.12)" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="0" stroke="rgba(79,184,255,0.12)" strokeWidth="1" />
          <circle cx="40" cy="20" r="2" fill="rgba(79,184,255,0.2)" />
          {/* Top right circuit */}
          <line x1="100%" y1="20" x2="calc(100% - 40px)" y2="20" stroke="rgba(79,184,255,0.12)" strokeWidth="1" style={{ transform: 'translateX(-40px)' }} />
          {/* Bottom decorative lines */}
          <line x1="20" y1="100%" x2="60" y2="100%" stroke="rgba(79,184,255,0.08)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'circuit-dash 3s linear infinite' }} />
          <line x1="calc(100% - 60px)" y1="100%" x2="calc(100% - 20px)" y2="100%" stroke="rgba(79,184,255,0.08)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'circuit-dash 3s linear infinite' }} />
        </svg>

        <div
          className="p-10 rounded-lg relative"
          style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(79,184,255,0.15)',
            backgroundImage:
              'radial-gradient(circle, rgba(79,184,255,0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            boxShadow: '0 0 40px rgba(79,184,255,0.04), inset 0 0 60px rgba(79,184,255,0.02)',
          }}
        >
          {/* Corner accents */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
            <span
              key={`corner-${i}`}
              className={`absolute ${pos} w-4 h-4 pointer-events-none`}
              style={{
                borderColor: 'rgba(79,184,255,0.3)',
                borderStyle: 'solid',
                borderWidth: '0',
                ...(pos.includes('top') && pos.includes('left') ? { borderTopWidth: '1px', borderLeftWidth: '1px' } : {}),
                ...(pos.includes('top') && pos.includes('right') ? { borderTopWidth: '1px', borderRightWidth: '1px' } : {}),
                ...(pos.includes('bottom') && pos.includes('left') ? { borderBottomWidth: '1px', borderLeftWidth: '1px' } : {}),
                ...(pos.includes('bottom') && pos.includes('right') ? { borderBottomWidth: '1px', borderRightWidth: '1px' } : {}),
              }}
            />
          ))}

          <div className="text-center">
            <h3
              className="font-display text-2xl md:text-3xl mb-2"
              style={{
                color: '#4FB8FF',
                textShadow: '0 0 10px rgba(79,184,255,0.5), 0 0 30px rgba(79,184,255,0.3), 0 0 60px rgba(79,184,255,0.15)',
              }}
            >
              {mds.midas.name}
            </h3>
            <p className="font-mono text-[10px] text-white/30 tracking-[3px] mb-5 uppercase">
              {mds.midas.full}
            </p>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-8 max-w-lg mx-auto">
              {mds.midas.description}
            </p>

            {/* Stats as metric badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {mds.midas.stats.map((stat) => (
                <span
                  key={stat}
                  className="font-mono text-[10px] tracking-[1px] uppercase px-4 py-2 rounded"
                  style={{
                    border: '1px solid rgba(79,184,255,0.25)',
                    color: 'rgba(79,184,255,0.7)',
                    background: 'rgba(79,184,255,0.04)',
                    boxShadow: '0 0 10px rgba(79,184,255,0.05)',
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
