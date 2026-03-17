'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room03Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 2;
  const career = SITE_CONTENT.career;

  return (
    <group position={[0, 0, -24]}>
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
              color: '#E0E0E0',
              letterSpacing: '4px',
            }}
          >
            The Enterprise Wing
          </h2>
        </div>
      </Html>

      {/* Left wall — Early career (small frames) */}
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
        <div style={{ width: '360px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Early Career
          </p>
          {career.slice(0, 3).map((entry) => (
            <div
              key={entry.id}
              style={{
                border: '3px solid rgba(255,255,255,0.6)',
                background: 'rgba(10,10,10,0.85)',
                padding: '12px 16px',
                marginBottom: '8px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.5)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '12px',
                  color: 'rgba(224,224,224,0.9)',
                }}
              >
                {entry.role}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '3px',
                }}
              >
                {entry.company} | {entry.years}
              </p>
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — Later career (medium + hero) */}
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
        <div style={{ width: '360px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Growth & Leadership
          </p>
          {career.slice(3).map((entry) => (
            <div
              key={entry.id}
              style={{
                border: entry.size === 'hero' ? '4px solid rgba(201,168,76,0.8)' : '3px solid rgba(255,255,255,0.6)',
                background: entry.size === 'hero' ? 'rgba(10,10,10,0.9)' : 'rgba(10,10,10,0.85)',
                padding: entry.size === 'hero' ? '18px 20px' : '12px 16px',
                marginBottom: '10px',
                boxShadow: entry.size === 'hero'
                  ? '0 0 20px rgba(201,168,76,0.15), 0 4px 15px rgba(0,0,0,0.5)'
                  : '0 3px 12px rgba(0,0,0,0.5)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: entry.size === 'hero' ? '16px' : '13px',
                  color: entry.size === 'hero' ? '#C9A84C' : 'rgba(224,224,224,0.9)',
                }}
              >
                {entry.role}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '4px',
                }}
              >
                {entry.company} | {entry.years}
              </p>
              {entry.highlight && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    color: entry.size === 'hero' ? 'rgba(201,168,76,0.7)' : 'rgba(255,255,255,0.3)',
                    fontStyle: 'italic',
                    marginTop: '4px',
                  }}
                >
                  {entry.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </Html>

      {/* Front wall — Quote */}
      <Html
        transform
        position={[0, 1.2, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.6s',
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: '450px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              fontStyle: 'italic',
              lineHeight: 1.7,
              borderLeft: '2px solid rgba(201,168,76,0.3)',
              paddingLeft: '16px',
              textAlign: 'left',
            }}
          >
            &ldquo;From customer support in Kerala to managing enterprise benefits
            portfolios worth millions in Toronto — every role was a room in the
            gallery of becoming.&rdquo;
          </p>
        </div>
      </Html>
    </group>
  );
}
