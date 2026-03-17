'use client';

import { useGalleryStore } from '@/store/galleryStore';
import { ROOM_CONFIG } from '@/lib/roomConfig';

export default function AtmosphericOverlay() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const config = ROOM_CONFIG[activeRoom];

  return (
    <>
      {/* Film grain — animated noise overlay */}
      <div className="film-grain z-[33]" style={{ opacity: 0.04 }} />

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

      {/* Chromatic aberration at edges */}
      <div
        className="fixed inset-0 z-[34] pointer-events-none"
        style={{
          boxShadow: `
            inset 2px 0 8px rgba(255, 0, 0, 0.015),
            inset -2px 0 8px rgba(0, 100, 255, 0.015),
            inset 0 2px 8px rgba(255, 0, 100, 0.01),
            inset 0 -2px 8px rgba(0, 200, 255, 0.01)
          `,
        }}
      />

      {/* Top cinematic letterbox bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[36] pointer-events-none h-[3px]"
        style={{
          background: `rgba(${config.accentRgb}, 0.18)`,
          boxShadow: `0 0 12px rgba(${config.accentRgb}, 0.1), 0 0 4px rgba(${config.accentRgb}, 0.15)`,
        }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-[36] pointer-events-none h-[3px]"
        style={{
          background: `rgba(${config.accentRgb}, 0.1)`,
          boxShadow: `0 0 12px rgba(${config.accentRgb}, 0.06), 0 0 4px rgba(${config.accentRgb}, 0.08)`,
        }}
      />

      {/* Animated scanline */}
      <div
        className="fixed left-0 right-0 z-[37] pointer-events-none"
        style={{
          height: '1px',
          background: `rgba(255, 255, 255, 0.02)`,
          boxShadow: '0 0 2px rgba(255, 255, 255, 0.01)',
          animation: 'scanline 8s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes scanline {
          0% { top: -1px; }
          100% { top: 100vh; }
        }
      `}</style>
    </>
  );
}
