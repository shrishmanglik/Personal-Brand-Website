'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent08_Exit() {
  const contact = SITE_CONTENT.contact;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      {/* CTA */}
      <h2 data-reveal-heading className="font-display text-5xl md:text-7xl text-gallery-gold mb-4" style={{ textShadow: '0 0 60px rgba(201,168,76,0.2)' }}>
        {contact.cta}
      </h2>
      <p data-reveal className="font-body text-sm text-white/40 max-w-md mb-16 leading-relaxed">
        {contact.subtitle}
      </p>

      {/* Contact links */}
      <div data-reveal className="flex flex-wrap justify-center gap-4 mb-16">
        <a href={`mailto:${contact.email}`} className="group block">
          <div className="px-6 py-4 bg-gallery-placard transition-transform duration-300 group-hover:-translate-y-0.5">
            <p className="font-display text-[9px] tracking-[3px] uppercase text-gallery-black/70">Email</p>
            <p className="font-body text-xs italic text-gallery-black/50 mt-1">{contact.email}</p>
          </div>
        </a>
        <a href="tel:+16478799449" className="group block">
          <div className="px-6 py-4 bg-gallery-placard transition-transform duration-300 group-hover:-translate-y-0.5">
            <p className="font-display text-[9px] tracking-[3px] uppercase text-gallery-black/70">Phone</p>
            <p className="font-body text-xs italic text-gallery-black/50 mt-1">{contact.phone}</p>
          </div>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="px-6 py-4 bg-gallery-placard transition-transform duration-300 group-hover:-translate-y-0.5">
            <p className="font-display text-[9px] tracking-[3px] uppercase text-gallery-black/70">LinkedIn</p>
            <p className="font-body text-xs italic text-gallery-black/50 mt-1">shrishmanglik</p>
          </div>
        </a>
        <a href={contact.studio} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="px-6 py-4 bg-gallery-placard transition-transform duration-300 group-hover:-translate-y-0.5">
            <p className="font-display text-[9px] tracking-[3px] uppercase text-gallery-black/70">Studio</p>
            <p className="font-body text-xs italic text-gallery-black/50 mt-1">milliondollarstudio.ai</p>
          </div>
        </a>
      </div>

      {/* Back to entrance */}
      <div data-reveal>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-body text-[10px] tracking-[4px] uppercase text-white/20 hover:text-gallery-gold transition-colors duration-300 cursor-pointer bg-transparent border-none"
        >
          Back to entrance
        </button>
      </div>
    </div>
  );
}
