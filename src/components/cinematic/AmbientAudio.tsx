'use client';

import { useEffect, useRef, useState } from 'react';
import { useGalleryStore } from '@/store/galleryStore';

// Per-room ambient base frequency (Hz). Maps to room mood:
// warm/gold rooms get lower drones; cool/innovation rooms get higher airy tones.
const ROOM_FREQS = [
  { base: 110, detune: -7, type: 'sine' as OscillatorType },     // 1 Foyer — A2 warm
  { base: 98,  detune: 0,  type: 'sine' as OscillatorType },     // 2 Origins — G2 amber
  { base: 130, detune: 5,  type: 'triangle' as OscillatorType }, // 3 Enterprise — C3 silver
  { base: 110, detune: -3, type: 'sine' as OscillatorType },     // 4 TELUS — A2 warm gold
  { base: 174, detune: 12, type: 'sawtooth' as OscillatorType }, // 5 Innovation — F3 airy
  { base: 116, detune: 0,  type: 'triangle' as OscillatorType }, // 6 Projects — Bb2 purple
  { base: 146, detune: 0,  type: 'sine' as OscillatorType },     // 7 Workshop — D3 ember
  { base: 220, detune: 0,  type: 'sine' as OscillatorType },     // 8 Exit — A3 daylight
];

export default function AmbientAudio() {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const activeRoom = useGalleryStore((s) => s.activeRoom);

  // Tear down on disable, set up on enable
  useEffect(() => {
    if (!enabled) {
      if (oscRef.current) {
        try { oscRef.current.stop(); } catch {}
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      if (audioCtxRef.current) {
        // Don't close — just suspend so we can resume later cheaply
        audioCtxRef.current.suspend().catch(() => {});
      }
      return;
    }

    const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext | undefined;
    if (!Ctx) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new Ctx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    const flavor = ROOM_FREQS[activeRoom] ?? ROOM_FREQS[0];

    const osc = ctx.createOscillator();
    osc.type = flavor.type;
    osc.frequency.value = flavor.base;
    osc.detune.value = flavor.detune;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.7;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();

    // Fade in
    const now = ctx.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 1.4);

    oscRef.current = osc;
    gainRef.current = gain;
    filterRef.current = filter;

    return () => {
      try { osc.stop(); } catch {}
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }, [enabled, activeRoom]);

  // Smooth retune when activeRoom changes (without rebuilding the graph if we can avoid it)
  useEffect(() => {
    if (!enabled || !oscRef.current || !audioCtxRef.current) return;
    const flavor = ROOM_FREQS[activeRoom] ?? ROOM_FREQS[0];
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    oscRef.current.frequency.cancelScheduledValues(now);
    oscRef.current.frequency.linearRampToValueAtTime(flavor.base, now + 1.5);
    oscRef.current.detune.cancelScheduledValues(now);
    oscRef.current.detune.linearRampToValueAtTime(flavor.detune, now + 1.5);
  }, [activeRoom, enabled]);

  return (
    <button
      type="button"
      onClick={() => setEnabled((v) => !v)}
      aria-label={enabled ? 'Mute ambient audio' : 'Unmute ambient audio'}
      aria-pressed={enabled}
      title={enabled ? 'Mute ambient audio' : 'Unmute ambient audio'}
      className="fixed top-4 right-4 md:top-5 md:right-5 z-[55] w-9 h-9 rounded-full border border-gallery-gold/25 bg-gallery-black/40 backdrop-blur flex items-center justify-center text-gallery-gold/70 hover:text-gallery-gold hover:border-gallery-gold/60 transition-colors"
    >
      <span aria-hidden="true" className="text-[11px] font-mono leading-none">
        {enabled ? '♪' : '⟨'}
      </span>
    </button>
  );
}
