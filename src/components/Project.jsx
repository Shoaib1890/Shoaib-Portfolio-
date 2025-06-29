import React from "react";

const projects = [
  {
    title: "Recruiter Tool",
    techStack: "MERN Stack | Web Development",
    imageUrl: "/swithiT.png",
    liveLink: null,
    githubLink: null,
    note: "Confidential company project – links not shared."
  },
  {
    title: "Campus Resolution Portal",
    techStack: "Machine Learning | Streamlit",
    imageUrl: "/Campus_Portal.png",
    liveLink: "https://campus-resolution-app-vmrpq3jasndrr3qztfh2fs.streamlit.app/",
    githubLink: "https://github.com/Shoaib1890/Campus-Resolution-Portal.git",
  },
  {
    title: "Todo App",
    techStack: "JavaScript | React",
    imageUrl: "/TodoApp.png",
    liveLink: "https://todo-list1-roan.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Todo-List1.git",
  },
  {
    title: "Currency Convertor",
    techStack: "HTML | CSS | JavaScript | API", 
    imageUrl: "/CurrencyConvertor.png",
    liveLink: "https://currency-convertor-tan-kappa.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Currency-Convertor.git",
  },
  {
    title: "Amazon Clone",
    techStack: "HTML | CSS | JavaScript",
    imageUrl: "/Amazon.png",
    liveLink: "https://clone-amazon-in-gg1o.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Clone-Amazon.in.git",
  },
  {
    title: "Tic Tac Toe",
    techStack: "HTML | CSS | JavaScript",
    imageUrl: "/TicTacToe.png",
    liveLink: "https://tic-tac-toe-kohl-omega-36.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Tic-Tac-Toe.git",
  },
];

const ProjectCard = ({ project }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white px-4 text-center">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mb-2">{project.techStack}</p>
      <div className="flex space-x-4 mt-2">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          🔗 Live
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          💻 Code
        </a>
      </div>
    </div>
  </div>
);

const ProjectSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 text-white" id="projects">
      <h2 className="text-4xl font-bold mb-6">MY WORKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
