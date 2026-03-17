'use client';

import { CatmullRomCurve3, Vector3 } from 'three';

// Room centers at Z: 0, -12, -24, -36, -48, -60, -72, -84
// Corridors between rooms with slight X offsets for organic feel
const waypoints = [
  new Vector3(0, 1.6, 8),       // Approach room 1
  new Vector3(0, 1.6, 0),       // Inside room 1 (center)
  new Vector3(0, 1.6, -6),      // Exiting room 1
  new Vector3(0.2, 1.6, -9),    // Corridor 1→2
  new Vector3(0.3, 1.6, -12),   // Room 2 center
  new Vector3(0.1, 1.6, -18),   // Exiting room 2
  new Vector3(-0.1, 1.6, -21),  // Corridor 2→3
  new Vector3(-0.3, 1.6, -24),  // Room 3 center
  new Vector3(-0.1, 1.6, -30),  // Exiting room 3
  new Vector3(0.1, 1.6, -33),   // Corridor 3→4
  new Vector3(0.2, 1.6, -36),   // Room 4 center
  new Vector3(0.1, 1.6, -42),   // Exiting room 4
  new Vector3(-0.1, 1.6, -45),  // Corridor 4→5
  new Vector3(-0.2, 1.6, -48),  // Room 5 center
  new Vector3(-0.1, 1.6, -54),  // Exiting room 5
  new Vector3(0.1, 1.6, -57),   // Corridor 5→6
  new Vector3(0.3, 1.6, -60),   // Room 6 center
  new Vector3(0.1, 1.6, -66),   // Exiting room 6
  new Vector3(-0.1, 1.6, -69),  // Corridor 6→7
  new Vector3(-0.3, 1.6, -72),  // Room 7 center
  new Vector3(-0.1, 1.6, -78),  // Exiting room 7
  new Vector3(0.1, 1.6, -81),   // Corridor 7→8
  new Vector3(0, 1.6, -84),     // Room 8 center
  new Vector3(0, 1.6, -90),     // Exit
];

const curve = new CatmullRomCurve3(waypoints, false, 'catmullrom', 0.3);

export function getPointAtProgress(t: number): Vector3 {
  return curve.getPointAt(Math.max(0, Math.min(1, t)));
}

export function getTangentAtProgress(t: number): Vector3 {
  return curve.getTangentAt(Math.max(0, Math.min(1, t)));
}

// Room center Z positions for content placement
export const ROOM_POSITIONS = [0, -12, -24, -36, -48, -60, -72, -84];
