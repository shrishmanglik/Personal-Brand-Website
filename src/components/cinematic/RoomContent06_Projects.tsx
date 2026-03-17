'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent06_Projects() {
  const projects = SITE_CONTENT.projects;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h2 data-reveal-heading className="font-display text-5xl md:text-6xl text-center mb-14" style={{ color: 'var(--room-accent)' }}>
        The Project Vault
      </h2>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl">
        {projects.map((project) => (
          <div
            key={project.id}
            data-reveal
            className="group p-6 rounded-sm border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(var(--room-accent-rgb),0.25)] hover:bg-white/[0.04]"
          >
            <h3 className="font-display text-sm mb-2 transition-colors duration-300" style={{ color: 'var(--room-accent)' }}>
              {project.name}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.split(' \u2022 ').map((tech) => (
                <span
                  key={tech}
                  className="font-body text-[9px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/35 bg-white/[0.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
