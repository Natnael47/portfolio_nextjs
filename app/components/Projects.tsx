"use client";
import { Button } from "@/components/ui/button";
import { PinContainer } from "@/components/ui/Pin";
import { companies, projects } from "@/data";
import { ArrowLeft, ArrowRight, MoveRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

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
        className="text-center max-w-2xl mx-auto mt-5 mb-5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores
        sapiente cumque dolorum earum sunt magni porro tempore perspiciatis
        animi, quas
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {visibleProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.mainTitle} href={item.hrefLink}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src={item.img}
                    fill
                    alt="cover"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        width={800}
                        height={600}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <MoveRightIcon className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-center mb-5">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 dark:text-white text-black rounded-full hover:text-blue-500 dark:hover:text-blue-500 transition"
            variant={"link"}
          >
            {showAll ? <ArrowLeft /> : ""}
            {showAll ? "Show Less" : "Show More"}
            {showAll ? "" : <ArrowRight />}
          </Button>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-center mt-3 gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={company.img}
                alt={company.name}
                width={10}
                height={600}
                className="md:w-10 w-5"
              />
              <Image
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                height={600}
                className="md:w-24 w-20"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
