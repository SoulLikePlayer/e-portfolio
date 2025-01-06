import React from 'react';
import { PassionCarousel } from '../composents/Carousel';
import { passion } from '../data/passion';

import '../../styles/article/passions.css';


const Project = ({ closeSquare }) => {
    return(
    <div className="passion-page">
      <button id="closeButton" className="close-btn" onClick={closeSquare}>&#x1F5D9;</button>
      <section className="intro-section text-center py-5">
        <h1 className="passion-title">Mes Passions</h1>
      </section>
      <PassionCarousel passion={passion} />
    </div>
    )
};

export default Project;