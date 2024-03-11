"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1  antialiased bg-gradient-to-r from-slate-50 via-orange-500 to-slate-300 origin-left z-[50]"
        style={{ scaleX }}
      />
     
      <div className="max-w-3xl mx-5 md:mx-auto antialiased pt-4 relative mb-[200px]">
      
        {children}
      </div>
    </>
  );
}
