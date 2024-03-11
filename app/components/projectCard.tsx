import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/card";
import { IoArrowForwardCircle } from "react-icons/io5";
import Link from "next/link";
import {  FaGlobe , FaGithub } from "react-icons/fa";
type props = {
  title: string;
  description: string;
  link: string;
  github:string;
  live:string
};

export function ProjectCard({ title, description, link,github,live }: props) {
  return <GlowingStarsBackgroundCard className="max-w-80 max-h-[350px] flex-shrink-0">
  <GlowingStarsTitle>{title}</GlowingStarsTitle>
  <div className="flex justify-between items-end">
    <GlowingStarsDescription className="flex flex-col justify-between">
      <p>{description}</p>
      <div className="flex gap-6 pt-6">
        <Link href={github}>
          <FaGithub className="w-6 h-6 text-neutral-400 hover:text-neutral-50"/>
        </Link>
        <Link href={live}>
          <FaGlobe className="w-6 h-6 text-neutral-400 hover:text-neutral-50"/>
        </Link>
        </div> 
    </GlowingStarsDescription>
    <div className="pt-10">
      <Link href={link}>
       <IoArrowForwardCircle className="h-10 w-10 rounded-full text-[hsla(0,0%,100%,.1)] hover:text-[hsla(0,0%,100%,.4)] transition-colors " />
      </Link>
    </div>
  </div>
</GlowingStarsBackgroundCard>;
}
