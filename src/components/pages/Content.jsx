import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import '../../styles/square.css';
import '../../styles/neon.css';
import '../../styles/animation-article.css';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { articlesData } from '../data/article';

function Content({ onContentChange }) {
  const [articles, setArticles] = useState(articlesData);
  const [transitioning, setTransitioning] = useState(null);

  useEffect(() => {
    const neonBorders = document.querySelectorAll('.neon-border');

    function getRandomHSL() {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 100%, 50%)`;
    }

    function changeNeonColors() {
      neonBorders.forEach(border => {
        let currentHue = parseInt(border.dataset.hue, 10);
        currentHue = (currentHue + 1) % 360;
        const newColor = `hsl(${currentHue}, 100%, 50%)`;

        border.style.setProperty('--neon-color-1', newColor);
        border.style.setProperty('--neon-color-2', newColor);
        border.style.borderColor = newColor;
        border.style.boxShadow = `0 0 10px ${newColor}, 0 0 20px ${newColor}, 0 0 30px ${newColor}`;

        border.dataset.hue = currentHue;
      });
    }

    neonBorders.forEach(border => {
      const color = getRandomHSL();
      border.style.borderColor = color;
      border.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
      border.dataset.hue = parseInt(color.match(/\d+/)[0], 10);
    });

    const colorInterval = setInterval(changeNeonColors, 50);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  const toggleArticleContent = (index) => {
    setTransitioning(index);
    setTimeout(() => {
      setArticles(prevArticles => {
        const newArticles = [...prevArticles];
        const currentArticle = newArticles[index];

        switch (currentArticle.id) {
          case 'biographie':
            newArticles[index] = { id: 'competence', title: 'Mes compétences', content: 'Découvrez les différentes compétence apprise au long de mes experience' };
            break;
          case 'competence':
            newArticles[index] = { id: 'project', title: 'Mes projets', content: 'Découvrez les différents projets de développement fait' };
            break;
          case 'project':
            newArticles[index] = { id: 'biographie', title: 'Qui suis-je ?', content: 'Découvrez qui je suis, ma personnalité, mon github, mon numéro de téléphone, etc...' };
            break;
          case 'etude':
            newArticles[index] = { id: 'parcours', title: 'Mon Parcours', content: 'Découvrez mon parcours à travers une frise chronologique.' };
            break;
          case 'parcours':
            newArticles[index] = { id: 'localisation', title: 'Où je vis ?', content: 'Découvrez ma localisation.' };
            break;  
          case 'localisation':
            newArticles[index] = { id: 'etude', title: 'Que fais-je ?', content: 'Description de l\'article 2.' };
            break;
          default:
            break;
        }
        return newArticles;
      });
      setTransitioning(null);
    }, 500); // Durée de l'effet de transition
  };

  const handleArticleClick = (index) => {
    const contentType = articles[index].id;
    onContentChange(contentType);
  };

  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}>
      
      <section className="intro-section text-center py-5">
        <h2 className="text-4xl mb-4 eportfolio">
          <Typewriter words={['Bienvenue sur mon e-portfolio']} />
        </h2>
        <p className="text-gray-400">
          <Typewriter
            words={['Découvrez mon parcours, mes compétences et mes projets.']}
            cursor
            cursorStyle="|"
            loop
          />
        </p>
      </section>

      <section className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 mt-3 -mx-3">
          {articles.map((article, index) => (
            <div className="article-container" key={index}>
              <div
                className={`bg-white p-4 rounded shadow-md neon-border animated-article article${index + 1} h-full ${transitioning === index ? 'article-hidden' : ''}`}
                data-content={article.id}
                onClick={() => handleArticleClick(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2 titre">{article.title}</h2>
                <div className="article-content">
                  <p className="text-gray-600">{article.content}</p>
                </div>
              </div>
              <button id={`switch-article${index + 1}`} className="down-arrow" onClick={() => toggleArticleContent(index)}>▼</button>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Content;
