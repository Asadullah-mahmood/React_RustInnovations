
'use client';

import { motion, type Variants, type Transition, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedProps<T extends React.ElementType = 'div'> = HTMLMotionProps<T> & {
  as?: T;
  variants: Variants;
  transition?: Transition;
  triggerOnce?: boolean;
  delay?: number;
};

export const Animated = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    {
      as,
      className,
      variants,
      transition,
      triggerOnce = true,
      delay = 0,
      ...props
    }: AnimatedProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = motion(as || 'div');
    return (
      <Component
        ref={ref}
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
