'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useGalleryStore } from '@/store/galleryStore';
import { getPointAtProgress, getTangentAtProgress } from '@/lib/cameraPath';
import { Vector3 } from 'three';

const targetPos = new Vector3();
const lookAtTarget = new Vector3();

export default function CameraRig() {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const progress = useGalleryStore.getState().scrollProgress;
    const point = getPointAtProgress(progress);
    const tangent = getTangentAtProgress(progress);

    targetPos.copy(point);

    // Subtle head bob for walking feel
    const time = clock.getElapsedTime();
    const bobSpeed = 2.5;
    const bobAmplitude = 0.015;
    targetPos.y += Math.sin(time * bobSpeed) * bobAmplitude;
    // Slight lateral sway
    targetPos.x += Math.sin(time * bobSpeed * 0.5) * bobAmplitude * 0.5;

    // Smooth camera follow (lerp)
    camera.position.lerp(targetPos, 0.08);

    // Look direction follows path tangent
    lookAtTarget.copy(camera.position).add(tangent.normalize().multiplyScalar(2));
    camera.lookAt(lookAtTarget);
  });

  return null;
}
