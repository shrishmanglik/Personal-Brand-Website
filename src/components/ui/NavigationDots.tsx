'use client';

import React, { useState } from 'react';
import { useGalleryStore } from '@/store/galleryStore';
import { SITE_CONTENT } from '@/data/content';
import { ROOM_SCROLL_POSITIONS } from '@/hooks/useCinematicScroll';

export default function NavigationDots() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const scrollDriver = document.getElementById('scroll-driver');
    if (!scrollDriver) return;

    const targetProgress = ROOM_SCROLL_POSITIONS[index];
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = targetProgress * maxScroll;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <nav
      role="navigation"
      aria-label="Gallery rooms"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
    >
      {/* Vertical connecting line behind dots */}
      <div
        className="absolute top-0 bottom-0 w-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.12) 15%, rgba(201,168,76,0.12) 85%, transparent)',
        }}
      />

      {SITE_CONTENT.rooms.map((room, i) => (
        <div key={room.id} className="relative flex items-center">
          {/* Tooltip — glass card with room name */}
          {hoveredIndex === i && (
            <div
              className="absolute right-6 whitespace-nowrap px-3 py-1.5 rounded-md pointer-events-none"
              style={{
                background: 'rgba(10, 10, 10, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span className="font-display text-[10px] tracking-[2px] uppercase text-gallery-gold/80">
                {room.name}
              </span>
            </div>
          )}

          <button
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Navigate to ${room.name}`}
            aria-current={activeRoom === i ? 'true' : undefined}
            className={`
              relative w-3 h-3 rounded-full border transition-all duration-500
              hover:scale-150 focus:outline-none focus:ring-2 focus:ring-gallery-gold focus:ring-offset-2 focus:ring-offset-gallery-black
              ${activeRoom === i
                ? 'bg-gallery-gold border-gallery-gold scale-125 shadow-[0_0_12px_rgba(201,168,76,0.5),0_0_24px_rgba(201,168,76,0.2)]'
                : 'bg-transparent border-white/20 hover:border-white/40'
              }
            `}
          />
        </div>
      ))}
    </nav>
  );
}
