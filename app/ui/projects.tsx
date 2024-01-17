import Image from "next/image";
import { Project } from "../lib/definitions";
import { projects } from "../lib/data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";

export default function ProjectSection() {
  return (
    <div className="min-h-screen px-8 xl:px-8 2xl:px-40">
      <h2 className="text-xl font-light mb-8 backdrop-blur-md">
        Projects I have worked on
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center bg-[#00000079]">
        {projects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-[400px] w-[300px] overflow-clip bg-black border border-gray-800 relative">
      <div className="h-full">
        <Image
          src={project.imagePath}
          width={300}
          height={300}
          alt={project.title}
          className="object-cover w-full h-full hover:scale-110 transition-all"
        />
      </div>
      <div className="absolute h-[100px] hover:h-[40%] transition-all bottom-0 bg-[#0000009e] backdrop-blur-xl border-t border-gray-800 flex flex-col p-2 gap-1">
        <h3 className="text-center">{project.title}</h3>
        <p className="text-gray-400 text-sm font-light text-center">
          {project.description}
        </p>
      </div>
      <Link
        href={project.link}
        target="_blank"
        className="absolute -top-16 hover:top-[-50px] -right-16 hover:right-[-70px] rotate-45 w-[120px] hover:w-[150px] h-[120px] transition-all bg-[#0000009e] backdrop-blur-xl p-8"
      >
        <BsGithub className="absolute left-[40%] bottom-4 -rotate-45 text-xl" />
      </Link>
    </div>
  );
}
