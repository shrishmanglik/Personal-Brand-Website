'use client';

import { useRef } from 'react';
import { Mesh } from 'three';

const GALLERY_LENGTH = 32;
const GALLERY_WIDTH = 6;
const GALLERY_HEIGHT = 4;

const spotlightPositions = [
  { z: 10 },   // Room 1
  { z: 6 },    // Room 2
  { z: 2 },    // Room 3
  { z: -2 },   // Room 4
  { z: -6 },   // Room 5
  { z: -10 },  // Room 6
  { z: -14 },  // Room 7
  { z: -18 },  // Room 8
];

export default function GalleryEnvironment() {
  const floorRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Ambient light — very dim */}
      <ambientLight intensity={0.1} />

      {/* Floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, -4]}
        receiveShadow
      >
        <planeGeometry args={[GALLERY_WIDTH, GALLERY_LENGTH]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Ceiling */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, GALLERY_HEIGHT, -4]}
      >
        <planeGeometry args={[GALLERY_WIDTH, GALLERY_LENGTH]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[-GALLERY_WIDTH / 2, GALLERY_HEIGHT / 2, -4]}
      >
        <planeGeometry args={[GALLERY_LENGTH, GALLERY_HEIGHT]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Right wall */}
      <mesh
        rotation={[0, -Math.PI / 2, 0]}
        position={[GALLERY_WIDTH / 2, GALLERY_HEIGHT / 2, -4]}
      >
        <planeGeometry args={[GALLERY_LENGTH, GALLERY_HEIGHT]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Spotlights for each room */}
      {spotlightPositions.map((pos, i) => (
        <spotLight
          key={i}
          position={[0, GALLERY_HEIGHT - 0.2, pos.z]}
          angle={0.6}
          penumbra={0.5}
          intensity={2}
          color="#C9A84C"
          distance={8}
          castShadow={false}
          target-position={[0, 0, pos.z]}
        />
      ))}
    </group>
  );
}
