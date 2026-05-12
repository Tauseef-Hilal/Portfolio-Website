import ContactSection from "./ui/ContactSection";
import HeroSection from "./ui/Hero/HeroSection";
import ProfessionalExperienceSection from "./ui/ProfessionalExperienceSection";
import ProjectSection from "./ui/ProjectSection";
import ServicesSection from "./ui/ServicesSection";
import StorySection from "./ui/StorySection";

export default function HomePage() {
  return (
    <>
      <main className="w-full bg-background">
        <HeroSection />

        {/* Section divider */}
        <div className="h-px w-full bg-border" />

        <StorySection />

        {/* Section divider */}
        <div className="h-px w-full bg-border" />

        <ServicesSection />

        {/* Section divider */}
        <div className="h-px w-full bg-border" />

        <ProfessionalExperienceSection />

        {/* Section divider */}
        <div className="h-px w-full bg-border" />

        <ProjectSection />

        {/* Section divider */}
        <div className="h-px w-full bg-border" />

        <ContactSection />
      </main>
    </>
  );
}
