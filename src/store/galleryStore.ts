'use client';

import { create } from 'zustand';

interface GalleryState {
  scrollProgress: number;
  activeRoom: number;
  isInCorridor: boolean;
  roomProgress: number;
  setScrollProgress: (progress: number) => void;
  setActiveRoom: (room: number) => void;
  setIsInCorridor: (inCorridor: boolean) => void;
  setRoomProgress: (progress: number) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  scrollProgress: 0,
  activeRoom: 0,
  isInCorridor: false,
  roomProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveRoom: (room) => set({ activeRoom: room }),
  setIsInCorridor: (inCorridor) => set({ isInCorridor: inCorridor }),
  setRoomProgress: (progress) => set({ roomProgress: progress }),
}));
