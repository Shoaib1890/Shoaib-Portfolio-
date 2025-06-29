import {
  python,
  streamlit,
  typescript,
  nextjs,
  cplus,
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/SwitchiT-logo.jpg";




const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Python",
    icon: python,
  },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  {
    name: "git",
    icon: git,
  },
  
  
  
  {
    name: "Streamlit",
    icon: streamlit,
  },
  
];

export const programmingLanguages = [
  { name: "C++", icon: cplus },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
];

export const webDevSkills = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },  
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "Next.js", icon: nextjs },
];

export const databaseSkills = [
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
];

export const tools = [
  { name: "Git", icon: git },
];

export const otherSkills = [
  "Responsive Web Design",
  "Data Structure and Algorithms",
  "Competitive Programming",
  "Object Oriented Programming",
  "DBMS",
  "Operating System",
];


const experiences = [
  {
    title: "SDE Intern",
    company_name: "SwitchiT",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2025 - present",
    points: [
      "Built and maintained web apps using MERN stack, focusing on React and Next.jsm",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "SwitchiT",
    description:
      "A recruiter hiring platform with dynamic UI components like candidate cards, filters, and modals. Built for seamless navigation and efficient recruitment workflows.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "typescript", color: "white-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "redux", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: null,
  },
  {
    name: "Campus Portal",
    description:
      "A smart campus issue resolution platform using ML to classify complaints and suggest the correct point of contact with estimated resolution times.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
      { name: "pandas", color: "white-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Shoaib1890/Campus-Resolution-Portal.git",
  },
  {
  name: "TaskMate - ToDo App",
  description:
    "A simple and elegant ToDo app to manage daily tasks with features like add, delete, and mark-as-done. Designed for productivity with a clean, responsive interface.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "css", color: "pink-text-gradient" },
    { name: "javascript", color: "white-text-gradient" },
  ],
    image: project3,
    source_code_link: "https://github.com/Shoaib1890/Todo-List1.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
