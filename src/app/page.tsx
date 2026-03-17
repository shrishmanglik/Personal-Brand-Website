'use client';

import '@/lib/gsap';
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import NavigationDots from '@/components/ui/NavigationDots';
import ProgressIndicator from '@/components/ui/ProgressIndicator';
import Room01_Entrance from '@/components/rooms/Room01_Entrance';
import Room02_Origins from '@/components/rooms/Room02_Origins';
import Room03_Enterprise from '@/components/rooms/Room03_Enterprise';
import Room04_TelusHealth from '@/components/rooms/Room04_TelusHealth';
import Room05_MDSStudio from '@/components/rooms/Room05_MDSStudio';
import Room06_ProjectVault from '@/components/rooms/Room06_ProjectVault';
import Room07_Capabilities from '@/components/rooms/Room07_Capabilities';
import Room08_Exit from '@/components/rooms/Room08_Exit';
import RoomTransition from '@/components/ui/RoomTransition';

const GalleryCanvas = dynamic(
  () => import('@/components/gallery/GalleryCanvas'),
  { ssr: false }
);

export default function Home() {
  useScrollProgress();
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    const isLowPower =
      typeof navigator !== 'undefined' &&
      'hardwareConcurrency' in navigator &&
      navigator.hardwareConcurrency <= 2;
    setShowCanvas(!isMobile && !isLowPower);
  }, []);

  return (
    <>
      <a
        href="#room-1"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gallery-gold focus:text-gallery-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {showCanvas && (
        <Suspense fallback={null}>
          <GalleryCanvas />
        </Suspense>
      )}

      <ProgressIndicator />
      <NavigationDots />

      <div id="gallery-container" className="relative z-10">
        <Room01_Entrance />
        <RoomTransition />
        <Room02_Origins />
        <RoomTransition />
        <Room03_Enterprise />
        <RoomTransition />
        <Room04_TelusHealth />
        <RoomTransition />
        <Room05_MDSStudio />
        <RoomTransition />
        <Room06_ProjectVault />
        <RoomTransition />
        <Room07_Capabilities />
        <RoomTransition />
        <Room08_Exit />
      </div>
    </>
  );
}
