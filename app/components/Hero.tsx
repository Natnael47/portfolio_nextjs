"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import MagicButton from "@/components/ui/MagicButton";
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
    <div className="pb-28 pt-36 h-screen">
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
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-5xl md:max-w-2xl lg:max-w-[60vw] w-11/12 h-full text-center">
        <TypewriterEffectSmooth
          words={words2}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium"
        />
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className={cn(
            "relative mb-6 max-w-7xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
          )}
          layout
        >
          <div className="inline-block">
            I'm <ContainerTextFlip words={words} />
            {/* <Blips /> */}
          </div>
        </motion.h1>

        <p className="mt-6 font-normal text-base max-w-lg">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <ModeToggle />
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="#contact"
          >
            <MagicButton
              title="Contact Me"
              icon={<ArrowRight className="w-5" />}
              position="right"
            />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            href="/resume.pdf"
            download
          >
            <MagicButton
              title="My Resume"
              icon={<Download className="w-5" />}
              position="right"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
