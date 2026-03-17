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
      <h2
        data-reveal-heading
        className="font-display text-5xl md:text-6xl text-center mb-14"
        style={{ color: 'var(--room-accent)' }}
      >
        The Workshop
      </h2>

      {/* Skill categories — display cases with glass reflection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-14">
        {SKILL_SECTIONS.map((section) => (
          <div key={section.key} data-reveal className="display-case p-6">
            <h3
              className="font-display text-xs tracking-[0.3em] uppercase text-center mb-5"
              style={{ color: 'var(--room-accent)', fontVariant: 'small-caps' }}
            >
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5">
              {skills[section.key].map((skill) => (
                <span key={skill} className="skill-tag text-[10px] px-3 py-1.5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certification — placard style */}
      <div data-reveal className="text-center">
        <div className="placard inline-block" style={{ transform: 'rotate(-0.5deg)' }}>
          <p className="placard-title">Professional Certification</p>
          <p className="placard-description mt-1">
            Google Data Analytics Professional Certificate
          </p>
        </div>
      </div>
    </div>
  );
}
