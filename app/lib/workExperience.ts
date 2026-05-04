export type WorkExperience = {
  id: string;
  role: string;
  company: string;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Internship'
    | 'Contract'
    | 'Freelance'
    | 'Open Source';
  location: string;
  startDate: string; // YYYY-MM
  endDate?: string; // undefined = Present
  techStack?: string[];
  highlights: string[];
};

export const workExperience: WorkExperience[] = [
  {
    id: 'ganjean-intern-2025',
    role: 'Software Developer Intern',
    company: 'Ganjean Health',
    employmentType: 'Internship',
    location: 'Sopore, JK, India',
    startDate: '2025-02',
    endDate: '2025-05',
    techStack: ['Python', 'Django', 'Docker', 'PostgreSQL', 'REST APIs'],
    highlights: [
      'Designed RESTful APIs for patient management and analytics, serving 5,000+ users.',
      'Streamlined Docker build processes, reducing team environment setup time from 1+ hours to minutes.',
      'Resolved API edge cases during early development cycles, decreasing post-deployment logic errors.',
      'Accelerated delivery speed through code reviews, API debugging, and cross-functional design collaboration.',
      'Mentored incoming team members and assisted in debugging environment issues, increasing team efficiency.',
    ],
  },

  {
    id: 'digifista-freelance-2025',
    role: 'Freelance Software Developer',
    company: 'Digifista',
    employmentType: 'Freelance',
    location: 'Baramulla, JK, India',
    startDate: '2025-01',
    endDate: '2025-04',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Cloudflare R2',
    ],
    highlights: [
      'Automated record management for 4,000+ students by delivering a full-stack Next.js-based ID generation portal.',
      'Integrated Cloudflare R2 cloud storage with signed URLs, ensuring secure and controlled asset access.',
      'Engineered a bulk PDF export pipeline rendering 4,000+ IDs in minutes, eliminating manual processing.',
      'Spearheaded a phased delivery approach to manage scope creep, guaranteeing the core production system met stakeholder deadlines.',
    ],
  },
];
