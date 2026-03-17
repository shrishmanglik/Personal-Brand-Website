'use client';

import { SITE_CONTENT } from '@/data/content';
import { motion } from 'framer-motion';

const contactCards: ReadonlyArray<{
  icon: string;
  label: string;
  value: string;
  href: string;
  glowColor: string;
  accentBorder: string;
  external?: boolean;
}> = [
  {
    icon: '\u2709',
    label: 'Email',
    value: SITE_CONTENT.contact.email,
    href: `mailto:${SITE_CONTENT.contact.email}`,
    glowColor: 'rgba(201,168,76,0.35)',
    accentBorder: 'rgba(201,168,76,0.3)',
  },
  {
    icon: '\u260E',
    label: 'Phone',
    value: SITE_CONTENT.contact.phone,
    href: 'tel:+16478799449',
    glowColor: 'rgba(100,200,255,0.35)',
    accentBorder: 'rgba(100,200,255,0.3)',
  },
  {
    icon: '\u25C6',
    label: 'LinkedIn',
    value: 'shrishmanglik',
    href: SITE_CONTENT.contact.linkedin,
    glowColor: 'rgba(167,139,250,0.35)',
    accentBorder: 'rgba(167,139,250,0.3)',
    external: true,
  },
  {
    icon: '\u2605',
    label: 'Studio',
    value: 'milliondollarstudio.ai',
    href: SITE_CONTENT.contact.studio,
    glowColor: 'rgba(245,158,11,0.35)',
    accentBorder: 'rgba(245,158,11,0.3)',
    external: true,
  },
];

export default function RoomContent08_Exit() {
  const contact = SITE_CONTENT.contact;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 text-center overflow-hidden">
      {/* ── Atmospheric background layers ── */}

      {/* Sunburst radiating lines - more rays, subtle rotation */}
      <div
        className="absolute top-1/3 left-1/2 pointer-events-none sunburst"
        style={{
          width: 'clamp(600px, 90vw, 1400px)',
          height: 'clamp(600px, 90vw, 1400px)',
        }}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: '50%',
              height: '1px',
              background:
                i % 3 === 0
                  ? 'linear-gradient(90deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02) 60%, transparent 85%)'
                  : 'linear-gradient(90deg, rgba(201,168,76,0.04), transparent 70%)',
              transform: `rotate(${i * 10}deg)`,
            }}
          />
        ))}
      </div>

      {/* Central radial glow - layered */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'clamp(400px, 60vw, 900px)',
          height: 'clamp(400px, 60vw, 900px)',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(167,139,250,0.03) 30%, rgba(100,200,255,0.02) 50%, transparent 70%)',
        }}
      />

      {/* Bottom light wash - cinematic exit glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.02) 30%, rgba(201,168,76,0.06) 60%, rgba(245,240,232,0.06) 85%, rgba(255,248,230,0.1) 100%)',
        }}
      />

      {/* Faint concentric rings */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: 'clamp(250px, 35vw, 500px)',
          height: 'clamp(250px, 35vw, 500px)',
          border: '1px solid rgba(201,168,76,0.04)',
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: 'clamp(400px, 55vw, 800px)',
          height: 'clamp(400px, 55vw, 800px)',
          border: '1px solid rgba(201,168,76,0.02)',
        }}
      />

      {/* ── "Currently building the future" tagline ── */}
      <div data-reveal className="mb-10 md:mb-14">
        <p className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-white/25 typewriter-cursor">
          Currently building the future
        </p>
      </div>

      {/* ── CTA - massive aurora gradient with sparkle effects ── */}
      <div className="sparkle-container sparkle-field relative z-10 mb-2">
        <h2
          data-reveal-heading
          className="font-display gold-shimmer leading-[0.9]"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
          }}
        >
          {contact.cta}
        </h2>
      </div>

      {/* Decorative line under CTA */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div
          className="h-[1px] w-12 md:w-20"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))',
          }}
        />
        <div
          className="w-2 h-2 rotate-45 border border-gallery-gold/30"
          style={{ boxShadow: '0 0 8px rgba(201,168,76,0.15)' }}
        />
        <div
          className="h-[1px] w-12 md:w-20"
          style={{
            background:
              'linear-gradient(270deg, transparent, rgba(201,168,76,0.3))',
          }}
        />
      </div>

      <p
        data-reveal
        className="font-body text-sm md:text-base text-white/40 max-w-lg mb-16 md:mb-20 leading-relaxed relative z-10 px-6"
      >
        {contact.subtitle}
      </p>

      {/* ── Divider with glow ── */}
      <div data-reveal-line className="divider-glow w-56 mb-16 origin-left" />

      {/* ── Contact cards grid ── */}
      <div
        data-reveal
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20 max-w-2xl w-full px-6 relative z-10"
      >
        {contactCards.map((card) => (
          <motion.a
            key={card.label}
            href={card.href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            className="glass group block px-6 py-6 text-left transition-all duration-500 relative overflow-hidden border-l-[3px]"
            style={{ borderLeftColor: card.accentBorder }}
            whileHover={{
              y: -6,
              boxShadow: `0 0 40px ${card.glowColor}, 0 12px 40px rgba(0,0,0,0.4)`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            {/* Accent top border line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: card.accentBorder }}
            />

            <div className="flex items-start gap-4">
              <span
                className="text-2xl opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 inline-block"
                style={{ lineHeight: 1 }}
              >
                {card.icon}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[9px] tracking-[4px] uppercase text-white/25 group-hover:text-white/50 transition-colors duration-500">
                  {card.label}
                </p>
                <p className="font-body text-sm text-white/55 group-hover:text-white/95 transition-colors duration-500 mt-1.5 truncate">
                  {card.value}
                </p>
              </div>
            </div>

            {/* Subtle corner accent */}
            <div
              className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(225deg, ${card.accentBorder}, transparent 70%)`,
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* ── Back to entrance button ── */}
      <div data-reveal className="relative z-10 mb-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn-ghost group flex items-center gap-4 cursor-pointer px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
        >
          <span className="arrow-bounce inline-block text-lg text-gallery-gold/70 group-hover:text-gallery-gold transition-colors duration-300">
            &#8593;
          </span>
          <span className="text-sm tracking-[0.3em] uppercase">
            Back to Entrance
          </span>
        </button>
      </div>

      {/* ── Footer ── */}
      <div
        data-reveal
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div
          className="w-8 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)',
          }}
        />
        <p className="font-body text-[10px] tracking-[4px] uppercase text-white/10">
          &copy; 2024 Shrish Manglik
        </p>
      </div>
    </div>
  );
}
