'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room04Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 3;
  const { title, period, pieces, quote } = SITE_CONTENT.telusHealth;

  return (
    <group position={[0, 0, -36]}>
      {/* Front wall — Title */}
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
              fontSize: '36px',
              color: '#4ECDC4',
              letterSpacing: '3px',
              textShadow: '0 0 30px rgba(78,205,196,0.3)',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '2px',
              marginTop: '10px',
            }}
          >
            {period}
          </p>
        </div>
      </Html>

      {/* Left wall — First 2 pieces */}
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
          {pieces.slice(0, 2).map((piece) => (
            <div
              key={piece.title}
              style={{
                border: '3px solid rgba(78,205,196,0.5)',
                background: 'rgba(10,10,10,0.85)',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 0 15px rgba(78,205,196,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '14px',
                  color: '#4ECDC4',
                  marginBottom: '8px',
                }}
              >
                {piece.title}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.6,
                }}
              >
                {piece.description}
              </p>
            </div>
          ))}
        </div>
      </Html>

      {/* Right wall — Last 2 pieces */}
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
          {pieces.slice(2, 4).map((piece) => (
            <div
              key={piece.title}
              style={{
                border: '3px solid rgba(78,205,196,0.5)',
                background: 'rgba(10,10,10,0.85)',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 0 15px rgba(78,205,196,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '14px',
                  color: '#4ECDC4',
                  marginBottom: '8px',
                }}
              >
                {piece.title}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.6,
                }}
              >
                {piece.description}
              </p>
            </div>
          ))}
        </div>
      </Html>

      {/* Bottom front wall — Quote */}
      <Html
        transform
        position={[0, 1, -3.5]}
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
              color: 'rgba(78,205,196,0.5)',
              fontStyle: 'italic',
              lineHeight: 1.8,
            }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <div
            style={{
              width: '40px',
              height: '2px',
              background: 'rgba(78,205,196,0.3)',
              margin: '12px auto 0',
            }}
          />
        </div>
      </Html>
    </group>
  );
}
