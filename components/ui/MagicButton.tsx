import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  - changed border radius to rounded-lg
 *  - added margin of md:mt-10
 *  - removed focus:ring-* classes
 *  - adjusted gradient for visibility on light backgrounds
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none transform hover:-translate-y-1 transition duration-400"
      onClick={handleClick}
    >
      {/* Enhanced gradient for visibility on light background */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9F7AEA_0%,#667EEA_50%,#9F7AEA_100%)] " />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
          bg-[#DCE9FE] dark:bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2  ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
