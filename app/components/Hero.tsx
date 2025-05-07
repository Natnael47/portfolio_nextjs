"use client";

import MagicButton from "@/components/ui/MagicButton";
import { Spotlights } from "@/components/ui/Spotlight";
import { Spotlight } from "@/components/ui/SpotlightNew";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "./Themes/ThemeToggle";

const Hero = () => {
  return (
    <div className="pb-28 pt-36">
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
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Fullscreen Fade Mask (from top visible → bottom transparent) */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto p-4 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full h-full text-center">
        <p className="uppercase tracking-widest text-xs max-w-80">
          Dynamic Web Magic with Next.js
        </p>

        <h1 className="mt-4 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TextGenerateEffect duration={2} filter={false} words={"Spotlight"} />
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={"which is not overused."}
          />
        </h1>

        <p className="mt-6 font-normal text-base max-w-lg">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>

        {/* Mode Toggle Button */}
        <div className="mt-8">
          <ModeToggle />
          <a href="#about" className="mx-5 my-2">
            <MagicButton
              title="Show my work"
              icon={<ArrowRight />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
