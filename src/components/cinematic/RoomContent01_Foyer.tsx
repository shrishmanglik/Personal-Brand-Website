'use client';

import { SITE_CONTENT } from '@/data/content';
import { motion } from 'framer-motion';

export default function RoomContent01_Foyer() {
  const { name, title, location, availability } = SITE_CONTENT.hero;
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center py-20 overflow-hidden">
      {/* ── Atmospheric layers ── */}

      {/* Diagonal spotlight beams from upper corners */}
      <div
        className="absolute top-0 left-0 w-[50%] h-[70%] pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 30%, transparent 60%)',
          clipPath: 'polygon(0 0, 70% 0, 25% 100%, 0 55%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[50%] h-[70%] pointer-events-none"
        style={{
          background:
            'linear-gradient(225deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 30%, transparent 60%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 55%, 75% 100%)',
        }}
      />

      {/* Central radial glow - primary */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(500px, 70vw, 1100px)',
          height: 'clamp(500px, 70vw, 1100px)',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.02) 35%, transparent 70%)',
        }}
      />

      {/* Secondary ambient ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: 'clamp(300px, 40vw, 600px)',
          height: 'clamp(300px, 40vw, 600px)',
          border: '1px solid rgba(201,168,76,0.03)',
          boxShadow:
            'inset 0 0 80px rgba(201,168,76,0.02), 0 0 80px rgba(201,168,76,0.02)',
        }}
      />

      {/* Faint vertical light shaft */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 10%, rgba(201,168,76,0.06) 40%, rgba(201,168,76,0.06) 60%, transparent 90%)',
        }}
      />

      {/* ── Corner decorations - animated L-shaped gold lines ── */}
      {/* Top-left */}
      <div className="corner-decoration absolute top-6 left-6 md:top-10 md:left-10 pointer-events-none">
        <div
          className="w-20 md:w-28 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
        <div
          className="w-[1px] h-20 md:h-28"
          style={{
            background:
              'linear-gradient(180deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
      </div>
      {/* Top-right */}
      <div
        className="corner-decoration absolute top-6 right-6 md:top-10 md:right-10 pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <div
          className="w-20 md:w-28 h-[1px] ml-auto"
          style={{
            background:
              'linear-gradient(270deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
        <div
          className="w-[1px] h-20 md:h-28 ml-auto"
          style={{
            background:
              'linear-gradient(180deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
      </div>
      {/* Bottom-left */}
      <div
        className="corner-decoration absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-none"
        style={{ animationDelay: '2s' }}
      >
        <div
          className="w-[1px] h-20 md:h-28"
          style={{
            background:
              'linear-gradient(0deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
        <div
          className="w-20 md:w-28 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
      </div>
      {/* Bottom-right */}
      <div
        className="corner-decoration absolute bottom-6 right-6 md:bottom-10 md:right-10 pointer-events-none"
        style={{ animationDelay: '3s' }}
      >
        <div
          className="w-[1px] h-20 md:h-28 ml-auto"
          style={{
            background:
              'linear-gradient(0deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
        <div
          className="w-20 md:w-28 h-[1px] ml-auto"
          style={{
            background:
              'linear-gradient(270deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
          }}
        />
      </div>

      {/* ── Thin horizontal accent lines flanking the viewport ── */}
      <div
        className="absolute top-1/2 left-0 w-[15%] h-[1px] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(201,168,76,0.08))',
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-[15%] h-[1px] pointer-events-none"
        style={{
          background:
            'linear-gradient(270deg, transparent, rgba(201,168,76,0.08))',
        }}
      />

      {/* ── Name block with orbiting dot ── */}
      <div className="relative" data-reveal-heading>
        {/* Orbiting dot */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{ width: 0, height: 0 }}
        >
          <div className="foyer-orbit-dot">
            <div
              className="w-1.5 h-1.5 rounded-full bg-gallery-gold/70"
              style={{
                boxShadow:
                  '0 0 10px rgba(201,168,76,0.5), 0 0 30px rgba(201,168,76,0.2)',
              }}
            />
          </div>
        </div>

        {/* Second orbiting dot - counter-direction illusion via delay */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{ width: 0, height: 0 }}
        >
          <div
            className="foyer-orbit-dot"
            style={{ animationDelay: '-6s', animationDuration: '18s' }}
          >
            <div
              className="w-1 h-1 rounded-full bg-gallery-cyan/40"
              style={{
                boxShadow: '0 0 8px rgba(100,200,255,0.3)',
              }}
            />
          </div>
        </div>

        {/* First name */}
        <div
          className="flex justify-center"
          style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}
        >
          {firstName.split('').map((letter, i) => (
            <motion.span
              key={`first-${i}`}
              className="font-display gold-shimmer leading-[0.85] tracking-[0.3em] inline-block cursor-default select-none"
              whileHover={{
                scale: 1.15,
                textShadow:
                  '0 0 60px rgba(201,168,76,0.6), 0 0 120px rgba(201,168,76,0.2)',
                color: '#e2c97e',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 12 }}
              style={{ willChange: 'transform' }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Diamond separator with extended lines */}
        <div className="flex items-center justify-center my-5 md:my-6 gap-3">
          <div
            className="h-[1px] w-16 md:w-32 lg:w-40"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))',
            }}
          />
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 border border-gallery-gold/40 rotate-45"
              style={{ boxShadow: '0 0 6px rgba(201,168,76,0.15)' }}
            />
            <div
              className="w-3.5 h-3.5 border border-gallery-gold/60 rotate-45"
              style={{
                boxShadow:
                  '0 0 16px rgba(201,168,76,0.25), inset 0 0 8px rgba(201,168,76,0.08)',
              }}
            />
            <div
              className="w-1.5 h-1.5 border border-gallery-gold/40 rotate-45"
              style={{ boxShadow: '0 0 6px rgba(201,168,76,0.15)' }}
            />
          </div>
          <div
            className="h-[1px] w-16 md:w-32 lg:w-40"
            style={{
              background:
                'linear-gradient(270deg, transparent, rgba(201,168,76,0.5))',
            }}
          />
        </div>

        {/* Last name */}
        <div
          className="flex justify-center"
          style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}
        >
          {lastName.split('').map((letter, i) => (
            <motion.span
              key={`last-${i}`}
              className="font-display gold-shimmer leading-[0.85] tracking-[0.3em] inline-block cursor-default select-none"
              whileHover={{
                scale: 1.15,
                textShadow:
                  '0 0 60px rgba(201,168,76,0.6), 0 0 120px rgba(201,168,76,0.2)',
                color: '#e2c97e',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 12 }}
              style={{ willChange: 'transform' }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* ── Gold rule with glow ── */}
      <div
        data-reveal-line
        className="w-40 h-[1px] my-10 origin-left"
        style={{
          background:
            'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          boxShadow: '0 0 12px rgba(201,168,76,0.15)',
        }}
      />

      {/* ── Title with dramatic tracking ── */}
      <p
        data-reveal
        className="font-body text-sm md:text-base text-white/50 tracking-[0.4em] uppercase max-w-2xl leading-relaxed"
        style={{ fontVariant: 'small-caps' }}
      >
        {title}
      </p>

      {/* ── Location & availability — quiet museum placard text ── */}
      <div data-reveal className="mt-6 flex flex-col items-center gap-2">
        <p className="font-body text-[9px] tracking-[3px] uppercase text-white/20">
          {location} · {availability}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <div
            className="breathing-dot w-1.5 h-1.5 rounded-full bg-emerald-400/70"
            style={{
              boxShadow: '0 0 6px rgba(52,211,153,0.4)',
            }}
          />
          <p className="font-display text-[8px] tracking-[4px] uppercase text-emerald-400/40">
            Available
          </p>
        </div>
      </div>

      {/* ── Scroll indicator - pulsing circle with EXPLORE ── */}
      <div
        data-reveal
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
      >
        <div className="relative flex items-center justify-center">
          {/* Outer ripple rings */}
          <div
            className="explore-pulse absolute w-20 h-20 rounded-full border border-gallery-gold/15"
            style={{ animationDuration: '4s' }}
          />
          <div
            className="explore-pulse absolute w-16 h-16 rounded-full border border-gallery-gold/20"
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className="explore-pulse absolute w-12 h-12 rounded-full border border-gallery-gold/25"
            style={{ animationDelay: '1s' }}
          />
          {/* Center dot */}
          <div
            className="absolute w-2 h-2 rounded-full bg-gallery-gold/40"
            style={{ boxShadow: '0 0 10px rgba(201,168,76,0.3)' }}
          />
        </div>
        {/* Explore label */}
        <p className="font-body text-[8px] tracking-[6px] uppercase text-gallery-gold/50 mt-6 text-breathe">
          Scroll to Explore
        </p>
        {/* Animated drop line */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-gallery-gold/30 to-transparent animate-pulse-down" />
      </div>
    </div>
  );
}
