import React from 'react';
import ProjectCarousel from '../ProjectCarousel';

const Project = ({ closeSquare }) => {
  const projects = [
    {
      "title": "EvoDict",
      "description": "EvoDict est une combinaison de Evolution Dictionnary. c'est une classe pythons permettant de crée des dictionnaire (ou objet utilisant les dictionnaire) de manière plus simple en imposant des conditions.",
      "github": "https://github.com/SoulLikePlayer/Evodict"
    },
    {
      "title": "E-Porfolio",
      "description": "Mon portfolio est une vitrine interactive de mes compétences, parcours académique et projets. Il offre une expérience immersive avec des animations fluides et un design moderne, permettant aux visiteurs d'explorer mes réalisations de manière intuitive et captivante.",
      "github": "https://github.com/SoulLikePlayer/e-portfolio"
    },
    {
      "title": "ZenTask",
      "description": "ZenTask est une application de gestion de tâches intuitive développée en JavaFX, permettant aux utilisateurs de créer, organiser et suivre leurs tâches avec facilité grâce à une interface conviviale et des fonctionnalités avancées de gestion de données.",
      "github": "https://github.com/SoulLikePlayer/ZenTask"
    },
    {
      "title": "IHNMAIMS Site Web | REACT",
      "description": "'IHNMAIMS Site web' est un site web react utilisant du frontend et backend pour rendre hommage a l'univers de 'I Have No Mouth And I Must Scream'",
      "github": "https://github.com/SoulLikePlayer/IHNMAIMS-Site"
    },
    {
      "title": "Simulation Systeme Solaire | Rust",
      "description": "Simulation interactive d'un système solaire en Rust, permettant de visualiser les orbites des planètes et de leurs lunes autour du soleil.",
      "github": "https://github.com/SoulLikePlayer/Simulation---Systeme-Solaire--Rust"
    },
    {
      "title": "Quote Generator",
      "description": "Un générateur de citations inspirantes en ligne utilisant FastAPI pour le backend et une interface utilisateur simple en HTML/CSS/JavaScript.",
      "github": "https://github.com/SoulLikePlayer/quote-generator"
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
