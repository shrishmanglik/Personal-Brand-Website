'use client';

import '@/lib/gsap';
import dynamic from 'next/dynamic';
import NavigationDots from '@/components/ui/NavigationDots';
import ProgressIndicator from '@/components/ui/ProgressIndicator';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';

const CinematicStage = dynamic(
  () => import('@/components/cinematic/CinematicStage'),
  { ssr: false, loading: () => null }
);

const ConversationManager = dynamic(
  () => import('@/components/conversation/ConversationManager'),
  { ssr: false, loading: () => null }
);

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <a
        href="#scroll-driver"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gallery-gold focus:text-gallery-black focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <CinematicStage />
      <ProgressIndicator />
      <NavigationDots />
      <ConversationManager />
    </>
  );
}
