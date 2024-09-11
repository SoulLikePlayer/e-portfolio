/* This code snippet is a React component named `ProjectCarousel`. It is using the React library along
with the `Carousel` component from the `react-responsive-carousel` library to create a carousel of
projects. */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../styles/composents/Carousel.css";

const ProjectCarousel = ({ projects }) => {
  return (
    <Carousel 
      className="project-carousel" 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={5000} /* Réglage du temps d'attente */
      transitionTime={800} /* Transition plus fluide */
      swipeable={true} /* Swipe pour mobile */
    >
      {projects.map((project, index) => {
        let stateClass = '';
        if (project.state === 'Error') stateClass = 'error';
        if (project.state === 'Waiting') stateClass = 'waiting';
        if (project.state === 'Complete') stateClass = 'complete';

        return (
          <div key={index} className={`slide ${stateClass}`}>
            <h2 className="projectName">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="github-btn">Voir sur GitHub</button>
              </a>
            ) : (
              <button className="github-btn disabled">Pas de GitHub</button>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default ProjectCarousel;
