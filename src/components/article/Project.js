import React from 'react';
import ProjectCarousel from '../composents/ProjectCarousel';

import { projects } from "../data/project";

const Project = ({ closeSquare }) => {
  return (
    <div>
      <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1>Mes projets</h1>
      </section>
      <ProjectCarousel projects={projects} />

      <section className="legend-container">
        <div className="legend-item">
          <div id="error-color" className="legend-color"></div>
          <span className="legend-text">Erreur</span>
        </div>
        <div className="legend-item">
          <div id="waiting-color" className="legend-color"></div>
          <span className="legend-text">En Attente</span>
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
