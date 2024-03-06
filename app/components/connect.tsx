"use client";
import React from "react";
import { motion } from "framer-motion";
import { Line } from "./line";
import Image from "next/image";
import { PinContainer } from "@/components/ui/pin";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Connect = () => {
  return (
    <div className="  overflow-hidden space-y-10 mt-40">
      <div className="relative">
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-center bg-clip-text text-transparent p-4 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-600 bg-opacity-"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Connect with me 
        </motion.h1>
        <Line className="top-24 md:top-24" />
      </div>
      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10"
        >
          <PinContainer
            title="India"
            href="#"
            className="w-[500px] bg-transparent overflow-hidden mt-6"
          >
            <Image
              src="/map.svg"
              width={500}
              height={200}
              alt=""
              className="my-20 "
            />
          </PinContainer>
        </motion.div>
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center gap-10 md:gap-20 h-40">
          {socials.map((s) => {
            return (
              <motion.button
                key={s.name}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={s.link} target="_blank">
                  <s.icon className="text-4xl text-neutral-300" />
                </Link>
              </motion.button>
            );
          })}
        </div>
        <div className="w-full text-center">
          <span className="text-neutral-200">yadavpiyush222@gmail.com</span>
        </div>
      </motion.div>
    </div>
  );
};

const socials = [
  {
    name: "github",
    icon: FaGithub,
    link: "https://github.com/piyushyadav1617",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    link: "https://twitter.com/Piyush61818686",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/piyush-yadav-b5651b186/",
  },

];
