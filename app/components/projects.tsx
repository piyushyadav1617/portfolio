"use client";
import React from "react";
import { motion } from "framer-motion";

import { Line } from "./line";
import { ThreeDCardDemo } from "./projectCard";
export const Projects = () => {
  return (
    <div className="min-h-screen mb-40 mx-5 md:mx-auto overflow-hidden">
      <motion.h1
        className="text-3xl py-2 md:text-4xl antialiased  font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-neutral-700 bg-opacity-50"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects I have worked on
      </motion.h1>
      <div className="top-2 md:top-8 relative w-full">
        <Line/>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex flex-wrap md:flex-row gap-6 justify-center md:justify-evenly items-center mt-20 md:mt-40"
      >
        {projects.map((p) => {
          return (
            <ThreeDCardDemo
              key={p.id}
              title={p.title}
              description={p.description}
              github={p.github}
              live={p.live}
              img={p.img}
            />
          );
        })}
      </motion.div>
    </div>
  );
};
const projects: {
  id: number;
  title: string;
  description: string;
  img: string;
  github: string;
  live: string;
}[] = [
  {
    id: 0,
    title: "Tracker",
    description: "A project management app",
    img: "/tracker.png",
    github: "https://github.com/piyushyadav1617/tracker",
    live: "https://tracker-topaz-two.vercel.app/",
  },
  {
    id: 1,
    title: "TrustAuthx",
    description: "A Saas app for low code auth",
    img: "/trustauthx.png",
    github: "https://github.com/One-Click-Auth/auth_frontend",
    live: "https://trustauthx.com/",
  },
];
