'use client';

import { SITE_CONTENT } from '@/data/content';

export default function RoomContent08_Exit() {
  const contact = SITE_CONTENT.contact;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 text-center">
      {/* Exit light gradient — gallery opening to daylight */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.03) 40%, rgba(201,168,76,0.08) 70%, rgba(245,240,232,0.05) 100%)',
        }}
      />

      {/* CTA — massive with gold shimmer */}
      <h2
        data-reveal-heading
        className="font-display gold-shimmer mb-4"
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          textShadow: '0 0 60px rgba(201,168,76,0.2)',
        }}
      >
        {contact.cta}
      </h2>
      <p data-reveal className="font-body text-sm text-white/40 max-w-md mb-16 leading-relaxed">
        {contact.subtitle}
      </p>

      {/* Contact links — placard style */}
      <div data-reveal className="flex flex-wrap justify-center gap-5 mb-16">
        <a href={`mailto:${contact.email}`} className="group block">
          <div className="placard transition-transform duration-300 group-hover:-translate-y-1">
            <p className="placard-title">Email</p>
            <p className="placard-description mt-1">{contact.email}</p>
          </div>
        </a>
        <a href="tel:+16478799449" className="group block">
          <div className="placard transition-transform duration-300 group-hover:-translate-y-1">
            <p className="placard-title">Phone</p>
            <p className="placard-description mt-1">{contact.phone}</p>
          </div>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="placard transition-transform duration-300 group-hover:-translate-y-1">
            <p className="placard-title">LinkedIn</p>
            <p className="placard-description mt-1">shrishmanglik</p>
          </div>
        </a>
        <a href={contact.studio} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="placard transition-transform duration-300 group-hover:-translate-y-1">
            <p className="placard-title">Studio</p>
            <p className="placard-description mt-1">milliondollarstudio.ai</p>
          </div>
        </a>
      </div>

      {/* Back to entrance */}
      <div data-reveal>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-body text-[10px] tracking-[4px] uppercase text-gallery-gold/40 hover:text-gallery-gold transition-colors duration-300 cursor-pointer bg-transparent border-none group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          <span className="ml-2">Back to entrance</span>
        </button>
      </div>
    </div>
  );
}
