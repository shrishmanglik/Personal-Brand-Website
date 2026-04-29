'use client';

import { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { matchQuery } from '@/engine/matcher';
import { KnowledgeEntry } from '@/engine/types';
import { ROOM_SCROLL_POSITIONS } from '@/hooks/useCinematicScroll';

interface Turn {
  id: string;
  question: string;
  response: string;
  followUp?: string;
  navigateTo?: number;
  responseStyle: KnowledgeEntry['responseStyle'];
  score: number;
  isExact: boolean;
}

const SUGGESTIONS = [
  'What do you do?',
  'Tell me about Million Dollar AI Studio',
  'Show me your projects',
  'How is this website built?',
  "Let's work together",
];

function navigateToRoom(idx: number) {
  if (typeof window === 'undefined') return;
  const targetProgress = ROOM_SCROLL_POSITIONS[idx];
  if (targetProgress == null) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({ top: targetProgress * maxScroll, behavior: 'smooth' });
}

export default function ConversationManager() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const turnIdRef = useRef(0);

  // Focus input on open, esc to close
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 200);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Global "/" shortcut to open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !open) {
        const target = e.target as HTMLElement;
        if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return;
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Auto-scroll to latest turn
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [turns, typing]);

  const ask = useCallback(
    (raw: string) => {
      const question = raw.trim();
      if (!question) return;

      setInput('');
      setTyping(true);

      // Run matcher synchronously, but simulate "thinking" with a small delay
      const result = matchQuery(question);

      setTimeout(() => {
        const id = `turn-${++turnIdRef.current}`;
        setTurns((prev) => [
          ...prev,
          {
            id,
            question,
            response: result.entry.response || '',
            followUp: result.entry.followUp,
            navigateTo: result.entry.navigateTo,
            responseStyle: result.entry.responseStyle,
            score: result.score,
            isExact: result.isExact,
          },
        ]);
        setTyping(false);

        if (result.entry.navigateTo != null) {
          // small delay so user sees the response begin to render
          setTimeout(() => navigateToRoom(result.entry.navigateTo!), 800);
        }
      }, 350);
    },
    []
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        aria-label={open ? 'Close conversation' : 'Ask Shrish anything'}
        onClick={() => setOpen((v) => !v)}
        className="convo-pill fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] flex items-center gap-2 rounded-full px-4 py-2.5 md:px-5 md:py-3 font-display text-[10px] md:text-[11px] tracking-[3px] uppercase font-semibold"
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-gallery-black/80"
          style={{
            boxShadow: '0 0 8px rgba(10,10,10,0.5)',
            animation: open ? 'none' : 'pulse-down 2s ease-in-out infinite',
          }}
        />
        {open ? 'Close' : 'Ask Shrish'}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-label="Conversation with Shrish"
              aria-modal="true"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="convo-panel fixed z-[60] inset-x-3 bottom-20 md:inset-x-auto md:right-7 md:bottom-24 md:w-[440px] md:max-h-[640px] max-h-[78vh] flex flex-col rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gallery-gold/15">
                <div>
                  <p className="font-display text-[10px] tracking-[4px] uppercase text-gallery-gold/70">
                    Conversation
                  </p>
                  <p className="font-body text-xs text-white/45 mt-0.5">
                    Deterministic engine · $0.00 / interaction
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-white/40 hover:text-white/80 text-lg leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5"
                >
                  ×
                </button>
              </div>

              {/* Transcript */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scroll-smooth"
              >
                {turns.length === 0 && (
                  <div className="space-y-4">
                    <p className="font-body text-sm text-white/55 leading-relaxed">
                      Welcome to the gallery. I&rsquo;m Shrish — AI Systems Architect, enterprise
                      operator, builder of things that work. Ask me anything, or pick a starter:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => ask(s)}
                          className="text-left text-[11px] font-body px-3 py-1.5 rounded-full border border-gallery-gold/25 text-white/70 hover:border-gallery-gold/55 hover:text-white transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <p className="font-body text-[10px] tracking-[2px] uppercase text-white/25 pt-2">
                      Tip · Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60 font-mono">/</kbd> anywhere to talk
                    </p>
                  </div>
                )}

                {turns.map((t) => (
                  <TurnView key={t.id} turn={t} />
                ))}

                {typing && (
                  <div className="flex items-center gap-2 text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-gallery-gold/60 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gallery-gold/60 animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gallery-gold/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={onSubmit} className="border-t border-gallery-gold/15 px-4 py-3 flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything…"
                  aria-label="Your question"
                  className="flex-1 bg-transparent border-0 outline-none text-sm text-white placeholder:text-white/30 font-body py-2"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="text-[10px] tracking-[3px] uppercase font-display font-semibold px-3 py-2 rounded-full bg-gallery-gold/90 text-gallery-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gallery-gold transition-colors"
                >
                  Ask
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function TurnView({ turn }: { turn: Turn }) {
  return (
    <div className="space-y-2">
      {/* Question bubble */}
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-gallery-gold/15 border border-gallery-gold/25 px-3.5 py-2 text-sm text-white/85 font-body">
          {turn.question}
        </div>
      </div>

      {/* Response bubble — style varies by responseStyle */}
      {turn.responseStyle !== 'none' && turn.response && (
        <div className="flex justify-start">
          <ResponseBubble turn={turn} />
        </div>
      )}

      {/* Follow-up hint */}
      {turn.followUp && (
        <p className="text-[10px] font-body italic text-gallery-gold/45 pl-1">
          → {turn.followUp}
        </p>
      )}

      {/* Navigation receipt */}
      {turn.navigateTo != null && (
        <p className="text-[9px] font-display tracking-[2px] uppercase text-gallery-gold/40 pl-1">
          Walking you to room {turn.navigateTo + 1}…
        </p>
      )}
    </div>
  );
}

function ResponseBubble({ turn }: { turn: Turn }) {
  const base =
    'max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed font-body text-white/80';

  if (turn.responseStyle === 'quote') {
    return (
      <blockquote className={`${base} border-l-2 border-gallery-gold/50 italic text-white/70 pl-4 bg-white/[0.02]`}>
        {turn.response}
      </blockquote>
    );
  }

  if (turn.responseStyle === 'placard') {
    return (
      <div className={`${base} rounded-2xl rounded-bl-sm bg-white/[0.04] border border-white/10`}>
        {turn.response}
      </div>
    );
  }

  if (turn.responseStyle === 'list') {
    return (
      <div className={`${base} rounded-2xl rounded-bl-sm bg-white/[0.04] border border-gallery-gold/15`}>
        {turn.response}
      </div>
    );
  }

  // 'frame' default
  return (
    <div className={`${base} rounded-2xl rounded-bl-sm bg-gradient-to-br from-white/[0.05] to-transparent border border-gallery-gold/20`}>
      {turn.response}
    </div>
  );
}
