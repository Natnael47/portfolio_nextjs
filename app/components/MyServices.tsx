"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ScrollVelocityImages from "@/components/Velocity";
import { technologies } from "@/data";
import { motion } from "framer-motion";

const Myservices = () => {
  const testimonials = [
    {
      quote:
        "I build fast, responsive, and modern websites using the latest technologies. From simple portfolios to dynamic web applications, I ensure performance, scalability, and clean code.",
      name: "Web Development",
      designation: "Front-End & Back-End Solutions",
      src: "/computer.png",
    },
    {
      quote:
        "I design and develop user-friendly mobile apps for both Android and iOS. My focus is on smooth performance, intuitive interfaces, and consistency across all devices.",
      name: "Mobile App Design & Development",
      designation: "Cross-Platform Mobile Solutions",
      src: "/apps.png",
    },
    {
      quote:
        "I create seamless user experiences through thoughtful design. From wireframes to final visuals, I focus on clarity, usability, and visual appeal that enhances engagement.",
      name: "UI/UX Design",
      designation: "User-Centered Interface Design",
      src: "/webdes.png",
    },
    {
      quote:
        "I craft visually compelling graphics including logos, social media content, marketing materials, and more—ensuring your brand stands out with a cohesive and professional look.",
      name: "Graphics Design",
      designation: "Creative Visual Identity",
      src: "/uiux.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-10"
      id="services"
    >
      <motion.div>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg"
        >
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-7xl mt-5"
        >
          I offer end-to-end digital solutions, from responsive websites and
          mobile apps to sleek UI/UX and visual design. <br />
          My goal is to elevate your brand with modern, functional, and
          user-focused experiences.
        </motion.p>
      </motion.div>
      <div className="mb-20">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <div className="relative w-full mt-15 mb-6">
        <div className="w-screen left-1/2 -translate-x-1/2 relative overflow-hidden">
          <ScrollVelocityImages
            images={technologies}
            velocity={100}
            className="items-center"
            numCopies={5}
            imageClassName="w-28 h-28 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Myservices;
