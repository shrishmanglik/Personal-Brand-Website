'use client';

import React from 'react';

interface RoomTransitionProps {
  className?: string;
}

export default function RoomTransition({ className = '' }: RoomTransitionProps) {
  return (
    <div className={`relative w-full flex items-center justify-center py-16 ${className}`}>
      {/* Archway shape */}
      <div className="relative w-48 h-32 mx-auto">
        {/* Arch outline */}
        <div
          className="absolute inset-0 border-2 border-gallery-gold/20"
          style={{
            borderRadius: '50% 50% 0 0',
            borderBottom: 'none',
          }}
        />
        {/* Inner glow */}
        <div
          className="absolute inset-2 bg-gradient-to-b from-gallery-gold/5 to-transparent"
          style={{
            borderRadius: '50% 50% 0 0',
          }}
        />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gallery-gold/20 to-transparent" />
      </div>
      {/* Side lines */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-gallery-gold/10 via-transparent to-gallery-gold/10" />
    </div>
  );
}
