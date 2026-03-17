'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room01Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 0;
  const { name, title, location, availability } = SITE_CONTENT.hero;

  return (
    <group position={[0, 0, 0]}>
      {/* Front wall — Name and title (facing camera as it enters) */}
      <Html
        transform
        position={[0, 2.5, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={6}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      >
        <div className="text-center select-none" style={{ width: '600px' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '72px',
              color: '#C9A84C',
              letterSpacing: '8px',
              lineHeight: 1.1,
              textShadow: '0 0 40px rgba(201,168,76,0.3)',
              marginBottom: '16px',
            }}
          >
            {name}
          </h1>
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              margin: '0 auto 20px',
            }}
          />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </p>
        </div>
      </Html>

      {/* Left wall — Location info */}
      <Html
        transform
        position={[-4.8, 1.8, 0]}
        rotation={[0, Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: '300px' }}>
          <div
            style={{
              background: '#F5F0E8',
              padding: '16px 24px',
              display: 'inline-block',
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: 'rgba(10,10,10,0.8)',
              }}
            >
              Location
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.6)',
                marginTop: '4px',
              }}
            >
              {location}
            </p>
          </div>
          <div
            style={{
              background: '#F5F0E8',
              padding: '16px 24px',
              display: 'inline-block',
              marginTop: '12px',
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: 'rgba(10,10,10,0.8)',
              }}
            >
              Status
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'rgba(10,10,10,0.6)',
                marginTop: '4px',
              }}
            >
              {availability}
            </p>
          </div>
        </div>
      </Html>

      {/* Right wall — Scroll indicator */}
      <Html
        transform
        position={[4.8, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.5s',
          pointerEvents: 'none',
        }}
      >
        <div className="text-center" style={{ width: '250px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </p>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)',
              margin: '16px auto 0',
            }}
          />
        </div>
      </Html>
    </group>
  );
}
