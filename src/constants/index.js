import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sqlserver,
  java,
  company,
  hrms,
  movieapp,
  memories
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SQL Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MS SQL Server",
    icon: sqlserver,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Software Trainee",
    company_name: "COGNITIVE PLATFORM SOLUTIONS",
    icon: company,
    iconBg: "#383E56",
    date: "January 2024 - August 2024",
    points: [
      "Created web forms and screens in the low-code builder and configured them to store form data into MS SQL Server.",
      "Assisted in improving development efficiency by leveraging reusable components and low-code tools.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "TAMAN CORP",
    icon: company,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Developed responsive ERP modules (Student Management, Administration workflows) using the iProof low-code platform for institutions like IITs and NITs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrated OpenAI’s ChatGPT API to convert user-submitted project descriptions into structured overviews, module lists, and database schemas, rendered on a user-friendly interface.",
      "Contributed to a No-Code Builder project to reduce development time by 75%, focusing on process creation, UX optimization, and backend configuration.",
      "Developed a certificate generator using Puppeteer by converting dynamic HTML templates with DB data into print-ready PDFs.",
      "Worked with Microsoft SQL Server to create stored procedures, triggers, views, functions, jobs, and dynamic SQL queries for backend operations.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://xsgames.co/randomusers/assets/avatars/female/35.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://xsgames.co/randomusers/assets/avatars/male/23.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://xsgames.co/randomusers/assets/avatars/female/65.jpg",
  },
];

const projects = [
  {
    name: "Employee Management System",
    description:
      "Developed a responsive web-based HRMS using React (Vite) and Node.js/Express. Included secure authentication, employee and organization management modules, and RESTful APIs for backend operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
       {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: hrms,
    source_code_link: "https://github.com/Srini255/Employee_Management",
    backend_code_link:"https://github.com/Srini255/HRMSAPI"
  },
  {
    name: "Movi Search Web App",
    description:
      "Movie search web app built with React, Vite, TMDB API, and Appwrite to display trending movies and detailed movie information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appWrite",
        color: "green-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/Srini255/Movie-app",
  },
  {
    name: "Memories",
    description:
      "The Memories App is a full-stack project for sharing and storing memories, built with React (frontend) and Node.js/Express (backend).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mangodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/Srini255/Memories",
  },
];

export { services, technologies, experiences, testimonials, projects };