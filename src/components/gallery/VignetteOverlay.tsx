'use client';

import { useGalleryStore } from '@/store/galleryStore';
import { SITE_CONTENT } from '@/data/content';

export default function VignetteOverlay() {
  const isInCorridor = useGalleryStore((s) => s.isInCorridor);
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const roomName = SITE_CONTENT.rooms[activeRoom]?.name || '';

  return (
    <>
      {/* Vignette darkening during corridor transitions */}
      <div
        className="vignette-overlay"
        style={{
          opacity: isInCorridor ? 1 : 0,
        }}
      />

      {/* Room name indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 40,
          opacity: isInCorridor ? 0 : 0.6,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
          }}
        >
          {roomName}
        </p>
      </div>
    </>
  );
}
