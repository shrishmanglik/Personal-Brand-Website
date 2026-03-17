'use client';

export interface RoomConfig {
  id: string;
  name: string;
  number: string;
  accent: string;
  accentRgb: string;
  bg: string;
  glowColor: string;
}

export const ROOM_CONFIG: RoomConfig[] = [
  {
    id: 'foyer',
    name: 'The Grand Foyer',
    number: '01',
    accent: '#C9A84C',
    accentRgb: '201,168,76',
    bg: 'radial-gradient(ellipse at 50% 40%, #1a1710 0%, #0A0A0A 70%)',
    glowColor: 'rgba(201,168,76,0.06)',
  },
  {
    id: 'origins',
    name: 'The Origins',
    number: '02',
    accent: '#D4A574',
    accentRgb: '212,165,116',
    bg: 'radial-gradient(ellipse at 50% 40%, #1a1512 0%, #0A0A0A 70%)',
    glowColor: 'rgba(212,165,116,0.05)',
  },
  {
    id: 'enterprise',
    name: 'The Enterprise Wing',
    number: '03',
    accent: '#A0A0B0',
    accentRgb: '160,160,176',
    bg: 'radial-gradient(ellipse at 50% 40%, #12121a 0%, #0A0A0A 70%)',
    glowColor: 'rgba(160,160,176,0.05)',
  },
  {
    id: 'telus',
    name: 'The TELUS Health Chamber',
    number: '04',
    accent: '#4ECDC4',
    accentRgb: '78,205,196',
    bg: 'radial-gradient(ellipse at 50% 40%, #0d1a19 0%, #0A0A0A 70%)',
    glowColor: 'rgba(78,205,196,0.05)',
  },
  {
    id: 'innovation',
    name: 'The Innovation Lab',
    number: '05',
    accent: '#64C8FF',
    accentRgb: '100,200,255',
    bg: 'radial-gradient(ellipse at 50% 40%, #0d1520 0%, #0A0A0A 70%)',
    glowColor: 'rgba(100,200,255,0.05)',
  },
  {
    id: 'projects',
    name: 'The Project Vault',
    number: '06',
    accent: '#9B59B6',
    accentRgb: '155,89,182',
    bg: 'radial-gradient(ellipse at 50% 40%, #15101a 0%, #0A0A0A 70%)',
    glowColor: 'rgba(155,89,182,0.05)',
  },
  {
    id: 'workshop',
    name: 'The Workshop',
    number: '07',
    accent: '#F39C12',
    accentRgb: '243,156,18',
    bg: 'radial-gradient(ellipse at 50% 40%, #1a1510 0%, #0A0A0A 70%)',
    glowColor: 'rgba(243,156,18,0.05)',
  },
  {
    id: 'exit',
    name: 'The Exit Portal',
    number: '08',
    accent: '#C9A84C',
    accentRgb: '201,168,76',
    bg: 'radial-gradient(ellipse at 50% 40%, #1a1710 0%, #0A0A0A 70%)',
    glowColor: 'rgba(201,168,76,0.06)',
  },
];
