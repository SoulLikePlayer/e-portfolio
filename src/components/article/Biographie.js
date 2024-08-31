import React from 'react';
import '../../styles/article/Biographie.css';

import { data } from '../data/bio';

const Biographie = () => {
  return (
    <div className="biography-container">
      <section className="intro-section">
        <h1 className="biography-title">{data.name}</h1>
        <p className="tagline">Développeur Full Stack</p>
      </section>
      <div className="biography-content">
        <div className="bio-details">
          <p className="bio-text">
            Je suis {data.name}, un développeur full stack. Je maîtrise plusieurs langages de programmation, frameworks et technologies, ce qui me permet de concevoir et développer des applications robustes et évolutives. Mon approche est axée sur la qualité du code, la performance, et l'expérience utilisateur.
          </p>
          <p className="bio-text">
            Mon parcours m'a permis de travailler sur divers projets, allant de simples sites web à des applications complexes. Je suis toujours à l'affût des dernières tendances technologiques pour offrir les meilleures solutions à mes clients.
          </p>
          <div className="contact-info">
            <p>Email: <a href={`mailto:${data.email}`} className="bio-link">{data.email}</a></p>
            <p>Téléphone: <a href={`tel:${data.phone}`} className="bio-link">{data.phone}</a></p>
            <p><a href={data.github} target="_blank" rel="noopener noreferrer" className="bio-link">Voir mon GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biographie;
