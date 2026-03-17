'use client';

import React from 'react';
import { SITE_CONTENT } from '@/data/content';
import GalleryFrame from '@/components/ui/GalleryFrame';
import RevealOnScroll from '@/components/effects/RevealOnScroll';

export default function Room06_ProjectVault() {
  const projects = SITE_CONTENT.projects;

  return (
    <section
      id="room-6"
      className="min-h-screen relative bg-gallery-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-gallery-gold mb-4">
            The Project Vault
          </h2>
        </RevealOnScroll>

        {/* Salon-style masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={project.id}
              delay={index * 0.1}
              className={index % 3 === 0 ? 'row-span-2' : 'row-span-1'}
            >
              <GalleryFrame
                size={project.size}
                placard={{ title: project.name }}
                spotlight
                className="h-full"
              >
                <p className="font-body text-sm text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.split(' \u2022 ').map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-0.5 text-[10px] font-body border border-white/10 rounded-full text-white/50 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GalleryFrame>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
