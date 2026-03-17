'use client';

import React from 'react';
import { useGalleryStore } from '@/store/galleryStore';
import { SITE_CONTENT } from '@/data/content';

export default function NavigationDots() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);

  const handleClick = (index: number) => {
    const el = document.getElementById(SITE_CONTENT.rooms[index].id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
            w-3 h-3 rounded-full border border-white/30 transition-all duration-300
            hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gallery-gold focus:ring-offset-2 focus:ring-offset-gallery-black
            ${activeRoom === i
              ? 'bg-gallery-gold border-gallery-gold scale-110'
              : 'bg-transparent hover:bg-white/20'
            }
          `}
        />
      ))}
    </nav>
  );
}
