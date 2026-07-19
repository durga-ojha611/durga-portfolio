// ============================================================
// portfolioData.js — Centralized configuration for Durga's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Durga",
  firstName: "Durga",
  brandName: "Durga",
  title: "Full Stack Developer (MERN | Next.js)",
  location: "Delhi, India",
  phone: "+91 9311041261",
  emails: {
    primary: "d88177600@gmail.com",
    secondary: "",
  },
  summary:
    "Full Stack Developer (MERN/Next.js) shipping production AI apps end-to-end. Led a cross-functional frontend team at YUCI, presenting UI/UX decisions to stakeholders. Built ELAN (AI semantic search e-commerce) and Crop Doc (real-time TensorFlow.js disease detection), both live in production. Strong communicator across engineering and non-technical stakeholders, owning full deployment pipelines (Vercel, Render, Docker).",
  resumeUrl: "/Durga_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/durga-ojha611",
  linkedin: "https://linkedin.com/in/durga-ojha",
  website: "https://elan-lime.vercel.app",
};

export const heroContent = {
  greeting: "Hi, I'm Durga",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build fast, scalable applications using the MERN Stack and Next.js with a strong focus on AI integration.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:d88177600@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Durga,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Durga_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Durga</span>, a passionate Full Stack Developer based in Delhi, India. I craft clean, functional, and scalable web applications powered by the MERN stack and Next.js.`,
  techStack: ["Next.js", "React.js", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research & Planning",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      text: "Crafting clean architecture and designing intuitive interfaces that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Development",
      text: "Building scalable backends and responsive frontends using modern tech stacks like Next.js, Node.js, and MongoDB.",
    },
    {
      number: "04",
      title: "Optimization & Deploy",
      text: "Rigorous testing, SEO/LCP optimization, and seamless deployment to cloud infrastructure.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Languages & Frontend",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Next.js (SSR)", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB (Atlas)", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "AI & ML Integration",
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "TensorFlow.js", level: 80 },
        { name: "Semantic Search", level: 85 },
        { name: "Google Gen AI", level: 80 },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Vercel / Render", level: 85 },
      ],
    },
    {
      title: "Security & Auth",
      skills: [
        { name: "JWT Auth", level: 85 },
        { name: "Passport.js", level: 80 },
        { name: "App Security", level: 80 },
      ],
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms (Java)", level: 85 },
        { name: "System Design", level: 80 },
        { name: "LCP & SEO Opt.", level: 85 },
      ],
    },
  ],
};

// Experience (formerly Internships)
export const experienceList = [
  {
    organization: "Youth United Council of India (YUCI), Chennai",
    role: "Lead Frontend Developer",
    duration: "05/2026 – 07/2026",
    skills: [
      "Led AUR end-to-end — a global university ranking platform; owned UI/UX across the full Next.js + FastAPI stack, presenting design direction to founders.",
      "Built the Comparison Matrix feature from scratch — responsive Next.js UI backed by custom FastAPI routes, coordinated with backend engineers on API contracts.",
      "Stabilized the main branch — resolved deep UI bugs and complex merge conflicts, mentoring teammates through Git workflows.",
      "Owned deployment architecture — Dockerized FastAPI on Render, shipped Next.js on Vercel, documented setup for the team."
    ],
    tech: ["Next.js", "FastAPI", "Docker", "Render", "Vercel", "Git / GitHub"],
  },
];

// Achievements (formerly Leadership)
export const achievementsList = [
  {
    title: "1st Position, College Tech Fest",
    description:
      "Built and presented a full web project to judges under time pressure.",
    role: "Winner",
    badge: "Achievement",
  },
  {
    title: "National-Level Hackathons",
    description:
      "Competed in 5+ national-level hackathons — ranked 13th nationwide with a blockchain expense-splitting app.",
    role: "Competitor",
    badge: "Hackathon",
  },
  {
    title: "Space-Tech Aggregator",
    description:
      "Architected a Space-Tech Aggregator — consolidated NASA and ISRO datasets into a single queryable API.",
    role: "Backend Architect",
    badge: "Project",
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces.",
  },
  {
    name: "Team Leadership",
    icon: "👑",
    desc: "Led the frontend team, guided teammates, and kept the main branch stable under pressure.",
  },
  {
    name: "Debugging",
    icon: "🐛",
    desc: "Served as lead debugger across projects, resolving UI glitches, console warnings, and merge conflicts.",
  },
  {
    name: "Performance Optimization",
    icon: "⚡",
    desc: "Optimized Next.js Image components for Largest Contentful Paint (LCP) across projects.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to integrate new technologies like TensorFlow.js, OpenAI embeddings, and Supabase.",
  },
];

export const projects = [
  {
    id: "aur",
    number: "01",
    badge: "🎓 Internship Project",
    title: "AUR — Global University Ranking Platform",
    description:
      "Led AUR end-to-end — a global university ranking platform. Built the Comparison Matrix feature from scratch with a responsive Next.js UI backed by custom FastAPI routes. Owned the deployment architecture by Dockerizing FastAPI on Render and shipping Next.js on Vercel.",
    techTags: [
      "Next.js",
      "FastAPI",
      "Docker",
      "Render",
      "Vercel",
      "Git",
    ],
    images: ["/projects/aur1.png", "/projects/aur2.png", "/projects/aur3.png"],
    links: {
      github: "https://github.com/durga-ojha611",
      demo: "https://aur-tau.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "elan",
    number: "02",
    badge: "🚀 Live Platform",
    title: "ELAN — AI-Powered Luxury E-Commerce",
    description:
      "Engineered AI semantic search with MongoDB Atlas Vector Search + OpenAI embeddings (1536-D). Shipped a high-performance SSR storefront on Next.js 16, powered by a scalable Node/Express backend. Built hydration-safe Zustand persistence — eliminated session, cart, and theme bugs across reloads.",
    techTags: [
      "Next.js 16",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "OpenAI API",
      "Zustand",
      "Tailwind CSS",
    ],
    images: ["/projects/elan1.png", "/projects/elan2.png", "/projects/elan3.png"],
    links: {
      github: "https://github.com/durga-ojha611",
      demo: "https://elan-lime.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "cropdoc",
    number: "03",
    badge: "AI Application",
    title: "Crop Doc — AI-Powered Leaf Disease Detection",
    description:
      "Built live leaf-disease scanning with TensorFlow.js, delivering instant chemical and natural remedies. Engineered offline scan queuing with auto-sync — diagnosis works reliably with zero connectivity. Shipped JWT authentication, a community forum, and a farmer progress-tracking dashboard.",
    techTags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "TensorFlow.js",
    ],
    images: ["/projects/crop1.png", "/projects/crop2.png", "/projects/crop3.png"],
    links: {
      github: "https://github.com/durga-ojha611",
      demo: "https://crop-doc-osoq.vercel.app",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Data Science & Generative AI",
      issuer: "ESG Institute",
      icon: "🤖",
      url: "/data_science_certificate.jpg",
    },
    {
      name: "Alpha (DSA with Java)",
      issuer: "Apna College",
      icon: "🎓",
      url: "/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6 (1).pdf",
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      icon: "☕",
    },
  ],
  // Link to the DSA certificate PDF served from public folder
  viewAllUrl: "/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6 (1).pdf",
};

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "Govt. College Bahadurgarh",
  cgpa: "9.13",
  graduation: "Expected 08/2028",
  twelfth: {
    level: "Senior Secondary",
    school: "Sarvodaya Kanya Vidyalaya Qutubgarh",
    subject: "Class XII",
    cgpa: "9.12",
    year: "2024",
  },
};

export const footerContent = {
  taglines: [
    "Full Stack Development",
    "MERN Stack · Next.js",
    "AI-Powered Applications",
  ],
  credential: "BCA · CGPA 9.13",
  copyright: `© ${new Date().getFullYear()} Durga | Built with React`,
};

// EmailJS Configuration
// Set VITE_EMAILJS_* environment variables in a .env file to enable
export const emailjsConfig = {
  serviceId:
    import.meta.env?.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
