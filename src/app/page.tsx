'use client';

import '@/lib/gsap';
import dynamic from 'next/dynamic';
import NavigationDots from '@/components/ui/NavigationDots';
import ProgressIndicator from '@/components/ui/ProgressIndicator';

const CinematicStage = dynamic(
  () => import('@/components/cinematic/CinematicStage'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 bg-gallery-black flex items-center justify-center z-50">
        <div className="text-center">
          <p className="font-display text-gallery-gold/40 text-sm tracking-[8px] uppercase animate-pulse">
            Entering Gallery
          </p>
        </div>
      </div>
    ),
  }
);

const ConversationManager = dynamic(
  () => import('@/components/conversation/ConversationManager'),
  { ssr: false }
);

const AmbientAudio = dynamic(
  () => import('@/components/cinematic/AmbientAudio'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <a
        href="#scroll-driver"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gallery-gold focus:text-gallery-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <CinematicStage />
      <ProgressIndicator />
      <NavigationDots />
      <AmbientAudio />
      <ConversationManager />
    </>
  );
}
