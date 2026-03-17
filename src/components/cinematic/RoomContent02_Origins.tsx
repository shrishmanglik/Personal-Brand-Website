'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent02_Origins() {
  const education = SITE_CONTENT.education;
  const india = education.filter((e) => e.region === 'india');
  const canada = education.filter((e) => e.region === 'canada');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Background ambient glows — warm left, cool right */}
      <div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'rgba(212,165,116,0.1)' }}
      />
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'rgba(148,163,184,0.1)' }}
      />
      {/* Subtle center convergence glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'rgba(201,168,76,0.04)' }}
      />

      {/* Title with compass decoration */}
      <div data-reveal-heading className="text-center mb-24 relative">
        {/* Compass rose cluster */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-display text-3xl text-gallery-gold/15 tracking-widest">◎</span>
          <div
            className="w-[1px] h-6"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.2), transparent)' }}
          />
        </div>
        <span className="block font-display text-xl italic text-white/35 mb-3 tracking-wide">The</span>
        <h2
          className="font-display tracking-[0.35em] uppercase relative"
          style={{ color: 'var(--room-accent)', fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
        >
          ORIGINS
          {/* Glow behind title */}
          <div
            className="absolute inset-0 pointer-events-none blur-[40px] -z-10"
            style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 70%)' }}
          />
        </h2>
        <div className="mt-5 flex items-center justify-center gap-4">
          <div
            className="w-20 h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, rgba(212,165,116,0.5))' }}
          />
          <span className="font-display text-[10px] tracking-[5px] uppercase text-white/20">
            An Explorer&apos;s Journey
          </span>
          <div
            className="w-20 h-[1px]"
            style={{ background: 'linear-gradient(to left, transparent, rgba(148,163,184,0.5))' }}
          />
        </div>
        {/* Secondary compass */}
        <div className="mt-4 text-gallery-gold/10 text-lg font-display">⊕</div>
      </div>

      {/* Journey path layout */}
      <div className="w-full max-w-6xl relative px-4">
        {/* SVG curved journey path - desktop only */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main flowing path */}
          <path
            d="M 180 80 C 300 80, 350 350, 500 350 S 700 80, 820 80"
            stroke="url(#journeyGradientMain)"
            strokeWidth="2"
            strokeDasharray="10 8"
            strokeLinecap="round"
            opacity="0.35"
            className="animate-journey-dash"
          />
          {/* Secondary parallel path for depth */}
          <path
            d="M 180 90 C 300 90, 350 360, 500 360 S 700 90, 820 90"
            stroke="url(#journeyGradientMain)"
            strokeWidth="1"
            strokeDasharray="4 12"
            strokeLinecap="round"
            opacity="0.15"
          />
          {/* Waypoint dots along the path */}
          <circle cx="300" cy="160" r="3" fill="#D4A574" opacity="0.25" />
          <circle cx="420" cy="320" r="3" fill="#C9A84C" opacity="0.2" />
          <circle cx="580" cy="320" r="3" fill="#C9A84C" opacity="0.2" />
          <circle cx="700" cy="160" r="3" fill="#94A3B8" opacity="0.25" />
          <defs>
            <linearGradient id="journeyGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="40%" stopColor="#C9A84C" />
              <stop offset="60%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative md:grid md:grid-cols-[1fr,auto,1fr] md:gap-10 items-start">
          {/* === India Column === */}
          <div className="relative">
            {/* Region label */}
            <div data-reveal className="flex items-center justify-center md:justify-end gap-3 mb-10">
              <div
                className="w-10 h-6 rounded-sm flex items-center justify-center relative"
                style={{
                  background:
                    'linear-gradient(180deg, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%)',
                  boxShadow: '0 0 16px rgba(212,165,116,0.35), 0 0 30px rgba(212,165,116,0.15)',
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full border border-[#000080]"
                  style={{ borderWidth: '0.5px' }}
                />
              </div>
              <span
                className="font-display text-sm tracking-[8px] uppercase"
                style={{
                  color: '#D4A574',
                  textShadow: '0 0 20px rgba(212,165,116,0.3)',
                }}
              >
                INDIA
              </span>
            </div>

            {/* Warm ambient glow — more visible */}
            <div
              className="absolute -left-20 top-0 bottom-0 w-[350px] pointer-events-none hidden md:block"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(212,165,116,0.1) 0%, transparent 70%)',
              }}
            />

            <div className="space-y-6">
              {india.map((entry, i) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 rounded-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Gradient left accent border */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-500"
                    style={{
                      background:
                        'linear-gradient(to bottom, #D4A574, rgba(212,165,116,0.3))',
                      boxShadow: 'none',
                    }}
                  />
                  {/* Border glow on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(to bottom, #D4A574, rgba(212,165,116,0.5))',
                      boxShadow: '0 0 12px rgba(212,165,116,0.4), 0 0 24px rgba(212,165,116,0.15)',
                    }}
                  />
                  {/* Hover card glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(212,165,116,0.06) 0%, transparent 50%)',
                      boxShadow:
                        'inset 0 0 0 1px rgba(212,165,116,0.12), 0 8px 32px rgba(0,0,0,0.2)',
                    }}
                  />
                  <div className="relative p-6 pl-7">
                    {/* Index watermark */}
                    <div
                      className="absolute top-3 right-4 font-display text-4xl pointer-events-none"
                      style={{ color: 'rgba(212,165,116,0.04)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p
                      className="font-display text-base leading-snug"
                      style={{ color: '#D4A574' }}
                    >
                      {entry.degree}
                    </p>
                    <p className="font-body text-sm text-white/50 mt-2.5">{entry.institution}</p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <p className="font-body text-xs text-white/30">{entry.years}</p>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <p className="font-body text-xs text-white/30">GPA: {entry.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Archway Portal Divider === */}
          <div
            data-reveal
            className="hidden md:flex flex-col items-center justify-center relative"
            style={{ width: '160px', minHeight: '450px' }}
          >
            {/* Glowing portal arch */}
            <div className="relative w-full h-[360px]">
              {/* Outer glow halo */}
              <div
                className="absolute -inset-3 rounded-[80px_80px_0_0]"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 100%)',
                  filter: 'blur(8px)',
                }}
              />
              {/* Primary arch border — animated */}
              <div
                className="absolute inset-0 rounded-[75px_75px_0_0]"
                style={{
                  border: '2px solid transparent',
                  background:
                    'linear-gradient(var(--gallery-black, #0a0a0a), var(--gallery-black, #0a0a0a)) padding-box, linear-gradient(180deg, rgba(212,165,116,0.6) 0%, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.08) 50%, rgba(148,163,184,0.08) 70%, rgba(148,163,184,0.4) 100%) border-box',
                  animation: 'portalPulse 4s ease-in-out infinite',
                }}
              />
              {/* Inner secondary arch */}
              <div
                className="absolute inset-[8px] rounded-[67px_67px_0_0]"
                style={{
                  border: '1px solid transparent',
                  background:
                    'linear-gradient(var(--gallery-black, #0a0a0a), var(--gallery-black, #0a0a0a)) padding-box, linear-gradient(180deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.03) 50%, rgba(148,163,184,0.15) 100%) border-box',
                }}
              />
              {/* Innermost glow line */}
              <div
                className="absolute inset-[14px] rounded-[60px_60px_0_0]"
                style={{
                  border: '1px solid rgba(201,168,76,0.05)',
                  borderBottom: 'none',
                }}
              />
              {/* Scanning light effect */}
              <div
                className="absolute inset-[8px] rounded-[67px_67px_0_0] overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.03) 45%, rgba(201,168,76,0.06) 50%, rgba(201,168,76,0.03) 55%, transparent 100%)',
                    animation: 'portalScan 6s ease-in-out infinite',
                  }}
                />
              </div>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center relative z-10">
                <span
                  className="font-display text-[11px] tracking-[5px] uppercase gold-shimmer"
                  style={{ color: '#D4A574', textShadow: '0 0 8px rgba(212,165,116,0.3)' }}
                >
                  India
                </span>
                <div className="my-3 flex items-center gap-2">
                  <div
                    className="w-6 h-[1px]"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(212,165,116,0.4), transparent)',
                    }}
                  />
                  <span
                    className="font-display text-xl"
                    style={{
                      color: 'rgba(201,168,76,0.5)',
                      textShadow: '0 0 12px rgba(201,168,76,0.3)',
                      animation: 'arrowPulse 2s ease-in-out infinite',
                    }}
                  >
                    &rarr;
                  </span>
                  <div
                    className="w-6 h-[1px]"
                    style={{
                      background:
                        'linear-gradient(to left, rgba(148,163,184,0.4), transparent)',
                    }}
                  />
                </div>
                <span
                  className="font-display text-[11px] tracking-[5px] uppercase"
                  style={{ color: '#94A3B8', textShadow: '0 0 8px rgba(148,163,184,0.3)' }}
                >
                  Canada
                </span>
                <div className="mt-5 relative">
                  <span
                    className="text-3xl font-display"
                    style={{
                      color: 'rgba(201,168,76,0.2)',
                      textShadow: '0 0 20px rgba(201,168,76,0.15)',
                    }}
                  >
                    ⊕
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical connecting line below arch */}
            <div
              className="w-[1px] flex-1"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(201,168,76,0.25), rgba(201,168,76,0.05), transparent)',
              }}
            />
          </div>

          {/* Mobile divider */}
          <div className="md:hidden flex items-center justify-center gap-4 my-12">
            <div
              className="w-20 h-[1px]"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(212,165,116,0.4))',
              }}
            />
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-display text-[10px] tracking-[4px] uppercase gold-shimmer"
                style={{ color: 'rgba(201,168,76,0.6)' }}
              >
                India &rarr; Canada
              </span>
              <span
                className="text-xl font-display"
                style={{ color: 'rgba(201,168,76,0.2)' }}
              >
                ⊕
              </span>
            </div>
            <div
              className="w-20 h-[1px]"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(148,163,184,0.4))',
              }}
            />
          </div>

          {/* === Canada Column === */}
          <div className="relative">
            {/* Region label */}
            <div data-reveal className="flex items-center justify-center md:justify-start gap-3 mb-10">
              <div
                className="w-10 h-6 rounded-sm overflow-hidden relative"
                style={{
                  background:
                    'linear-gradient(90deg, #FF0000 25%, #FFFFFF 25%, #FFFFFF 75%, #FF0000 75%)',
                  boxShadow: '0 0 16px rgba(148,163,184,0.35), 0 0 30px rgba(148,163,184,0.15)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[8px] leading-none" style={{ color: '#FF0000' }}>
                    &#9756;
                  </div>
                </div>
              </div>
              <span
                className="font-display text-sm tracking-[8px] uppercase"
                style={{
                  color: '#94A3B8',
                  textShadow: '0 0 20px rgba(148,163,184,0.3)',
                }}
              >
                CANADA
              </span>
            </div>

            {/* Cool ambient glow — more visible */}
            <div
              className="absolute -right-20 top-0 bottom-0 w-[350px] pointer-events-none hidden md:block"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(148,163,184,0.1) 0%, transparent 70%)',
              }}
            />

            <div className="space-y-6">
              {canada.map((entry, i) => (
                <div
                  key={entry.id}
                  data-reveal
                  className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 rounded-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Gradient left accent border */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-500"
                    style={{
                      background:
                        'linear-gradient(to bottom, #94A3B8, rgba(148,163,184,0.3))',
                    }}
                  />
                  {/* Border glow on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(to bottom, #94A3B8, rgba(148,163,184,0.5))',
                      boxShadow: '0 0 12px rgba(148,163,184,0.4), 0 0 24px rgba(148,163,184,0.15)',
                    }}
                  />
                  {/* Hover card glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(148,163,184,0.06) 0%, transparent 50%)',
                      boxShadow:
                        'inset 0 0 0 1px rgba(148,163,184,0.12), 0 8px 32px rgba(0,0,0,0.2)',
                    }}
                  />
                  <div className="relative p-6 pl-7">
                    {/* Index watermark */}
                    <div
                      className="absolute top-3 right-4 font-display text-4xl pointer-events-none"
                      style={{ color: 'rgba(148,163,184,0.04)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-display text-base leading-snug text-slate-300">
                      {entry.degree}
                    </p>
                    <p className="font-body text-sm text-white/50 mt-2.5">{entry.institution}</p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <p className="font-body text-xs text-white/30">{entry.years}</p>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <p className="font-body text-xs text-white/30">GPA: {entry.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes portalPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes portalScan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes arrowPulse {
          0%, 100% { opacity: 0.4; transform: translateX(0); }
          50% { opacity: 0.8; transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
}
