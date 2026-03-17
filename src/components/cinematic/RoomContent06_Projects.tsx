'use client';

import { SITE_CONTENT } from '@/data/content';

const SALON_OFFSETS = [0, 90, 25, 70, 15, 100];

export default function RoomContent06_Projects() {
  const projects = SITE_CONTENT.projects;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Ambient purple glow — dual sources */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,89,182,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,89,182,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Subtle vertical accent lines */}
      {[20, 50, 80].map((left, i) => (
        <div
          key={`vline-${i}`}
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: `${left}%`,
            width: '1px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(155,89,182,0.04) 30%, rgba(155,89,182,0.06) 50%, rgba(155,89,182,0.04) 70%, transparent 100%)',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer-edge {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }
      `}</style>

      {/* Title */}
      <div className="relative mb-2">
        <h2
          data-reveal-heading
          className="font-display text-5xl md:text-7xl lg:text-8xl text-center"
          style={{
            color: '#9B59B6',
            textShadow:
              '0 0 10px rgba(155,89,182,0.5), 0 0 40px rgba(155,89,182,0.2), 0 0 80px rgba(155,89,182,0.1)',
          }}
        >
          The Project Vault
        </h2>
      </div>

      {/* Subtitle */}
      <p
        data-reveal
        className="font-mono text-[11px] tracking-[5px] uppercase text-center mb-20"
        style={{ color: 'rgba(155,89,182,0.5)' }}
      >
        {projects.length} Products &amp; Counting
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-6xl px-6">
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
                className="relative p-8 rounded-xl transition-all duration-500 group cursor-default h-full"
                style={{
                  background: isLead
                    ? 'linear-gradient(135deg, rgba(155,89,182,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(155,89,182,0.04) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(155,89,182,0.02) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(155,89,182,0.12)',
                  borderLeftWidth: '3px',
                  borderLeftColor: isLead ? '#9B59B6' : 'rgba(155,89,182,0.3)',
                  borderImage: isLead
                    ? 'linear-gradient(to bottom, #9B59B6, #6C3483, rgba(155,89,182,0.2)) 1'
                    : undefined,
                  borderImageSlice: isLead ? 1 : undefined,
                  boxShadow: isLead
                    ? '0 0 50px rgba(155,89,182,0.12), 0 0 100px rgba(155,89,182,0.04), inset 0 1px 0 rgba(155,89,182,0.1)'
                    : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(155,89,182,0.05)',
                  minHeight: isLead ? '260px' : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                  e.currentTarget.style.boxShadow = isLead
                    ? '0 0 60px rgba(155,89,182,0.25), 0 0 120px rgba(155,89,182,0.08), inset 0 1px 0 rgba(155,89,182,0.15)'
                    : '0 12px 40px rgba(0,0,0,0.4), 0 0 40px rgba(155,89,182,0.12), inset 0 1px 0 rgba(155,89,182,0.1)';
                  e.currentTarget.style.borderLeftColor = '#9B59B6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = isLead
                    ? '0 0 50px rgba(155,89,182,0.12), 0 0 100px rgba(155,89,182,0.04), inset 0 1px 0 rgba(155,89,182,0.1)'
                    : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(155,89,182,0.05)';
                  if (!isLead) e.currentTarget.style.borderLeftColor = 'rgba(155,89,182,0.3)';
                }}
              >
                {/* Project number watermark */}
                <span
                  className="absolute top-4 right-5 font-mono font-bold leading-none pointer-events-none select-none"
                  style={{
                    color: 'rgba(155,89,182,0.04)',
                    fontSize: isLead ? '72px' : '52px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Flagship badge for lead project */}
                {isLead && (
                  <div className="absolute top-5 right-6 z-10">
                    <span
                      className="font-mono text-[9px] tracking-[3px] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(155,89,182,0.2), rgba(155,89,182,0.1))',
                        border: '1px solid rgba(155,89,182,0.5)',
                        color: '#9B59B6',
                        boxShadow:
                          '0 0 15px rgba(155,89,182,0.2), inset 0 0 10px rgba(155,89,182,0.05)',
                      }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{
                          background: '#9B59B6',
                          boxShadow: '0 0 6px #9B59B6',
                          animation: 'shimmer-edge 2s ease-in-out infinite',
                        }}
                      />
                      Flagship
                    </span>
                  </div>
                )}

                {/* Animated gradient border for lead */}
                {isLead && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(270deg, #9B59B6, #4FB8FF, #9B59B6, #6C3483)',
                      backgroundSize: '400% 400%',
                      animation: 'gradient-rotate 6s ease infinite',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                      padding: '1.5px',
                    }}
                  />
                )}

                {/* Top highlight for non-lead cards */}
                {!isLead && (
                  <div
                    className="absolute top-0 left-[15%] right-[15%] h-[1px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(155,89,182,0.2), transparent)',
                    }}
                  />
                )}

                <h3
                  className="font-display tracking-wide mb-3"
                  style={{
                    color: '#9B59B6',
                    textShadow: isLead
                      ? '0 0 25px rgba(155,89,182,0.35)'
                      : '0 0 10px rgba(155,89,182,0.15)',
                    fontSize: isLead ? '1.35rem' : '1rem',
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="font-body text-xs text-white/40 leading-relaxed mb-6"
                  style={{ maxWidth: isLead ? '80%' : undefined }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(' \u2022 ').map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-3 py-1.5 rounded-full font-mono tracking-wide transition-all duration-300 cursor-default"
                      style={{
                        border: '1px solid rgba(155,89,182,0.2)',
                        color: 'rgba(255,255,255,0.55)',
                        background: 'rgba(155,89,182,0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(155,89,182,0.55)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(155,89,182,0.2)';
                        e.currentTarget.style.background = 'rgba(155,89,182,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(155,89,182,0.2)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(155,89,182,0.04)';
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
