'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room06Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 5;
  const projects = SITE_CONTENT.projects;

  return (
    <group position={[0, 0, -60]}>
      {/* Front wall — Title */}
      <Html
        transform
        position={[0, 3.2, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={6}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      >
        <div className="text-center select-none" style={{ width: '500px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '42px',
              color: '#9B59B6',
              letterSpacing: '4px',
              textShadow: '0 0 30px rgba(155,89,182,0.3)',
            }}
          >
            The Project Vault
          </h2>
        </div>
      </Html>

      {/* Left wall — First 3 projects */}
      <Html
        transform
        position={[-4.8, 2.2, 0.5]}
        rotation={[0, Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: '350px' }}>
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              style={{
                border: '3px solid rgba(155,89,182,0.5)',
                background: 'rgba(10,10,10,0.85)',
                padding: '14px',
                marginBottom: '10px',
                boxShadow: '0 0 12px rgba(155,89,182,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '14px',
                  color: '#9B59B6',
                  marginBottom: '6px',
                }}
              >
                {project.name}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.5,
                  marginBottom: '8px',
                }}
              >
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {project.stack.split(' \u2022 ').map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '8px',
                      fontFamily: "'DM Sans', sans-serif",
                      padding: '2px 8px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — Last 3 projects */}
      <Html
        transform
        position={[4.8, 2.2, 0.5]}
        rotation={[0, -Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: '350px' }}>
          {projects.slice(3, 6).map((project) => (
            <div
              key={project.id}
              style={{
                border: '3px solid rgba(155,89,182,0.5)',
                background: 'rgba(10,10,10,0.85)',
                padding: '14px',
                marginBottom: '10px',
                boxShadow: '0 0 12px rgba(155,89,182,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '14px',
                  color: '#9B59B6',
                  marginBottom: '6px',
                }}
              >
                {project.name}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.5,
                  marginBottom: '8px',
                }}
              >
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {project.stack.split(' \u2022 ').map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '8px',
                      fontFamily: "'DM Sans', sans-serif",
                      padding: '2px 8px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Html>
    </group>
  );
}
