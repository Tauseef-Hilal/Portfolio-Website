import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectFrontmatter } from './definitions';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjects(): Project[] {
  const files = fs.readdirSync(projectsDirectory);

  const projects: Project[] = files.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);
    const typedData = data as ProjectFrontmatter;

    const slug = filename.replace('.mdx', '');

    return {
      slug,
      title: data.title,
      shortDescription: data.shortDescription,
      tech: data.tech,
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      imagePath: data.imagePath,
      featured: data.featured ?? false,
      year: data.year,
      role: data.role,
      highlights: data.highlights,
      status: data.status,
    };
  });

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });
}
