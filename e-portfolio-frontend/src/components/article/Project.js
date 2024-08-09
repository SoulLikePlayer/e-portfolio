import React from 'react';
import ProjectCarousel from '../ProjectCarousel'; // Assurez-vous que le chemin est correct

const Project = ({ projects, closeSquare }) => (
  <div>
    <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
    <section className="intro-section text-center py-5">
      <h1>Mes projets</h1>
    </section>
    <ProjectCarousel projects={projects} />
  </div>
);

export default Project;
