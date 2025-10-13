
'use client';

import { motion, useSpring, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PageProgress() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Show progress bar on path change
  useEffect(() => {
    setIsVisible(true);
    const visibilityTimeout = setTimeout(() => {
        setIsVisible(false);
    }, 800)

    return () => {
        clearTimeout(visibilityTimeout);
    };
  }, [pathname]);

  // Also show on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && !isVisible) {
      setIsVisible(true);
    }
  })

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 300ms ease-in-out' }}
    >
      <motion.div
        className="h-full bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}
