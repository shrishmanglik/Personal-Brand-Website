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
      <div className="absolute top-8 left-10 pointer-events-none select-none">
        <span
          className="font-display text-[200px] leading-none font-bold"
          style={{ color: `rgba(${config.accentRgb}, 0.06)` }}
        >
          {config.number}
        </span>
      </div>

      {/* Room name label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span
          className="font-display text-[10px] tracking-[6px] uppercase"
          style={{ color: `rgba(${config.accentRgb}, 0.25)` }}
        >
          {config.name}
        </span>
      </div>

      {/* Accent glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center top, rgba(${config.accentRgb}, 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        {children}
      </div>
    </div>
  );
}
