import Hero from "./ui/hero/hero";
import StarCanvas from "./ui/hero/stars";
import Navbar from "./ui/navbar/navbar";
import Story from "./ui/story";

export default function Home() {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="h-full w-full flex flex-col">
        <StarCanvas />
        <Hero />
        <Story />
      </main>
    </>
  );
}
