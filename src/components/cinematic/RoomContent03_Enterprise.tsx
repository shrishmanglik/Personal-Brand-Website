'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent03_Enterprise() {
  const career = SITE_CONTENT.career;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* Ambient background glows */}
      <div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[180px]"
        style={{ background: 'rgba(201,168,76,0.05)' }}
      />
      <div
        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'rgba(201,168,76,0.03)' }}
      />

      {/* Title */}
      <div data-reveal-heading className="text-center mb-24">
        <span className="block font-display text-xl italic text-white/30 mb-3 tracking-wide">The</span>
        <h2
          className="font-display tracking-[0.25em] uppercase relative"
          style={{ color: 'var(--room-accent)', fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
        >
          Enterprise Wing
          <div
            className="absolute inset-0 pointer-events-none blur-[30px] -z-10"
            style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06), transparent 70%)' }}
          />
        </h2>
        <div className="mt-5 flex items-center justify-center gap-4">
          <div
            className="w-24 h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }}
          />
          <span className="font-display text-[10px] tracking-[6px] uppercase text-gallery-gold/20">
            Career Progression
          </span>
          <div
            className="w-24 h-[1px]"
            style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }}
          />
        </div>
      </div>

      {/* Career timeline */}
      <div className="relative w-full max-w-4xl px-4">
        {/* Vertical glowing timeline line */}
        <div
          data-reveal-line
          className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 origin-top"
          style={{ width: '2px' }}
        >
          {/* Core bright line */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.4) 8%, rgba(201,168,76,0.6) 50%, rgba(201,168,76,0.4) 92%, transparent 100%)',
            }}
          />
          {/* Inner glow */}
          <div
            className="absolute -left-[3px] -right-[3px] inset-y-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.15) 8%, rgba(201,168,76,0.2) 50%, rgba(201,168,76,0.15) 92%, transparent 100%)',
              filter: 'blur(4px)',
            }}
          />
          {/* Outer wide glow */}
          <div
            className="absolute -left-[8px] -right-[8px] inset-y-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.06) 8%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.06) 92%, transparent 100%)',
              filter: 'blur(8px)',
            }}
          />
          {/* Traveling light particle */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[60px] rounded-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.6), transparent)',
              filter: 'blur(2px)',
              animation: 'timelineParticle 5s ease-in-out infinite',
            }}
          />
        </div>

        <div className="space-y-14">
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
                {/* Year marker — prominent */}
                <div
                  className={`absolute top-2 font-display text-[11px] tracking-[3px] hidden md:block ${
                    isRight ? 'right-[calc(100%+32px)]' : 'left-[calc(100%+32px)]'
                  }`}
                  style={{
                    color: isHero ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.25)',
                    textShadow: isHero ? '0 0 8px rgba(201,168,76,0.2)' : 'none',
                  }}
                >
                  {entry.years.split('–')[0]}
                </div>

                {/* Mobile year marker */}
                <div
                  className="absolute left-0 top-[6px] md:hidden font-display text-[9px] tracking-[2px]"
                  style={{ color: 'rgba(201,168,76,0.3)' }}
                >
                  {entry.years.split('–')[0]}
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-[26px] md:left-1/2 md:-translate-x-1/2 rounded-full z-10 ${
                    isHero ? 'top-3' : 'top-4'
                  }`}
                  style={{
                    width: isHero ? '18px' : isSmall ? '8px' : '12px',
                    height: isHero ? '18px' : isSmall ? '8px' : '12px',
                    border: `2px solid ${isHero ? '#C9A84C' : isMedium ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.2)'}`,
                    background: isHero
                      ? 'radial-gradient(circle, #C9A84C 40%, rgba(201,168,76,0.6))'
                      : isMedium
                        ? 'rgba(201,168,76,0.15)'
                        : 'rgba(201,168,76,0.08)',
                    boxShadow: isHero
                      ? '0 0 20px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)'
                      : isMedium
                        ? '0 0 8px rgba(201,168,76,0.15)'
                        : 'none',
                    animation: isHero ? 'heroTimelinePulse 2.5s ease-in-out infinite' : 'none',
                  }}
                >
                  {/* Inner glow ring for hero */}
                  {isHero && (
                    <div
                      className="absolute -inset-[6px] rounded-full"
                      style={{
                        border: '1px solid rgba(201,168,76,0.2)',
                        animation: 'heroRingPulse 2.5s ease-in-out infinite',
                      }}
                    />
                  )}
                </div>

                {/* Connecting line from dot to card */}
                <div
                  className={`absolute hidden md:block ${
                    isRight ? 'right-full mr-[6px]' : 'left-full ml-[6px]'
                  } ${isHero ? 'top-[20px]' : 'top-[18px]'}`}
                  style={{
                    width: '24px',
                    height: isHero ? '2px' : '1px',
                    background: isHero
                      ? 'linear-gradient(to right, rgba(201,168,76,0.5), rgba(201,168,76,0.2))'
                      : 'rgba(201,168,76,0.15)',
                    boxShadow: isHero ? '0 0 6px rgba(201,168,76,0.2)' : 'none',
                  }}
                />

                {/* Card */}
                <div
                  className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 rounded-xl ${
                    isHero
                      ? 'p-8 md:p-10'
                      : isMedium
                        ? 'p-6'
                        : 'p-5'
                  } ${
                    isSmall
                      ? 'md:max-w-[280px]'
                      : isHero
                        ? 'md:max-w-[560px]'
                        : 'md:max-w-[360px]'
                  } ${isRight ? '' : 'md:ml-auto'}`}
                  style={{
                    background: isHero
                      ? 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(201,168,76,0.02) 100%)'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: isHero
                      ? '1px solid rgba(201,168,76,0.2)'
                      : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: isHero
                      ? '0 0 50px rgba(201,168,76,0.08), 0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,168,76,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Animated gradient border for hero */}
                  {isHero && (
                    <div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        padding: '1px',
                        background:
                          'linear-gradient(var(--angle, 0deg), rgba(201,168,76,0.3), rgba(201,168,76,0.05), rgba(201,168,76,0.3))',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMaskComposite: 'xor',
                        animation: 'borderRotate 6s linear infinite',
                      }}
                    />
                  )}

                  {/* Side accent line */}
                  <div
                    className={`absolute top-0 bottom-0 w-[3px] rounded-full ${
                      isRight ? 'left-0 rounded-l-xl' : 'md:right-0 md:left-auto left-0 rounded-r-xl'
                    }`}
                    style={{
                      background: isHero
                        ? 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.3))'
                        : `linear-gradient(to bottom, rgba(201,168,76,${isMedium ? '0.3' : '0.15'}), transparent)`,
                      boxShadow: isHero ? '0 0 8px rgba(201,168,76,0.3)' : 'none',
                    }}
                  />

                  {/* CURRENT badge for hero */}
                  {isHero && (
                    <div className={`absolute top-5 ${isRight ? 'right-5' : 'md:left-5 right-5'}`}>
                      <span
                        className="inline-flex items-center gap-2 font-display text-[9px] tracking-[3px] uppercase px-4 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(201,168,76,0.12)',
                          border: '1px solid rgba(201,168,76,0.35)',
                          color: '#C9A84C',
                          boxShadow: '0 0 16px rgba(201,168,76,0.2), 0 0 32px rgba(201,168,76,0.08)',
                          animation: 'badgeGlow 3s ease-in-out infinite',
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full relative"
                          style={{
                            background: '#C9A84C',
                            boxShadow: '0 0 8px rgba(201,168,76,0.8)',
                            animation: 'heroTimelinePulse 2s ease-in-out infinite',
                          }}
                        />
                        CURRENT
                      </span>
                    </div>
                  )}

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(201,168,76,${isHero ? '0.08' : '0.04'}) 0%, transparent 50%)`,
                      boxShadow: isHero
                        ? 'inset 0 0 0 1px rgba(201,168,76,0.15)'
                        : 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                  />

                  <p
                    className={`font-display relative ${
                      isHero ? 'text-2xl md:text-3xl pr-28 leading-tight' : isMedium ? 'text-lg' : 'text-sm'
                    }`}
                    style={{
                      color: isHero ? '#C9A84C' : 'var(--room-accent)',
                      textShadow: isHero ? '0 0 20px rgba(201,168,76,0.15)' : 'none',
                    }}
                  >
                    {entry.role}
                  </p>
                  <p
                    className={`font-body text-white/40 ${
                      isHero ? 'text-base mt-3' : 'text-xs mt-2'
                    }`}
                  >
                    {entry.company}
                    <span className="mx-2 text-white/15">&middot;</span>
                    {entry.years}
                  </p>
                  {entry.highlight && (
                    <p
                      className={`font-body mt-4 italic ${
                        isHero
                          ? 'text-sm text-gallery-gold/50 leading-relaxed'
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
      <div data-reveal className="mt-24 max-w-2xl px-4">
        <blockquote
          className="relative overflow-hidden text-center rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '3rem 2.5rem',
          }}
        >
          {/* Decorative quotation marks — larger and more visible */}
          <div
            className="absolute top-2 left-5 font-display leading-none pointer-events-none"
            style={{
              fontSize: '6rem',
              color: 'rgba(201,168,76,0.12)',
              textShadow: '0 0 20px rgba(201,168,76,0.05)',
            }}
          >
            &ldquo;
          </div>
          <div
            className="absolute bottom-0 right-5 font-display leading-none pointer-events-none"
            style={{
              fontSize: '6rem',
              color: 'rgba(201,168,76,0.12)',
              textShadow: '0 0 20px rgba(201,168,76,0.05)',
            }}
          >
            &rdquo;
          </div>
          <p className="font-display text-lg text-white/40 italic leading-[1.8] relative z-10">
            &ldquo;From customer support in Kerala to managing enterprise benefits portfolios worth
            millions in Toronto — every role was a room in the gallery of becoming.&rdquo;
          </p>
          <div
            className="w-20 h-[1px] mx-auto mt-8"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)',
            }}
          />
        </blockquote>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes heroTimelinePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(201,168,76,0.8), 0 0 50px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.15);
          }
        }
        @keyframes heroRingPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }
        @keyframes badgeGlow {
          0%, 100% {
            box-shadow: 0 0 16px rgba(201,168,76,0.2), 0 0 32px rgba(201,168,76,0.08);
          }
          50% {
            box-shadow: 0 0 24px rgba(201,168,76,0.35), 0 0 48px rgba(201,168,76,0.12);
          }
        }
        @keyframes timelineParticle {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes borderRotate {
          to {
            --angle: 360deg;
          }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </div>
  );
}
