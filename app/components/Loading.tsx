"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const circleCount = 5;
const dotColor = "var(--primary)"; // Will automatically adapt to theme

const Loading = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:90px_90px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated dots */}
      <div className="relative z-20 flex gap-4">
        {Array.from({ length: circleCount }).map((_, i) => (
          <motion.span
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
            style={{ backgroundColor: dotColor }}
            animate={{
              y: ["0%", "-60%", "0%"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
