'use client';

import { SITE_CONTENT } from '@/data/content';

const SALON_OFFSETS = [0, 60, 20, 40, 0, 80];

export default function RoomContent06_Projects() {
  const projects = SITE_CONTENT.projects;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h2
        data-reveal-heading
        className="font-display text-5xl md:text-6xl text-center mb-14"
        style={{ color: 'var(--room-accent)' }}
      >
        The Project Vault
      </h2>

      {/* Project grid — salon-style varied heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 w-full max-w-4xl">
        {projects.map((project, i) => {
          const isLead = i === 0; // AstroAI = largest
          return (
            <div
              key={project.id}
              data-reveal
              className="salon-offset"
              style={{ marginTop: `${SALON_OFFSETS[i] || 0}px` }}
            >
              <div
                className={`gallery-frame spotlight p-6 transition-transform duration-400 hover:-translate-y-1 ${
                  isLead ? 'min-h-[220px]' : ''
                }`}
                style={isLead ? {
                  borderColor: 'rgba(155,89,182,0.5)',
                  boxShadow: 'inset 0 0 0 8px #111, inset 0 0 0 10px rgba(155,89,182,0.3), 8px 8px 24px rgba(0,0,0,0.6), 2px 2px 8px rgba(0,0,0,0.4), 0 0 20px rgba(155,89,182,0.08)',
                } : undefined}
              >
                <h3
                  className="font-display text-sm mb-2"
                  style={{ color: 'var(--room-accent)' }}
                >
                  {project.name}
                </h3>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.split(' • ').map((tech) => (
                    <span key={tech} className="skill-tag text-[9px] px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
