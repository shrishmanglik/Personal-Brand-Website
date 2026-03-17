'use client';

import { useMemo } from 'react';
import { DoubleSide, Shape, ExtrudeGeometry, Vector2 } from 'three';
import { ROOM_POSITIONS } from '@/lib/cameraPath';

const ROOM_WIDTH = 10;
const ROOM_HEIGHT = 5;
const ROOM_DEPTH = 8;
const CORRIDOR_WIDTH = 3;
const CORRIDOR_HEIGHT = 3.5;
const CORRIDOR_LENGTH = 4;
const DOOR_WIDTH = 2.5;
const DOOR_HEIGHT = 3.2;

// Room accent colors for lighting
const ROOM_COLORS: [string, string][] = [
  ['#C9A84C', '#C9A84C'], // Room 1: Gold
  ['#D4A574', '#8B6914'], // Room 2: Amber
  ['#E0E0E0', '#808080'], // Room 3: Cool white
  ['#4ECDC4', '#2A7B75'], // Room 4: Teal (TELUS)
  ['#64C8FF', '#2468A0'], // Room 5: Electric blue
  ['#9B59B6', '#6C3483'], // Room 6: Purple
  ['#F39C12', '#A56A09'], // Room 7: Orange
  ['#C9A84C', '#8B6914'], // Room 8: Gold
];

function WallWithDoorway({
  width,
  height,
  doorWidth,
  doorHeight,
  color,
}: {
  width: number;
  height: number;
  doorWidth: number;
  doorHeight: number;
  color: string;
}) {
  const geometry = useMemo(() => {
    const shape = new Shape();
    // Outer rectangle
    shape.moveTo(-width / 2, 0);
    shape.lineTo(width / 2, 0);
    shape.lineTo(width / 2, height);
    shape.lineTo(-width / 2, height);
    shape.lineTo(-width / 2, 0);

    // Doorway hole
    const hole = new Shape();
    hole.moveTo(-doorWidth / 2, 0);
    hole.lineTo(doorWidth / 2, 0);
    hole.lineTo(doorWidth / 2, doorHeight);
    // Arch top
    hole.quadraticCurveTo(0, doorHeight + 0.5, -doorWidth / 2, doorHeight);
    hole.lineTo(-doorWidth / 2, 0);
    shape.holes.push(hole);

    return new ExtrudeGeometry(shape, { depth: 0.15, bevelEnabled: false });
  }, [width, height, doorWidth, doorHeight]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} side={DoubleSide} />
    </mesh>
  );
}

function SingleRoom({
  position,
  index,
  isFirst,
  isLast,
}: {
  position: number;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [accentColor, darkAccent] = ROOM_COLORS[index];
  const wallColor = '#1a1a1a';
  const floorColor = '#0d0d0d';
  const ceilingColor = '#0a0a0a';

  return (
    <group position={[0, 0, position]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[ROOM_WIDTH, ROOM_DEPTH]} />
        <meshStandardMaterial color={floorColor} roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, ROOM_HEIGHT, 0]}>
        <planeGeometry args={[ROOM_WIDTH, ROOM_DEPTH]} />
        <meshStandardMaterial color={ceilingColor} roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <planeGeometry args={[ROOM_DEPTH, ROOM_HEIGHT]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} side={DoubleSide} />
      </mesh>

      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[ROOM_WIDTH / 2, ROOM_HEIGHT / 2, 0]}>
        <planeGeometry args={[ROOM_DEPTH, ROOM_HEIGHT]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} side={DoubleSide} />
      </mesh>

      {/* Front wall (with doorway unless first room) */}
      {isFirst ? (
        <group position={[0, 0, ROOM_DEPTH / 2]} rotation={[0, Math.PI, 0]}>
          <WallWithDoorway
            width={ROOM_WIDTH}
            height={ROOM_HEIGHT}
            doorWidth={DOOR_WIDTH}
            doorHeight={DOOR_HEIGHT}
            color={wallColor}
          />
        </group>
      ) : (
        <group position={[0, 0, ROOM_DEPTH / 2]} rotation={[0, Math.PI, 0]}>
          <WallWithDoorway
            width={ROOM_WIDTH}
            height={ROOM_HEIGHT}
            doorWidth={DOOR_WIDTH}
            doorHeight={DOOR_HEIGHT}
            color={wallColor}
          />
        </group>
      )}

      {/* Back wall (with doorway unless last room) */}
      {isLast ? (
        <mesh position={[0, ROOM_HEIGHT / 2, -ROOM_DEPTH / 2]}>
          <planeGeometry args={[ROOM_WIDTH, ROOM_HEIGHT]} />
          <meshStandardMaterial color={wallColor} roughness={0.9} side={DoubleSide} />
        </mesh>
      ) : (
        <group position={[0, 0, -ROOM_DEPTH / 2]}>
          <WallWithDoorway
            width={ROOM_WIDTH}
            height={ROOM_HEIGHT}
            doorWidth={DOOR_WIDTH}
            doorHeight={DOOR_HEIGHT}
            color={wallColor}
          />
        </group>
      )}

      {/* Accent light strip on ceiling edges */}
      <pointLight
        position={[0, ROOM_HEIGHT - 0.3, 0]}
        color={accentColor}
        intensity={3}
        distance={12}
        decay={2}
      />

      {/* Main spotlight from ceiling */}
      <spotLight
        position={[0, ROOM_HEIGHT - 0.1, 0]}
        angle={0.8}
        penumbra={0.6}
        intensity={2}
        color="#ffffff"
        distance={10}
        target-position={[0, 0, 0]}
        castShadow={false}
      />

      {/* Side accent lights */}
      <pointLight
        position={[-ROOM_WIDTH / 2 + 0.5, 2.5, 0]}
        color={accentColor}
        intensity={0.5}
        distance={6}
        decay={2}
      />
      <pointLight
        position={[ROOM_WIDTH / 2 - 0.5, 2.5, 0]}
        color={accentColor}
        intensity={0.5}
        distance={6}
        decay={2}
      />

      {/* Floor accent glow */}
      <pointLight
        position={[0, 0.1, 0]}
        color={darkAccent}
        intensity={0.3}
        distance={5}
        decay={2}
      />

      {/* Room number indicator on floor - subtle light */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 2]}>
        <planeGeometry args={[1.5, 0.3]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function Corridor({ fromZ, toZ }: { fromZ: number; toZ: number }) {
  const midZ = (fromZ + toZ) / 2;
  const length = Math.abs(toZ - fromZ);
  const wallColor = '#111111';

  return (
    <group position={[0, 0, midZ]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[CORRIDOR_WIDTH, length]} />
        <meshStandardMaterial color="#080808" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, CORRIDOR_HEIGHT, 0]}>
        <planeGeometry args={[CORRIDOR_WIDTH, length]} />
        <meshStandardMaterial color="#050505" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-CORRIDOR_WIDTH / 2, CORRIDOR_HEIGHT / 2, 0]}>
        <planeGeometry args={[length, CORRIDOR_HEIGHT]} />
        <meshStandardMaterial color={wallColor} roughness={0.95} side={DoubleSide} />
      </mesh>

      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[CORRIDOR_WIDTH / 2, CORRIDOR_HEIGHT / 2, 0]}>
        <planeGeometry args={[length, CORRIDOR_HEIGHT]} />
        <meshStandardMaterial color={wallColor} roughness={0.95} side={DoubleSide} />
      </mesh>

      {/* Dim corridor light */}
      <pointLight
        position={[0, CORRIDOR_HEIGHT - 0.3, 0]}
        color="#C9A84C"
        intensity={0.3}
        distance={6}
        decay={2}
      />
    </group>
  );
}

export default function RoomGeometry() {
  return (
    <group>
      {/* Ambient light — very dim */}
      <ambientLight intensity={0.08} />

      {/* 8 Rooms */}
      {ROOM_POSITIONS.map((z, i) => (
        <SingleRoom
          key={i}
          position={z}
          index={i}
          isFirst={i === 0}
          isLast={i === ROOM_POSITIONS.length - 1}
        />
      ))}

      {/* 7 Corridors connecting rooms */}
      {ROOM_POSITIONS.slice(0, -1).map((z, i) => (
        <Corridor
          key={`corridor-${i}`}
          fromZ={z - ROOM_DEPTH / 2}
          toZ={ROOM_POSITIONS[i + 1] + ROOM_DEPTH / 2}
        />
      ))}
    </group>
  );
}
