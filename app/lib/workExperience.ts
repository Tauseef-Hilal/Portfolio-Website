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
    techStack: ['Node.js', 'Express', 'Docker', 'REST APIs'],
    highlights: [
      'Developed REST APIs for Patients, Appointments, and Analytics modules serving 5,000+ users.',
      'Implemented secure handling for sensitive healthcare data with structured exception management.',
      'Automated environment-specific configuration and database migrations using Docker Compose.',
      'Collaborated on API design, debugging, and code reviews, improving delivery speed and system stability.',
      'Assisted team members with development environment setup and feature implementation.',
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
    techStack: ['Next.js', 'TypeScript', 'Cloudflare R2'],
    highlights: [
      'Designed and delivered a Next.js-based ID generation system automating 1,000+ student records.',
      'Integrated secure object storage using Cloudflare R2 with signed URLs for controlled file access.',
      'Consulted with stakeholders to gather requirements, propose solutions, and ensure timely project delivery.',
    ],
  },

  {
    id: 'hacktoberfest-oss-2023',
    role: 'Open Source Contributor',
    company: 'Hacktoberfest',
    employmentType: 'Open Source',
    location: 'Remote',
    startDate: '2023-08',
    endDate: '2023-09',
    techStack: ['Python', 'Playwright', 'Testing'],
    highlights: [
      'Authored 10+ Playwright test cases for freeCodeCamp, improving test coverage and reliability.',
      'Implemented algorithmic solutions in TheAlgorithms/Python repository, impacting 5,000+ global users.',
    ],
  },
];
