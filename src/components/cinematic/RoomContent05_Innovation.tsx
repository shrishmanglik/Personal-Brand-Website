'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent05_Innovation() {
  const mds = SITE_CONTENT.mds;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(79,184,255,0.04) 0%, rgba(79,184,255,0.015) 40%, transparent 70%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.3) 100%)',
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(79,184,255,0.3) 2px, rgba(79,184,255,0.3) 4px)',
        }}
      />

      {/* Decorative LED dots scattered around */}
      {[
        { top: '8%', left: '5%', delay: '0s', size: 3 },
        { top: '15%', right: '8%', delay: '1.2s', size: 2 },
        { top: '35%', left: '3%', delay: '0.6s', size: 4 },
        { top: '55%', right: '4%', delay: '2.1s', size: 2 },
        { top: '70%', left: '7%', delay: '0.3s', size: 3 },
        { top: '85%', right: '6%', delay: '1.8s', size: 2 },
        { top: '25%', left: '12%', delay: '2.5s', size: 3 },
        { top: '45%', right: '10%', delay: '0.9s', size: 4 },
        { top: '65%', left: '2%', delay: '1.5s', size: 2 },
        { top: '90%', right: '12%', delay: '3.0s', size: 3 },
        { top: '12%', left: '18%', delay: '0.4s', size: 2 },
        { top: '40%', right: '15%', delay: '1.7s', size: 3 },
        { top: '78%', left: '14%', delay: '2.8s', size: 2 },
        { top: '50%', left: '8%', delay: '3.3s', size: 4 },
        { top: '20%', right: '3%', delay: '0.2s', size: 2 },
      ].map((pos, i) => {
        const { delay, size, ...posStyle } = pos;
        return (
          <div
            key={`led-${i}`}
            className="absolute pointer-events-none"
            style={{
              ...posStyle,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: '#4FB8FF',
              boxShadow: `0 0 ${size * 2}px #4FB8FF, 0 0 ${size * 4}px rgba(79,184,255,0.4)`,
              animation: `led-blink 2.5s ease-in-out ${delay} infinite`,
            }}
          />
        );
      })}

      {/* Horizontal grid lines (tech command center feel) */}
      {[15, 35, 55, 75, 92].map((top, i) => (
        <div
          key={`hline-${i}`}
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: `${top}%`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(79,184,255,0.04) 20%, rgba(79,184,255,0.06) 50%, rgba(79,184,255,0.04) 80%, transparent 100%)',
          }}
        />
      ))}

      {/* LED blink + circuit dash keyframes */}
      <style jsx>{`
        @keyframes led-blink {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.9; }
        }
        @keyframes circuit-dash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes data-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>

      {/* Studio name with dramatic multi-layered cyan neon glow */}
      <div className="relative mb-2">
        {/* Background glow layer */}
        <div
          className="absolute inset-0 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(79,184,255,0.15) 0%, transparent 70%)',
          }}
        />
        <h2
          data-reveal-heading
          className="font-display text-5xl md:text-7xl lg:text-8xl text-center text-white relative"
          style={{
            textShadow:
              '0 0 7px rgba(79,184,255,0.9), 0 0 20px rgba(79,184,255,0.7), 0 0 40px rgba(79,184,255,0.5), 0 0 80px rgba(79,184,255,0.3), 0 0 120px rgba(79,184,255,0.15), 0 0 200px rgba(79,184,255,0.08)',
          }}
        >
          {mds.name}
        </h2>
      </div>

      {/* Tagline */}
      <p
        data-reveal
        className="font-body text-lg md:text-xl text-center mb-4 tracking-[0.15em] uppercase"
        style={{
          color: '#4FB8FF',
          textShadow: '0 0 20px rgba(79,184,255,0.3)',
        }}
      >
        {mds.tagline}
      </p>

      {/* Founded badge with pulsing ring */}
      <div data-reveal className="relative inline-flex items-center gap-3 px-6 py-2.5 mb-20 rounded-full">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(79,184,255,0.04)',
            border: '1px solid rgba(79,184,255,0.2)',
            boxShadow:
              '0 0 25px rgba(79,184,255,0.08), inset 0 0 25px rgba(79,184,255,0.03), 0 0 50px rgba(79,184,255,0.04)',
          }}
        />
        <span className="relative flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{
                background: '#4FB8FF',
                animation: 'pulse-ring 2s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{
                background: '#4FB8FF',
                boxShadow: '0 0 8px #4FB8FF',
              }}
            />
          </span>
          <span
            className="font-mono text-[10px] tracking-[3px] uppercase"
            style={{ color: 'rgba(79,184,255,0.7)' }}
          >
            Founded: {mds.founded}
          </span>
        </span>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-24 px-4">
        {mds.pillars.map((pillar, i) => (
          <div
            key={pillar.name}
            data-reveal
            className="group relative p-8 rounded-xl transition-all duration-500 cursor-default"
            style={{
              background:
                'linear-gradient(135deg, rgba(79,184,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(79,184,255,0.02) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(79,184,255,0.1)',
              borderTopWidth: '2px',
              borderTopColor: 'rgba(79,184,255,0.6)',
              boxShadow:
                '0 0 20px rgba(79,184,255,0.04), inset 0 1px 0 rgba(79,184,255,0.08)',
              backgroundImage:
                'radial-gradient(circle, rgba(79,184,255,0.05) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 0 40px rgba(79,184,255,0.18), 0 0 80px rgba(79,184,255,0.06), inset 0 1px 0 rgba(79,184,255,0.15)';
              e.currentTarget.style.borderTopColor = '#4FB8FF';
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
              e.currentTarget.style.background =
                'linear-gradient(135deg, rgba(79,184,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(79,184,255,0.04) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 0 20px rgba(79,184,255,0.04), inset 0 1px 0 rgba(79,184,255,0.08)';
              e.currentTarget.style.borderTopColor = 'rgba(79,184,255,0.6)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background =
                'linear-gradient(135deg, rgba(79,184,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(79,184,255,0.02) 100%)';
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(79,184,255,0.6), transparent)',
                boxShadow: '0 0 15px rgba(79,184,255,0.3)',
              }}
            />

            {/* Pillar number watermark */}
            <span
              className="absolute top-3 right-5 font-mono text-[56px] font-bold leading-none pointer-events-none select-none"
              style={{ color: 'rgba(79,184,255,0.04)' }}
            >
              0{i + 1}
            </span>

            {/* Corner brackets */}
            <span
              className="absolute top-2 left-2 w-3 h-3 pointer-events-none"
              style={{ borderTop: '1px solid rgba(79,184,255,0.3)', borderLeft: '1px solid rgba(79,184,255,0.3)' }}
            />
            <span
              className="absolute bottom-2 right-2 w-3 h-3 pointer-events-none"
              style={{ borderBottom: '1px solid rgba(79,184,255,0.3)', borderRight: '1px solid rgba(79,184,255,0.3)' }}
            />

            <h3
              className="font-display text-sm tracking-[0.2em] uppercase mb-4 transition-all duration-300"
              style={{
                color: '#4FB8FF',
                textShadow: '0 0 15px rgba(79,184,255,0.25)',
              }}
            >
              {pillar.name}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-6">
              {pillar.description}
            </p>
            {'range' in pillar && pillar.range && (
              <p
                className="font-display text-3xl mb-2 tracking-tight"
                style={{
                  color: '#4FB8FF',
                  textShadow:
                    '0 0 10px rgba(79,184,255,0.4), 0 0 30px rgba(79,184,255,0.2)',
                }}
              >
                {pillar.range}
              </p>
            )}
            {'products' in pillar && pillar.products && (
              <p className="font-body text-[10px] text-white/35 tracking-[2.5px] uppercase">
                {pillar.products}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* MIDAS Framework -- Blueprint style */}
      <div data-reveal className="w-full max-w-4xl px-4 relative">
        {/* Circuit-board decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top left circuit */}
          <line x1="-10" y1="15" x2="50" y2="15" stroke="rgba(79,184,255,0.15)" strokeWidth="1" />
          <line x1="50" y1="15" x2="50" y2="-10" stroke="rgba(79,184,255,0.15)" strokeWidth="1" />
          <circle cx="50" cy="15" r="2.5" fill="rgba(79,184,255,0.25)" />
          <circle cx="-10" cy="15" r="1.5" fill="rgba(79,184,255,0.2)" />

          {/* Top right circuit */}
          <line x1="100%" y1="25" x2="100%" y2="25" stroke="rgba(79,184,255,0.15)" strokeWidth="1" style={{ transform: 'translateX(-50px)' }} />

          {/* Bottom decorative dashed lines with animation */}
          <line
            x1="15"
            y1="100%"
            x2="80"
            y2="100%"
            stroke="rgba(79,184,255,0.12)"
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{ animation: 'circuit-dash 3s linear infinite', transform: 'translateY(-5px)' }}
          />
          <line
            x1="100%"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke="rgba(79,184,255,0.12)"
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{
              animation: 'circuit-dash 3s linear infinite',
              transform: 'translate(-80px, -5px)',
              width: '65px',
            }}
          />

          {/* Left side vertical circuit trace */}
          <line x1="-5" y1="40" x2="-5" y2="90%" stroke="rgba(79,184,255,0.06)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="-5" cy="40" r="1.5" fill="rgba(79,184,255,0.15)" />

          {/* Right side vertical circuit trace */}
          <line x1="100%" y1="50" x2="100%" y2="85%" stroke="rgba(79,184,255,0.06)" strokeWidth="1" strokeDasharray="2 6" style={{ transform: 'translateX(5px)' }} />
        </svg>

        <div
          className="p-12 rounded-xl relative"
          style={{
            background:
              'linear-gradient(180deg, rgba(79,184,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(79,184,255,0.02) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(79,184,255,0.15)',
            backgroundImage:
              'radial-gradient(circle, rgba(79,184,255,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            boxShadow:
              '0 0 60px rgba(79,184,255,0.05), inset 0 0 80px rgba(79,184,255,0.02), 0 0 120px rgba(79,184,255,0.02)',
          }}
        >
          {/* Corner accents (larger, more prominent) */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map(
            (pos, i) => (
              <span
                key={`corner-${i}`}
                className={`absolute ${pos} w-6 h-6 pointer-events-none`}
                style={{
                  borderColor: 'rgba(79,184,255,0.35)',
                  borderStyle: 'solid',
                  borderWidth: '0',
                  ...(pos.includes('top') && pos.includes('left')
                    ? { borderTopWidth: '2px', borderLeftWidth: '2px' }
                    : {}),
                  ...(pos.includes('top') && pos.includes('right')
                    ? { borderTopWidth: '2px', borderRightWidth: '2px' }
                    : {}),
                  ...(pos.includes('bottom') && pos.includes('left')
                    ? { borderBottomWidth: '2px', borderLeftWidth: '2px' }
                    : {}),
                  ...(pos.includes('bottom') && pos.includes('right')
                    ? { borderBottomWidth: '2px', borderRightWidth: '2px' }
                    : {}),
                }}
              />
            )
          )}

          {/* Inner glow line at top */}
          <div
            className="absolute top-0 left-[15%] right-[15%] h-[1px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(79,184,255,0.4), transparent)',
            }}
          />

          <div className="text-center">
            {/* Blueprint label */}
            <span
              className="inline-block font-mono text-[9px] tracking-[4px] uppercase px-4 py-1 mb-4 rounded"
              style={{
                border: '1px solid rgba(79,184,255,0.15)',
                color: 'rgba(79,184,255,0.4)',
                background: 'rgba(79,184,255,0.03)',
              }}
            >
              System Blueprint
            </span>

            <h3
              className="font-display text-3xl md:text-4xl mb-3"
              style={{
                color: '#4FB8FF',
                textShadow:
                  '0 0 10px rgba(79,184,255,0.6), 0 0 30px rgba(79,184,255,0.35), 0 0 60px rgba(79,184,255,0.15), 0 0 100px rgba(79,184,255,0.08)',
              }}
            >
              {mds.midas.name}
            </h3>
            <p
              className="font-mono text-[10px] text-white/30 tracking-[3px] mb-6 uppercase"
              style={{ letterSpacing: '0.25em' }}
            >
              {mds.midas.full}
            </p>

            {/* Divider */}
            <div
              className="w-24 h-[1px] mx-auto mb-6"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(79,184,255,0.4), transparent)',
              }}
            />

            <p className="font-body text-sm text-white/40 leading-relaxed mb-10 max-w-xl mx-auto">
              {mds.midas.description}
            </p>

            {/* Stats as metric badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {mds.midas.stats.map((stat) => (
                <span
                  key={stat}
                  className="font-mono text-[10px] tracking-[1.5px] uppercase px-5 py-2.5 rounded-md transition-all duration-300 cursor-default"
                  style={{
                    border: '1px solid rgba(79,184,255,0.25)',
                    color: 'rgba(79,184,255,0.75)',
                    background:
                      'linear-gradient(135deg, rgba(79,184,255,0.06) 0%, rgba(79,184,255,0.02) 100%)',
                    boxShadow: '0 0 15px rgba(79,184,255,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79,184,255,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(79,184,255,0.12)';
                    e.currentTarget.style.color = '#4FB8FF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79,184,255,0.25)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(79,184,255,0.05)';
                    e.currentTarget.style.color = 'rgba(79,184,255,0.75)';
                    e.currentTarget.style.transform = 'translateY(0)';
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
