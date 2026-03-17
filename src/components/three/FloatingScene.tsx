'use client';

import React, { Suspense, useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingSceneProps {
  scrollProgress?: number;
}

interface ShapeConfig {
  type: 'icosahedron' | 'octahedron' | 'torusKnot' | 'dodecahedron';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  floatSpeed: number;
  floatAmplitude: number;
  rotationSpeed: [number, number, number];
}

interface FloatingShapeProps {
  config: ShapeConfig;
  scrollProgress: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

interface StarFieldProps {
  count: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

interface SceneContentsProps {
  scrollProgress: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

// ─── Geometry helpers ─────────────────────────────────────────────────────────

function useGeometry(type: ShapeConfig['type']) {
  return useMemo(() => {
    switch (type) {
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1, 0);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1, 0);
      case 'torusKnot':
        return new THREE.TorusKnotGeometry(0.7, 0.25, 64, 8);
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(1, 0);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [type]);
}

// ─── Shape configurations ─────────────────────────────────────────────────────

const GOLD = '#C9A84C';
const CYAN = '#4FB8FF';

function generateShapeConfigs(): ShapeConfig[] {
  const types: ShapeConfig['type'][] = [
    'icosahedron', 'octahedron', 'torusKnot', 'dodecahedron',
  ];

  const configs: ShapeConfig[] = [];

  for (let i = 0; i < 18; i++) {
    const isGold = i % 3 !== 0;
    configs.push({
      type: types[i % types.length],
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10 - 2,
      ],
      rotation: [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ],
      scale: 0.2 + Math.random() * 0.6,
      color: isGold ? GOLD : CYAN,
      floatSpeed: 0.3 + Math.random() * 0.5,
      floatAmplitude: 0.3 + Math.random() * 0.6,
      rotationSpeed: [
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
      ],
    });
  }

  return configs;
}

// ─── FloatingShape ────────────────────────────────────────────────────────────

const FloatingShape = React.memo(function FloatingShape({
  config,
  scrollProgress,
  mousePosition,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useGeometry(config.type);
  const initialY = config.position[1];

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(config.color),
        wireframe: true,
        transparent: true,
        opacity: config.color === GOLD ? 0.25 : 0.18,
      }),
    [config.color],
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Float up/down
    const scrollFactor = 1 + scrollProgress * 0.6;
    meshRef.current.position.y =
      initialY + Math.sin(t * config.floatSpeed) * config.floatAmplitude;

    // Spread out with scroll
    meshRef.current.position.x =
      config.position[0] * (1 + scrollProgress * 0.3);

    // Rotation – faster with scroll
    const rotMul = 1 + scrollProgress * 1.5;
    meshRef.current.rotation.x += config.rotationSpeed[0] * 0.01 * rotMul * scrollFactor;
    meshRef.current.rotation.y += config.rotationSpeed[1] * 0.01 * rotMul * scrollFactor;
    meshRef.current.rotation.z += config.rotationSpeed[2] * 0.01 * rotMul * scrollFactor;

    // Mouse parallax
    const mx = mousePosition.current.x;
    const my = mousePosition.current.y;
    const depth = Math.abs(config.position[2]) * 0.08;
    meshRef.current.position.x += mx * depth;
    meshRef.current.position.y += my * depth;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={config.position}
      scale={config.scale}
    />
  );
});

// ─── StarField ────────────────────────────────────────────────────────────────

const StarField = React.memo(function StarField({ count, mousePosition }: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 3;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color(GOLD),
        size: 0.04,
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.01;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;

    // Mouse parallax on starfield
    pointsRef.current.position.x = mousePosition.current.x * 0.3;
    pointsRef.current.position.y = mousePosition.current.y * 0.3;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
});

// ─── MouseTracker (captures pointer inside canvas) ────────────────────────────

function MouseTracker({
  mousePosition,
}: {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { viewport } = useThree();

  useFrame((state) => {
    // state.pointer is normalised -1..1
    mousePosition.current.x = state.pointer.x * (viewport.width / 2);
    mousePosition.current.y = state.pointer.y * (viewport.height / 2);
  });

  return null;
}

// ─── SceneContents ────────────────────────────────────────────────────────────

const shapeConfigs = generateShapeConfigs();

const SceneContents = React.memo(function SceneContents({
  scrollProgress,
  mousePosition,
}: SceneContentsProps) {
  return (
    <>
      <fog attach="fog" args={['#050505', 8, 28]} />
      <ambientLight intensity={0.15} />

      <MouseTracker mousePosition={mousePosition} />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.15}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      <Environment preset="night" />

      {shapeConfigs.map((cfg, i) => (
        <FloatingShape
          key={i}
          config={cfg}
          scrollProgress={scrollProgress}
          mousePosition={mousePosition}
        />
      ))}

      <StarField count={60} mousePosition={mousePosition} />
    </>
  );
});

// ─── FloatingScene (main export) ──────────────────────────────────────────────

const FloatingScene: React.FC<FloatingSceneProps> = React.memo(
  function FloatingScene({ scrollProgress = 0 }) {
    const mousePosition = useRef({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    // Delay mount slightly so the main thread can paint first
    useEffect(() => {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }, []);

    if (!visible) return null;

    return (
      <div
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 1, pointerEvents: 'none' }}
      >
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 10], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
          style={{ pointerEvents: 'none' }}
        >
          <Suspense fallback={null}>
            <SceneContents
              scrollProgress={scrollProgress}
              mousePosition={mousePosition}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  },
);

export default FloatingScene;
