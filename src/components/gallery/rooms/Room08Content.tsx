'use client';

import { Html } from '@react-three/drei';
import { SITE_CONTENT } from '@/data/content';
import { useGalleryStore } from '@/store/galleryStore';

export default function Room08Content() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  const isVisible = activeRoom === 7;
  const contact = SITE_CONTENT.contact;

  return (
    <group position={[0, 0, -84]}>
      {/* Back wall — CTA (this is the final room, content on back wall) */}
      <Html
        transform
        position={[0, 2.8, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={6}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div className="text-center select-none" style={{ width: '550px' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '48px',
              color: '#C9A84C',
              letterSpacing: '4px',
              textShadow: '0 0 40px rgba(201,168,76,0.4)',
              marginBottom: '12px',
            }}
          >
            {contact.cta}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
            }}
          >
            {contact.subtitle}
          </p>
        </div>
      </Html>

      {/* Left wall — Email & Phone */}
      <Html
        transform
        position={[-4.8, 2, 0.5]}
        rotation={[0, Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div style={{ width: '300px' }}>
          <a
            href={`mailto:${contact.email}`}
            style={{ textDecoration: 'none', display: 'block', marginBottom: '14px' }}
          >
            <div
              style={{
                background: '#F5F0E8',
                padding: '14px 20px',
                transition: 'transform 0.3s ease',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'rgba(10,10,10,0.8)',
                }}
              >
                Email
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'rgba(10,10,10,0.6)',
                  marginTop: '4px',
                }}
              >
                {contact.email}
              </p>
            </div>
          </a>

          <a
            href="tel:+16478799449"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div
              style={{
                background: '#F5F0E8',
                padding: '14px 20px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'rgba(10,10,10,0.8)',
                }}
              >
                Phone
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'rgba(10,10,10,0.6)',
                  marginTop: '4px',
                }}
              >
                {contact.phone}
              </p>
            </div>
          </a>
        </div>
      </Html>

      {/* Right wall — LinkedIn & Studio */}
      <Html
        transform
        position={[4.8, 2, 0.5]}
        rotation={[0, -Math.PI / 2, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.5s',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div style={{ width: '300px' }}>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block', marginBottom: '14px' }}
          >
            <div
              style={{
                background: '#F5F0E8',
                padding: '14px 20px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'rgba(10,10,10,0.8)',
                }}
              >
                LinkedIn
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'rgba(10,10,10,0.6)',
                  marginTop: '4px',
                }}
              >
                shrishmanglik
              </p>
            </div>
          </a>

          <a
            href={contact.studio}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div
              style={{
                background: '#F5F0E8',
                padding: '14px 20px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'rgba(10,10,10,0.8)',
                }}
              >
                Studio
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'rgba(10,10,10,0.6)',
                  marginTop: '4px',
                }}
              >
                milliondollarstudio.ai
              </p>
            </div>
          </a>
        </div>
      </Html>

      {/* Floor area — Back to entrance */}
      <Html
        transform
        position={[0, 0.8, -3.5]}
        rotation={[0, 0, 0]}
        distanceFactor={5}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.7s',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div className="text-center" style={{ width: '300px' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            Back to entrance
          </button>
        </div>
      </Html>
    </group>
  );
}
