"use client";
import { Button } from "@/components/ui/button";
import { PinContainer } from "@/components/ui/Pin";
import { companies, projects } from "@/data";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="py-10" id="projects">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-5 text-muted-foreground"
      >
        Explore real-world projects I’ve built — from frontend UIs to scalable
        backends. Each one reflects attention to performance, UX, and quality.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {visibleProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.mainTitle} href={item.hrefLink}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                <Image
                  src={item.img}
                  fill
                  alt="cover"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              <h1 className="font-semibold text-lg lg:text-2xl line-clamp-1">
                {item.title}
              </h1>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm lg:text-base line-clamp-3 my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-zinc-300 dark:border-zinc-700 rounded-full bg-white dark:bg-zinc-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon-${index}`}
                        width={24}
                        height={24}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={item.hrefLink}
                  className="flex items-center gap-2 text-purple-500 dark:text-purple-300 text-lg font-medium"
                >
                  Check Live Site
                  <MoveRightIcon size={18} />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="flex justify-center mt-6 mb-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full text-primary hover:text-blue-500 transition"
            variant={"link"}
          >
            {showAll && <ArrowLeft className="mr-2" />}
            {showAll ? "Show Less" : "Show More"}
            {!showAll && <ArrowRight className="ml-2" />}
          </Button>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center mt-6 gap-4 md:gap-16">
        {companies.map((company) => (
          <div className="flex md:max-w-60 max-w-32 gap-2" key={company.id}>
            <Image
              src={company.img}
              alt={company.name}
              width={30}
              height={30}
              className="md:w-10 w-6 object-contain"
            />
            <Image
              src={company.nameImg}
              alt={company.name}
              width={company.id === 4 || company.id === 5 ? 100 : 150}
              height={30}
              className="md:w-24 w-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
