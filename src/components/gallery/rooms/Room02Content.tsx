'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room02Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 1;
  const education = SITE_CONTENT.education;
  const indiaEntries = education.filter((e) => e.region === 'india');
  const canadaEntries = education.filter((e) => e.region === 'canada');

  return (
    <group position={[0, 0, -12]}>
      {/* Front wall — Section title */}
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
        <div className="text-center select-none" style={{ width: '500px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '42px',
              color: '#D4A574',
              letterSpacing: '4px',
              textShadow: '0 0 30px rgba(212,165,116,0.3)',
            }}
          >
            The Journey
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            India &rarr; Canada
          </p>
        </div>
      </Html>

      {/* Left wall — India education */}
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
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '18px',
              color: '#D4A574',
              letterSpacing: '3px',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            INDIA
          </h3>
          {indiaEntries.map((entry) => (
            <div
              key={entry.id}
              style={{
                border: '3px solid rgba(255,255,255,0.7)',
                background: 'rgba(10,10,10,0.8)',
                padding: '14px',
                marginBottom: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '13px',
                  color: '#D4A574',
                }}
              >
                {entry.degree}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '4px',
                }}
              >
                {entry.institution}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.3)',
                  marginTop: '2px',
                }}
              >
                {entry.years} | GPA: {entry.gpa}
              </p>
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — Canada education */}
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
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '18px',
              color: '#94A3B8',
              letterSpacing: '3px',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            CANADA
          </h3>
          {canadaEntries.map((entry) => (
            <div
              key={entry.id}
              style={{
                border: '3px solid rgba(255,255,255,0.7)',
                background: 'rgba(10,10,10,0.8)',
                padding: '14px',
                marginBottom: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '13px',
                  color: '#94A3B8',
                }}
              >
                {entry.degree}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '4px',
                }}
              >
                {entry.institution}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.3)',
                  marginTop: '2px',
                }}
              >
                {entry.years} | GPA: {entry.gpa}
              </p>
            </div>
          ))}
        </div>
      </Html>
    </group>
  );
}
