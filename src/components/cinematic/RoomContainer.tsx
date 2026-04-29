'use client';

import React from 'react';
import { ROOM_CONFIG } from '@/lib/roomConfig';

interface RoomContainerProps {
  index: number;
  children: React.ReactNode;
}

export default function RoomContainer({ index, children }: RoomContainerProps) {
  const config = ROOM_CONFIG[index];

  return (
    <div
      data-room={index}
      className="room-container wall-texture"
      style={{
        background: config.bg,
        // @ts-ignore — CSS custom properties
        '--room-accent': config.accent,
        '--room-accent-rgb': config.accentRgb,
        '--room-glow': config.glowColor,
      } as React.CSSProperties}
    >
      {/* Room spotlight — centered radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 45%, rgba(${config.accentRgb}, 0.06) 0%, rgba(${config.accentRgb}, 0.02) 30%, transparent 70%)`,
          width: '120%',
          height: '120%',
          left: '-10%',
          top: '-10%',
        }}
      />

      {/* Vignette — darken edges for focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Room number watermark — large decorative */}
      <div className="absolute top-6 left-8 md:top-8 md:left-10 pointer-events-none select-none">
        <span
          className="room-watermark font-display leading-none font-bold"
          style={{
            color: `rgba(${config.accentRgb}, 0.06)`,
            fontSize: 'clamp(80px, 14vw, 200px)',
          }}
        >
          {config.number}
        </span>
      </div>

      {/* Room name label */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span
          className="room-name-label font-display tracking-[6px] uppercase whitespace-nowrap"
          style={{
            color: `rgba(${config.accentRgb}, 0.25)`,
            fontSize: 'clamp(8px, 1vw, 10px)',
          }}
        >
          {config.name}
        </span>
      </div>

      {/* Accent glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] max-w-[90vw] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center top, rgba(${config.accentRgb}, 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Content — full-width safe padding for mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
        {children}
      </div>
    </div>
  );
}
