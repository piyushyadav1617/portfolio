"use client";
import React from "react";
import { motion } from "framer-motion";
import { Line } from "./line";
import Image from "next/image";



export const Connect = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden space-y-10 mt-40">
           <motion.h1
        className="text-3xl  md:text-4xl font-semibold text-center bg-clip-text text-transparent p-4 bg-gradient-to-br from-neutral-50 to-neutral-600 
     bg-opacity-50"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
      >
        Connect with me
      </motion.h1>
      <Line className="top-24 md:top-24"/>
      <div className="flex items-center justify-center">
      <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 1}}
      >
      <Image src='/map.svg' width={500} height={200} alt="" className="my-20"/>

      </motion.div>
      </div>

  
    </div>
  );
};

