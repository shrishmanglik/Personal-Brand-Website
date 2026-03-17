'use client';

import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';

interface GalleryPromptProps {
  onSubmit: (query: string) => void;
  isExhibitOpen: boolean;
}

const SUGGESTIONS = [
  'What do you do?',
  'How does this chat work?',
  'Show me your projects',
];

export default function GalleryPrompt({ onSubmit, isExhibitOpen }: GalleryPromptProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimeout = useRef<ReturnType<typeof setTimeout>>();

  // "/" keyboard shortcut to focus
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !isExhibitOpen) {
        const tag = (document.activeElement as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isExhibitOpen]);

  const handleSubmit = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();
      const trimmed = value.trim();
      if (!trimmed) return;
      onSubmit(trimmed);
      setValue('');
    },
    [value, onSubmit],
  );

  const handleChipClick = useCallback(
    (text: string) => {
      onSubmit(text);
      setValue('');
      inputRef.current?.blur();
    },
    [onSubmit],
  );

  const handleFocus = () => {
    clearTimeout(blurTimeout.current);
    setIsFocused(true);
  };

  const handleBlur = () => {
    // Small delay so chip clicks register before hiding
    blurTimeout.current = setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
        isExhibitOpen ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100'
      }`}
      style={{ width: 'calc(100% - 2rem)', maxWidth: 600 }}
    >
      {/* Suggestion chips */}
      {isFocused && !value && (
        <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onMouseDown={(e) => e.preventDefault()} // prevent blur
              onClick={() => handleChipClick(s)}
              className="text-[11px] text-gallery-gold/50 border border-gallery-gold/15 rounded-full px-3 py-1.5
                         hover:border-gallery-gold/40 hover:text-gallery-gold/70 transition-all bg-black/30 backdrop-blur-sm
                         cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Prompt bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-full bg-black/60 backdrop-blur-xl
                   border border-gallery-gold/15 px-5 py-3
                   hover:border-gallery-gold/25 transition-colors"
      >
        <span className="text-gallery-gold/60 text-sm select-none flex-shrink-0">✦</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Ask the gallery anything..."
          className="bg-transparent outline-none flex-1 font-body text-sm text-white/80
                     placeholder:text-gallery-gold/30 placeholder:italic min-w-0"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="text-gallery-gold/60 hover:text-gallery-gold transition-colors text-lg
                     disabled:opacity-30 disabled:cursor-default flex-shrink-0"
          aria-label="Submit query"
        >
          →
        </button>
      </form>

      {/* Hint */}
      {!isFocused && (
        <p className="text-center text-[9px] text-white/15 mt-2 tracking-[2px] uppercase">
          Press / to ask
        </p>
      )}
    </div>
  );
}
