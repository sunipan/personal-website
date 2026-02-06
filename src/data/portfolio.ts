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
  description: string;
  link: string;
  isRepo?: boolean;
  award?: string;
};

export const personal = {
  name: 'Sebi Unipan',
  role: 'Software Engineer',
  tagline: 'Inventive, driven, and endlessly curious',
  location: 'Vancouver, British Columbia',
  email: 'sunipan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sebi-unipan/',
  github: 'https://github.com/sunipan',
  website: 'sebiunipan.com',
  resumeUrl: 'https://riftrstore.cc/Sebi%20Unipan%20-%20Resume.pdf',
  education: {
    school: 'University of British Columbia',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '4.0/4.33',
    graduated: '2023',
    award: 'Deputy Vice Chancellor Scholarship (2020–2023)',
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
      'Architected and shipped the Friends Page feature on Android for the leading watch party platform (millions of MAU), contributing to +100K monthly active user growth',
      'Led vendor communications and technical integration of new ad providers, driving 40% revenue growth on the Android platform',
      'Developed the Crunchyroll provider end-to-end—first to achieve video playback on Android, earning a raise for exceptional performance',
      'Revamped the Google Drive provider with 3-tier fallback streaming and network-adaptive quality selection',
      'Migrated legacy Java codebase to Kotlin with coroutines, reducing code complexity by 50%',
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
      'Implemented hall pass and behavioral points features with complex time-based logic, serving 20K+ students and teachers daily',
      'Identified and resolved 10+ UI bugs through QA collaboration, improving cross-device compatibility',
    ],
    color: '#5b8def',
  },
  {
    company: 'Atomic47 Labs',
    role: 'Jr. Software Engineer',
    date: 'Sep 2021 – April 2022',
    location: 'Kelowna, BC',
    tech: ['React Native', 'Node.js', 'NestJS', 'MongoDB', 'Azure'],
    bullets: [
      'Optimized backend with MongoDB aggregation pipelines, improving query speed by 80% and reducing requests by 40%',
      'Replaced Redux with React Query, cutting state management complexity by 50%',
      'Fixed critical Auth0 token refresh bug affecting all users',
      'Built real-time WebSocket chat, geospatial friend discovery, and 17-category marketplace',
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
      'Designed product recommendation engine using K-Nearest Neighbors, scaled to handle 2 million products',
      'Implemented multi-role authentication with dynamic role switching between buyer, seller, and distributor',
    ],
    color: '#f8935b',
  },
];

export const projects: Project[] = [
  {
    name: 'PharmaPal',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MongoDB', 'Vercel'],
    description:
      'An intuitive web app for assisting users with picking the right over-the-counter medicine for their exact symptoms. Led 4-person capstone team as technical lead, winning competition against 2 other teams.',
    link: 'https://pharmapal.vercel.app/',
    award: 'Won $100/person prize',
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
