"use client";
import Link from "next/link";
import { FaGlobe, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  github: string;
  live: string;
  img: string;
};

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({
  title,
  description,
  github,
  live,
  img,
}: Props) {
  return (
    <CardContainer>
      <CardBody className="relative group/card border-neutral-800 border-b-2 border-t border-x bg-transparent w-auto md:w-[20rem] 2xl:w-[30rem] max-w-[30rem] h-auto rounded-xl p-6 hover:animate-shimmer items-center justify-center  bg-[linear-gradient(110deg,#09090b,45%,#18181b,55%,#09090b)] bg-[length:200%_100%]   transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50">
        <CardItem
          translateZ="50"
          className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-neutral-50  to-neutral-600 bg-opacity-50"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="0 max-w-sm mt-4 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="rounded-xl text-xs font-normal "
          >
            <Link href={live}>
              <FaGlobe className="h-7 w-7 text-neutral-300" />
            </Link>
          </CardItem>
          <CardItem translateZ={20} className="rounded-xl">
            <Link href={github}>
              <FaGithub className="h-7 w-7 text-neutral-300" />
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
