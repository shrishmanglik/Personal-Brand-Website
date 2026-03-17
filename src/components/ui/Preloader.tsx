'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Constants ────────────────────────────────────────────────────────────────

const NAME = 'SHRISH MANGLIK';
const SUBTITLE = 'AI Systems Architect';
const GOLD = '#C9A84C';
const BG = '#050505';

const TOTAL_DURATION = 3500; // ms

// ─── Easing ───────────────────────────────────────────────────────────────────

const smoothEase = [0.76, 0, 0.24, 1] as const;
const entryEase = [0.22, 1, 0.36, 1] as const;

// ─── Component ────────────────────────────────────────────────────────────────

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / TOTAL_DURATION, 1);
      // Ease the progress so it feels organic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    // Remove preloader after sequence
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, TOTAL_DURATION);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: smoothEase as unknown as number[] }}
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            zIndex: 100,
            backgroundColor: BG,
          }}
        >
          {/* Noise grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '128px 128px',
            }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Name – letter by letter */}
            <motion.div
              className="flex overflow-hidden mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] font-light"
                  style={{ color: GOLD }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: entryEase as unknown as number[],
                      },
                    },
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Horizontal gold line */}
            <motion.div
              className="h-px mb-4"
              style={{ backgroundColor: GOLD }}
              initial={{ width: 0 }}
              animate={{ width: '60vw', maxWidth: 400 }}
              transition={{
                duration: 0.8,
                ease: smoothEase as unknown as number[],
                delay: 0,
              }}
            />

            {/* Subtitle */}
            <motion.p
              className="font-body text-sm sm:text-base tracking-[0.35em] uppercase"
              style={{ color: `${GOLD}99` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: entryEase as unknown as number[],
                delay: 1.2,
              }}
            >
              {SUBTITLE}
            </motion.p>
          </div>

          {/* Progress bar at bottom */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ width: '30vw', maxWidth: 240 }}
          >
            <div
              className="h-[1px] w-full rounded-full overflow-hidden"
              style={{ backgroundColor: `${GOLD}20` }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: GOLD,
                  width: `${progress * 100}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
