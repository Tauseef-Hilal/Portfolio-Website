import Image from "next/image";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center reveal">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border border-border bg-card/40 backdrop-blur-xl shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border bg-muted">
                <Image
                  src="/images/profile.jpg"
                  alt="Tauseef Tantary"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 reveal" style={{ ["--delay" as any]: "0.2s" }}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                <UserCircle size={20} className="text-primary" />
                <h2 className="text-sm font-semibold tracking-widest uppercase">
                  The Operator
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                Systems Engineer
                <br className="hidden md:block" /> at Heart
              </h3>
              <div className="w-20 h-[4px] bg-gradient-to-r from-foreground to-transparent mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                What began as curiosity eventually became a passion for building
                reliable systems. Over time, through real projects and real
                constraints, I found myself drawn toward backend engineering,
                scalable architecture, and the deeper mechanics behind modern
                applications. Working mostly in the JavaScript and TypeScript
                ecosystem, I enjoy solving complex problems, exploring
                trade-offs, and building systems that stay maintainable and
                dependable as they evolve.
              </p>
              <div className="pt-4">
                <Link
                  href="/biography"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors group"
                >
                  Read the full story
                  <span
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
