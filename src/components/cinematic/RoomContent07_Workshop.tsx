'use client';

import { SITE_CONTENT } from '@/data/content';

const SKILL_SECTIONS = [
  { title: 'AI & Intelligence', key: 'ai' as const, icon: '⚡', accentColor: '#C9A84C', accentRgb: '201,168,76' },
  { title: 'Engineering & Data', key: 'engineering' as const, icon: '⚙', accentColor: '#4FB8FF', accentRgb: '79,184,255' },
  { title: 'Strategy & Operations', key: 'strategy' as const, icon: '◈', accentColor: '#F39C12', accentRgb: '243,156,18' },
];

export default function RoomContent07_Workshop() {
  const skills = SITE_CONTENT.skills;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* Background hex pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(243,156,18,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Title */}
      <div data-reveal-heading className="text-center mb-4">
        <span className="block font-display text-lg italic text-white/30 mb-1">The</span>
        <h2
          className="font-display tracking-[0.15em] uppercase"
          style={{
            color: '#F39C12',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            textShadow: '0 0 30px rgba(243,156,18,0.2)',
          }}
        >
          Workshop
        </h2>
      </div>

      {/* Subtitle with tool count */}
      <p data-reveal className="font-body text-xs tracking-[4px] uppercase text-white/25 mb-14">
        36 Tools & Technologies
      </p>

      {/* Divider */}
      <div
        data-reveal-line
        className="w-16 h-[1px] mb-14 origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #F39C12, transparent)',
          boxShadow: '0 0 8px rgba(243,156,18,0.2)',
        }}
      />

      {/* Skill categories — glass display cases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-14">
        {SKILL_SECTIONS.map((section) => (
          <div
            key={section.key}
            data-reveal
            className="glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 p-6"
            style={{
              borderTop: `2px solid rgba(${section.accentRgb}, 0.3)`,
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, rgba(${section.accentRgb}, 0.05) 0%, transparent 70%)`,
              }}
            />

            {/* Category icon and title */}
            <div className="flex items-center justify-center gap-2 mb-2 relative z-10">
              <span className="text-lg" style={{ color: section.accentColor }}>
                {section.icon}
              </span>
              <h3
                className="font-display text-xs tracking-[0.3em] uppercase"
                style={{ color: section.accentColor, fontVariant: 'small-caps' }}
              >
                {section.title}
              </h3>
            </div>

            {/* Skill count */}
            <p className="text-center text-[9px] tracking-[2px] uppercase text-white/20 mb-5 relative z-10">
              {skills[section.key].length} tools
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap justify-center gap-1.5 relative z-10">
              {skills[section.key].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-3 py-1.5 transition-all duration-300 hover:scale-105"
                  style={{
                    border: `1px solid rgba(${section.accentRgb}, 0.2)`,
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.05em',
                    fontVariant: 'small-caps',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderColor = `rgba(${section.accentRgb}, 0.5)`;
                    (e.target as HTMLElement).style.boxShadow = `0 0 12px rgba(${section.accentRgb}, 0.15)`;
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderColor = `rgba(${section.accentRgb}, 0.2)`;
                    (e.target as HTMLElement).style.boxShadow = 'none';
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certification — glass card */}
      <div data-reveal className="text-center">
        <div
          className="glass inline-flex items-center gap-3 px-6 py-4"
          style={{
            borderLeft: '2px solid rgba(243,156,18,0.3)',
          }}
        >
          <span
            className="flex items-center justify-center w-6 h-6 rounded-full text-xs"
            style={{
              background: 'rgba(243,156,18,0.1)',
              color: '#F39C12',
              border: '1px solid rgba(243,156,18,0.3)',
            }}
          >
            ✓
          </span>
          <div className="text-left">
            <p className="font-display text-[9px] tracking-[3px] uppercase text-white/40">
              Professional Certification
            </p>
            <p className="font-body text-xs text-white/60 mt-0.5">
              Google Data Analytics Professional Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
