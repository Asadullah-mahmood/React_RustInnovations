
'use client';

import { motion, useSpring, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PageProgress() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsVisible(true);
    scaleX.set(0.3); // Start the progress
    const timeout = setTimeout(() => {
        scaleX.set(1); // Complete it
    }, 100);

    const visibilityTimeout = setTimeout(() => {
        setIsVisible(false);
    }, 800)

    const resetTimeout = setTimeout(() => {
        scaleX.set(0);
    }, 1000)

    return () => {
        clearTimeout(timeout);
        clearTimeout(visibilityTimeout);
        clearTimeout(resetTimeout);
    };
  }, [pathname, scaleX]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 300ms 500ms ease-in-out' }}
    >
      <motion.div
        className="h-full bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}
