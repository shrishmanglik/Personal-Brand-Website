'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGalleryStore } from '@/store/galleryStore';

const TOTAL_ROOMS = 8;

// Per-room transition flavor — gives each room its own cinematic feel
// dollyType: how the room arrives (zoom = straight push-in, dolly = combined zoom+rotate, slide = lateral)
// rotation: subtle Y-rotation to break monotony
const ROOM_FLAVORS: Array<{
  dollyType: 'zoom' | 'dolly' | 'slide-left' | 'slide-right' | 'tilt';
  rotation: number;
}> = [
  { dollyType: 'zoom', rotation: 0 },          // 1 Foyer — clean push-in
  { dollyType: 'tilt', rotation: -2 },          // 2 Origins — slight tilt for journey feel
  { dollyType: 'slide-left', rotation: 0 },     // 3 Enterprise — lateral dolly across timeline
  { dollyType: 'dolly', rotation: 1.5 },        // 4 TELUS — combined push & roll
  { dollyType: 'zoom', rotation: 0 },           // 5 Innovation — clean for blueprint focus
  { dollyType: 'slide-right', rotation: 0 },    // 6 Projects — lateral salon-walk
  { dollyType: 'tilt', rotation: 1 },           // 7 Workshop — slight tilt
  { dollyType: 'zoom', rotation: 0 },           // 8 Exit — clean approach to daylight
];

function getEnterTransform(flavor: typeof ROOM_FLAVORS[number]) {
  switch (flavor.dollyType) {
    case 'slide-left':
      return { x: 200, y: 30, scale: 0.5, rotateZ: flavor.rotation };
    case 'slide-right':
      return { x: -200, y: 30, scale: 0.5, rotateZ: flavor.rotation };
    case 'tilt':
      return { x: 0, y: 80, scale: 0.35, rotateZ: flavor.rotation };
    case 'dolly':
      return { x: 0, y: 60, scale: 0.4, rotateZ: flavor.rotation };
    case 'zoom':
    default:
      return { x: 0, y: 80, scale: 0.3, rotateZ: 0 };
  }
}

function getExitTransform(flavor: typeof ROOM_FLAVORS[number]) {
  switch (flavor.dollyType) {
    case 'slide-left':
      return { x: -250, y: -40, scale: 1.6, rotateZ: -flavor.rotation };
    case 'slide-right':
      return { x: 250, y: -40, scale: 1.6, rotateZ: -flavor.rotation };
    case 'tilt':
      return { x: 0, y: -60, scale: 1.9, rotateZ: -flavor.rotation };
    case 'dolly':
      return { x: 0, y: -50, scale: 1.7, rotateZ: -flavor.rotation };
    case 'zoom':
    default:
      return { x: 0, y: -60, scale: 1.8, rotateZ: 0 };
  }
}

export function useCinematicScroll() {
  const setScrollProgress = useGalleryStore((s) => s.setScrollProgress);
  const setActiveRoom = useGalleryStore((s) => s.setActiveRoom);
  const prevRoom = useRef(-1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#scroll-driver',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const room = Math.min(
            TOTAL_ROOMS - 1,
            Math.floor(self.progress * TOTAL_ROOMS)
          );
          setActiveRoom(room);
        },
      });

      for (let i = 0; i < TOTAL_ROOMS; i++) {
        const roomEl = document.querySelector(`[data-room="${i}"]`) as HTMLElement;
        if (!roomEl) continue;

        const trigger = document.querySelector(`[data-room-trigger="${i}"]`);
        if (!trigger) continue;

        const flavor = ROOM_FLAVORS[i];
        const enter = getEnterTransform(flavor);
        const exit = getExitTransform(flavor);

        const contentEls = roomEl.querySelectorAll('[data-reveal]');
        const headingEls = roomEl.querySelectorAll('[data-reveal-heading]');
        const lineEls = roomEl.querySelectorAll('[data-reveal-line]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            onUpdate: (self) => {
              if (self.progress > 0.2 && self.progress < 0.8) {
                if (prevRoom.current !== i) {
                  prevRoom.current = i;
                  setActiveRoom(i);
                }
              }
            },
          },
        });

        if (i === 0) {
          // Room 1 — visible at start, only departs
          gsap.set(roomEl, { scale: 1, opacity: 1, x: 0, y: 0, rotateZ: 0, filter: 'blur(0px)' });

          tl.fromTo(
            contentEls,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.04, duration: 0.15, ease: 'power2.out' },
            0.0
          );
          tl.fromTo(
            headingEls,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', stagger: 0.03, duration: 0.2, ease: 'power3.out' },
            0.0
          );
          tl.fromTo(
            lineEls,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.15, ease: 'power2.out' },
            0.1
          );

          tl.to(roomEl, { duration: 0.3 }, 0.2);

          tl.to(
            roomEl,
            {
              scale: exit.scale,
              opacity: 0,
              filter: 'blur(4px)',
              x: exit.x,
              y: exit.y,
              rotateZ: exit.rotateZ,
              duration: 0.35,
              ease: 'power2.in',
            },
            0.55
          );
        } else if (i === TOTAL_ROOMS - 1) {
          // Last room — only approaches, stays
          gsap.set(roomEl, {
            scale: enter.scale,
            opacity: 0,
            filter: 'blur(8px)',
            x: enter.x,
            y: enter.y,
            rotateZ: enter.rotateZ,
          });

          tl.to(
            roomEl,
            {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              x: 0,
              y: 0,
              rotateZ: 0,
              duration: 0.35,
              ease: 'power2.out',
            },
            0.1
          );

          tl.fromTo(
            contentEls,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.04, duration: 0.15, ease: 'power2.out' },
            0.35
          );
          tl.fromTo(
            headingEls,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', stagger: 0.03, duration: 0.2, ease: 'power3.out' },
            0.3
          );
          tl.fromTo(
            lineEls,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.15, ease: 'power2.out' },
            0.4
          );
        } else {
          // Middle rooms — approach → reveal → dwell → depart with flavor variations
          gsap.set(roomEl, {
            scale: enter.scale,
            opacity: 0,
            filter: 'blur(8px)',
            x: enter.x,
            y: enter.y,
            rotateZ: enter.rotateZ,
          });

          tl.to(
            roomEl,
            {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              x: 0,
              y: 0,
              rotateZ: 0,
              duration: 0.3,
              ease: 'power2.out',
            },
            0.05
          );

          tl.fromTo(
            contentEls,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, stagger: 0.03, duration: 0.12, ease: 'power2.out' },
            0.25
          );
          tl.fromTo(
            headingEls,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', stagger: 0.03, duration: 0.18, ease: 'power3.out' },
            0.2
          );
          tl.fromTo(
            lineEls,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.12, ease: 'power2.out' },
            0.3
          );

          tl.to(roomEl, { duration: 0.15 }, 0.4);

          tl.to(
            roomEl,
            {
              scale: exit.scale,
              opacity: 0,
              filter: 'blur(4px)',
              x: exit.x,
              y: exit.y,
              rotateZ: exit.rotateZ,
              duration: 0.35,
              ease: 'power2.in',
            },
            0.6
          );
        }
      }
    });

    return () => ctx.revert();
  }, [setScrollProgress, setActiveRoom]);
}

export const ROOM_SCROLL_POSITIONS = Array.from(
  { length: TOTAL_ROOMS },
  (_, i) => (i + 0.4) / TOTAL_ROOMS
);
