"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [{ label: "Home", link: "/" },{ label: "Blog", link: "#" }];
export const Navbar = () => {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <nav className="flex gap-6 h-14 mx-5 sm:mx-10 md:mx-auto  md:w-[700px] lg:w-[990px] 2xl:w-[1400px] items-center justify-between">

        <ul className="flex gap-2 sm:gap-6 items-center">
          <div className="flex gap-6">
            {links.map((item) => {
              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`${
                      item.link === path
                        ? "text-primary"
                        : "text-muted-foreground"
                    } hover:text-primary transition-colors`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </header>
  );
};
