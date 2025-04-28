import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/dashboard/ThemeToggle";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl">Nooooooo</h1>
        <Button className="mx-5">new shadcn</Button>
        <ModeToggle />
      </div>
    </main>
  );
}
