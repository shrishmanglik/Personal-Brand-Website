'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent02_Origins() {
  const education = SITE_CONTENT.education;
  const india = education.filter((e) => e.region === 'india');
  const canada = education.filter((e) => e.region === 'canada');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Background ambient glows */}
      <div
        className="absolute left-0 top-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'rgba(212,165,116,0.06)' }}
      />
      <div
        className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'rgba(148,163,184,0.06)' }}
      />

      {/* Title with compass decoration */}
      <div data-reveal-heading className="text-center mb-20 relative">
        {/* Compass rose */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-2xl text-gallery-gold/20 tracking-widest">
          ◎
        </div>
        <span className="block font-display text-lg italic text-white/40 mb-2">The</span>
        <h2
          className="font-display tracking-[0.3em] uppercase"
          style={{ color: 'var(--room-accent)', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          ORIGINS
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(212,165,116,0.4))' }} />
          <span className="font-display text-[10px] tracking-[4px] uppercase text-white/25">
            An Explorer&apos;s Journey
          </span>
          <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(148,163,184,0.4))' }} />
        </div>
      </div>

      {/* Journey path layout */}
      <div className="w-full max-w-5xl relative px-4">
        {/* SVG curved journey path - desktop only */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 200 100 C 300 100, 400 300, 500 300 S 700 100, 800 100"
            stroke="url(#journeyGradient)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="50%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative md:grid md:grid-cols-[1fr,auto,1fr] md:gap-8 items-start">
          {/* === India Column === */}
          <div className="relative">
            {/* Region label */}
            <div
              data-reveal
              className="flex items-center justify-center md:justify-end gap-3 mb-8"
            >
              <div
                className="w-8 h-5 rounded-sm flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%)',
                  boxShadow: '0 0 12px rgba(212,165,116,0.3)',
                }}
              >
                <div className="w-2 h-2 rounded-full border border-[#000080]" style={{ borderWidth: '0.5px' }} />
              </div>
              <span
                className="font-display text-sm tracking-[6px] uppercase"
                style={{ color: '#D4A574' }}
              >
                INDIA
              </span>
            </div>

            {/* Warm ambient glow */}
            <div
              className="absolute -left-20 top-0 bottom-0 w-[300px] pointer-events-none hidden md:block"
              style={{
                background: 'radial-gradient(ellipse at left center, rgba(212,165,116,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="space-y-5">
              {india.map((entry) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 p-6 rounded-lg"
                  style={{
                    borderLeft: '3px solid rgba(212,165,116,0.4)',
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,165,116,0.05) 0%, transparent 60%)',
                      boxShadow: 'inset 0 0 0 1px rgba(212,165,116,0.15)',
                      borderRadius: 'inherit',
                    }}
                  />
                  <p className="font-display text-base" style={{ color: '#D4A574' }}>
                    {entry.degree}
                  </p>
                  <p className="font-body text-sm text-white/50 mt-2">{entry.institution}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-body text-xs text-white/30">
                      {entry.years}
                    </p>
                    <span className="text-white/15">&middot;</span>
                    <p className="font-body text-xs text-white/30">
                      GPA: {entry.gpa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Archway Portal Divider === */}
          <div
            data-reveal
            className="hidden md:flex flex-col items-center justify-center relative"
            style={{ width: '140px', minHeight: '400px' }}
          >
            {/* Glowing portal arch */}
            <div className="relative w-full h-[320px]">
              {/* Outer arch glow */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '70px 70px 0 0',
                  background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 100%)',
                  boxShadow: '0 0 40px rgba(201,168,76,0.05)',
                }}
              />
              {/* Animated arch border */}
              <div
                className="absolute inset-[3px]"
                style={{
                  borderRadius: '67px 67px 0 0',
                  border: '1px solid transparent',
                  background: 'linear-gradient(var(--gallery-black, #0a0a0a), var(--gallery-black, #0a0a0a)) padding-box, linear-gradient(180deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05) 40%, rgba(148,163,184,0.05) 60%, rgba(148,163,184,0.4)) border-box',
                  animation: 'portalPulse 4s ease-in-out infinite',
                }}
              />
              {/* Inner glow line */}
              <div
                className="absolute inset-[6px]"
                style={{
                  borderRadius: '64px 64px 0 0',
                  border: '1px solid rgba(201,168,76,0.08)',
                  borderBottom: 'none',
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-[10px] tracking-[4px] uppercase text-gallery-gold/50 gold-shimmer">
                  India
                </span>
                <span className="font-display text-lg text-gallery-gold/30 my-1">&rarr;</span>
                <span className="font-display text-[10px] tracking-[4px] uppercase text-slate-400/50">
                  Canada
                </span>
                <div className="mt-4 text-gallery-gold/15 text-2xl">⊕</div>
              </div>
            </div>

            {/* Vertical connecting line */}
            <div
              className="w-[1px] flex-1"
              style={{
                background: 'linear-gradient(to bottom, rgba(201,168,76,0.2), transparent)',
              }}
            />
          </div>

          {/* Mobile divider */}
          <div className="md:hidden flex items-center justify-center gap-4 my-10">
            <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(212,165,116,0.3))' }} />
            <div className="flex flex-col items-center">
              <span className="font-display text-[9px] tracking-[3px] uppercase text-gallery-gold/40">
                India &rarr; Canada
              </span>
              <span className="text-gallery-gold/15 text-lg mt-1">⊕</span>
            </div>
            <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(148,163,184,0.3))' }} />
          </div>

          {/* === Canada Column === */}
          <div className="relative">
            {/* Region label */}
            <div
              data-reveal
              className="flex items-center justify-center md:justify-start gap-3 mb-8"
            >
              <div
                className="w-8 h-5 rounded-sm overflow-hidden relative"
                style={{
                  background: 'linear-gradient(90deg, #FF0000 25%, #FFFFFF 25%, #FFFFFF 75%, #FF0000 75%)',
                  boxShadow: '0 0 12px rgba(148,163,184,0.3)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-[8px] leading-none"
                    style={{ color: '#FF0000' }}
                  >
                    &#9756;
                  </div>
                </div>
              </div>
              <span
                className="font-display text-sm tracking-[6px] uppercase"
                style={{ color: '#94A3B8' }}
              >
                CANADA
              </span>
            </div>

            {/* Cool ambient glow */}
            <div
              className="absolute -right-20 top-0 bottom-0 w-[300px] pointer-events-none hidden md:block"
              style={{
                background: 'radial-gradient(ellipse at right center, rgba(148,163,184,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="space-y-5">
              {canada.map((entry) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 p-6 rounded-lg"
                  style={{
                    borderLeft: '3px solid rgba(148,163,184,0.4)',
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(148,163,184,0.05) 0%, transparent 60%)',
                      boxShadow: 'inset 0 0 0 1px rgba(148,163,184,0.15)',
                      borderRadius: 'inherit',
                    }}
                  />
                  <p className="font-display text-base text-slate-300">
                    {entry.degree}
                  </p>
                  <p className="font-body text-sm text-white/50 mt-2">{entry.institution}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-body text-xs text-white/30">
                      {entry.years}
                    </p>
                    <span className="text-white/15">&middot;</span>
                    <p className="font-body text-xs text-white/30">
                      GPA: {entry.gpa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes for portal pulse */}
      <style jsx>{`
        @keyframes portalPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
