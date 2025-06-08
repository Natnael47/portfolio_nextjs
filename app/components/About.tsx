"use client";

import { BackgroundGradient } from "@/components/background-gradient";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { toolsData } from "@/data";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem("aboutAnimationDone");
    if (!hasAnimated) {
      setShouldAnimate(true);
      localStorage.setItem("aboutAnimationDone", "true");
    }
  }, []);

  const aboutMe = [
    {
      title: "Languages",
      description:
        "Proficient in HTML, CSS, JavaScript, React.js, and Next.js for building responsive and dynamic web applications.",
      icon: <CodeXml size={40} />,
    },
    {
      title: "Education",
      description:
        "Completed B.Tech in Computer Science, focusing on software engineering, web development, and modern programming practices.",
      icon: <GraduationCap size={40} />,
    },
    {
      title: "Projects",
      description:
        "Developed 5+ full-stack projects including dashboards, e-commerce platforms, and custom web apps for real-world use cases.",
      icon: <BriefcaseBusiness size={40} />,
    },
  ];

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0 } : false}
      animate={shouldAnimate ? { opacity: 1 } : false}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl px-[5%] py-6 mx-auto"
      id="about"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-start justify-between gap-10 my-10"
      >
        {/* Image from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex justify-center"
        >
          <BackgroundGradient className="rounded-[22px] p-2 bg-white dark:bg-zinc-900">
            <Image
              src={`/about-img.webp`}
              alt="About"
              width={400}
              height={500}
              className="rounded-2xl object-contain h-full"
            />
          </BackgroundGradient>
        </motion.div>

        {/* Text + HoverEffect from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3"
        >
          <p className="mb-5 text-base leading-relaxed">
            Hi, I&apos;m <strong>Natnael Mahteme</strong>, a full-stack
            developer with over one year of experience building efficient and
            user-friendly web applications. I specialize in both frontend and
            backend development, working with tools like Next.js, Vite, and
            Express.js to create fast, scalable solutions. My focus is on
            delivering clean, functional, and well-structured code that brings
            ideas to life.
          </p>

          {/* HoverEffect comes from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HoverEffect items={aboutMe} />
          </motion.div>

          {/* Tools section from bottom one by one */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full mt-6"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80 sm:my-2"
            >
              Tools I use
            </motion.h4>

            <ul className="flex flex-wrap gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <Popover key={index} placement="bottom">
                  <PopoverTrigger asChild>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.7 + index * 0.1, // stagger each item
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-14 aspect-square dark:bg-amber-50 border rounded-lg border-gray-400 cursor-pointer hover:-translate-y-1 transition duration-500"
                    >
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        className="w-5 sm:w-7"
                        width={28}
                        height={28}
                      />
                    </motion.li>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-4 py-2 bg-black-100 text-white dark:bg-white dark:text-black rounded-xl">
                      <div className="text-sm font-bold">{tool.title}</div>
                      <div className="text-xs max-w-[150px]">
                        {tool.description}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
