"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <Spotlight
        className="-top-24 left-0 lg:left-60 md:-top-20 2xl:-top-40 "
        fill="white"
      />
      <div className="h-[40rem] w-full rounded-md flex  md:items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <motion.div
          className="space-y-6 mt-[8rem] md:mt-0"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-5xl sm:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-600 
     bg-opacity-50"
          >
            Hello, I&apos;m
            <br /> Piyush Yadav
          </h1>
          <Separator className="h-2 w-40 rounded-full " />
          <h2
            className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 
     bg-opacity-50"
          >
            Full stack developer
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
