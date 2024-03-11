"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface LineProps {
  className?: string;
}

export const Line: React.FC<LineProps> = ({ className }) => {

  const baseStyle = "absolute bg-gradient-to-r from-transparent to-transparent h-px w-3/4";
  const animationProps = {
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true },
    transition: { duration: 1 },
  };

  return (
    <div className="flex items-center justify-center mt-4 md:mt-0">
      <motion.div
        className={cn(`${baseStyle} via-neutral-500 blur-md h-[2px] `, className)}
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.3 }}
      />
      <motion.div
        className={cn(`${baseStyle} via-neutral-500`, className)}
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.3 }}
      />
      <motion.div
        className={cn("absolute bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-[5px] w-1/4 blur-md", className)}
        {...animationProps}
      />
      <motion.div
        className={cn("absolute  bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-1/4", className)}
        {...animationProps}
      />
    </div>
  );
};
