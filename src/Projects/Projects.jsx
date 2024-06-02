import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMobileAlt, faAppleAlt, faPuzzlePiece, faServer, faBowlFood, faPlateWheat, faShoppingBag, faShoppingCart, faHospital, faHospitalAlt, faHospitalSymbol, faHospitalUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { FaGithub, FaHospital } from "react-icons/fa";
import { faNutritionix } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: "BoilerByte",
    description: "As a Scrum Master for this project, I worked with a team of 5 to develop a nutrition tracking app, BoilerByte, " + 
    "using the MERN stack (React, Node.js, Express, MongoDB). The web application allows users to log food items they ate at the Purdue" +
    " dining courts and local restaurants and track their nutrition." +
     " As a Scrum Master, I facilitated daily standups, sprint planning, and sprint retrospectives." +
     " I also worked on the front-end and back-end of the application.",
    icon: faPlateWheat,
    link: "https://github.com/jackpeng01/BoilerBytes",
    website: "https://boilerbytes.onrender.com/home",
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    readmore: true,
    github_avail: true,
  },
  {
    title: "Shell",
    description: "Wrote a shell emulation of bash and csh, with functionality for piping, input/output redirections, subshells, " + 
    "if statements, loops and wildcarding, in C/C++. This project was developed for CS 252: Systems Programming.",
    icon: faCode,
    link: "project3-link.html",
    tags: ['C', 'C++'],
    github_avail: false,
  },
  {
    title: "HTTP Web Sever",
    description: "Developed a HTTP web server in C++ that can handle multiple requests concurrently using threads. The server can " +
    "serve static files, handle GET requests, and supports CGI scripts. This project was developed for CS 252: Systems Programming.",
    icon: faServer,
    link: "project3-link.html",
    tags: ['C', 'C++'],
    readmore: true,
    github_avail: false,
  },
  {
    title: "Online Market Place",
    description: "Developed an online market place using Java that allows users to buy and sell items. The application supports " +
    "user authentication, item listing, item search, and item purchase. The application was developed for CS 180: Object Oriented Programming.",
    icon: faShoppingCart,
    link: "https://github.com/vidit-p/Project-5",
    tags: ['Java'],
    readmore: true, 
    github_avail: true,
  },
  {
    title: "BoilerBlock Browser Extension",
    description: "BoilerBlock (build for BoilerMake XI) is a browser estension made with Google Chrome's webrequest API that can block" +
    " unwanted redirects from websites that the user choses.",
    icon: faPuzzlePiece,
    link: "https://github.com/Andrewtho5942/boilerBlock",
    tags: ['Javascript', 'HTML', 'CSS'],
    github_avail: true,
  },
  {
    title: "Hospital management system",
    description: "Developed a hospital management system using Python and MySQL. The application allows hospital staff to add patients, " +
    "doctors, and appointments. It also includes a secure login system.",
    icon: faHospitalUser,
    tags: ['Python', 'MySQL'],
    github_avail: false,
  }
  // Add more project objects as needed
];

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (index) => {
    setExpandedCards(prevState =>
      prevState.includes(index)
        ? prevState.filter(cardIndex => cardIndex !== index)
        : [...prevState, index]
    );
  };

  return (
    <div id='projects' className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              <FontAwesomeIcon icon={project.icon} size="3x" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              {project.website && (
                  <a href={project.website} className="website-button" target='.blank'>Visit Website</a>
                  )}
              <p className={expandedCards.includes(index) ? "expanded" : ""}>
                {project.description}
              </p>
              {project.readmore && (
                <button onClick={() => toggleExpand(index)}>
                  {expandedCards.includes(index) ? "Show Less" : "Read More"}
                </button>
              )}
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <div className='project-links'>
                {project.github_avail && (
                  <a href={project.link} className="github-icon" target='.blank'><FaGithub /></a>
                )}   
              </div>        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
