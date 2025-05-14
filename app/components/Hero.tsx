"use client";

import RotatingText from "@/components/ui/RotatingText";
import { Spotlights } from "@/components/ui/Spotlight";
import { Spotlight } from "@/components/ui/SpotlightNew";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words2 } from "@/data/index";
import { cn } from "@/lib/utils";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { ModeToggle } from "./Themes/ThemeToggle";

const Hero = () => {
  const words = [
    "FullStack Developer",
    "UI/UX Designer",
    "Backend Developer",
    "Frontend Developer",
  ];
  return (
    <div className="pb-28 pt-36 h-screen" id="home">
      {/* Background Grid + Spotlight */}
      <div>
        <Spotlights
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlights
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlights className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-0 h-screen w-full">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 80%, transparent 100%)"
        />

        {/* Grid background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:90px_90px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Fullscreen Fade Mask (from top visible → bottom transparent) */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-6xl text-center pt-20 pb-20">
        <TypewriterEffectSmooth
          words={words2}
          className="text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-4"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={cn(
            "mb-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-700 dark:text-zinc-100"
          )}
          layout
        >
          <span className="inline-flex items-center gap-2">
            I&apos;m
            <RotatingText
              texts={words}
              mainClassName="px-3 dark:bg-gradient-to-r dark:from-purple-600 dark:via-blue-600 dark:to-purple-700 bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-700 text-white overflow-hidden py-2 leading-none justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
          </span>
        </motion.h1>

        <p className="mt-4 mb-6 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl text-center text-muted-foreground">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
          >
            <button className="relative group inline-flex items-center justify-center h-12 w-full md:w-60 overflow-hidden rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9F7AEA_0%,#667EEA_50%,#9F7AEA_100%)]" />
              <span className="relative flex items-center justify-center gap-2 h-full w-full px-6 text-md font-semibold rounded-lg bg-white text-black dark:bg-slate-950 dark:text-white transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                Contact Me
                <ArrowRight size={18} />
              </span>
            </button>
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="/resume.pdf"
            download
          >
            <button className="relative group inline-flex items-center justify-center h-12 w-full md:w-60 overflow-hidden rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9F7AEA_0%,#667EEA_50%,#9F7AEA_100%)]" />
              <span className="relative flex items-center justify-center gap-2 h-full w-full px-6 text-md font-semibold rounded-lg bg-white text-black dark:bg-slate-950 dark:text-white transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                My Resume
                <Download size={18} />
              </span>
            </button>
          </motion.a>
        </div>
        {/* Theme Toggle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6"
        >
          <ModeToggle />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
