import React from 'react';
import ProjectCarousel from '../ProjectCarousel';

const Project = ({ closeSquare }) => {
  const projects = [
  {
    "title": "EvoDict",
    "description": "EvoDict est une combinaison de Evolution Dictionnary...",
    "github": "https://github.com/SoulLikePlayer/Evodict",
    "state": "Error"
  },
  {
    "title": "E-Porfolio",
    "description": "Mon portfolio est une vitrine interactive de mes compétences...",
    "github": "https://github.com/SoulLikePlayer/e-portfolio",
    "state": "Waiting"
  },
  {
    "title": "ZenTask",
    "description": "ZenTask est une application de gestion de tâches intuitive...",
    "github": "https://github.com/SoulLikePlayer/ZenTask",
    "state": "Waiting"
  },
  {
    "title": "IHNMAIMS Site Web | REACT",
    "description": "'IHNMAIMS Site web' est un site web react...",
    "github": "https://github.com/SoulLikePlayer/IHNMAIMS-Site",
    "state": "Waiting"
  },
  {
    "title": "Simulation Systeme Solaire | Rust",
    "description": "Simulation interactive d'un système solaire en Rust...",
    "github": "https://github.com/SoulLikePlayer/Simulation---Systeme-Solaire--Rust",
    "state": "Complete"
  },
  {
    "title": "Quote Generator",
    "description": "Un générateur de citations inspirantes...",
    "github": "https://github.com/SoulLikePlayer/quote-generator",
    "state": "Complete"
  }
];


  return (
    <div>
      <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1>Mes projets</h1>
      </section>
      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default Project;
