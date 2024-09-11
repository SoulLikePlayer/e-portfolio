import React from 'react';
import ProjectCarousel from '../composents/ProjectCarousel';
import { projects } from "../data/project";

import '../../styles/article/Project.css'

const Project = ({ closeSquare }) => {
  return (
    <div className="project-page">
      <button id="closeButton" className="close-btn" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1 className="project-title">Mes Projets</h1>
      </section>
      <ProjectCarousel projects={projects} />
      <section className="legend-container">
        <div className="legend-item">
          <div id="error-color" className="legend-color"></div>
          <span className="legend-text">Problème</span>
        </div>
        <div className="legend-item">
          <div id="waiting-color" className="legend-color"></div>
          <span className="legend-text">En developpement</span>
        </div>
        <div className="legend-item">
          <div id="complete-color" className="legend-color"></div>
          <span className="legend-text">Complété</span>
        </div>
      </section>
    </div>
  );
};

export default Project;
