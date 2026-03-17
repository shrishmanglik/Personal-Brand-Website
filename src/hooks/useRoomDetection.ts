'use client';

import { useGalleryStore } from '@/store/galleryStore';

export function useRoomDetection() {
  const activeRoom = useGalleryStore((s) => s.activeRoom);
  return activeRoom;
}
