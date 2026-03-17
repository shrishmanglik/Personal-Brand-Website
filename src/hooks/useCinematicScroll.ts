'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGalleryStore } from '@/store/galleryStore';

const TOTAL_ROOMS = 8;

export function useCinematicScroll() {
  const setScrollProgress = useGalleryStore((s) => s.setScrollProgress);
  const setActiveRoom = useGalleryStore((s) => s.setActiveRoom);
  const prevRoom = useRef(-1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll progress tracker
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

      // Per-room animation timelines
      for (let i = 0; i < TOTAL_ROOMS; i++) {
        const roomEl = document.querySelector(`[data-room="${i}"]`) as HTMLElement;
        if (!roomEl) continue;

        const trigger = document.querySelector(`[data-room-trigger="${i}"]`);
        if (!trigger) continue;

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
              // Track which room is most visible
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
          // Room 1: starts visible, only departs
          gsap.set(roomEl, { scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' });

          // Content reveals at start
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

          // Hold
          tl.to(roomEl, { duration: 0.3 }, 0.2);

          // Depart: zoom past camera
          tl.to(
            roomEl,
            {
              scale: 1.8,
              opacity: 0,
              filter: 'blur(4px)',
              y: -60,
              duration: 0.35,
              ease: 'power2.in',
            },
            0.55
          );
        } else if (i === TOTAL_ROOMS - 1) {
          // Last room: only approaches, stays visible
          gsap.set(roomEl, { scale: 0.3, opacity: 0, filter: 'blur(8px)', y: 80 });

          // Approach
          tl.to(
            roomEl,
            {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              duration: 0.35,
              ease: 'power2.out',
            },
            0.1
          );

          // Content reveal
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
          // Middle rooms: approach → reveal → dwell → depart
          gsap.set(roomEl, { scale: 0.3, opacity: 0, filter: 'blur(8px)', y: 80 });

          // Approach
          tl.to(
            roomEl,
            {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            },
            0.05
          );

          // Content stagger reveal
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

          // Hold / Dwell
          tl.to(roomEl, { duration: 0.15 }, 0.4);

          // Depart: zoom past
          tl.to(
            roomEl,
            {
              scale: 1.8,
              opacity: 0,
              filter: 'blur(4px)',
              y: -50,
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

// Room scroll positions for navigation dots
export const ROOM_SCROLL_POSITIONS = Array.from(
  { length: TOTAL_ROOMS },
  (_, i) => (i + 0.4) / TOTAL_ROOMS
);
