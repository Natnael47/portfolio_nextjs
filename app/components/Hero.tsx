"use client";

import { useIsMobile } from "@/components/hooks/useIsMobile";
import { ColourfulText } from "@/components/ui/colourful-text";
import Magnet from "@/components/ui/Magnet";
import RotatingText from "@/components/ui/RotatingText";
import SplitText from "@/components/ui/SplitText";
import { Spotlights } from "@/components/ui/Spotlight";
import { Spotlight } from "@/components/ui/SpotlightNew";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words2 } from "@/data/index";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // corrected import
import { ArrowRight, Download } from "lucide-react";
import { ModeToggle } from "./Themes/ThemeToggle";

const Hero = () => {
  const words = [
    "FullStack Developer",
    "Creative UI Designer",
    "Backend Developer",
    "Frontend Developer",
  ];

  const isMobile = useIsMobile();

  return (
    <div
      className="h-screen flex items-center justify-center px-4 relative"
      id="home"
    >
      {/* Background Grid + Spotlight */}
      <div className="absolute inset-0 -z-10">
        <Spotlights
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlights
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlights className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 80%, transparent 100%)"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0",
            "[background-size:90px_90px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto w-full max-w-7xl py-5 px-1 sm:px-3 mt-20 text-center">
        {/* Conditional rendering based on screen size */}
        {!isMobile ? (
          <TypewriterEffectSmooth
            words={words2}
            className="text-3xl mb-2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          />
        ) : (
          <div className="flex flex-col items-start text-left ml-6 w-full max-w-[640px]">
            <h1 className="text-3xl font-bold tracking-tight">
              <ColourfulText text="Hello!" />
              <SplitText
                text=" This is"
                className="text-2xl font-bold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </h1>
            <h2 className="text-3xl font-bold tracking-tight mt-1">
              <SplitText
                text="Natnael Mahteme"
                className="text-3xl font-bold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </h2>
            <h2 className="text-3xl font-bold tracking-tight">
              <SplitText
                text="I'm"
                className="text-3xl font-bold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </h2>
          </div>
        )}

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          layout
          className="mb-2 mr-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-left sm:text-center"
        >
          <span className="block sm:inline-flex items-start sm:items-center gap-2">
            <span className="hidden sm:inline">I&apos;m</span>
            <span className="block sm:inline-flex mt-2 sm:mt-0 justify-start sm:justify-center">
              <RotatingText
                texts={words}
                mainClassName="flex items-center justify-start sm:justify-center px-3 dark:bg-gradient-to-r dark:from-purple-600 dark:via-blue-600 dark:to-purple-700 bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-700 text-white overflow-hidden py-1 rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0 sm:pb-1 md:pb-1.5 leading-tight"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
            </span>
          </span>
        </motion.h1>

        <p className="mt-4 mb-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl text-center">
          A creative mind passionate about coding and design - blending logic
          and aesthetics to solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2 sm:px-0">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
          >
            <button className="relative group inline-flex items-center justify-center h-12 w-full sm:w-60 overflow-hidden rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
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
            <button className="relative group inline-flex items-center justify-center h-12 w-full sm:w-60 overflow-hidden rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
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
          <Magnet padding={70} disabled={false} magnetStrength={10}>
            <ModeToggle />
          </Magnet>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
