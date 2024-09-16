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
          Je suis {data.name}, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat rhoncus tincidunt. In posuere maximus diam vitae rutrum. Mauris gravida odio non nibh cursus, ut eleifend eros consequat. Curabitur id ullamcorper enim. Suspendisse tempus felis non maximus finibus. Cras eget urna elit. Vestibulum aliquet mi id libero luctus, quis ornare enim feugiat. Donec velit sem, imperdiet pulvinar nibh vitae, consequat dictum massa. Quisque posuere dapibus diam. In vitae massa ut tellus luctus bibendum. Vivamus ac urna et eros cursus maximus et at odio. Nulla eu augue vitae leo bibendum semper ut ac augue. Suspendisse ac accumsan ex. </p>
        <p className="bio-paragraph">
          Maecenas eu sollicitudin neque. Sed pharetra porttitor gravida. Suspendisse semper lectus nec vulputate accumsan. Phasellus consectetur pellentesque sem. Cras et eros in lorem accumsan tincidunt sed at eros. Etiam accumsan est in ante sodales cursus. Phasellus feugiat magna in ligula venenatis vehicula. Nunc sed fringilla justo, vel vestibulum purus. Integer quis luctus ipsum, quis lacinia lectus. Phasellus placerat, risus sed aliquet finibus, urna leo feugiat nulla, ac faucibus enim ipsum a augue. 
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
