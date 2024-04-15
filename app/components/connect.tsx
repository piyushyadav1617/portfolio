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
    <div className="min-h-screen mx-5 md:mx-auto overflow-hidden ">
      <motion.h1
        className="text-3xl md:text-4xl py-2 antialiased font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-neutral-700 bg-opacity-50"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Connect with me
      </motion.h1>
      <div className="top-2 md:top-8 relative w-full">
        <Line />
      </div>
      <div className="mt-20 flex flex-col items-center justify-center relative h-[300px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <PinContainer
            title="India"
            href="#"
            className="w-[500px] p-0  bg-transparent"
          >
            <Image
              src="/map.svg"
              width={500}
              height={200}
              alt=""
              className=""
            />
          </PinContainer>
        </motion.div>
      </div>
      <motion.div
        className="w-full mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center gap-10 md:gap-20 h-20">
          {socials.map((s) => {
            return (
              <Link
                key={s.name}
                href={s.link}
                target="_blank"
                className="w-fit h-fit"
              >
                <s.icon className="w-8 h-8 text-neutral-400 hover:text-neutral-100" />
              </Link>
            );
          })}
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
