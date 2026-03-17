'use client';

import { SITE_CONTENT } from '@/data/content';

const SALON_OFFSETS = [0, 80, 30, 60, 10, 90];

export default function RoomContent06_Projects() {
  const projects = SITE_CONTENT.projects;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Ambient purple glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,89,182,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Title */}
      <h2
        data-reveal-heading
        className="font-display text-5xl md:text-7xl text-center mb-3"
        style={{
          color: '#9B59B6',
          textShadow: '0 0 30px rgba(155,89,182,0.3), 0 0 60px rgba(155,89,182,0.1)',
        }}
      >
        The Project Vault
      </h2>

      {/* Subtitle */}
      <p
        data-reveal
        className="font-mono text-[11px] tracking-[4px] uppercase text-center mb-16"
        style={{ color: 'rgba(155,89,182,0.5)' }}
      >
        {projects.length} Products &amp; Counting
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 w-full max-w-5xl px-4">
        {projects.map((project, i) => {
          const isLead = i === 0;
          return (
            <div
              key={project.id}
              data-reveal
              className={`salon-offset ${isLead ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              style={{ marginTop: `${SALON_OFFSETS[i] || 0}px` }}
            >
              <div
                className="relative p-7 rounded-lg transition-all duration-500 group"
                style={{
                  background: isLead
                    ? 'linear-gradient(135deg, rgba(155,89,182,0.06) 0%, rgba(255,255,255,0.02) 100%)'
                    : 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(155,89,182,0.12)',
                  borderLeftWidth: '3px',
                  borderLeftColor: isLead ? '#9B59B6' : 'rgba(155,89,182,0.3)',
                  borderImage: isLead
                    ? 'linear-gradient(to bottom, #9B59B6, #6C3483) 1'
                    : undefined,
                  borderImageSlice: isLead ? 1 : undefined,
                  boxShadow: isLead
                    ? '0 0 40px rgba(155,89,182,0.12), 0 0 80px rgba(155,89,182,0.04)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  minHeight: isLead ? '240px' : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = isLead
                    ? '0 0 50px rgba(155,89,182,0.2), 0 0 100px rgba(155,89,182,0.08)'
                    : '0 8px 30px rgba(0,0,0,0.4), 0 0 30px rgba(155,89,182,0.1)';
                  e.currentTarget.style.borderLeftColor = '#9B59B6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isLead
                    ? '0 0 40px rgba(155,89,182,0.12), 0 0 80px rgba(155,89,182,0.04)'
                    : '0 4px 20px rgba(0,0,0,0.3)';
                  if (!isLead) e.currentTarget.style.borderLeftColor = 'rgba(155,89,182,0.3)';
                }}
              >
                {/* Project number watermark */}
                <span
                  className="absolute top-4 right-5 font-mono text-[48px] font-bold leading-none pointer-events-none select-none"
                  style={{ color: 'rgba(155,89,182,0.04)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Flagship badge for lead project */}
                {isLead && (
                  <div className="absolute top-4 right-5 z-10">
                    <span
                      className="font-mono text-[9px] tracking-[3px] uppercase px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(155,89,182,0.15)',
                        border: '1px solid rgba(155,89,182,0.4)',
                        color: '#9B59B6',
                        boxShadow: '0 0 12px rgba(155,89,182,0.15)',
                      }}
                    >
                      Flagship
                    </span>
                  </div>
                )}

                {/* Animated gradient border for lead */}
                {isLead && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'linear-gradient(270deg, #9B59B6, #4FB8FF, #9B59B6)',
                      backgroundSize: '300% 300%',
                      animation: 'gradient-rotate 4s ease infinite',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                    }}
                  />
                )}

                <h3
                  className="font-display text-base mb-2 tracking-wide"
                  style={{
                    color: '#9B59B6',
                    textShadow: isLead ? '0 0 20px rgba(155,89,182,0.3)' : undefined,
                    fontSize: isLead ? '1.15rem' : undefined,
                  }}
                >
                  {project.name}
                </h3>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-5" style={{ maxWidth: isLead ? '85%' : undefined }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(' \u2022 ').map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-3 py-1.5 rounded-full font-mono tracking-wide transition-all duration-300"
                      style={{
                        border: '1px solid rgba(155,89,182,0.2)',
                        color: 'rgba(255,255,255,0.6)',
                        background: 'rgba(155,89,182,0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(155,89,182,0.5)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(155,89,182,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(155,89,182,0.2)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
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
