'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import PlacardLabel from '@/components/ui/PlacardLabel';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room08_Exit() {
  const contact = SITE_CONTENT.contact;

  return (
    <section
      id="room-8"
      className="min-h-screen relative bg-gradient-to-b from-gallery-black via-gallery-black to-amber-950/10 flex items-center justify-center py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-display text-4xl md:text-6xl text-gallery-gold mb-6">
            {contact.cta}
          </h2>
          <p className="font-body text-lg text-white/60 mb-12">
            {contact.subtitle}
          </p>
        </RevealOnScroll>

        {/* Contact details */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href={`mailto:${contact.email}`} className="hover:opacity-80 transition-opacity">
              <PlacardLabel title="Email" subtitle={contact.email} />
            </a>
            <a href="tel:+16478799449" className="hover:opacity-80 transition-opacity">
              <PlacardLabel title="Phone" subtitle={contact.phone} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <PlacardLabel title="LinkedIn" subtitle="shrishmanglik" />
            </a>
            <a
              href={contact.studio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <PlacardLabel title="Studio" subtitle="milliondollarstudio.ai" />
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <a
            href="#room-1"
            className="inline-block font-body text-sm text-white/40 hover:text-gallery-gold transition-colors tracking-wider uppercase"
          >
            Back to entrance &uarr;
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
