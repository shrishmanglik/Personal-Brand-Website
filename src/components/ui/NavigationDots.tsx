'use client';

import React from 'react';
import { useGalleryStore } from '@/store/galleryStore';
import { SITE_CONTENT } from '@/data/content';
import { ROOM_SCROLL_POSITIONS } from '@/hooks/useCinematicScroll';

export default function NavigationDots() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);

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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {SITE_CONTENT.rooms.map((room, i) => (
        <button
          key={room.id}
          onClick={() => handleClick(i)}
          aria-label={`Navigate to ${room.name}`}
          aria-current={activeRoom === i ? 'true' : undefined}
          className={`
            w-2.5 h-2.5 rounded-full border transition-all duration-500
            hover:scale-150 focus:outline-none focus:ring-2 focus:ring-gallery-gold focus:ring-offset-2 focus:ring-offset-gallery-black
            ${activeRoom === i
              ? 'bg-gallery-gold border-gallery-gold scale-125 shadow-[0_0_8px_rgba(201,168,76,0.4)]'
              : 'bg-transparent border-white/20 hover:border-white/40'
            }
          `}
        />
      ))}
    </nav>
  );
}
