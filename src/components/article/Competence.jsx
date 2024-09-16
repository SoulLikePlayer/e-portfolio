import React from 'react';
import '../../styles/article/Competence.css';
import { ComputerSkills  } from '../data/skills';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaAngular } from 'react-icons/fa'; 
import { SiRust, SiExpress, SiTailwindcss, SiFlask } from 'react-icons/si'; 
import { BsBootstrap } from "react-icons/bs";

const iconsMap = {
  HTML: <FaHtml5 color="#e34c26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  JavaScript: <FaJs color="#f7df1e" />,
  React: <FaReact color="#61dafb" />,
  'Node.js': <FaNodeJs color="#339933" />,
  Python: <FaPython color="#306998" />,
  Java: <FaJava color="#f89820" />,
  PHP: <FaPhp color="#777bb4" />,
  Rust: <SiRust color="#dea584" />,
  Express: <SiExpress color="#000000" />,
  'Tailwind CSS': <SiTailwindcss color="#38b2ac" />,
  Flask: <SiFlask color="#000000" />,
  Angular: <FaAngular color="#c3002f"/>,
  Bootstrap: <BsBootstrap color="#563d7c"/>,
};

const Competences = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Mes Compétences</h2>
          <div className="skills-grid">
            {ComputerSkills.map((skill) => (
              <div className="skill-card" key={skill}>
                <div className="skill-icon">
                  {iconsMap[skill] || <span className="fallback-icon">⚙️</span>}
                </div>
                <p className="skill-name">{skill}</p>
              </div>
            ))}
          </div>
    </section>
  );
};

export default Competences;
