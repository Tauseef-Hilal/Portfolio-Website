import fs from 'fs';
import path from 'path';
import { Project, ProjectFrontmatter } from './definitions';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects(): Promise<Project[]> {
  const files = fs.readdirSync(projectsDirectory);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace('.mdx', '');

        const project = await import(`@/content/projects/${filename}`);
        const data = project.meta as ProjectFrontmatter;

        return {
          slug,
          ...data,
        };
      }),
  );

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });
}
