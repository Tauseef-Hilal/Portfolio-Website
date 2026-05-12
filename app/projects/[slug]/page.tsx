import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ProjectHeader from "../../ui/ProjectHeader";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  try {
    const slug = (await params).slug;
    const project = await import(`@/content/projects/${slug}.mdx`);
    const Content = project.default;
    const meta: any = project.meta ?? {};

    return (
      <main className="w-full bg-background relative min-h-screen">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Meta Content */}
        <div className="relative z-10 pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ProjectHeader meta={meta} />

            {/* Content */}
            <article className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:p-4 prose-pre:rounded-md mt-12 prose-headings:font-heading">
              <Content />
            </article>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}
