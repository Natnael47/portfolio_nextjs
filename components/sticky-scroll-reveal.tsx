"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundGradient } from "./background-gradient";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: { title: string; description: string; content?: React.ReactNode }[];

  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
      "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
      "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ],
    [] // Empty dependency array to ensure it's created only once
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <BackgroundGradient className="rounded-md h-[32rem]">
      <motion.div
        className="relative flex h-[32rem] justify-center space-x-10 overflow-y-auto bg-white dark:bg-black-100 rounded-3xl p-7"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-5xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-25">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1.2 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-sm "
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-10 hidden h-80 w-100 overflow-hidden rounded-md lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </BackgroundGradient>
  );
};
