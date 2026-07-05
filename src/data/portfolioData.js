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
  location: "Delhi, DL 110081",
  phone: "+91 9311041261",
  emails: {
    primary: "d88177600@gmail.com",
    secondary: "",
  },
  summary:
    "Full Stack Developer skilled in React.js, Next.js, Node.js, Express.js, and MongoDB/MySQL (MERN stack), with hands-on experience building and deploying scalable, production-grade web apps. Strong foundation in data structures, algorithms, and system design.",
  resumeUrl: "/Durga_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/durga-ojha611",
  linkedin: "https://linkedin.com/in/durga-ojha",
  // instagram is removed as not provided — do NOT add an empty string (causes broken links)
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
        { name: "RESTful APIs", level: 90 },
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
      title: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Debugging", level: 90 },
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
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 80 },
        { name: "LCP & SEO Opt.", level: 85 },
      ],
    },
  ],
};

// Experience (formerly Internships)
export const experienceList = [
  {
    organization: "Youth United Council of India (YUCI)",
    role: "Frontend Developer — Web Development Team",
    duration: "June 2026 - Present",
    skills: [
      "Next.js Development",
      "Tailwind CSS",
      "Data Visualization",
      "Debugging & Code Review",
      "GitHub Branch Management",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "Git / GitHub"],
  },
];

// Achievements (formerly Leadership)
export const achievementsList = [
  {
    title: "1st Position — College Tech Fest",
    description:
      "Won the top prize by building and presenting a fully functional web project under time pressure, standing out for technical execution and innovation.",
    role: "Winner",
    badge: "Achievement",
  },
  {
    title: "National-Level Hackathon Competitor",
    description:
      "Core backend developer and presenter across 5+ hackathons. Built a blockchain-based expense-splitting app in a 2-day national hackathon, finishing 13th nationwide.",
    role: "Backend Developer",
    badge: "Hackathon",
  },
  {
    title: "Space-Tech Aggregator",
    description:
      "Architected the backend for a unified platform consolidating NASA and ISRO datasets into one consistent, queryable API interface.",
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
    id: "elan",
    number: "01",
    badge: "🚀 Live Platform",
    title: "ELAN — AI-Powered Luxury E-Commerce",
    description:
      "Developed and deployed a high-performance luxury fashion e-commerce app using Next.js 16 (SSR) and a scalable Node.js/Express backend. Engineered an AI semantic search engine using MongoDB Atlas Vector Search and OpenAI's text-embedding-3-small model.",
    techTags: [
      "Next.js 16",
      "Node.js",
      "MongoDB Atlas",
      "OpenAI API",
      "Zustand",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/durga-ojha611",
      demo: "https://elan-lime.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "cropdoc",
    number: "02",
    badge: "AI Application",
    title: "Cropdoc — AI-Powered Leaf Disease Detection",
    description:
      "Built real-time leaf scanning using live camera input and TensorFlow.js, with chemical and natural remedy recommendations. Designed a community forum and progress-tracking dashboard, optimizing for performance and scalability.",
    techTags: [
      "React.js",
      "TypeScript",
      "TensorFlow.js",
      "Firebase",
      "Supabase",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/durga-ojha611",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Sigma 40 DSA Program",
      issuer: "Apna College",
      icon: "🎓",
    },
  ],
  // Link to the DSA certificate PDF served from public folder
  viewAllUrl: "/certificate-sigma-40-dsa-67f7d79f6183f55a0c0f6bc6 (1).pdf",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Govt. College Bahadurgarh",
  cgpa: "9.13",
  graduation: "Expected 08/2028",
  twelfth: {
    level: "Senior Secondary (Class XII)",
    school: "Sarvodaya Kanya Vidyalaya Qutubgarh",
    subject: "Computer Science",
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
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
