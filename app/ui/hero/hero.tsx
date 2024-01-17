import ScrollToStoryButton from "./scroll_btn";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-2xl md:text-5xl px-32 text-center relative">
      <p>
        A symphony of mobile, web, and software echoes, crafting digital wonders
        on the horizon&apos;s canvas.
      </p>
      <ScrollToStoryButton />
    </div>
  );
}
