"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <div className="h-[40rem] lg:h-screen">
      <Spotlight
        className="-top-36 -left-40 lg:left-60 md:-top-20 2xl:-top-40 "
        fill="white"
      />
      <div className="h-[40rem] w-full rounded-md flex  md:items-center justify-center  antialiased bg-dot-neutral-200/10 md:bg-dot-neutral-200/20 relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent_60%,background)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_25%,background)]"></div>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          >
           
          </motion.div>
        <div className="space-y-4 mt-[8rem] md:mt-0">
          <motion.h1
            className="text-5xl pb-2 sm:text-7xl font-bold  antialiased  bg-clip-text text-transparent bg-gradient-to-br from-neutral-50  to-neutral-900 
     bg-opacity-50"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Hello, I&apos;m
          </motion.h1>
          <motion.h1
            className="text-5xl pb-4 sm:text-7xl font-bold  antialiased  text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50  to-neutral-900 
     bg-opacity-50"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            Piyush Yadav
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              type: "spring",
              stiffness: 50,
            }}
          >
            <Separator className="h-2 w-40 rounded-full bg-neutral-600" />
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-neutral-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            Full stack developer
          </motion.h2>
        </div>
      </div>
    </div>
  );
}

