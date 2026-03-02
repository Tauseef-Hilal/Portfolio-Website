import fs from "fs";
import path from "path";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { notFound } from "next/navigation";
import ProjectHeader from "../../ui/ProjectHeader";

type Props = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: Props) {
  try {
    const project = await import(
      /* webpackInclude: \.mdx$/ */
      `@/content/projects/${params.slug}.mdx`
    );
    const Content = project.default;
    const meta: any = project.meta ?? {};

    return (
      <main className="w-full bg-black relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-900/5 rounded-full filter blur-3xl animate-glow"></div>
          <div
            className="absolute bottom-40 right-1/4 w-96 h-96 bg-indigo-900/5 rounded-full filter blur-3xl animate-glow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Meta Content */}
        <div className="relative z-10 pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ProjectHeader meta={meta} />

            {/* Content */}
            <article className="prose prose-invert max-w-none prose-sm md:prose-base lg:prose-base prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-a:text-indigo-400 prose-code:text-indigo-300 prose-pre:bg-gray-900 prose-pre:p-4 prose-pre:rounded-md">
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
