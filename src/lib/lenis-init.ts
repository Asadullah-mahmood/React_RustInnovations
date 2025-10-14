// src/lib/lenis-init.ts
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // inertia (0 = instant, 1 = never)
      smoothWheel: true, // enable smooth on desktop
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
