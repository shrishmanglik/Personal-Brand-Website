'use client';

import { Text } from '@react-three/drei';

export default function FloatingName() {
  return (
    <group position={[0, 2.2, 9]}>
      {/* Gold floating name */}
      <Text
        fontSize={0.6}
        letterSpacing={0.15}
        color="#C9A84C"
        anchorX="center"
        anchorY="middle"
        maxWidth={8}
      >
        SHRISH MANGLIK
        <meshStandardMaterial
          color="#C9A84C"
          metalness={0.8}
          roughness={0.2}
          emissive="#C9A84C"
          emissiveIntensity={0.15}
        />
      </Text>

      {/* Subtle glow light behind the text */}
      <pointLight
        position={[0, 0, -0.5]}
        color="#C9A84C"
        intensity={0.5}
        distance={4}
      />
    </group>
  );
}
