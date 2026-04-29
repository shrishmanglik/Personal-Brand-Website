'use client';

import { useRef, useEffect } from 'react';
import { useGalleryStore } from '@/store/galleryStore';
import { ROOM_CONFIG } from '@/lib/roomConfig';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityDir: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Subscribe via ref so we don't re-run the heavy effect when room changes
  const accentRef = useRef<[number, number, number]>([201, 168, 76]);

  // Listen to room changes and update the rgb tuple imperatively
  useEffect(() => {
    return useGalleryStore.subscribe((state) => {
      const cfg = ROOM_CONFIG[state.activeRoom];
      if (!cfg) return;
      const parts = cfg.accentRgb.split(',').map((s) => parseInt(s.trim(), 10));
      if (parts.length === 3 && parts.every((n) => !isNaN(n))) {
        accentRef.current = [parts[0], parts[1], parts[2]];
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Choose particle count based on viewport + DPR for perf
    const isMobile = window.innerWidth < 768;
    const isLowEnd =
      // crude heuristic for low-end devices
      (navigator as any).deviceMemory !== undefined
        ? (navigator as any).deviceMemory <= 4
        : isMobile;
    const PARTICLE_COUNT = isLowEnd ? 24 : isMobile ? 36 : 60;

    let animId = 0;
    let particles: Particle[] = [];
    let lastFrame = 0;
    const TARGET_FRAME_MS = isMobile ? 1000 / 30 : 1000 / 60; // throttle on mobile
    let dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1 - 0.05,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3,
        opacityDir: (Math.random() - 0.5) * 0.003,
      });
    }

    const draw = (now: number) => {
      if (now - lastFrame < TARGET_FRAME_MS) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const [r, g, b] = accentRef.current;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        p.opacity += p.opacityDir;
        if (p.opacity > 0.35 || p.opacity < 0.02) {
          p.opacityDir *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        lastFrame = 0;
        animId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[5] pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
