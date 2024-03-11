"use client";
import React from "react";
import { motion } from "framer-motion";

import { Line } from "./line";
import { ProjectCard } from "./projectCard";
export const Projects = ()=>{
    return (
        <div className="min-h-screen mx-5 md:mx-auto relative overflow-hidden mt-40 antialiased]">
          
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-600 bg-opacity-50"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once:true }}
          transition={{ duration: 1}}
        >
          Projects I have worked on
        </motion.h1>
        
         <Line className="top-[6rem]"/>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-28 md:mt-40 flex flex-wrap gap-10 flex-col md:flex-row justify-evenly items-center"
        >
          {
            projects.map(p=>{
              return <ProjectCard key={p.id} title={p.title} description={p.description} link={p.link} github={p.github} live={p.live}/>
            })
          }
        </motion.div>
      </div>
    )
}
const projects:{id: number, title:string, description:string, link:string, github:string, live:string}[] = [
  {id:0, title:"Tracker", description:"A project management app",link:"/projects/tracker", github:"https://github.com/piyushyadav1617/tracker", live:"https://tracker-topaz-two.vercel.app/" },
  {id:1,title:"TrustAuthx", description:"A Saas app for low code auth",link:"/projects/trustauthx", github:"https://github.com/One-Click-Auth/auth_frontend", live:"https://app.trustauthx.com/" }

]