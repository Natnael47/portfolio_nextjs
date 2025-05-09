import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Services />
        <TimeLine />
        <Footer />
      </div>
    </main>
  );
}
