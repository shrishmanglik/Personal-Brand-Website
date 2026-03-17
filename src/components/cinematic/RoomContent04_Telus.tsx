'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent04_Telus() {
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      {/* Hero title */}
      <h2 data-reveal-heading className="font-display text-4xl md:text-5xl text-center leading-tight mb-3" style={{ color: 'var(--room-accent)' }}>
        {title}
      </h2>
      <p data-reveal className="font-body text-xs tracking-[3px] text-white/30 text-center mb-14">
        {period}
      </p>

      {/* 2x2 piece grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl mb-14">
        {pieces.map((piece) => (
          <div
            key={piece.title}
            data-reveal
            className="p-6 rounded-sm border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:border-[rgba(var(--room-accent-rgb),0.2)]"
            style={{ borderTopColor: `rgba(var(--room-accent-rgb), 0.25)`, borderTopWidth: '2px' }}
          >
            <h3 className="font-display text-sm mb-3" style={{ color: 'var(--room-accent)' }}>
              {piece.title}
            </h3>
            <p className="font-body text-xs text-white/40 leading-relaxed">
              {piece.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <blockquote data-reveal className="max-w-xl text-center">
        <div className="font-display text-2xl mb-4" style={{ color: 'rgba(var(--room-accent-rgb), 0.15)' }}>&ldquo;</div>
        <p className="font-body text-sm text-white/35 italic leading-relaxed">
          {quote}
        </p>
        <div className="w-12 h-[1px] mx-auto mt-5" style={{ background: 'rgba(var(--room-accent-rgb), 0.2)' }} />
      </blockquote>
    </div>
  );
}
