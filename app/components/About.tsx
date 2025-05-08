"use client";

import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { aboutMe } from "@/data";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={aboutMe} />
    </div>
  );
};

export default About;
