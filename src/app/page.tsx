'use client';

import '@/lib/gsap';
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import NavigationDots from '@/components/ui/NavigationDots';
import ProgressIndicator from '@/components/ui/ProgressIndicator';
import VignetteOverlay from '@/components/gallery/VignetteOverlay';

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
        href="#scroll-driver"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gallery-gold focus:text-gallery-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Fixed viewport — 3D canvas fills the screen */}
      {showCanvas && (
        <div className="fixed inset-0 z-0">
          <Suspense fallback={
            <div className="w-full h-full bg-gallery-black flex items-center justify-center">
              <p className="font-display text-gallery-gold/50 text-sm tracking-[6px] uppercase animate-pulse">
                Entering Gallery...
              </p>
            </div>
          }>
            <GalleryCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile fallback */}
      {!showCanvas && (
        <div className="min-h-screen bg-gallery-black flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="font-display text-4xl text-gallery-gold mb-4">
              SHRISH MANGLIK
            </h1>
            <p className="font-body text-sm text-white/50 mb-2">
              AI Systems Architect & Implementation Strategist
            </p>
            <p className="font-body text-xs text-white/30 mb-8">
              This experience is best viewed on desktop
            </p>
            <div className="space-y-3 text-left">
              <a href="mailto:shrishmanglik@gmail.com" className="block font-body text-sm text-white/60 hover:text-gallery-gold transition-colors">
                shrishmanglik@gmail.com
              </a>
              <a href="https://linkedin.com/in/shrishmanglik" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-white/60 hover:text-gallery-gold transition-colors">
                LinkedIn: shrishmanglik
              </a>
              <a href="https://milliondollarstudio.ai" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-white/60 hover:text-gallery-gold transition-colors">
                milliondollarstudio.ai
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Vignette overlay for corridor transitions */}
      <VignetteOverlay />

      {/* HUD elements */}
      <ProgressIndicator />
      <NavigationDots />

      {/* Invisible scroll driver — this is what the user actually scrolls */}
      <div
        id="scroll-driver"
        style={{
          height: '800vh',
          width: '100%',
          position: 'relative',
          zIndex: -1,
        }}
      />
    </>
  );
}
