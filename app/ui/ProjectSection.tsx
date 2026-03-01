import Image from "next/image";
import Link from "next/link";
import { Project } from "../lib/definitions";
import { BsGithub } from "react-icons/bs";
import { getProjects } from "../lib/projects";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectSection() {
  const projects = getProjects();
  return (
    <section className="min-h-screen py-24 2xl:px-32 relative bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-indigo-900/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 px-6 lg:px-0">
        <div className="mb-16">
          <div className="mb-4 space-y-3">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-white">
              Featured Projects
            </h3>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            A curated selection of projects showcasing full-stack development,
            system architecture, and problem-solving across real-world
            scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-[420px] w-[320px] overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800/80 hover:border-gray-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50">
      {/* Image */}
      <div className="relative h-[55%] w-full overflow-hidden bg-gray-900">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between h-[45%] p-5 bg-gradient-to-b from-gray-900/90 to-black backdrop-blur-sm border-t border-gray-800/40">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-wide text-white group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-snug group-hover:text-gray-300 transition-colors">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 border border-gray-700/60 text-gray-500 rounded-sm group-hover:border-gray-500/80 group-hover:text-gray-400 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] px-2.5 py-1 border border-gray-700/60 text-gray-500 rounded-sm">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-all duration-300 group/link"
            >
              <BsGithub className="text-base group-hover/link:translate-y-[-2px] transition-transform" />
              <span>Code</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-all duration-300 group/link"
            >
              <FiExternalLink className="text-base group-hover/link:translate-y-[-2px] transition-transform" />
              <span>Live</span>
            </Link>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 text-[10px] px-3 py-2 bg-white/90 text-black font-bold tracking-widest uppercase transition-all duration-500 group-hover:bg-white shadow-lg">
          Featured
        </div>
      )}
    </div>
  );
}
