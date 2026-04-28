import { github, linkedin, contact } from "../assets/icons";
import { hsbc, iiit } from "../assets/images";

import {
  css,
  express,
  git,
  github as githubIcon,
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  tailwindcss,
  pricewise,
  threads,
  car
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React JS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node JS",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express JS",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: githubIcon,
    name: "GitHub",
    type: "Version Control",
  }
];

export const experiences = [
  {
    title: "Data Analyst",
    company_name: "HSBC",
    icon: hsbc,
    iconBg: "#a2d2ff",
    date: "February 2026 - Present",
    points: [
      "Currently working as a Data Analyst at HSBC.",
      "Handling data analysis, reporting, and business insights generation.",
      "Working with databases, dashboards, and performance monitoring.",
      "Supporting business decisions using analytical and technical solutions."
    ],
  },

  {
    title: "Teaching Assistant - Cyber Security",
    company_name: "IIIT Allahabad",
    icon: iiit,
    iconBg: "#fbc3bc",
    date: "Previous Role",
    points: [
      "Assisted faculty in Cyber Security lab sessions and practicals.",
      "Helped students in assignments, doubt solving, and lab execution.",
      "Supported teaching for more than 150 undergraduate students.",
      "Worked on networking, security concepts, and implementation tasks."
    ],
  },

  {
    title: "Teaching Assistant - Programming Languages",
    company_name: "IIIT Allahabad",
    icon: iiit,
    iconBg: "#b7e4c7",
    date: "Previous Role",
    points: [
      "Worked as Teaching Assistant for Principles of Programming Languages.",
      "Conducted doubt-solving sessions and practical lab guidance.",
      "Supported coding assignments and academic project discussions.",
      "Improved student understanding of core programming concepts."
    ],
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Music Streaming System using Docker",
    description:
      "Engineered a microservice-based music streaming platform using ReactJS, Python (Flask), MySQL, Docker, and Docker Compose. Developed scalable backend APIs, secure authentication, role-based access control, and containerized deployment for smooth service orchestration and efficient management.",
    link: "https://github.com/MohdRizwan9887/Music-Streaming-App",
  },

  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "STH_ICO_TOKEN_SALE",
    description:
      "Built a blockchain-based decentralized application for token sale management using Solidity and smart contracts. Implemented secure token distribution, Ethereum blockchain integration, and transparent transaction handling with a focus on blockchain security and decentralized finance concepts.",
    link: "https://github.com/MohdRizwan9887/STH_ICO_TOKEN_SALE",
  },

  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "3D Developer Portfolio Website",
    description:
      "Currently building a responsive 3D portfolio website using React JS, Tailwind CSS, Three.js, and React Three Fiber to showcase projects, work experience, technical skills, and professional profile with interactive 3D elements and modern UI design.",
    link: "https://mohd-rizwan-ansari.netlify.app/",
  }
];