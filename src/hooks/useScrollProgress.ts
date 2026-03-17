'use client';

import { useEffect } from 'react';
import { ScrollTrigger } from '@/lib/gsap';
import { useGalleryStore } from '@/store/galleryStore';

const ROOM_THRESHOLDS = [0, 0.12, 0.25, 0.40, 0.58, 0.72, 0.85, 0.93];

export function useScrollProgress() {
  const setScrollProgress = useGalleryStore((s) => s.setScrollProgress);
  const setActiveRoom = useGalleryStore((s) => s.setActiveRoom);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#gallery-container',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Determine active room from progress
        let room = 0;
        for (let i = ROOM_THRESHOLDS.length - 1; i >= 0; i--) {
          if (progress >= ROOM_THRESHOLDS[i]) {
            room = i;
            break;
          }
        }
        setActiveRoom(room);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [setScrollProgress, setActiveRoom]);
}

export { ROOM_THRESHOLDS };
