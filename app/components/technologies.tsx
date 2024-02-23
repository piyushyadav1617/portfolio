import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FaAws, FaJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoNodejs, BiLogoCss3, BiLogoTailwindCss  } from "react-icons/bi";
export const Technologies = () => {
  return (
    <div className="h-[30rem] rounded-md md:flex flex-col py-0  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    name: "javascript",
    icon:<BiLogoJavascript/>
  },
  {

    name: "typescript",
    icon:<BiLogoTypescript/>
  },
  {
    name: "react.js",
    icon:<BiLogoReact/>
  },
  {
    name: "node.js",
    icon:<BiLogoNodejs/>
 
  },
  {
    name: "next.js",
    icon:<SiNextdotjs/>
 
  },
  {
    name: "html5",
    icon:<BiLogoHtml5/>
 
  },
  {
    name: "css3",
    icon:<BiLogoCss3/>
 
  },
  {
    name: "tailwind",
    icon:<BiLogoTailwindCss/>
 
  }

];
