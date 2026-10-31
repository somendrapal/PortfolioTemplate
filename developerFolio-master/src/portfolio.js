/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Somendra Pal Gupta",
  title: "Frontend Developer",
  subTitle: emoji(
    "Frontend-focused Full-stack Engineer with 4+ years building React and TypeScript applications for pharma and e-commerce clients, including ZS Associates and Eli Lilly. Delivered 30% faster UI builds and 25% lower load times."
  ),
  resumeLink: "/Somendra%20Gupta%20CV%203531b2.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/somendrapal",
  linkedin: "https://www.linkedin.com/in/somendra-pal-gupta/",
  gmail: "somendragupta13@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills & Expertise",
  subTitle: "TECHNOLOGIES, PRACTICES, AND TOOLS FROM MY EXPERIENCE",
  skillCategories: [
    {
      category: "Languages",
      skills: [
        {name: "TypeScript", icon: "typescript"},
        {name: "JavaScript", icon: "javascript"},
        {name: "Java", icon: "openjdk"},
        {name: "C++", icon: "cplusplus"}
      ]
    },
    {
      category: "Frontend",
      skills: [
        {name: "React (Hooks)", icon: "react"},
        {name: "Context API", icon: "react"},
        {name: "HTML5", icon: "html5"},
        {name: "CSS3", icon: "css"},
        {name: "Responsive Design", icon: "css"},
        {name: "Next.js", icon: "nextdotjs"},
        {name: "Tailwind CSS", icon: "tailwindcss"},
        {name: "shadcn/ui", icon: "shadcnui"},
        {name: "MUI / Material UI", icon: "mui"},
        {name: "DOM", iconClass: "fas fa-code"},
        {name: "Frontend Architecture", iconClass: "fas fa-sitemap"}
      ]
    },
    {
      category: "State Management",
      skills: [
        {name: "Redux", icon: "redux"},
        {name: "Context API", icon: "react"},
        {name: "Redux Thunk", icon: "redux"},
        {name: "Redux Toolkit", icon: "redux"},
        {name: "TanStack Query", icon: "tanstack"},
        {name: "Middleware", iconClass: "fas fa-project-diagram"},
        {name: "Reducers", iconClass: "fas fa-compress-arrows-alt"},
        {name: "Selectors", iconClass: "fas fa-filter"}
      ]
    },
    {
      category: "Web Performance",
      skills: [
        {name: "Core Web Vitals", iconClass: "fas fa-tachometer-alt"},
        {name: "Code Splitting", iconClass: "fas fa-code-branch"},
        {name: "Lazy Loading", iconClass: "fas fa-hourglass-half"},
        {name: "Memoization", iconClass: "fas fa-memory"},
        {name: "Webpack", icon: "webpack"},
        {name: "Babel", icon: "babel"}
      ]
    },
    {
      category: "Testing & Quality",
      skills: [
        {name: "React Testing Library", icon: "testinglibrary"},
        {name: "Unit Testing", iconClass: "fas fa-vial"},
        {name: "ESLint", icon: "eslint"},
        {name: "Code Review", iconClass: "fas fa-code"}
      ]
    },
    {
      category: "Collaboration",
      skills: [
        {name: "Agile / Scrum", iconClass: "fas fa-sync-alt"},
        {name: "UI/UX Collaboration", iconClass: "fas fa-pencil-ruler"},
        {name: "Cross-functional Teams", iconClass: "fas fa-users"},
        {name: "Mentorship", iconClass: "fas fa-user-friends"}
      ]
    },
    {
      category: "Atlassian",
      skills: [
        {name: "JIRA", icon: "jirasoftware"},
        {name: "Confluence", icon: "confluence"}
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        {name: "RESTful APIs", iconClass: "fas fa-exchange-alt"},
        {name: "Node.js", icon: "nodedotjs"},
        {name: "JSON Web Token", icon: "jsonwebtokens"},
        {name: "Spring Boot", icon: "springboot"},
        {name: "FHIR", iconClass: "fas fa-heartbeat"}
      ]
    },
    {
      category: "Databases",
      skills: [
        {name: "PostgreSQL", icon: "postgresql"}
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        {name: "CI/CD", iconClass: "fas fa-code-branch"},
        {name: "GitHub Actions", icon: "githubactions"},
        {name: "AWS", iconClass: "fab fa-aws"},
        {name: "Git", icon: "git"},
        {name: "Jenkins", icon: "jenkins"},
        {name: "GitLab", icon: "gitlab"},
        {name: "NPM", icon: "npm"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jaypee University of Engineering & Technology",
      logo: "/juetlogo.png",
      subHeader:
        "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
      duration: "2021",
      desc: "Guna"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Developer",
      company: "ZS Associates",
      companylogo: "/ZS.png",
      date: "Jan 2026 – May 2026",
      desc: "Built scalable React and TypeScript analytics dashboards for omnichannel KPIs, serving 1,000+ sales representatives.",
      descBullets: [
        "Created a reusable shadcn/ui and Tailwind CSS design system adopted by 3 teams, reducing UI build time by 30%.",
        "Optimized Redux state and dashboard rendering, cutting load time by 25%.",
        "Applied TypeScript strict mode and shared API contracts across the platform."
      ]
    },
    {
      role: "Senior Frontend Developer",
      company: "Brandconn Digital Group",
      companylogo: "/Brandconn.webp",
      date: "Sep 2024 – Dec 2025",
      desc: "Developed responsive React and TypeScript e-commerce applications, including a storefront with catalog, cart, checkout, and order management.",
      descBullets: [
        "Built reusable typed components and Redux patterns, reducing state-related bugs by 40%.",
        "Customized Material UI components and partnered with designers on accessible, cross-browser interfaces.",
        "Deployed the storefront to AWS S3 using GitHub Actions CI/CD."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Screen Magic Mobile Media",
      companylogo: "/sms%20magic.webp",
      date: "Jan 2024 – Aug 2024",
      appUrl: "https://aus-app.sms-magic.com/app/#/login",
      desc: "Delivered modular React, Redux, and TypeScript components for a Zoho CRM-integrated messaging platform used by 500+ enterprise clients.",
      descBullets: [
        "Introduced TypeScript strict mode across a legacy codebase.",
        "Refactored Redux state into slices, reducing redundant logic by 40% and improving data load speed by 20%."
      ]
    },
    {
      role: "Software Developer",
      company: "Brandconn Digital Group",
      companylogo: "/Brandconn.webp",
      date: "Dec 2022 – Dec 2023",
      desc: "Built TypeScript-first React modules for a MERN e-commerce platform serving 10,000+ users per month.",
      descBullets: [
        "Improved page load time by 35% with code splitting, lazy loading, and memoization.",
        "Mentored a team of 4 on React, Redux, and TypeScript practices."
      ]
    },
    {
      role: "Software Engineer",
      company: "Mphasis Ltd.",
      companylogo: "/Mphasis.svg",
      date: "Sep 2021 – Dec 2022",
      desc: "Developed React, Redux, and TypeScript interfaces for a healthcare platform supporting 50,000+ records across 3 hospitals.",
      descBullets: [
        "Reduced platform latency by 30% and maintained 99.9% uptime.",
        "Delivered 50+ typed chatbot flows, automating 60% of manual query handling.",
        "Built accessible, responsive components meeting WCAG 2.1 AA."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "SELECTED WORK ACROSS ANALYTICS, HEALTHCARE, E-COMMERCE, AND CHATBOTS",
  projects: [
    {
      projectName: "Integrated Data Platform — Eli Lilly | ZS Associates",
      projectDesc:
        "Built typed React dashboards and a shared shadcn/ui + Tailwind design system for NBA analytics and omnichannel KPIs used by 1,000+ sales representatives. Redux performance work improved rendering speed by 25%."
    },
    {
      projectName: "MTH — Healthcare Platform",
      projectDesc:
        "Developed a React and TypeScript portal with FHIR interfaces for Patient, Observation, and Encounter resources across 3 hospital systems. Typed Redux data flows helped reduce latency by 30%."
    },
    {
      projectName: "Cricket Weapon — E-Commerce App",
      projectDesc:
        "Built a modular TypeScript and Redux storefront for cart, authentication, and product filters, serving 10,000+ monthly users. Code splitting and lazy loading reduced load time by 35% to under 2 seconds."
    },
    {
      projectName: "Cognitive Guru — Chatbot Platform",
      projectDesc:
        "Created 50+ typed chatbot flows for HR, insurance, banking, and telecom. Reusable intent-processing architecture automated 60% of high-volume queries and reduced fallback responses by 35%.",
      videoUrl: "https://www.youtube.com/watch?v=VmReR3bE8SE"
    },
    {
      projectName: "SMS-Magic — Zoho CRM Enhancement",
      projectDesc:
        "Revamped the Zoho CRM integration with React, Redux, and TypeScript, standardizing API interfaces and component contracts while reducing redundant logic by 40%.",
      appUrl: "https://aus-app.sms-magic.com/app/#/login",
      videoUrl:
        "https://www.youtube.com/watch?v=LJuuivStPPg&list=PL8lIWrJWpXWd52dPhbDbpcIkFbkKHtSlH&index=10"
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Recognition"),
  subtitle: "Selected certifications and award listed on my resume.",

  achievementsCards: [
    {
      title: "3rd Prize — Google Cloud Fest Hackathon",
      subtitle:
        "Google Cloud / HackerEarth · 2022. Built a conversational AI and FHIR-integrated healthcare solution for natural-language clinical data exchange.",
      footerLink: [
        {
          name: "View Project",
          url: "https://sites.google.com/view/fhiraa"
        },
        {
          name: "YouTube Channel",
          url: "https://www.youtube.com/@fhiraa1527/videos"
        }
      ]
    },
    {
      title: "Claude 101",
      subtitle: "Anthropic · April 2026"
    },
    {
      title: "Claude Code in Action",
      subtitle: "Anthropic · April 2026"
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Based in Gurugram, India. Get in touch about frontend and full-stack engineering opportunities.",
  number: "+91-7024469977",
  email_address: "somendragupta13@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
