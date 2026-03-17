'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent01_Foyer() {
  const { name, title, location, availability } = SITE_CONTENT.hero;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
      {/* Name — massive serif, the title card */}
      <h1 data-reveal-heading className="font-display text-7xl md:text-8xl lg:text-9xl text-gallery-gold tracking-[0.08em] leading-[0.9]">
        {name.split(' ').map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </h1>

      {/* Gold rule */}
      <div data-reveal-line className="w-24 h-[1px] my-8 origin-left" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      {/* Title */}
      <p data-reveal className="font-body text-sm md:text-base text-white/50 tracking-[0.35em] uppercase max-w-lg">
        {title}
      </p>

      {/* Location + Status */}
      <div data-reveal className="flex items-center gap-6 mt-12">
        <div className="text-right">
          <p className="font-display text-[9px] tracking-[3px] uppercase text-white/25">{location}</p>
        </div>
        <div className="w-[1px] h-4 bg-gallery-gold/20" />
        <div className="text-left">
          <p className="font-display text-[9px] tracking-[3px] uppercase text-white/25">{availability}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div data-reveal className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="font-body text-[10px] tracking-[4px] uppercase text-white/20">Scroll to explore</p>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gallery-gold/30 to-transparent animate-pulse-down" />
      </div>
    </div>
  );
}
