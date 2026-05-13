

export default function BiographyPage() {
  const sections = [
    {
      title: "The Beginning",
      content:
        "I still remember the moment a computer stopped feeling like a sealed box. I was in 5th grade when my elder cousin came home from school with a piece of paper filled with code. He typed it in, hit run, and a digital clock appeared on the screen. I didn't know what programming was back then, but I knew I had just watched written instructions turn into something real. That idea—the idea that logic could be written and executed, that thoughts could become tangible—stayed with me.",
    },
    {
      title: "Growing in Isolation",
      content:
        "Growing up in Kashmir, there wasn't a culture around programming or building software. There were no coders around me, no mentors, no clear path that said, 'this is something you can do.' Computers were seen as tools, not creative instruments, and spending too much time on them was often discouraged. More than once, people tried—directly or indirectly—to pull me away from this interest, nudging me toward 'safer' or more conventional directions. Still, I kept coming back.",
    },
    {
      title: "Curiosity to Persistence",
      content:
        "Slowly, curiosity turned into persistence. I started experimenting on my own, building small programs, making mistakes, and figuring things out the hard way. Calculators, quiz apps, little ideas that worked just enough to keep me going. I didn't have a grand plan or early validation—I was learning in isolation, driven mostly by the quiet satisfaction of making something work. Every small success became fuel for the next experiment.",
    },
    {
      title: "Structure and Understanding",
      content:
        "College gave me structure and vocabulary for what I had been doing instinctively. Studying computer science helped me understand the theory behind the experiments, and I expanded into web, mobile, and backend development. Over time, my interests shifted from just building features to understanding systems—how applications are designed, how data flows through networks, and why certain architectural choices matter in the long run.",
    },
    {
      title: "Challenges and Growth",
      content:
        "Life outside tech wasn't linear. Health issues, prolonged stress, emotional setbacks, and periods of burnout forced me to slow down and recalibrate more than once. Those experiences reshaped how I think—not just about code, but about sustainability, learning, and growth. I became more deliberate, more systems-oriented, and more focused on building things that last rather than rushing toward outcomes. Constraints, I learned, often lead to better design.",
    },
    {
      title: "The Present",
      content:
        "Today, I work as a full-stack developer with a strong backend focus, primarily in the JavaScript/TypeScript ecosystem. I prefer learning by building real systems, reading documentation, and understanding trade-offs instead of following rigid roadmaps. Clean architecture, clarity of thought, and long-term maintainability matter more to me than trends or hype. I'm drawn to problems that require systems thinking.",
    },
    {
      title: "What Remains",
      content:
        "What began as watching a digital clock run on a screen has turned into a long-term relationship with problem-solving itself. In a place where the path wasn't obvious and the environment wasn't designed for this kind of work, I kept going anyway. I'm still learning, still refining how I think, and still drawn to the same idea that caught my attention years ago—that with the right logic and enough patience, you can shape complexity into something meaningful.",
    },
  ];

  return (
    <main className="w-full bg-background relative overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
                A Journey <span className="block text-primary">Beyond Code</span>
              </h1>
              <div className="w-20 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From a curious kid watching a digital clock appear on screen to a
              backend-focused engineer building scalable systems. This is the
              story of how constraints became catalysts.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <article
                key={index}
                className="group border-l-2 border-border hover:border-primary transition-colors duration-300 pl-8 py-4"
              >
                <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                  {`${String(index + 1).padStart(2, "0")} / ${sections.length}`}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="space-y-6">
              <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Today
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                I&apos;m always interested in discussing backend architecture, system
                design, and the philosophy behind how we build software. If
                you&apos;re working on something interesting or just want to chat
                about technology, problem-solving, or growth,{" "}
                <span className="text-foreground font-semibold">let&apos;s talk</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
