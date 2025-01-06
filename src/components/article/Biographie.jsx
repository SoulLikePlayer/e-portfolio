import React from 'react';
import '../../styles/article/Biographie.css';
import { data } from '../data/bio';

const Biographie = () => {
  return (
    <section className="biography-section">
      <div className="biography-header">
        <div className="avatar-container">
          <img src="../e-portfolio/img/profil.png" alt="profil" className="avatar" />
        </div>
        <div className="intro-text">
          <h1 className="name-title">{data.name}</h1>
          <p className="role">Développeur Full Stack</p>
          <p className="description">
            Passionné par le développement web et toujours à la recherche de nouvelles opportunités d'apprentissage, je combine mes compétences techniques avec une volonté inébranlable de m'améliorer continuellement.
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
        <div className="bio-paragraph">
          <p>Je m'appelle {data.name}, étudiant en informatique de deuxième année à l'IUT d'Informatique à Ifs. Bien que je ne sois peut-être pas le meilleur, je possède deux qualités essentielles qui me distinguent :</p> 
          <ul>
            <li><strong>Une volonté inébranlable de m'améliorer</strong></li>
            <li><strong>Une envie constante de progresser.</strong></li>
          </ul> 
          <p>Ces traits de caractère me permettent d'apprendre rapidement et de m'adapter efficacement aux nouvelles technologies.</p>
        </div>
        <p className="bio-paragraph">
          Depuis mes débuts en programmation, j'ai acquis une expertise dans des langages variés tels que Java, Python, JavaScript, et bien d'autres. Ma passion pour le développement se reflète dans des projets tels que "GitTutos", une plateforme éducative pour apprendre Git, que je développe actuellement. En plus de mes compétences techniques, mes intérêts pour la philosophie, notamment le stoïcisme, m'aident à aborder les défis avec une perspective analytique et résiliente.
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
