'use client';

import dynamic from 'next/dynamic';
import { useCinematicScroll } from '@/hooks/useCinematicScroll';
import { useGalleryStore } from '@/store/galleryStore';
import RoomContainer from './RoomContainer';
import RoomContent01 from './RoomContent01_Foyer';
import RoomContent02 from './RoomContent02_Origins';
import RoomContent03 from './RoomContent03_Enterprise';
import RoomContent04 from './RoomContent04_Telus';
import RoomContent05 from './RoomContent05_Innovation';
import RoomContent06 from './RoomContent06_Projects';
import RoomContent07 from './RoomContent07_Workshop';
import RoomContent08 from './RoomContent08_Exit';
import ParticleCanvas from './ParticleCanvas';
import AtmosphericOverlay from './AtmosphericOverlay';

const FloatingScene = dynamic(
  () => import('@/components/three/FloatingScene'),
  { ssr: false }
);

const ROOMS = [
  RoomContent01,
  RoomContent02,
  RoomContent03,
  RoomContent04,
  RoomContent05,
  RoomContent06,
  RoomContent07,
  RoomContent08,
];

export default function CinematicStage() {
  useCinematicScroll();
  const scrollProgress = useGalleryStore((s) => s.scrollProgress);

  return (
    <>
      {/* Atmospheric particles behind everything */}
      <ParticleCanvas />

      {/* 3D floating scene */}
      <FloatingScene scrollProgress={scrollProgress} />

      {/* Fixed viewport — all rooms stack here */}
      <div className="fixed inset-0 z-10 overflow-hidden">
        {ROOMS.map((RoomContent, i) => (
          <RoomContainer key={i} index={i}>
            <RoomContent />
          </RoomContainer>
        ))}
      </div>

      {/* Atmospheric overlay on top */}
      <AtmosphericOverlay />

      {/* Scroll driver — invisible, provides scroll height */}
      <div id="scroll-driver" className="relative" style={{ zIndex: -1, height: '800vh' }}>
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            data-room-trigger={i}
            style={{ height: '100vh' }}
          />
        ))}
      </div>
    </>
  );
}
