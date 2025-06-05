"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useEffect, useState } from "react";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Myservices from "./components/MyServices";
import Projects from "./components/Projects";
import TimeLine from "./components/TimeLine";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can tweak the time or tie this to actual data fetch

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />

        <Myservices />
        <Projects />
        <TimeLine />
        <Experiance />
        <Footer />
      </div>
    </main>
  );
}
