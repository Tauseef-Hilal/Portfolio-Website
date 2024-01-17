import ScrollToStoryButton from "./ScrollToStoryButton";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-2xl md:text-5xl px-24 text-center relative">
      <p>
        A symphony of mobile, web, and software echoes, crafting digital wonders
        on the horizon&apos;s canvas.
      </p>
      <ScrollToStoryButton />
    </section>
  );
}
