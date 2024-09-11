import React from 'react';
import '../../styles/article/Biographie.css';
import { data } from '../data/bio';

const Biographie = () => {
  return (
    <section className="biography-section">
      <div className="biography-header">
        <div className="avatar-container">
          <img src={data.photo} alt="profil" className="avatar" />
        </div>
        <div className="intro-text">
          <h1 className="name-title">{data.name}</h1>
          <p className="role">Développeur Full Stack</p>
          <p className="description">
            Passionné par le développement web, j'aime créer des solutions élégantes et efficaces qui répondent aux besoins des utilisateurs.
          </p>
          <div className="action-buttons">
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Mon GitHub
            </a>
            <a href={`mailto:${data.email}`} className="btn-secondary">Me Contacter</a>
          </div>
        </div>
      </div>
      <div className="biography-details">
        <h2 className="section-title">À propos de moi</h2>
        <p className="bio-paragraph">
          Je suis {data.name}, développeur full stack avec une solide expertise en création d'applications web performantes. Ma spécialité est d'intégrer front-end et back-end avec des frameworks comme React, Node.js, et bien d'autres. 
        </p>
        <p className="bio-paragraph">
          J'ai eu la chance de travailler sur des projets variés, allant de sites vitrines aux plateformes d'entreprise complexes. J'attache une importance particulière à la qualité du code et à l'expérience utilisateur.
        </p>
        <div className="contact-info">
          <p>Email: <a href={`mailto:${data.email}`} className="bio-link">{data.email}</a></p>
          <p>Téléphone: <a href={`tel:${data.phone}`} className="bio-link">{data.phone}</a></p>
        </div>
      </div>
    </section>
  );
};

export default Biographie;
