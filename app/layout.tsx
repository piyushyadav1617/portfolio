import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/utils/cn";
import "@/styles/globals.css";
import { Navbar } from "./components/navbar";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Piyush Yadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        <Navbar />
        <div className="mx-5 sm:mx-10 md:mx-auto md:w-[700px] lg:w-[990px] 2xl:w-[1400px] overflow-x-hidden">
        {children}
        </div>
      </body>  
    </html>
  );
}
