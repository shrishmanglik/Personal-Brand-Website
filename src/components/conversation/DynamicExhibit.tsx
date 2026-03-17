'use client';

import { useEffect, useRef, useCallback } from 'react';
import TypewriterText from '@/components/effects/TypewriterText';
import { MatchResult } from '@/engine/types';

interface DynamicExhibitProps {
  result: MatchResult | null;
  isOpen: boolean;
  onDismiss: () => void;
  interactionCount: number;
}

export default function DynamicExhibit({
  result,
  isOpen,
  onDismiss,
  interactionCount,
}: DynamicExhibitProps) {
  const scrollStartRef = useRef(0);

  // Escape key dismiss
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onDismiss]);

  // Scroll dismiss (100px threshold)
  useEffect(() => {
    if (!isOpen) return;
    scrollStartRef.current = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollStartRef.current) > 100) {
        onDismiss();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, onDismiss]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onDismiss();
    },
    [onDismiss],
  );

  if (!isOpen || !result) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Exhibit card */}
      <div className="relative max-w-xl w-full">
        {/* Animated gold border SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 300"
          preserveAspectRatio="none"
          style={{ overflow: 'visible' }}
        >
          <rect
            x="1"
            y="1"
            width="498"
            height="298"
            rx="8"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            strokeDasharray="1600"
            style={{ animation: 'border-draw 0.5s ease-out forwards' }}
          />
        </svg>

        {/* Content */}
        <div className="exhibit-content-enter relative bg-black/80 backdrop-blur-xl rounded-lg p-8 md:p-10">
          {/* Large decorative quotation mark */}
          <span
            className="absolute top-4 left-6 font-display text-[4rem] leading-none text-gallery-gold/10 select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </span>

          {/* Response text */}
          <div className="relative">
            <TypewriterText
              text={result.entry.response}
              speed={18}
              autoStart
              className="font-body text-sm md:text-base text-white/80 leading-relaxed"
            />
          </div>

          {/* Meta line */}
          <p className="font-mono text-[9px] text-white/20 tracking-[2px] uppercase mt-6">
            {interactionCount} {interactionCount === 1 ? 'QUERY' : 'QUERIES'} · 0 API CALLS · $0.00
          </p>

          {/* Follow-up suggestion */}
          {result.entry.followUp && (
            <p className="text-gallery-gold/40 text-xs italic mt-3">
              {result.entry.followUp}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
