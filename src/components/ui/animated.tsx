
'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  variants: Variants;
  transition?: Transition;
  triggerOnce?: boolean;
  delay?: number;
  as?: React.ElementType;
}

export const Animated = React.forwardRef<HTMLDivElement, AnimatedProps>(
  (
    {
      className,
      variants,
      transition,
      triggerOnce = true,
      delay = 0,
      as: Comp = 'div',
      ...props
    },
    ref
  ) => {
    return (
      <Comp
        ref={ref}
        as={motion.div}
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: triggerOnce, amount: 0.25 }}
        variants={variants}
        transition={{ ...transition, delay }}
        {...props}
      />
    );
  }
);

Animated.displayName = 'Animated';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
