"use client";
import { Spotlight } from "@/components/ui/SpotlightNew";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ModeToggle } from "./Themes/ThemeToggle";

const Hero = () => {
  return (
    <div className="pb-2 pt-36 h-screen w-full">
      <Spotlight />
      <div className=" p-4 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto relative z-10  w-full pt-20 md:pt-0">
        <p className="uppercase tracking-widest text-xs text-center max-w-80">
          Dynamic Web Magic with Next.js
        </p>

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TextGenerateEffect duration={2} filter={false} words={"Spotlight"} />
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={"which is not overused."}
          />
        </h1>
        <p className="mt-4 font-normal text-base max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
      </div>
      <ModeToggle />
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
    </div>
  );
};

export default Hero;
