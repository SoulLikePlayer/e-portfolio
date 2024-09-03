import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import '../../styles/square.css';
import '../../styles/neon.css';
import '../../styles/animation-article.css';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { articlesData } from '../data/article';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

function Content({ onContentChange }) {
  const [articles, setArticles] = useState(articlesData);
  const [transitioning, setTransitioning] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const neonBorders = document.querySelectorAll('.neon-border');

    const getRandomHSL = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 100%, 50%)`;
    };

    const changeNeonColors = () => {
      neonBorders.forEach((border) => {
        let currentHue = parseInt(border.dataset.hue, 10);
        currentHue = (currentHue + 1) % 360;
        const newColor = `hsl(${currentHue}, 100%, 50%)`;

        border.style.setProperty('--neon-color-1', newColor);
        border.style.setProperty('--neon-color-2', newColor);
        border.style.borderColor = newColor;
        border.style.boxShadow = `0 0 10px ${newColor}, 0 0 20px ${newColor}, 0 0 30px ${newColor}`;

        border.dataset.hue = currentHue;
      });
    };

    neonBorders.forEach((border) => {
      const color = getRandomHSL();
      border.style.borderColor = color;
      border.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
      border.dataset.hue = parseInt(color.match(/\d+/)[0], 10);
    });

    const colorInterval = setInterval(changeNeonColors, 50);

    return () => clearInterval(colorInterval);
  }, []);

  const toggleArticleContent = (index) => {
    setTransitioning(index);
    setShowConfetti(true);
    setTimeout(() => {
      setArticles((prevArticles) => {
        const newArticles = [...prevArticles];
        const currentArticle = newArticles[index];

        switch (currentArticle.id) {
          case 'biographie':
            newArticles[index] = {
              id: 'competence',
              title: 'Mes compétences',
              content: 'Découvrez les différentes compétences acquises au fil de mes expériences.',
            };
            break;
          case 'competence':
            newArticles[index] = {
              id: 'project',
              title: 'Mes projets',
              content: 'Découvrez les différents projets de développement réalisés.',
            };
            break;
          case 'project':
            newArticles[index] = {
              id: 'biographie',
              title: 'Qui suis-je ?',
              content: 'Découvrez qui je suis, ma personnalité, mon GitHub, mon numéro de téléphone, etc...',
            };
            break;
          case 'etude':
            newArticles[index] = {
              id: 'parcours',
              title: 'Mon Parcours',
              content: 'Découvrez mon parcours à travers une frise chronologique.',
            };
            break;
          case 'parcours':
            newArticles[index] = {
              id: 'localisation',
              title: 'Où je vis ?',
              content: 'Découvrez ma localisation.',
            };
            break;
          case 'localisation':
            newArticles[index] = {
              id: 'etude',
              title: 'Que fais-je ?',
              content: 'Découvrez mes études et recherches en cours.',
            };
            break;
          default:
            break;
        }
        return newArticles;
      });
      setTransitioning(null);
      setShowConfetti(false);
    }, 500); // Transition duration
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
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <section className="intro-section text-center py-5">
        <h2 className="text-4xl mb-4 eportfolio">
          <Typewriter words={['Bienvenue sur mon e-portfolio']} />
        </h2>
        <p className="text-gray-400">
          <span>Découvrez </span>
          <Typewriter
            words={['mon parcours', 'mes compétences', 'mes projets', 'mon profil']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </section>

      <section className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 mt-3 -mx-3">
          {articles.map((article, index) => (
            <motion.div
              className="article-container"
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`bg-white p-4 rounded shadow-md neon-border animated-article article${index + 1} h-full ${
                  transitioning === index ? 'article-hidden' : ''
                }`}
                data-content={article.id}
                onClick={() => handleArticleClick(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2 titre">{article.title}</h2>
                <div className="article-content">
                  <p className="text-gray-600">{article.content}</p>
                </div>
              </div>
              <button
                id={`switch-article${index + 1}`}
                className="down-arrow"
                onClick={() => toggleArticleContent(index)}
              >
                <FaArrowDown />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Content;
