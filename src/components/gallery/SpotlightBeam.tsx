'use client';

import { AdditiveBlending, DoubleSide } from 'three';

interface SpotlightBeamProps {
  position: [number, number, number];
}

export default function SpotlightBeam({ position }: SpotlightBeamProps) {
  return (
    <mesh position={position} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[1.5, 3.8, 16, 1, true]} />
      <meshBasicMaterial
        color="#C9A84C"
        transparent
        opacity={0.03}
        blending={AdditiveBlending}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
