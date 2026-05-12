import Image from "next/image";
import Link from "next/link";
import { Project } from "../lib/definitions";
import { getProjects } from "../lib/projects";
import { FiBookOpen, FiExternalLink, FiGithub } from "react-icons/fi";
import { FolderGit2 } from "lucide-react";
import { getSkillStyle } from "./utils";

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4 text-muted-foreground">
            <FolderGit2 size={20} className="text-primary" />
            <h2 className="text-sm font-semibold tracking-widest uppercase">
              Case Studies
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Engineering Portfolios
          </h3>
          <div className="w-20 h-[4px] bg-gradient-to-r from-foreground to-transparent mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Deep dives into architecture, system design, and real-world
            engineering trade-offs. These projects go beyond tutorials, focusing
            on production-oriented implementations of complex backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`group relative flex flex-col h-[500px] w-full overflow-hidden rounded-xl transition-all duration-500 bg-card/60 backdrop-blur-xl reveal
      ${
        project.featured
          ? "border border-primary/50 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
          : "border border-border hover:border-primary/30 hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl"
      }`}
      style={{ ["--delay" as any]: `${index * 0.15}s` }}
    >
      {/* Background Glow for Featured */}
      {project.featured && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none z-0" />
      )}

      {/* Image */}
      <div className="relative h-[45%] w-full overflow-hidden bg-muted z-10">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={project.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 z-10 relative border-t border-border/30">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
              style={getSkillStyle(tech)}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] px-2.5 py-1 border border-border/50 rounded-full bg-muted/50 text-muted-foreground">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50 text-sm font-medium">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group/link"
            >
              <FiGithub className="text-base group-hover/link:-translate-y-1 transition-transform" />
              <span>Code</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group/link"
            >
              <FiExternalLink className="text-base group-hover/link:-translate-y-1 transition-transform" />
              <span>Live</span>
            </Link>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all ml-auto group/link"
          >
            <FiBookOpen className="text-base group-hover/link:-translate-y-1 transition-transform" />
            <span>Architecture</span>
          </Link>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="relative text-[10px] px-3 py-1.5 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-full shadow-lg shadow-primary/50">
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md opacity-70 animate-pulse"></span>
            <span className="relative">★ Featured</span>
          </div>
        </div>
      )}

      {/* Shimmer Effect */}
      {project.featured && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none z-30">
          <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
        </div>
      )}
    </div>
  );
}
