"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SiNextdotjs } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoDocker,
} from "react-icons/bi";
import { Line } from "./line";
export const Technologies = () => {
  return (
    <div className="min-h-[60vh] mx-5 my-20 md:mx-auto overflow-hidden">
      <motion.h1
        className="text-3xl md:text-4xl py-2  antialiased  font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-neutral-700 bg-opacity-50"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Technologies I work with
      </motion.h1>

      <div className="top-2 md:top-8 relative w-full">
        <Line/>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-40"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    name: "javascript",
    icon: BiLogoJavascript,
  },
  {
    name: "typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "react.js",
    icon: BiLogoReact,
  },
  {
    name: "node.js",
    icon: BiLogoNodejs,
  },
  {
    name: "next.js",
    icon: SiNextdotjs,
  },
  {
    name: "html5",
    icon: BiLogoHtml5,
  },
  {
    name: "css3",
    icon: BiLogoCss3,
  },
  {
    name: "tailwind",
    icon: BiLogoTailwindCss,
  },
  // {
  //   name: "AWS",
  //   icon: BiLogoAws,
  // },
  {
    name: "Docker",
    icon: BiLogoDocker,
  },
];
