export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePath: string;
  featured?: boolean;
  year: number;
  role?: string;
  highlights?: string[];
  status?: "Active" | "Archived" | "In Progress";
};

export type ProjectFrontmatter = Omit<Project, "slug">;