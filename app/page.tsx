import ContactSection from "./ui/ContactSection";
import HeroSection from "./ui/Hero/HeroSection";
import ProfessionalExperienceSection from "./ui/ProfessionalExperienceSection";
import ProjectSection from "./ui/ProjectSection";
import StorySection from "./ui/StorySection";

export default function HomePage() {
  return (
    <>
      <main className="w-full bg-black">
        <HeroSection />

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        <StorySection />

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        <ProfessionalExperienceSection />

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        <ProjectSection />

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        <ContactSection />
      </main>
    </>
  );
}
