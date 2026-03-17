'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping } from 'three';
import CameraRig from './CameraRig';
import GalleryEnvironment from './GalleryEnvironment';
import AmbientParticles from './AmbientParticles';
import FloatingName from './FloatingName';
import SpotlightBeam from './SpotlightBeam';

const spotlightZPositions = [10, 6, 2, -2, -6, -10, -14, -18];

export default function GalleryCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Canvas
        camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 1.6, 10] }}
        gl={{
          toneMapping: ACESFilmicToneMapping,
          antialias: true,
        }}
        style={{ background: '#0A0A0A' }}
      >
        <CameraRig />
        <GalleryEnvironment />
        <AmbientParticles />
        <FloatingName />
        {spotlightZPositions.map((z) => (
          <SpotlightBeam key={z} position={[0, 3.8, z]} />
        ))}
      </Canvas>
    </div>
  );
}
