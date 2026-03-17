'use client';

import { create } from 'zustand';

interface GalleryState {
  scrollProgress: number;
  activeRoom: number;
  setScrollProgress: (progress: number) => void;
  setActiveRoom: (room: number) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  scrollProgress: 0,
  activeRoom: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveRoom: (room) => set({ activeRoom: room }),
}));
