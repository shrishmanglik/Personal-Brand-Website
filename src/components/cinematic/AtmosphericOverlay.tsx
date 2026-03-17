'use client';

import { useGalleryStore } from '@/store/galleryStore';
import { ROOM_CONFIG } from '@/lib/roomConfig';

export default function AtmosphericOverlay() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const config = ROOM_CONFIG[activeRoom];

  return (
    <>
      {/* Film grain — animated noise overlay */}
      <div className="film-grain z-[33]" />

      {/* Constant subtle vignette */}
      <div
        className="fixed inset-0 z-[35] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Per-room color wash at edges */}
      <div
        className="fixed inset-0 z-[34] pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, transparent 50%, rgba(${config.accentRgb}, 0.03) 100%)`,
        }}
      />

      {/* Top cinematic letterbox bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[36] pointer-events-none h-[2px]"
        style={{ background: `rgba(${config.accentRgb}, 0.15)` }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-[36] pointer-events-none h-[2px]"
        style={{ background: `rgba(${config.accentRgb}, 0.08)` }}
      />
    </>
  );
}
