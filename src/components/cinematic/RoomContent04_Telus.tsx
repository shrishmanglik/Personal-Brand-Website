'use client';

import { SITE_CONTENT } from '@/data/content';
import TypewriterText from '@/components/effects/TypewriterText';

const ROMAN = ['I', 'II', 'III', 'IV'];

export default function RoomContent04_Telus() {
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      {/* "TELUS Health" giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-[clamp(4rem,15vw,12rem)] tracking-[0.15em] uppercase whitespace-nowrap"
          style={{ color: 'rgba(201,168,76,0.04)' }}
        >
          TELUS Health
        </span>
      </div>

      {/* Hero title — cream/white */}
      <h2
        data-reveal-heading
        className="font-display text-4xl md:text-5xl text-center leading-tight mb-3"
        style={{ color: '#F5F0E8' }}
      >
        {title}
      </h2>
      <p data-reveal className="font-body text-xs tracking-[3px] text-white/30 text-center mb-14">
        {period}
      </p>

      {/* 2x2 piece grid — numbered I-IV, gallery frames */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-14">
        {pieces.map((piece, i) => (
          <div
            key={piece.title}
            id={`telus-piece-${i + 1}`}
            data-reveal
            className="gallery-frame spotlight p-6"
          >
            {/* Piece number */}
            <span className="font-display text-lg text-gallery-gold/60 mb-2 block">
              {ROMAN[i]}
            </span>
            <h3 className="font-display text-sm mb-3 text-gallery-gold">
              {piece.title}
            </h3>
            <p className="font-body text-xs text-white/45 leading-relaxed">
              {piece.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote — emotional centerpiece with TypewriterText */}
      <blockquote data-reveal className="max-w-xl text-center">
        {/* Decorative opening quote */}
        <div
          className="font-display leading-none mb-4"
          style={{ fontSize: '6rem', color: 'rgba(201,168,76,0.1)' }}
        >
          &ldquo;
        </div>
        <TypewriterText
          text={quote}
          speed={40}
          className="font-display text-lg md:text-xl text-white/50 italic leading-[1.8]"
        />
        <div className="w-16 h-[1px] mx-auto mt-6" style={{ background: 'rgba(201,168,76,0.2)' }} />
      </blockquote>
    </div>
  );
}
