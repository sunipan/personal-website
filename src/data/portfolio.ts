export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  tech: string[];
  bullets: string[];
  color: string;
};

export type Project = {
  name: string;
  tech: string[];
  description?: string;
  bullets?: string[];
  link: string;
  isRepo?: boolean;
  award?: string;
  date?: string;
};

export const personal = {
  name: 'Sebi Unipan',
  role: 'Software Engineer',
  tagline: 'Software engineer. Systems thinker. Problem solver.',
  location: 'Vancouver, British Columbia',
  email: 'sunipan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sebi-unipan/',
  github: 'https://github.com/sunipan',
  website: 'sebiunipan.com',
  resumeUrl: '/resume',
  education: {
    school: 'University of British Columbia',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '4.0/4.33',
    graduated: '2023',
    award: 'Deputy Vice Chancellor Scholarship (2020–2023)',
    awardDetail: 'Awarded for maintaining 80%+ academic average',
  },
};

export const experiences: Experience[] = [
  {
    company: 'Rave',
    role: 'Software Engineer',
    date: 'May 2023 – Present',
    location: 'Remote',
    tech: ['Kotlin', 'Java', 'Android', 'REST APIs'],
    bullets: [
      'Architected and shipped the Friends Page feature on Android for the leading watch party platform (millions of MAU), with implementation patterns adopted by iOS/Desktop teams, contributing to +100K monthly active user growth',
      'Led vendor communications and technical integration of new ad providers and web indexing partners, driving 40% revenue growth on the Android platform',
      'Developed the Crunchyroll provider end-to-end—first to achieve video playback on Android, then enabled iOS/Desktop teams to implement, earning a raise for exceptional performance',
      "Revamped the Google Drive provider from legacy to modern architecture with 3-tier fallback streaming and network-adaptive quality selection, dramatically improving playback for one of the platform's most popular sources",
      'Migrated legacy Java codebase to Kotlin with coroutines and structured concurrency, reducing code complexity by 50%',
      'Diagnosed critical memory leaks and coordinated fixes with external SDK teams, maintaining 97%+ crash-free rate',
    ],
    color: '#f9f9f9',
  },
  {
    company: 'Minga',
    role: 'Jr. Software Developer',
    date: 'May – August 2022',
    location: 'Kelowna, BC',
    tech: ['Angular', 'TypeScript', 'gRPC', 'Protobuf', 'RxJS'],
    bullets: [
      'Implemented hall pass and behavioral points features with complex time-based logic and state management using Protobuf/gRPC, serving 20K+ students and teachers across 50+ schools daily',
      'Identified and resolved 10+ UI bugs through QA collaboration, including screen scaling issues and unresponsive controls, improving cross-device compatibility',
    ],
    color: '#5b8def',
  },
  {
    company: 'Atomic47 Labs',
    role: 'Jr. Software Engineer',
    date: 'September 2021 – April 2022',
    location: 'Kelowna, BC',
    tech: ['React Native', 'Node.js', 'NestJS', 'MongoDB', 'Azure'],
    bullets: [
      'Optimized backend performance by refactoring to MongoDB aggregation pipelines and consolidating scattered calls, improving query speed by 80% and reducing total requests by 40%',
      'Replaced Redux with React Query, cutting state management complexity by 50%',
      'Diagnosed and fixed critical authentication bug in Auth0 token refresh flow; granted production access to debug, resolving login failures affecting all users',
      'Built core Village App features: real-time WebSocket chat, geospatial friend discovery (1-150km), and 17-category marketplace, powering social discovery and local commerce',
    ],
    color: '#1cb0ac',
  },
  {
    company: 'Jusaves',
    role: 'Software Engineer',
    date: 'May – August 2021',
    location: 'Richmond, BC',
    tech: ['Laravel', 'PHP', 'Python', 'MySQL', 'scikit-learn'],
    bullets: [
      'Designed product recommendation engine using K-Nearest Neighbors with cosine similarity and hierarchical geographic filtering, scaled to handle 2 million products',
      'Implemented multi-role authentication with dynamic role switching between buyer, seller, and distributor, allowing users to operate across all marketplace sides',
    ],
    color: '#f8935b',
  },
];

export const projects: Project[] = [
  {
    name: 'PharmaPal',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MongoDB', 'Vercel'],
    bullets: [
      'Led 4-person capstone team as technical lead, making architectural decisions and selecting the tech stack, winning competition against 2 other teams',
      'Architected full-stack application with Next.js, Prisma ORM, and MongoDB including admin dashboard with NextAuth.js, establishing codebase standards used across 20+ components',
      'Mentored 3 teammates on React and TypeScript best practices while managing sprint execution, delivering production-ready application in 8-week timeline',
    ],
    link: 'https://pharmapal.vercel.app/',
    award: 'Won $100/person prize',
    date: '2022 – 2023',
  },
  {
    name: 'Chat Bot',
    tech: ['Python', 'SciKit-Learn', 'NLTK'],
    description:
      'A psychiatrist chat bot designed to give users support through natural responses, built with machine learning and natural language processing.',
    link: 'https://github.com/sunipan/Chat-Bot',
    isRepo: true,
  },
  {
    name: 'GPU Bot',
    tech: ['Python', 'BeautifulSoup'],
    description:
      'A bot that automatically checks for GPU availability on the Best Buy website, built during the GPU shortage to help users snag hard-to-find graphics cards.',
    link: 'https://github.com/sunipan/GPU-Bot',
    isRepo: true,
  },
];

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'Java', 'PHP', 'SQL', 'HTML/CSS'],
  frameworks: [
    'React',
    'React Native',
    'React Query',
    'Next.js',
    'Node.js',
    'Angular',
    'RxJS',
    'NestJS',
    'Laravel',
    'Tailwind CSS',
  ],
  tools: [
    'Git',
    'GitHub Actions',
    'Docker',
    'Android',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Prisma',
    'Firebase',
    'Azure',
    'Vercel',
  ],
  concepts: [
    'REST APIs',
    'CI/CD',
    'WebSockets',
    'gRPC/Protobuf',
    'Agile/Scrum',
    'Unit Testing',
    'State Management',
  ],
};
