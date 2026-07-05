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
  awardColor?: 'green' | 'amber';
  date?: string;
};

export const personal = {
  name: 'Sebi Unipan',
  role: 'Software Engineer',
  tagline: 'Software engineer. Problem solver. Builder.',
  location: 'Vancouver, British Columbia',
  email: 'sunipan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sebi-unipan/',
  github: 'https://github.com/sunipan',
  website: 'sebiunipan.com',
  resumeUrl: 'https://store.sebiunipan.com/Sebi%20Unipan%20-%20Resume.pdf',
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
      "Architected and shipped Rave's Android Friends Page as **1 of 2 Android engineers**, establishing implementation patterns adopted by iOS/Desktop teams and contributing to **100K+ MAU growth** on an **800K DAU** platform",
      'Led partner communication and Android ad/monetization integrations, driving **20% revenue growth**',
      'Owned Android content-provider expansion for Rave, adding Crunchyroll, Pluto TV, VK, RuTube, X/Twitter, YouTube Live/Twitch, and real-time live chat while hardening playback, authentication, metadata, subtitles, and provider edge cases',
      "Spearheaded Iris, Rave's first reusable, liveness-based Android age-verification SDK, combining CameraX, ML Kit face detection, and custom UI to move beyond bypassable DoB checks and help prevent underage access to mature content",
      "Refactored legacy Java/Kotlin components as part of Rave's single-Activity Kotlin rearchitecture, replacing Activity-coupled callbacks, Java threading, null/lifecycle guards, and boilerplate with Fragments, ViewModels, coroutines/Flow, structured concurrency, and Kotlin extensions",
      'Diagnosed critical memory leaks in third-party SDK integrations and coordinated fixes with external teams, helping maintain **97%+ crash-free rate**',
    ],
    color: '#f9f9f9',
  },
  {
    company: 'Minga',
    role: 'Full-Stack Engineer',
    date: 'May – August 2022',
    location: 'Kelowna, BC',
    tech: ['Angular', 'TypeScript', 'gRPC', 'Protobuf', 'RxJS'],
    bullets: [
      'Implemented hall pass and behavioral points features with complex time-based logic and state management using Protobuf/gRPC, **serving 20K+ students and teachers across 50+ schools daily**',
      'Identified and resolved 10+ UI bugs through QA collaboration, including screen scaling issues and unresponsive controls, **improving cross-device compatibility**',
    ],
    color: '#5b8def',
  },
  {
    company: 'Atomic47 Labs',
    role: 'Full-Stack Engineer',
    date: 'September 2021 – April 2022',
    location: 'Kelowna, BC',
    tech: ['React Native', 'Node.js', 'NestJS', 'MongoDB', 'Azure'],
    bullets: [
      'Optimized backend performance by refactoring to MongoDB aggregation pipelines and consolidating scattered calls, **improving query speed by 80% and reducing total requests by 40%**',
      'Replaced the **majority of Redux** with React Query, reducing state management complexity by **50%**',
      'Diagnosed and fixed critical authentication bug in Auth0 token refresh flow; granted production access to debug, **resolving login failures affecting all users**',
      'Built core Village App features: real-time WebSocket chat, geospatial friend discovery (1-150km), and 17-category marketplace, **powering social discovery and local commerce**',
    ],
    color: '#1cb0ac',
  },
  {
    company: 'Jusaves',
    role: 'Full-Stack Engineer',
    date: 'May – August 2021',
    location: 'Richmond, BC',
    tech: ['Laravel', 'PHP', 'Python', 'MySQL', 'scikit-learn'],
    bullets: [
      'Built a Python recommendation engine using cosine nearest-neighbor search over a location-filtered product catalog, seeding results from cart/click signals and scaling to **2M products**',
      'Implemented **multi-role authentication with dynamic role switching** between buyer, seller, and distributor, allowing users to operate across all marketplace sides',
    ],
    color: '#f8935b',
  },
];

export const projects: Project[] = [
  {
    name: 'Riftr.io',
    tech: ['Next.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Cloudflare R2', 'Clerk'],
    bullets: [
      'Built and deployed Riftr, an end-to-end encrypted temporary file-sharing app with expiring share links, authenticated upload tiers up to **500MB**, and direct browser-to-Cloudflare R2 uploads via presigned URLs',
      'Implemented the E2EE pipeline with client-side AES-256-GCM, per-file DEKs, and per-room keys stored in URL fragments, **keeping raw files and decryption keys off the server**',
      'Designed secure upload infrastructure with hashed upload-session tokens, single/multipart R2 upload validation, Redis-backed upload rate limits, optional bcrypt-hashed room password gates, and scheduled cleanup for expired files and stale uploads',
    ],
    link: 'https://riftr.io',
    award: 'Live',
    awardColor: 'amber',
    date: '2025',
  },
  {
    name: 'PharmaPal',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'MongoDB', 'Vercel'],
    bullets: [
      'Led technical planning for a 4-person capstone team building an OTC medication recommendation app **selected by the client from 3 competing builds**, decomposing requirements into a Next.js/TypeScript questionnaire flow, matching logic, Prisma/MongoDB persistence, and admin UI for managing medicines and questions',
    ],
    link: 'https://pharmapal.vercel.app/',
    award: 'Winning Project · Cash Prize',
    date: '2022 – 2023',
  },
];

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Kotlin', 'Java', 'Python', 'SQL', 'PHP', 'HTML/CSS'],
  frontendMobile: [
    'React',
    'Next.js',
    'React Native',
    'Angular',
    'Android',
    'Tailwind',
    'React Query',
  ],
  backendData: [
    'Node.js',
    'NestJS',
    'Laravel',
    'REST APIs',
    'gRPC/Protobuf',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Drizzle',
    'Prisma',
  ],
  cloudEngineering: [
    'Git',
    'Docker',
    'GitHub Actions',
    'Cloudflare R2',
    'AWS S3/CloudFront',
    'Azure',
    'Vercel',
    'Railway',
    'CI/CD',
    'Code Review',
    'AI-assisted development workflows',
  ],
};
