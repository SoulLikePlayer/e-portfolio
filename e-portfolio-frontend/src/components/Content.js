import React, { useEffect, useState } from 'react';
import '../styles/reset-tool.css';
import '../styles/style.css';
import '../styles/square.css';
import '../styles/neon.css';
import '../styles/animation-article.css';

function Content({ onContentChange }) {
  const [articles, setArticles] = useState([
    { id: 'biographie', title: 'Qui suis-je ?', content: 'Découvrez qui je suis, ma personnalité, mon github, mon numéro de téléphone, etc...' },
    { id: 'etude', title: 'Que fais-je ?', content: 'Description de l\'article 2.' },
    { id: 'futur', title: 'Qui je veux être ?', content: 'Description de l\'article 3.' },
  ]);

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
            newArticles[index] = { id: 'competence', title: 'Mes compétences', content: 'Description de l\'article 4.' };
            break;
          case 'competence':
            newArticles[index] = { id: 'project', title: 'Mes projets', content: 'Description de l\'article 6.' };
            break;
          case 'project':
            newArticles[index] = { id: 'biographie', title: 'Qui suis-je ?', content: 'Découvrez qui je suis, ma personnalité, mon github, mon numéro de téléphone, etc...' };
            break;
          case 'etude':
            newArticles[index] = { id: 'parcours', title: 'Mon Parcours scolaire', content: 'Description de l\'article 5.' };
            break;
          case 'parcours':
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

  const handleArticleClick = async (index) => {
    const contentType = articles[index].id;
    console.log(`http://${window.location.hostname}:5000/api/${contentType}`);
    const response = await fetch(`http://${window.location.hostname}:5000/api/${contentType}`);
    const fetchedData = await response.json();
    onContentChange(contentType, fetchedData);
  };

  return (
    <main>
      <section className="intro-section text-center py-5">
        <h2 className="text-4xl mb-4">Bienvenue sur mon e-portfolio</h2>
        <p className="text-gray-400">Découvrez mon parcours, mes compétences et mes projets.</p>
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
    </main>
  );
}

export default Content;
