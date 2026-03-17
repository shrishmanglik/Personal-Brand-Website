'use client';

import { CatmullRomCurve3, Vector3 } from 'three';

const waypoints = [
  new Vector3(0, 1.6, 10),    // Room 1: Grand Foyer
  new Vector3(0, 1.6, 6),     // Room 2: Origins
  new Vector3(0, 1.6, 2),     // Room 3: Enterprise
  new Vector3(0, 1.6, -2),    // Room 4: Telus Health
  new Vector3(0, 1.6, -6),    // Room 5: MDS Studio
  new Vector3(0, 1.6, -10),   // Room 6: Project Vault
  new Vector3(0, 1.6, -14),   // Room 7: Workshop
  new Vector3(0, 1.6, -18),   // Room 8: Exit
];

const curve = new CatmullRomCurve3(waypoints, false, 'catmullrom', 0.5);

export function getPointAtProgress(t: number): Vector3 {
  return curve.getPointAt(Math.max(0, Math.min(1, t)));
}

export function getTangentAtProgress(t: number): Vector3 {
  return curve.getTangentAt(Math.max(0, Math.min(1, t)));
}
