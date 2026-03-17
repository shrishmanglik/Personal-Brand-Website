'use client';

import { SITE_CONTENT } from '@/data/content';

const SKILL_SECTIONS = [
  {
    title: 'AI & Intelligence',
    key: 'ai' as const,
    icon: '\u26A1',
    accentColor: '#C9A84C',
    accentRgb: '201,168,76',
    hoverColor: 'rgba(212,175,55,0.8)',
    hoverBorder: 'rgba(212,175,55,0.6)',
    hoverGlow: 'rgba(212,175,55,0.2)',
    hoverBg: 'rgba(212,175,55,0.08)',
  },
  {
    title: 'Engineering & Data',
    key: 'engineering' as const,
    icon: '\u2699',
    accentColor: '#4FB8FF',
    accentRgb: '79,184,255',
    hoverColor: 'rgba(79,184,255,0.9)',
    hoverBorder: 'rgba(79,184,255,0.6)',
    hoverGlow: 'rgba(79,184,255,0.2)',
    hoverBg: 'rgba(79,184,255,0.08)',
  },
  {
    title: 'Strategy & Operations',
    key: 'strategy' as const,
    icon: '\uD83D\uDCCA',
    accentColor: '#F39C12',
    accentRgb: '243,156,18',
    hoverColor: 'rgba(243,156,18,0.9)',
    hoverBorder: 'rgba(243,156,18,0.6)',
    hoverGlow: 'rgba(243,156,18,0.2)',
    hoverBg: 'rgba(243,156,18,0.08)',
  },
];

export default function RoomContent07_Workshop() {
  const skills = SITE_CONTENT.skills;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Ambient amber glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(243,156,18,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Honeycomb / hex pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23F39C12' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 52px',
        }}
      />

      {/* Decorative tool-like corner brackets */}
      {[
        { top: '10%', left: '5%', rotate: '0deg' },
        { top: '10%', right: '5%', rotate: '90deg' },
        { bottom: '10%', left: '5%', rotate: '270deg' },
        { bottom: '10%', right: '5%', rotate: '180deg' },
      ].map((pos, i) => {
        const { rotate, ...posStyle } = pos;
        return (
          <div
            key={`bracket-${i}`}
            className="absolute pointer-events-none w-8 h-8"
            style={{
              ...posStyle,
              transform: `rotate(${rotate})`,
              borderTop: '1px solid rgba(243,156,18,0.12)',
              borderLeft: '1px solid rgba(243,156,18,0.12)',
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes tool-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Title with amber glow */}
      <div className="relative mb-3">
        <div
          className="absolute inset-0 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(243,156,18,0.1) 0%, transparent 70%)',
          }}
        />
        <h2
          data-reveal-heading
          className="font-display text-5xl md:text-7xl lg:text-8xl text-center relative"
          style={{
            color: '#F39C12',
            textShadow:
              '0 0 10px rgba(243,156,18,0.5), 0 0 40px rgba(243,156,18,0.2), 0 0 80px rgba(243,156,18,0.1)',
          }}
        >
          The Workshop
        </h2>
      </div>

      {/* Subtitle with tool count */}
      <p
        data-reveal
        className="font-mono text-[11px] tracking-[5px] uppercase text-center mb-6"
        style={{ color: 'rgba(243,156,18,0.45)' }}
      >
        {skills.ai.length + skills.engineering.length + skills.strategy.length} Tools &amp; Technologies
      </p>

      {/* Divider */}
      <div
        data-reveal-line
        className="w-20 h-[1px] mb-20 origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #F39C12, transparent)',
          boxShadow: '0 0 12px rgba(243,156,18,0.25)',
        }}
      />

      {/* Skill categories -- enhanced display cases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-20 px-6">
        {SKILL_SECTIONS.map((section) => {
          const skillList = skills[section.key];
          return (
            <div
              key={section.key}
              data-reveal
              className="relative p-8 rounded-xl transition-all duration-500 group cursor-default overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(243,156,18,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(243,156,18,0.1)',
                borderTopWidth: '2px',
                borderTopColor: `rgba(${section.accentRgb}, 0.45)`,
                boxShadow:
                  '0 0 20px rgba(243,156,18,0.03), inset 0 1px 0 rgba(243,156,18,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 35px rgba(${section.accentRgb}, 0.1), inset 0 1px 0 rgba(${section.accentRgb}, 0.1)`;
                e.currentTarget.style.borderTopColor = section.accentColor;
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 0 20px rgba(243,156,18,0.03), inset 0 1px 0 rgba(243,156,18,0.06)';
                e.currentTarget.style.borderTopColor = `rgba(${section.accentRgb}, 0.45)`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top, rgba(${section.accentRgb}, 0.06) 0%, transparent 70%)`,
                }}
              />

              {/* Top glow line */}
              <div
                className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(${section.accentRgb}, 0.4), transparent)`,
                }}
              />

              {/* Category icon + title */}
              <div className="text-center mb-6 relative z-10">
                <span
                  className="inline-block text-2xl mb-3"
                  style={{
                    filter: 'saturate(0.85)',
                    animation: 'tool-pulse 3s ease-in-out infinite',
                  }}
                >
                  {section.icon}
                </span>
                <h3
                  className="font-display text-xs tracking-[0.3em] uppercase"
                  style={{
                    color: section.accentColor,
                    fontVariantCaps: 'small-caps',
                    textShadow: `0 0 15px rgba(${section.accentRgb}, 0.2)`,
                  }}
                >
                  {section.title}
                </h3>
                {/* Skill count */}
                <span
                  className="font-mono text-[9px] tracking-[2px] uppercase mt-1.5 inline-block"
                  style={{ color: `rgba(${section.accentRgb}, 0.35)` }}
                >
                  {skillList.length} tools
                </span>
              </div>

              {/* Divider */}
              <div
                className="w-12 h-[1px] mx-auto mb-5 relative z-10"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(${section.accentRgb}, 0.3), transparent)`,
                }}
              />

              {/* Skill tags */}
              <div className="flex flex-wrap justify-center gap-2 relative z-10">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-3 py-1.5 rounded-full font-mono tracking-wide transition-all duration-300 cursor-default"
                    style={{
                      border: `1px solid rgba(${section.accentRgb}, 0.18)`,
                      color: 'rgba(255,255,255,0.5)',
                      background: `rgba(${section.accentRgb}, 0.03)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = section.hoverBorder;
                      e.currentTarget.style.color = section.hoverColor;
                      e.currentTarget.style.boxShadow = `0 0 12px ${section.hoverGlow}`;
                      e.currentTarget.style.background = section.hoverBg;
                      e.currentTarget.style.transform = 'translateY(-1px) scale(1.03)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `rgba(${section.accentRgb}, 0.18)`;
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.background = `rgba(${section.accentRgb}, 0.03)`;
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Google Certification -- redesigned glass card */}
      <div data-reveal className="w-full max-w-lg px-6">
        <div
          className="relative p-8 rounded-xl text-center transition-all duration-500 cursor-default"
          style={{
            background:
              'linear-gradient(135deg, rgba(243,156,18,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(243,156,18,0.03) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(243,156,18,0.15)',
            boxShadow:
              '0 0 30px rgba(243,156,18,0.04), inset 0 0 40px rgba(243,156,18,0.02)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 40px rgba(243,156,18,0.1), inset 0 0 40px rgba(243,156,18,0.03)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 30px rgba(243,156,18,0.04), inset 0 0 40px rgba(243,156,18,0.02)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {/* Corner accents */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map(
            (pos, i) => (
              <span
                key={`cert-corner-${i}`}
                className={`absolute ${pos} w-4 h-4 pointer-events-none`}
                style={{
                  borderColor: 'rgba(243,156,18,0.25)',
                  borderStyle: 'solid',
                  borderWidth: '0',
                  ...(pos.includes('top') && pos.includes('left')
                    ? { borderTopWidth: '1px', borderLeftWidth: '1px' }
                    : {}),
                  ...(pos.includes('top') && pos.includes('right')
                    ? { borderTopWidth: '1px', borderRightWidth: '1px' }
                    : {}),
                  ...(pos.includes('bottom') && pos.includes('left')
                    ? { borderBottomWidth: '1px', borderLeftWidth: '1px' }
                    : {}),
                  ...(pos.includes('bottom') && pos.includes('right')
                    ? { borderBottomWidth: '1px', borderRightWidth: '1px' }
                    : {}),
                }}
              />
            )
          )}

          {/* Verified checkmark icon */}
          <div className="mb-3">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-lg"
              style={{
                background: 'rgba(243,156,18,0.08)',
                border: '1px solid rgba(243,156,18,0.25)',
                color: '#F39C12',
                boxShadow: '0 0 15px rgba(243,156,18,0.1)',
              }}
            >
              &#x2713;
            </span>
          </div>

          {/* Label */}
          <span
            className="inline-block font-mono text-[9px] tracking-[4px] uppercase mb-3"
            style={{ color: 'rgba(243,156,18,0.45)' }}
          >
            Professional Certification
          </span>

          {/* Divider */}
          <div
            className="w-16 h-[1px] mx-auto mb-4"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(243,156,18,0.3), transparent)',
            }}
          />

          {/* Certificate name */}
          <p
            className="font-display text-sm md:text-base tracking-wide"
            style={{
              color: 'rgba(255,255,255,0.75)',
              textShadow: '0 0 20px rgba(243,156,18,0.1)',
            }}
          >
            Google Data Analytics Professional Certificate
          </p>

          {/* Issuer badge */}
          <span
            className="inline-block font-mono text-[9px] tracking-[3px] uppercase mt-3 px-4 py-1.5 rounded-full"
            style={{
              border: '1px solid rgba(243,156,18,0.15)',
              color: 'rgba(243,156,18,0.4)',
              background: 'rgba(243,156,18,0.03)',
            }}
          >
            Google &middot; Verified
          </span>
        </div>
      </div>
    </div>
  );
}
