'use client';

import { SITE_CONTENT } from '@/data/content';

const SKILL_SECTIONS = [
  { title: 'AI & Intelligence', key: 'ai' as const },
  { title: 'Engineering & Data', key: 'engineering' as const },
  { title: 'Strategy & Operations', key: 'strategy' as const },
];

export default function RoomContent07_Workshop() {
  const skills = SITE_CONTENT.skills;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h2 data-reveal-heading className="font-display text-5xl md:text-6xl text-center mb-14" style={{ color: 'var(--room-accent)' }}>
        The Workshop
      </h2>

      {/* Skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-14">
        {SKILL_SECTIONS.map((section, si) => (
          <div
            key={section.key}
            data-reveal
            className="p-6 rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm"
          >
            <h3 className="font-display text-xs tracking-[3px] uppercase text-center mb-5" style={{ color: 'var(--room-accent)' }}>
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5">
              {skills[section.key].map((skill) => (
                <span
                  key={skill}
                  className="font-body text-[10px] px-3 py-1.5 rounded-full border border-white/[0.07] text-white/50 bg-white/[0.02] transition-colors duration-200 hover:border-[rgba(var(--room-accent-rgb),0.3)] hover:text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certification */}
      <div data-reveal className="text-center">
        <div className="inline-block px-6 py-4 border border-white/[0.08] bg-white/[0.02] rounded-sm">
          <p className="font-display text-[9px] tracking-[3px] uppercase text-white/30 mb-1">Professional Certification</p>
          <p className="font-body text-sm text-white/50">Google Data Analytics Professional Certificate</p>
        </div>
      </div>
    </div>
  );
}
