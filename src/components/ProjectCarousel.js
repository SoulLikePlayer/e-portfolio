import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../styles/Carousel.css";

const ProjectCarousel = ({ projects }) => {
  return (
    <Carousel className="project-carousel" showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
      {projects.map((project, index) => {
        let stateClass = '';
        if (project.state === 'Error') stateClass = 'error';
        if (project.state === 'Waiting') stateClass = 'waiting';
        if (project.state === 'Complete') stateClass = 'complete';

        return (
          <div key={index} className={`slide ${stateClass}`} style={{ padding: '20px', textAlign: 'center' }}>
            <h2 className='projectName'>{project.title}</h2>
            <p>{project.description}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                  Voir sur GitHub
                </button>
              </a>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default ProjectCarousel;
