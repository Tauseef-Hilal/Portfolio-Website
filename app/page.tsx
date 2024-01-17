import ContactMe from "./ui/contact";
import Footer from "./ui/footer";
import Hero from "./ui/hero/hero";
import StarCanvas from "./ui/hero/stars";
import ProjectSection from "./ui/projects";
import Story from "./ui/story";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <StarCanvas />
        <Hero />
        <Story />
        <ProjectSection />
        <ContactMe />
      </main>
    </>
  );
}
