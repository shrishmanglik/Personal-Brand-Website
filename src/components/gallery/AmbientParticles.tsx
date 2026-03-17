'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { BufferAttribute } from 'three';

const PARTICLE_COUNT = 400;

export default function AmbientParticles() {
  const pointsRef = useRef<any>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;        // x: within room width
      pos[i * 3 + 1] = Math.random() * 4.5 + 0.3;     // y: above floor, below ceiling
      pos[i * 3 + 2] = Math.random() * 100 - 92;       // z: span full gallery (8 to -92)
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
      posAttr.array[ix] = initialPositions[ix] + Math.sin(time * 0.2 + i * 0.5) * 0.08;
      posAttr.array[ix + 1] = initialPositions[ix + 1] + Math.sin(time * 0.15 + i * 0.7) * 0.04;
      posAttr.array[ix + 2] = initialPositions[ix + 2] + Math.cos(time * 0.1 + i * 0.3) * 0.06;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#C9A84C"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}
