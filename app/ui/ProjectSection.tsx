import Image from "next/image";
import Link from "next/link";
import { Project } from "../lib/definitions";
import { BsGithub } from "react-icons/bs";
import { getProjects } from "../lib/projects";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section className="min-h-screen py-24 relative bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-indigo-900/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="mb-4 space-y-3">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-white">
              Featured Projects
            </h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-transparent mb-6" />
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            A curated selection of projects showcasing full-stack development,
            system architecture, and problem-solving across real-world
            scenarios.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
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
    <div
      className={`group relative h-[420px] w-[320px] overflow-hidden rounded-lg transition-all duration-500
      ${
        project.featured
          ? "border border-purple-500/60 bg-gradient-to-br from-purple-950/40 via-gray-900 to-black shadow-xl shadow-purple-900/30"
          : "border border-gray-800/40 bg-gradient-to-br from-gray-900/50 to-black hover:border-indigo-700/60 hover:shadow-2xl hover:shadow-indigo-900/30"
      }`}
    >
      {/* Glow Border for Featured */}
      {project.featured && (
        <div className="absolute inset-0 rounded-lg pointer-events-none">
          <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-30 blur-md animate-pulse"></div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-[55%] w-full overflow-hidden bg-gray-900">
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
      <div className="flex flex-col justify-between h-[45%] p-5 bg-gradient-to-b from-gray-900/50 to-black backdrop-blur-sm border-t border-gray-800/40">
        <div className="space-y-3">
          <h3
            className={`text-lg font-semibold tracking-wide transition-colors duration-300
            ${
              project.featured
                ? "text-white group-hover:text-purple-200"
                : "text-white group-hover:text-indigo-100"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-snug line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`text-[10px] px-2.5 py-1 border rounded-sm transition-all duration-300
                ${
                  project.featured
                    ? "border-gray-700/50 text-gray-500 group-hover:border-purple-500/70 group-hover:text-purple-300 group-hover:bg-purple-950/30"
                    : "border-gray-700/50 text-gray-500 group-hover:border-indigo-600/70 group-hover:text-indigo-400 group-hover:bg-indigo-950/20"
                }`}
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
              className={`flex items-center gap-2 text-sm transition-all duration-300 group/link
              ${
                project.featured
                  ? "text-gray-500 hover:text-purple-300"
                  : "text-gray-500 hover:text-indigo-300"
              }`}
            >
              <BsGithub className="text-base group-hover/link:-translate-y-1 transition-transform" />
              <span>Code</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className={`flex items-center gap-2 text-sm transition-all duration-300 group/link
              ${
                project.featured
                  ? "text-gray-500 hover:text-purple-300"
                  : "text-gray-500 hover:text-indigo-300"
              }`}
            >
              <FiExternalLink className="text-base group-hover/link:-translate-y-1 transition-transform" />
              <span>Live</span>
            </Link>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className={`flex items-center gap-2 text-sm transition-all duration-300 group/link
            ${
              project.featured
                ? "text-gray-500 hover:text-purple-300"
                : "text-gray-500 hover:text-indigo-300"
            }`}
          >
            <FiBookOpen className="text-base group-hover/link:-translate-y-1 transition-transform" />
            <span>Read More</span>
          </Link>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4">
          <div className="relative text-[10px] px-3 py-1.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold tracking-widest uppercase rounded-md border border-purple-400/40 shadow-lg shadow-purple-900/50">
            <span className="absolute inset-0 rounded-md bg-purple-500/40 blur-md opacity-70 animate-pulse"></span>
            <span className="relative">★ Featured</span>
          </div>
        </div>
      )}

      {/* Shimmer Effect */}
      {project.featured && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
        </div>
      )}
    </div>
  );
}
