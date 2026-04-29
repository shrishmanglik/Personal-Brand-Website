'use client';

import { useGalleryStore } from '@/store/galleryStore';
import { ROOM_CONFIG } from '@/lib/roomConfig';

export default function AtmosphericOverlay() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const scrollProgress = useGalleryStore((s) => s.scrollProgress);
  const config = ROOM_CONFIG[activeRoom];

  // Calculate next room for color blending — gives the "lighting handoff" feel
  const localProgress = (scrollProgress * ROOM_CONFIG.length) - activeRoom;
  const nextIdx = Math.min(activeRoom + 1, ROOM_CONFIG.length - 1);
  const nextConfig = ROOM_CONFIG[nextIdx];
  const blendStrength = Math.max(0, Math.min(1, localProgress - 0.6)) / 0.4;

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

      {/* Per-room color wash — current room */}
      <div
        className="fixed inset-0 z-[34] pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at center, transparent 50%, rgba(${config.accentRgb}, 0.04) 100%)`,
          opacity: 1 - blendStrength * 0.6,
        }}
      />

      {/* Per-room color wash — bleeding next room (lighting handoff) */}
      {blendStrength > 0 && (
        <div
          className="fixed inset-0 z-[34] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 50%, rgba(${nextConfig.accentRgb}, 0.04) 100%)`,
            opacity: blendStrength * 0.6,
          }}
        />
      )}

      {/* Top cinematic letterbox bar — color shifts smoothly */}
      <div
        className="fixed top-0 left-0 right-0 z-[36] pointer-events-none h-[2px] transition-[background] duration-700"
        style={{ background: `rgba(${config.accentRgb}, 0.18)` }}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-[36] pointer-events-none h-[2px] transition-[background] duration-700"
        style={{ background: `rgba(${config.accentRgb}, 0.1)` }}
      />

      {/* Subtle moving "light from window" — drifts horizontally based on scroll */}
      <div
        className="fixed inset-0 z-[34] pointer-events-none mix-blend-screen"
        style={{
          background: `radial-gradient(ellipse 600px 400px at ${20 + scrollProgress * 60}% 30%, rgba(${config.accentRgb}, 0.025) 0%, transparent 70%)`,
          transition: 'background 0.5s ease-out',
        }}
        aria-hidden="true"
      />
    </>
  );
}
