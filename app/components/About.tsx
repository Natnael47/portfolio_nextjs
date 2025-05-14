"use client";

import { BackgroundGradient } from "@/components/background-gradient";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { toolsData } from "@/data";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl px-[5%] py-8"
      id="about"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-7xl flex-col lg:flex-row items-center gap-20 my-10"
      >
        {/* Image Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-2 bg-white dark:bg-zinc-900">
            <Image
              src={`/about-img.webp`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-2xl"
            />
          </BackgroundGradient>
        </motion.div>

        {/* Text + Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-5 max-w-3xl">
            Hi, I&apos;m <strong>Natnael Mahteme</strong>, a Computer Science
            graduate with a passion for technology. I specialize in web design,
            mobile app development, and graphic design, creating user-focused
            digital experiences.
          </p>

          <motion.div whileInView={{ scale: 1.05 }}>
            <HoverEffect items={aboutMe} />
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-3 text-gray-700 dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <Popover key={index} placement="bottom">
                <PopoverTrigger asChild>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square dark:bg-amber-50 border rounded-lg border-gray-400 cursor-pointer hover:-translate-y-1 duration-500"
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
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
