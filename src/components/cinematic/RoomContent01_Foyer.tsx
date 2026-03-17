'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent01_Foyer() {
  const { name, title, location, availability } = SITE_CONTENT.hero;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center py-20">
      {/* Diagonal spotlight beams from upper corners */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[60%] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)',
          clipPath: 'polygon(0 0, 60% 0, 30% 100%, 0 60%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[40%] h-[60%] pointer-events-none"
        style={{
          background: 'linear-gradient(225deg, rgba(201,168,76,0.04) 0%, transparent 60%)',
          clipPath: 'polygon(40% 0, 100% 0, 100% 60%, 70% 100%)',
        }}
      />

      {/* Name — massive with gold shimmer */}
      <h1
        data-reveal-heading
        className="font-display gold-shimmer leading-[0.9] tracking-[0.3em]"
        style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
      >
        {name.split(' ').map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </h1>

      {/* Gold rule */}
      <div
        data-reveal-line
        className="w-32 h-[1px] my-10 origin-left"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
      />

      {/* Title */}
      <p
        data-reveal
        className="font-body text-sm md:text-base text-white/50 tracking-[0.35em] uppercase max-w-lg"
      >
        {title}
      </p>

      {/* Location + Status */}
      <div data-reveal className="flex items-center gap-6 mt-12">
        <div className="text-right">
          <p className="font-display text-[9px] tracking-[3px] uppercase text-white/25">
            {location}
          </p>
        </div>
        <div className="w-[1px] h-4 bg-gallery-gold/20" />
        <div className="text-left">
          <p className="font-display text-[9px] tracking-[3px] uppercase text-white/25">
            {availability}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-reveal
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="font-body text-[10px] tracking-[4px] uppercase text-white/20 animate-pulse-down">
          Scroll to explore
        </p>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gallery-gold/30 to-transparent animate-pulse-down" />
      </div>
    </div>
  );
}
