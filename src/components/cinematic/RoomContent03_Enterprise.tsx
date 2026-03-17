'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent03_Enterprise() {
  const career = SITE_CONTENT.career;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* Ambient background glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'rgba(201,168,76,0.04)' }}
      />

      {/* Title */}
      <div data-reveal-heading className="text-center mb-20">
        <span className="block font-display text-lg italic text-white/35 mb-2">The</span>
        <h2
          className="font-display tracking-[0.2em] uppercase"
          style={{ color: 'var(--room-accent)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Enterprise Wing
        </h2>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3))' }} />
          <span className="font-display text-[10px] tracking-[5px] uppercase text-gallery-gold/25">
            Career Progression
          </span>
          <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.3))' }} />
        </div>
      </div>

      {/* Career timeline */}
      <div className="relative w-full max-w-3xl px-4">
        {/* Vertical glowing timeline line */}
        <div
          data-reveal-line
          className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 origin-top"
          style={{ width: '2px' }}
        >
          {/* Core line */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.5) 50%, rgba(201,168,76,0.3) 90%, transparent 100%)',
            }}
          />
          {/* Glow aura */}
          <div
            className="absolute inset-0 -left-[4px] -right-[4px]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.1) 10%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.1) 90%, transparent 100%)',
              filter: 'blur(4px)',
            }}
          />
        </div>

        <div className="space-y-12">
          {career.map((entry, i) => {
            const isHero = entry.size === 'hero';
            const isSmall = entry.size === 'small';
            const isMedium = entry.size === 'medium';
            const isRight = i % 2 === 1;

            return (
              <div
                key={entry.id}
                data-reveal
                className={`relative pl-20 md:pl-0 ${
                  isRight ? 'md:ml-[54%]' : 'md:mr-[54%] md:text-right'
                }`}
              >
                {/* Year marker */}
                <div
                  className={`absolute top-3 font-display text-[10px] tracking-[2px] text-gallery-gold/30 hidden md:block ${
                    isRight ? 'right-[calc(100%+28px)]' : 'left-[calc(100%+28px)]'
                  }`}
                >
                  {entry.years.split('–')[0]}
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-[26px] md:left-1/2 md:-translate-x-1/2 top-4 rounded-full ${
                    isHero ? 'glow-gold' : ''
                  }`}
                  style={{
                    width: isHero ? '16px' : isSmall ? '8px' : '10px',
                    height: isHero ? '16px' : isSmall ? '8px' : '10px',
                    border: `2px solid ${isHero ? '#C9A84C' : 'rgba(201,168,76,0.25)'}`,
                    background: isHero ? '#C9A84C' : 'rgba(201,168,76,0.08)',
                    boxShadow: isHero
                      ? '0 0 20px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.2)'
                      : 'none',
                    animation: isHero ? 'timelinePulse 2.5s ease-in-out infinite' : 'none',
                  }}
                />

                {/* Connecting line from dot to card */}
                <div
                  className={`absolute top-[18px] hidden md:block ${
                    isRight ? 'right-full mr-[6px]' : 'left-full ml-[6px]'
                  }`}
                  style={{
                    width: '20px',
                    height: '1px',
                    background: isHero
                      ? 'rgba(201,168,76,0.4)'
                      : 'rgba(201,168,76,0.15)',
                  }}
                />

                {/* Card */}
                <div
                  className={`glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 rounded-lg ${
                    isHero
                      ? 'p-8 gradient-border'
                      : isMedium
                        ? 'p-6'
                        : 'p-4'
                  } ${
                    isSmall
                      ? 'md:max-w-[260px]'
                      : isHero
                        ? 'md:max-w-[520px]'
                        : 'md:max-w-[340px]'
                  } ${isRight ? '' : 'md:ml-auto'}`}
                  style={{
                    borderLeft: isRight || !isHero ? `3px solid rgba(201,168,76,${isHero ? '0.5' : '0.15'})` : undefined,
                    borderRight: !isRight && !isHero ? `3px solid rgba(201,168,76,0.15)` : undefined,
                    ...(isHero
                      ? {
                          boxShadow:
                            '0 0 40px rgba(201,168,76,0.08), 0 8px 32px rgba(0,0,0,0.4)',
                        }
                      : {}),
                  }}
                >
                  {/* Hero card: CURRENT badge */}
                  {isHero && (
                    <div className="absolute top-4 right-4">
                      <span
                        className="inline-flex items-center gap-1.5 font-display text-[9px] tracking-[3px] uppercase px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(201,168,76,0.1)',
                          border: '1px solid rgba(201,168,76,0.3)',
                          color: '#C9A84C',
                          boxShadow: '0 0 12px rgba(201,168,76,0.15)',
                          animation: 'badgeGlow 3s ease-in-out infinite',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: '#C9A84C',
                            boxShadow: '0 0 6px rgba(201,168,76,0.6)',
                            animation: 'timelinePulse 2s ease-in-out infinite',
                          }}
                        />
                        CURRENT
                      </span>
                    </div>
                  )}

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, rgba(201,168,76,${isHero ? '0.06' : '0.03'}) 0%, transparent 60%)`,
                      borderRadius: 'inherit',
                    }}
                  />

                  <p
                    className={`font-display relative ${
                      isHero ? 'text-xl text-gallery-gold pr-24' : isMedium ? 'text-base' : 'text-sm'
                    }`}
                    style={!isHero ? { color: 'var(--room-accent)' } : undefined}
                  >
                    {entry.role}
                  </p>
                  <p className={`font-body text-white/45 mt-2 ${isHero ? 'text-sm' : 'text-xs'}`}>
                    {entry.company} &middot; {entry.years}
                  </p>
                  {entry.highlight && (
                    <p
                      className={`font-body mt-3 italic ${
                        isHero
                          ? 'text-sm text-gallery-gold/50'
                          : 'text-[11px] text-white/25'
                      }`}
                    >
                      {entry.highlight}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career narrative quote */}
      <div data-reveal className="mt-20 max-w-xl px-4">
        <blockquote className="glass p-8 rounded-lg text-center relative overflow-hidden">
          {/* Decorative quotation marks */}
          <div
            className="absolute top-3 left-6 font-display leading-none pointer-events-none"
            style={{ fontSize: '4rem', color: 'rgba(201,168,76,0.08)' }}
          >
            &ldquo;
          </div>
          <div
            className="absolute bottom-3 right-6 font-display leading-none pointer-events-none"
            style={{ fontSize: '4rem', color: 'rgba(201,168,76,0.08)' }}
          >
            &rdquo;
          </div>
          <p className="font-display text-base text-white/45 italic leading-relaxed relative z-10">
            &ldquo;From customer support in Kerala to managing enterprise benefits portfolios worth millions in Toronto — every role was a room in the gallery of becoming.&rdquo;
          </p>
          <div
            className="w-16 h-[1px] mx-auto mt-6"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
          />
        </blockquote>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes timelinePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(201,168,76,0.7), 0 0 60px rgba(201,168,76,0.3);
          }
        }
        @keyframes badgeGlow {
          0%, 100% {
            box-shadow: 0 0 12px rgba(201,168,76,0.15);
          }
          50% {
            box-shadow: 0 0 20px rgba(201,168,76,0.25);
          }
        }
      `}</style>
    </div>
  );
}
