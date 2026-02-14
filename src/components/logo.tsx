'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
    <Link
      href="/"
      className="flex flex-row items-center gap-1.5 md:gap-1.5 ml-2 md:ml-4"
      aria-label="Rust Innovations Home"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-16 w-16"
      >
        <motion.path
          d="M25 80 V20 H50 C75 20, 75 50, 50 50 H35 L65 80"
          stroke="hsl(var(--primary))"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              delay: 0.2,
              type: 'tween',
              ease: 'easeInOut',
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1,
            },
            opacity: { delay: 0.2, duration: 0.01, repeat: Infinity },
          }}
        />
      </motion.svg>
      <div
        className={cn(
          'flex flex-col justify-center overflow-hidden transition-all duration-300',
          iconOnly ? 'w-0 opacity-0' : 'w-auto opacity-100'
        )}
      >
        <span className="font-headline font-bold text-foreground whitespace-nowrap leading-tight text-lg sm:text-xl md:text-2xl md:text-left text-left">
          Rust Innovations
        </span>
        <span className="text-sm text-primary whitespace-nowrap leading-tight hidden md:inline">
          Limited Liability Company
        </span>
      </div>
    </Link>
  );
}
