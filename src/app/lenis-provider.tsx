// src/app/lenis-provider.tsx
'use client';
import { useLenis } from '@/lib/lenis-init';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
