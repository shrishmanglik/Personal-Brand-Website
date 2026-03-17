'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { BufferAttribute } from 'three';

const PARTICLE_COUNT = 200;

export default function AmbientParticles() {
  const pointsRef = useRef<any>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5;       // x: within gallery width
      pos[i * 3 + 1] = Math.random() * 3.5 + 0.3;    // y: above floor, below ceiling
      pos[i * 3 + 2] = Math.random() * 30 - 20;       // z: along gallery length
    }
    return pos;
  }, []);

  const initialPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.getAttribute('position') as BufferAttribute;
    const time = clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      posAttr.array[ix] = initialPositions[ix] + Math.sin(time * 0.3 + i * 0.5) * 0.1;
      posAttr.array[ix + 1] = initialPositions[ix + 1] + Math.sin(time * 0.2 + i * 0.7) * 0.05;
      posAttr.array[ix + 2] = initialPositions[ix + 2] + Math.cos(time * 0.15 + i * 0.3) * 0.08;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}
