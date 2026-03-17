'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGalleryStore } from '@/store/galleryStore';

// Each room occupies a segment of scroll progress
// Rooms at: 0.0–0.1, corridors at 0.1–0.125, rooms at 0.125–0.225, etc.
const ROOM_SEGMENTS = [
  { start: 0.0, end: 0.1, room: 0 },     // Room 1
  { start: 0.1, end: 0.125, room: -1 },   // Corridor
  { start: 0.125, end: 0.225, room: 1 },  // Room 2
  { start: 0.225, end: 0.25, room: -1 },  // Corridor
  { start: 0.25, end: 0.35, room: 2 },    // Room 3
  { start: 0.35, end: 0.375, room: -1 },  // Corridor
  { start: 0.375, end: 0.475, room: 3 },  // Room 4
  { start: 0.475, end: 0.5, room: -1 },   // Corridor
  { start: 0.5, end: 0.6, room: 4 },      // Room 5
  { start: 0.6, end: 0.625, room: -1 },   // Corridor
  { start: 0.625, end: 0.725, room: 5 },  // Room 6
  { start: 0.725, end: 0.75, room: -1 },  // Corridor
  { start: 0.75, end: 0.85, room: 6 },    // Room 7
  { start: 0.85, end: 0.875, room: -1 },  // Corridor
  { start: 0.875, end: 1.0, room: 7 },    // Room 8
];

export function useScrollProgress() {
  const setScrollProgress = useGalleryStore((s) => s.setScrollProgress);
  const setActiveRoom = useGalleryStore((s) => s.setActiveRoom);
  const setIsInCorridor = useGalleryStore((s) => s.setIsInCorridor);
  const setRoomProgress = useGalleryStore((s) => s.setRoomProgress);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#scroll-driver',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Determine active room and corridor state
        for (const segment of ROOM_SEGMENTS) {
          if (progress >= segment.start && progress < segment.end) {
            if (segment.room === -1) {
              setIsInCorridor(true);
            } else {
              setIsInCorridor(false);
              setActiveRoom(segment.room);
              // Calculate progress within this room (0-1)
              const roomProg = (progress - segment.start) / (segment.end - segment.start);
              setRoomProgress(roomProg);
            }
            break;
          }
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [setScrollProgress, setActiveRoom, setIsInCorridor, setRoomProgress]);
}

// Export room scroll positions for navigation
export const ROOM_SCROLL_POSITIONS = [0.05, 0.175, 0.3, 0.425, 0.55, 0.675, 0.8, 0.9375];
