'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────

const GOLD = '#C9A84C';
const OUTER_SIZE = 24;
const INNER_SIZE = 6;
const TRAIL_COUNT = 4;
const LERP_SPEED = 0.12;
const MOBILE_BREAKPOINT = 768;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ─── Component ────────────────────────────────────────────────────────────────

const CustomCursor: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mouse = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })),
  );
  const isHovering = useRef(false);
  const rafId = useRef<number>(0);

  const [isMobile, setIsMobile] = useState(true); // default hidden until we know

  // Check for mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  }, []);

  // Hover detection
  useEffect(() => {
    if (isMobile) return;

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor="pointer"], input, textarea, select')) {
        isHovering.current = true;
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor="pointer"], input, textarea, select')) {
        isHovering.current = false;
      }
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [isMobile]);

  // Animation loop
  useEffect(() => {
    if (isMobile) return;

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Inner dot – instant
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%) scale(${isHovering.current ? 0.4 : 1})`;
      }

      // Outer ring – lerp
      outerPos.current.x = lerp(outerPos.current.x, mouse.current.x, LERP_SPEED);
      outerPos.current.y = lerp(outerPos.current.y, mouse.current.y, LERP_SPEED);

      if (outerRef.current) {
        const scale = isHovering.current ? 2.2 : 1;
        outerRef.current.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px) translate(-50%, -50%) scale(${scale})`;
        outerRef.current.style.borderColor = isHovering.current
          ? `${GOLD}90`
          : `${GOLD}50`;
      }

      // Trails – each follows the previous with increasing lag
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const prev = i === 0 ? outerPos.current : trailPositions.current[i - 1];
        const trailLerp = LERP_SPEED * (0.6 - i * 0.1);
        trailPositions.current[i].x = lerp(trailPositions.current[i].x, prev.x, trailLerp);
        trailPositions.current[i].y = lerp(trailPositions.current[i].y, prev.y, trailLerp);

        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px) translate(-50%, -50%)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <>
      {/* Global style to hide default cursor */}
      <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />

      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: OUTER_SIZE * (1 - i * 0.15),
            height: OUTER_SIZE * (1 - i * 0.15),
            borderRadius: '50%',
            border: `1px solid ${GOLD}`,
            opacity: 0.15 - i * 0.03,
            pointerEvents: 'none',
            zIndex: 9998,
            willChange: 'transform',
            mixBlendMode: 'difference',
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: OUTER_SIZE,
          height: OUTER_SIZE,
          borderRadius: '50%',
          border: `1px solid ${GOLD}50`,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transition: 'border-color 0.3s ease, width 0.3s ease, height 0.3s ease',
        }}
      />

      {/* Inner dot */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: INNER_SIZE,
          height: INNER_SIZE,
          borderRadius: '50%',
          backgroundColor: GOLD,
          opacity: 0.85,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transition: 'transform 0.15s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
