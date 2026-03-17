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
      {/* Room spotlight — centered radial glow (bigger, more dramatic) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 45%, rgba(${config.accentRgb}, 0.09) 0%, rgba(${config.accentRgb}, 0.03) 35%, transparent 75%)`,
          width: '140%',
          height: '140%',
          left: '-20%',
          top: '-20%',
        }}
      />

      {/* Vignette — darken edges for focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(${config.accentRgb}, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated border at top — gold line fading from center */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(${config.accentRgb}, 0.3) 30%, rgba(${config.accentRgb}, 0.5) 50%, rgba(${config.accentRgb}, 0.3) 70%, transparent 100%)`,
          boxShadow: `0 0 8px rgba(${config.accentRgb}, 0.15)`,
          animation: 'borderPulse 4s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes borderPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Room number watermark — large decorative */}
      <div className="absolute top-8 left-10 pointer-events-none select-none">
        <span
          className="font-display text-[200px] leading-none font-bold"
          style={{ color: `rgba(${config.accentRgb}, 0.08)` }}
        >
          {config.number}
        </span>
      </div>

      {/* Decorative corner element — L-shaped lines near room number */}
      <div className="absolute top-6 left-8 pointer-events-none select-none">
        <div
          style={{
            width: '24px',
            height: '1px',
            background: `rgba(${config.accentRgb}, 0.2)`,
          }}
        />
        <div
          style={{
            width: '1px',
            height: '24px',
            background: `rgba(${config.accentRgb}, 0.2)`,
          }}
        />
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
