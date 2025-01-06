import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../styles/composents/Carousel.css";

export const ProjectCarousel = ({ projects }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-header">Projets</div>
      <Carousel
        className="project-carousel"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={6000}
        transitionTime={700}
        swipeable
      >
        {projects.map((project, index) => {
          const stateClass = project.state === 'Error' ? 'error' :
            project.state === 'Waiting' ? 'waiting' :
            project.state === 'Complete' ? 'complete' : '';

          return (
            <div key={index} className={`slide ${stateClass}`}>
              <h2 className="Name">{project.title}</h2>
              <p className="description">{project.description}</p>
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
      <div className="carousel-footer">Découvrez mes projets</div>
    </div>
  );
};

export const PassionCarousel = ({ passion }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-header">Passions</div>
      <Carousel
        className="passion-carousel"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={600}
        swipeable
      >
        {passion.map((item, index) => (
          <div key={index} className="slide">
            <h2 className="Name">{item.title}</h2>
            {item.citation && (
              <div className="quote-container">
                <h3>
                  <div className="quote">{item.citation}</div>
                  <div className="author">- {item.author}</div>
                  <br />
                </h3>
              </div>
            )}
            <p className="description">{item.description}</p>
          </div>
        ))}
      </Carousel>
      <div className="carousel-footer">Explorez mes passions</div>
    </div>
  );
};
