'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room05Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 4;
  const mds = SITE_CONTENT.mds;

  return (
    <group position={[0, 0, -48]}>
      {/* Front wall — Studio name with neon glow */}
      <Html
        transform
        position={[0, 3, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={6}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      >
        <div className="text-center select-none" style={{ width: '550px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '40px',
              color: '#ffffff',
              letterSpacing: '3px',
              textShadow: '0 0 10px rgba(100,200,255,0.5), 0 0 20px rgba(100,200,255,0.3), 0 0 40px rgba(100,200,255,0.2)',
            }}
          >
            {mds.name}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              color: 'rgba(100,200,255,0.7)',
              marginTop: '8px',
            }}
          >
            {mds.tagline}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '6px',
            }}
          >
            Founded: {mds.founded}
          </p>
        </div>
      </Html>

      {/* Left wall — Pillars */}
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
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              color: 'rgba(100,200,255,0.4)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Three Pillars
          </p>
          {mds.pillars.map((pillar) => (
            <div
              key={pillar.name}
              style={{
                border: '3px solid rgba(100,200,255,0.4)',
                background: 'rgba(10,10,10,0.85)',
                padding: '14px',
                marginBottom: '10px',
                boxShadow: '0 0 12px rgba(100,200,255,0.06)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '13px',
                  color: '#64C8FF',
                  marginBottom: '6px',
                }}
              >
                {pillar.name}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.5,
                }}
              >
                {pillar.description}
              </p>
              {'range' in pillar && pillar.range && (
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '14px',
                    color: '#C9A84C',
                    marginTop: '6px',
                  }}
                >
                  {pillar.range}
                </p>
              )}
              {'products' in pillar && pillar.products && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {pillar.products}
                </p>
              )}
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — MIDAS Framework */}
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
          <div
            style={{
              border: '4px solid rgba(201,168,76,0.6)',
              background: 'rgba(10,10,10,0.9)',
              padding: '20px',
              boxShadow: '0 0 20px rgba(201,168,76,0.1)',
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '18px',
                color: '#C9A84C',
                textAlign: 'center',
                marginBottom: '6px',
              }}
            >
              {mds.midas.name}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '9px',
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}
            >
              {mds.midas.full}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
                marginBottom: '14px',
              }}
            >
              {mds.midas.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
              {mds.midas.stats.map((stat) => (
                <span
                  key={stat}
                  style={{
                    background: '#F5F0E8',
                    padding: '6px 10px',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'rgba(10,10,10,0.7)',
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
