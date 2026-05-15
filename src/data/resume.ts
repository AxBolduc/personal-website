export const DATA = {
  name: 'Alex Bolduc',
  initials: 'AB',
  role: 'Software Engineer',
  location: 'Canada',
  description:
    'I build reliable, thoughtful software systems with a focus on product quality, maintainability, and developer experience.',
  summary:
    'I enjoy turning ambiguous problems into practical software: clear interfaces, well-tested systems, useful tooling, and applications that teams can confidently evolve over time.',
  contact: {
    email: 'hello@example.com',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  skills: ['TypeScript', 'Astro', 'React', 'Node.js', 'Cloudflare Workers', 'Testing', 'System Design', 'Developer Experience'],
  work: [
    {
      company: 'Company Name',
      title: 'Software Engineer',
      start: '2024',
      end: 'Present',
      description:
        'Describe your current role, the systems you own, and the measurable impact you have delivered.',
    },
    {
      company: 'Previous Company',
      title: 'Software Engineer',
      start: '2022',
      end: '2024',
      description:
        'Summarize a previous role, highlighting technical leadership, product impact, and technologies used.',
    },
  ],
  projects: [
    {
      title: 'Project Name',
      description:
        'A concise case study for a standout project: what problem it solved, your role, and the technical decisions that mattered.',
      technologies: ['Astro', 'TypeScript', 'Cloudflare'],
      href: '#',
    },
    {
      title: 'Another Project',
      description:
        'Use this space for an open-source project, internal platform, product feature, or engineering tool you are proud of.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      href: '#',
    },
  ],
} as const;
