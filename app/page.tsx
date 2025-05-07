import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import About from "./components/About";
import Grid from "./components/Grid";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
      </div>
    </main>
  );
}
