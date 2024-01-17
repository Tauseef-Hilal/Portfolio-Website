import ContactSection from "./ui/ContactSection";
import HeroSection from "./ui/Hero/HeroSection";
import StarCanvas from "./ui/Hero/StarBackground";
import ProjectSection from "./ui/ProjectSection";
import StorySection from "./ui/StorySection";

export default function HomePage() {
  return (
    <>
      <main className="px-8">
        <StarCanvas />
        <HeroSection />
        <StorySection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
