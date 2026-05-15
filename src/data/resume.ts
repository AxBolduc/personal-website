export const DATA = {
  name: "Alex Bolduc",
  initials: "AB",
  role: "Full Stack Software Engineer",
  location: "Durham, NC",
  url: "https://axbolduc.com",
  avatar: {
    src: "/me-avatar-320.webp",
    srcset: "/me-avatar-320.webp 320w, /me-avatar-640.webp 640w",
    sizes: "(max-width: 680px) 96px, 120px",
  },
  description:
    "Software Engineer with 3+ years of experience building scalable backend systems and full-stack applications.",
  summary:
    "I specialize in TypeScript and Node.js ecosystems, event-driven architectures, and AWS infrastructure. I have a track record of leading system migrations, improving reliability, and delivering production features end-to-end across backend services, React applications, and cloud infrastructure.",
  contact: {
    email: "axbolduc@gmail.com",
    github: "https://github.com/axbolduc",
    linkedin: "https://www.linkedin.com/in/axbolduc",
  },
  skills: [
    "TypeScript",
    "Go",
    "Java",
    "C#",
    "Next.js",
    "React",
    "React Native",
    "SvelteKit",
    "Node.js",
    "Express",
    "NestJS",
    "REST APIs",
    "Event-Driven Architecture",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "DynamoDB",
    "Kafka",
  ],
  skillGroups: [
    { label: "Languages", items: ["TypeScript", "Go", "Java", "C#"] },
    { label: "Frontend", items: ["Next.js", "React", "React Native", "Svelte", "SvelteKit"] },
    {
      label: "Backend",
      items: ["Node.js", "Express", "NestJS", "REST APIs", "Event-Driven Architecture"],
    },
    {
      label: "Cloud & Infra",
      items: ["AWS ECS", "AWS Lambda", "S3", "Terraform", "Docker", "Kubernetes"],
    },
    { label: "Data", items: ["PostgreSQL", "DynamoDB", "Kafka"] },
  ],
  work: [
    {
      company: "Aspida",
      title: "Full Stack Software Engineer",
      location: "Durham, NC",
      start: "June 2024",
      end: "Present",
      technologies: ["TypeScript", "React", "Express", "PostgreSQL", "AWS"],
      description:
        "Own end-to-end feature delivery across React SPAs, Express services, and AWS infrastructure while leading reliability and developer-experience improvements.",
      highlights: [
        "Owned delivery of new features and defect fixes across six React SPAs and a shared Express monolith, shipping production code weekly.",
        "Architected version-stable REST endpoints for React frontends with idempotency, predictable status codes, and resource-oriented routes.",
        "Spearheaded strict TypeScript adoption across new and existing code as part of a development-team code quality initiative.",
        "Led a zero-downtime authentication migration from Amazon Cognito to Auth0 with no customer-facing impact.",
        "Introduced end-to-end type safety across APIs and React apps using Zod schemas and OpenAPI-generated HTTP clients.",
        "Led migration from eight repositories to a unified monorepo, reducing developer friction and enabling shared tooling and components.",
        "Managed AWS infrastructure with Terraform for ECS backend deployments and dynamic CodePipeline CI/CD pipelines.",
      ],
    },
    {
      company: "SimpliSafe",
      title: "Software Engineer I",
      location: "Boston, MA",
      start: "January 2023",
      end: "June 2024",
      technologies: ["TypeScript", "NestJS", "Kafka", "DynamoDB", "AWS"],
      description:
        "Built backend services, event-driven systems, and internal tools supporting the core monitoring pipeline for security system alarms.",
      highlights: [
        "Migrated NestJS microservices to Kafka-backed event architectures, increasing event transmission throughput and reliability by 35%.",
        "Designed, implemented, and delivered features for the core monitoring pipeline used to process security system alarms.",
        "Contributed to a React and TypeScript internal SPA used daily by monitoring specialists during active alarms.",
        "Designed and implemented a Python and Dagster data pipeline to parse and store alarm events for analysis and auditing.",
        "Organized a professional development workshop series on SOLID principles for engineers across experience levels.",
      ],
    },
  ],
  projects: [
    {
      title: "Gomlb",
      description:
        "A terminal-based UI application for browsing Major League Baseball games and statistics across past and present seasons.",
      technologies: ["Go", "REST APIs", "Terminal UI"],
      href: "https://github.com/AxBolduc/gomlb",
      image: {
        src: "/gomlb-header-640.webp",
        srcset: "/gomlb-header-640.webp 640w, /gomlb-header-960.webp 960w",
        sizes: "(max-width: 680px) calc(100vw - 3rem), 336px",
        alt: "Gomlb terminal UI project screenshot",
      },
      highlights: [
        "Integrated with Major League Baseball’s REST API to retrieve complex game, team, and player data.",
        "Designed intuitive terminal interfaces for exploring baseball statistics interactively.",
      ],
    },
  ],
  education: [
    {
      school: "Worcester Polytechnic Institute",
      degree: "BS in Computer Science",
      detail: "GPA: 3.92",
      start: "August 2019",
      end: "December 2022",
    },
  ],
} as const;
