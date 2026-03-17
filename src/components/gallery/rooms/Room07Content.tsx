'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

const SKILL_COLUMNS = [
  { title: 'AI & Intelligence', key: 'ai' as const, color: '#F39C12' },
  { title: 'Engineering & Data', key: 'engineering' as const, color: '#E67E22' },
  { title: 'Strategy & Operations', key: 'strategy' as const, color: '#D35400' },
];

export default function Room07Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 6;
  const skills = SITE_CONTENT.skills;

  return (
    <group position={[0, 0, -72]}>
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
              color: '#F39C12',
              letterSpacing: '4px',
              textShadow: '0 0 30px rgba(243,156,18,0.3)',
            }}
          >
            The Workshop
          </h2>
        </div>
      </Html>

      {/* Left wall — AI & Engineering skills */}
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
        <div style={{ width: '340px' }}>
          {SKILL_COLUMNS.slice(0, 2).map((column) => (
            <div
              key={column.key}
              style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '14px',
                marginBottom: '12px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '13px',
                  color: column.color,
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                {column.title}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
                {skills[column.key].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '9px',
                      fontFamily: "'DM Sans', sans-serif",
                      padding: '3px 8px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      color: 'rgba(255,255,255,0.6)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — Strategy skills + Certification */}
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
        <div style={{ width: '340px' }}>
          {/* Strategy skills */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '14px',
              marginBottom: '16px',
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '13px',
                color: SKILL_COLUMNS[2].color,
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              {SKILL_COLUMNS[2].title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
              {skills.strategy.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: '9px',
                    fontFamily: "'DM Sans', sans-serif",
                    padding: '3px 8px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    color: 'rgba(255,255,255,0.6)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div
            style={{
              border: '3px solid rgba(255,255,255,0.6)',
              background: 'rgba(10,10,10,0.85)',
              padding: '14px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                background: '#F5F0E8',
                padding: '10px 14px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'rgba(10,10,10,0.8)',
                }}
              >
                Professional Certification
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: 'rgba(10,10,10,0.6)',
                  marginTop: '4px',
                }}
              >
                Google Data Analytics Professional Certificate
              </p>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
