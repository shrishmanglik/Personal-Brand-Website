'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 30,
  className = '',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) {
      setDisplayedText(text);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      onEnter: () => setStarted(true),
      once: true,
    });

    return () => trigger.kill();
  }, [reducedMotion, text]);

  useEffect(() => {
    if (!started || reducedMotion) return;

    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, reducedMotion]);

  return (
    <div ref={ref} className={className}>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-gallery-gold/60 ml-1 animate-pulse" />
      )}
    </div>
  );
}
