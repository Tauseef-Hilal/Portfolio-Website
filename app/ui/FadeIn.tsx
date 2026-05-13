"use client";

import { motion } from "framer-motion";
import { createContext, ReactNode, useContext } from "react";

const FadeInContext = createContext(false);

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 20,
}: FadeInProps) {
  const isWithinStagger = useContext(FadeInContext);

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as any,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={isWithinStagger ? undefined : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className = "",
  staggerAmount = 0.1,
  delay = 0,
  ...props
}: {
  children: ReactNode;
  className?: string;
  staggerAmount?: number;
  delay?: number;
  [key: string]: any;
}) {
  return (
    <FadeInContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerAmount,
              delayChildren: delay,
            },
          },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInContext.Provider>
  );
}
