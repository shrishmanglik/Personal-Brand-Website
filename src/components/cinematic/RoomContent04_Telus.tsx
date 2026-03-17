'use client';

import { SITE_CONTENT } from '@/data/content';
import TypewriterText from '@/components/effects/TypewriterText';

const ROMAN = ['I', 'II', 'III', 'IV'];

export default function RoomContent04_Telus() {
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[160px]"
        style={{ background: 'rgba(201,168,76,0.05)' }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'rgba(201,168,76,0.03)' }}
      />

      {/* "TELUS Health" giant watermark — more visible with horizontal scroll */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-[clamp(5rem,18vw,14rem)] tracking-[0.2em] uppercase whitespace-nowrap"
          style={{
            color: 'rgba(201,168,76,0.06)',
            animation: 'watermarkScroll 30s linear infinite',
          }}
        >
          TELUS Health
        </span>
      </div>
      {/* Second offset watermark for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-[clamp(3rem,10vw,8rem)] tracking-[0.3em] uppercase whitespace-nowrap"
          style={{
            color: 'rgba(201,168,76,0.025)',
            animation: 'watermarkScrollReverse 40s linear infinite',
            transform: 'translateY(80px)',
          }}
        >
          TELUS Health &nbsp;&nbsp;&nbsp; TELUS Health
        </span>
      </div>

      {/* Promoted badge — top center prominent */}
      <div data-reveal className="mb-10 relative z-10">
        <div
          className="inline-flex items-center gap-2.5 font-display text-[10px] tracking-[4px] uppercase px-6 py-2.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C',
            boxShadow: '0 0 20px rgba(201,168,76,0.15), 0 0 40px rgba(201,168,76,0.06)',
            animation: 'promotedGlow 3s ease-in-out infinite',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#C9A84C',
              boxShadow: '0 0 8px rgba(201,168,76,0.8)',
              animation: 'promotedDot 2s ease-in-out infinite',
            }}
          />
          Promoted June 2025
        </div>
      </div>

      {/* Hero title — cream/white with subtle glow */}
      <h2
        data-reveal-heading
        className="font-display text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-4 relative z-10"
        style={{
          color: '#F5F0E8',
          textShadow: '0 0 40px rgba(245,240,232,0.1), 0 0 80px rgba(201,168,76,0.05)',
        }}
      >
        {title}
      </h2>
      <p
        data-reveal
        className="font-body text-xs tracking-[4px] text-white/25 text-center mb-16 relative z-10"
      >
        {period}
      </p>

      {/* Decorative horizontal line separator */}
      <div
        data-reveal
        className="w-32 h-[1px] mb-16"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
        }}
      />

      {/* 2x2 pillar grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4 mb-20 relative z-10">
        {pieces.map((piece, i) => (
          <div
            key={piece.title}
            id={`telus-piece-${i + 1}`}
            data-reveal
            className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl"
            style={{
              background:
                'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            }}
          >
            {/* Gold accent border on top */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  'linear-gradient(to right, transparent 10%, rgba(201,168,76,0.5) 50%, transparent 90%)',
              }}
            />
            {/* Top border glow on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: '0 0 12px rgba(201,168,76,0.4), 0 0 24px rgba(201,168,76,0.15)',
              }}
            />

            {/* Roman numeral watermark in corner */}
            <div
              className="absolute top-4 right-5 font-display pointer-events-none select-none leading-none"
              style={{
                fontSize: '5rem',
                color: 'rgba(201,168,76,0.04)',
                lineHeight: '1',
              }}
            >
              {ROMAN[i]}
            </div>

            {/* Hover glow overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
              style={{
                background:
                  'radial-gradient(ellipse at top center, rgba(201,168,76,0.06) 0%, transparent 60%)',
                boxShadow:
                  'inset 0 1px 0 rgba(201,168,76,0.1), 0 8px 32px rgba(0,0,0,0.15)',
              }}
            />

            <div className="relative p-8">
              {/* Piece number — small Roman numeral */}
              <span
                className="font-display text-lg block mb-3"
                style={{
                  color: 'rgba(201,168,76,0.5)',
                  textShadow: '0 0 8px rgba(201,168,76,0.15)',
                }}
              >
                {ROMAN[i]}
              </span>
              <h3
                className="font-display text-base mb-4 text-gallery-gold leading-snug"
                style={{ textShadow: '0 0 12px rgba(201,168,76,0.1)' }}
              >
                {piece.title}
              </h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">
                {piece.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote — dramatic centerpiece */}
      <blockquote data-reveal className="max-w-2xl text-center px-4 relative z-10">
        {/* Glass container */}
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '3rem 2.5rem 2.5rem',
          }}
        >
          {/* Large decorative opening quotation mark */}
          <div
            className="font-display leading-none mb-2 pointer-events-none select-none"
            style={{
              fontSize: '8rem',
              color: 'rgba(201,168,76,0.15)',
              textShadow: '0 0 30px rgba(201,168,76,0.1), 0 0 60px rgba(201,168,76,0.05)',
              marginTop: '-2rem',
              lineHeight: '0.5',
            }}
          >
            &ldquo;
          </div>

          {/* TypewriterText for the quote */}
          <TypewriterText
            text={quote}
            speed={35}
            className="font-display text-lg md:text-xl text-white/45 italic leading-[1.9]"
          />

          {/* Closing quotation mark */}
          <div
            className="font-display leading-none mt-4 pointer-events-none select-none"
            style={{
              fontSize: '4rem',
              color: 'rgba(201,168,76,0.08)',
              lineHeight: '0.3',
              textAlign: 'right',
            }}
          >
            &rdquo;
          </div>

          {/* Gold underline after quote */}
          <div
            className="w-24 h-[2px] mx-auto mt-8 rounded-full"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)',
              boxShadow: '0 0 8px rgba(201,168,76,0.2)',
            }}
          />

          {/* Subtle gold corner accents */}
          <div
            className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
            style={{
              borderTop: '1px solid rgba(201,168,76,0.15)',
              borderLeft: '1px solid rgba(201,168,76,0.15)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
            style={{
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              borderRight: '1px solid rgba(201,168,76,0.15)',
            }}
          />
        </div>
      </blockquote>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes watermarkScroll {
          0% { transform: translateX(5%); }
          50% { transform: translateX(-5%); }
          100% { transform: translateX(5%); }
        }
        @keyframes watermarkScrollReverse {
          0% { transform: translateX(-3%) translateY(80px); }
          50% { transform: translateX(3%) translateY(80px); }
          100% { transform: translateX(-3%) translateY(80px); }
        }
        @keyframes promotedGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(201,168,76,0.15), 0 0 40px rgba(201,168,76,0.06);
          }
          50% {
            box-shadow: 0 0 30px rgba(201,168,76,0.25), 0 0 60px rgba(201,168,76,0.1);
          }
        }
        @keyframes promotedDot {
          0%, 100% {
            box-shadow: 0 0 8px rgba(201,168,76,0.8);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 14px rgba(201,168,76,1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
