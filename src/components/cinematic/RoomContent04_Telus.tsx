'use client';

import { SITE_CONTENT } from '@/data/content';
import TypewriterText from '@/components/effects/TypewriterText';

const ROMAN = ['I', 'II', 'III', 'IV'];

export default function RoomContent04_Telus() {
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* "TELUS Health" giant watermark with slow drift */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-[clamp(4rem,18vw,14rem)] tracking-[0.15em] uppercase whitespace-nowrap"
          style={{
            color: 'rgba(201,168,76,0.06)',
            animation: 'watermark-drift 20s ease-in-out infinite',
          }}
        >
          TELUS Health
        </span>
      </div>

      {/* Promoted badge */}
      <div data-reveal className="mb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.25)',
            boxShadow: '0 0 20px rgba(201,168,76,0.1), inset 0 0 20px rgba(201,168,76,0.05)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#C9A84C',
              boxShadow: '0 0 8px rgba(201,168,76,0.6)',
              animation: 'glow-pulse 2s ease-in-out infinite',
            }}
          />
          <span className="font-body text-[10px] tracking-[3px] uppercase text-gallery-gold">
            Promoted June 2025
          </span>
        </div>
      </div>

      {/* Hero title — cream/white with glow */}
      <h2
        data-reveal-heading
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-3"
        style={{
          color: '#F5F0E8',
          textShadow: '0 0 40px rgba(245,240,232,0.15), 0 0 80px rgba(201,168,76,0.08)',
        }}
      >
        {title}
      </h2>
      <p data-reveal className="font-body text-xs tracking-[3px] text-white/30 text-center mb-14">
        {period}
      </p>

      {/* Divider */}
      <div
        data-reveal-line
        className="w-24 h-[1px] mb-14 origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          boxShadow: '0 0 8px rgba(201,168,76,0.3)',
        }}
      />

      {/* 2x2 piece grid — glass cards with roman numerals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-14">
        {pieces.map((piece, i) => (
          <div
            key={piece.title}
            id={`telus-piece-${i + 1}`}
            data-reveal
            className="glass group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 p-6"
            style={{
              borderTop: '2px solid rgba(201,168,76,0.3)',
            }}
          >
            {/* Roman numeral watermark */}
            <span
              className="absolute top-3 right-4 font-display text-5xl font-bold pointer-events-none select-none"
              style={{ color: 'rgba(201,168,76,0.06)' }}
            >
              {ROMAN[i]}
            </span>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)',
              }}
            />

            {/* Piece number label */}
            <span className="font-display text-lg text-gallery-gold/60 mb-2 block relative z-10">
              {ROMAN[i]}
            </span>
            <h3 className="font-display text-sm mb-3 text-gallery-gold relative z-10">
              {piece.title}
            </h3>
            <p className="font-body text-xs text-white/45 leading-relaxed relative z-10">
              {piece.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote — emotional centerpiece */}
      <blockquote data-reveal className="max-w-xl text-center relative">
        {/* Decorative opening quote with glow */}
        <div
          className="font-display leading-none mb-4"
          style={{
            fontSize: '7rem',
            color: 'rgba(201,168,76,0.15)',
            textShadow: '0 0 40px rgba(201,168,76,0.1)',
          }}
        >
          &ldquo;
        </div>
        <TypewriterText
          text={quote}
          speed={40}
          className="font-display text-lg md:text-xl text-white/50 italic leading-[1.8]"
        />
        <div
          className="w-20 h-[1px] mx-auto mt-8"
          style={{
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            boxShadow: '0 0 10px rgba(201,168,76,0.2)',
          }}
        />
      </blockquote>

      {/* Watermark drift animation */}
      <style jsx>{`
        @keyframes watermark-drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-3%); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(201,168,76,0.6); }
          50% { opacity: 0.6; box-shadow: 0 0 16px rgba(201,168,76,0.8); }
        }
      `}</style>
    </div>
  );
}
