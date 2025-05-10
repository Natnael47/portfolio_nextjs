"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-[12px] border bg-white/10 border-black/20 dark:border-white/20 backdrop-blur-[16px] backdrop-saturate-[180%] dark:bg-[rgba(17,25,40,0.75)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isMobileHidden = ["Home", "Time Line"].includes(navItem.name);

          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 text-black items-center flex space-x-1 font-semibold transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                isMobileHidden && "hidden sm:flex"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm cursor-pointer">{navItem.name}</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-indigo-500 transition-all group-hover:w-full rounded-full" />
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
