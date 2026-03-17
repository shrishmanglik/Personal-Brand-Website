'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping } from 'three';
import CameraRig from './CameraRig';
import RoomGeometry from './RoomGeometry';
import AmbientParticles from './AmbientParticles';
import Room01Content from './rooms/Room01Content';
import Room02Content from './rooms/Room02Content';
import Room03Content from './rooms/Room03Content';
import Room04Content from './rooms/Room04Content';
import Room05Content from './rooms/Room05Content';
import Room06Content from './rooms/Room06Content';
import Room07Content from './rooms/Room07Content';
import Room08Content from './rooms/Room08Content';

export default function GalleryCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="gallery-viewport"
      style={{
        width: '100%',
        height: '100vh',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 200, position: [0, 1.6, 8] }}
        gl={{
          toneMapping: ACESFilmicToneMapping,
          antialias: true,
        }}
        style={{ background: '#0A0A0A' }}
      >
        {/* Fog for depth */}
        <fog attach="fog" args={['#0A0A0A', 2, 28]} />

        <CameraRig />
        <RoomGeometry />
        <AmbientParticles />

        {/* Room content (Html components on walls) */}
        <Room01Content />
        <Room02Content />
        <Room03Content />
        <Room04Content />
        <Room05Content />
        <Room06Content />
        <Room07Content />
        <Room08Content />
      </Canvas>
    </div>
  );
}
