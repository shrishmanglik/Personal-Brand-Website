'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useGalleryStore } from '@/store/galleryStore';
import { getPointAtProgress, getTangentAtProgress } from '@/lib/cameraPath';
import { Vector3 } from 'three';

const targetPos = new Vector3();
const lookAtTarget = new Vector3();

export default function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const progress = useGalleryStore.getState().scrollProgress;
    const point = getPointAtProgress(progress);
    const tangent = getTangentAtProgress(progress);

    targetPos.copy(point);
    camera.position.lerp(targetPos, 0.05);

    lookAtTarget.copy(camera.position).add(tangent.normalize());
    camera.lookAt(lookAtTarget);
  });

  return null;
}
