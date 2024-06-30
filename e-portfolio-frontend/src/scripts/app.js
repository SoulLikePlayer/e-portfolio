document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('.animated-article');
  const square = document.querySelector('.square');

  const switchArticle1 = document.getElementById("switch-article1");
  const switchArticle2 = document.getElementById("switch-article2");
  const switchArticle3 = document.getElementById("switch-article3");

  const switchButtons = document.getElementsByClassName("down-arrow");

  // Fonction pour basculer le contenu de l'article
  function toggleArticleContent(article) {
    const dataContent = article.getAttribute('data-content');
    const h2 = article.querySelector('h2');
    const p = article.querySelector('p');

    // Mettre à jour le contenu en fonction de l'attribut data-content
    switch (dataContent) {
      case 'biographie':
        h2.textContent = "Mes compétences";
        p.textContent = "Description de l'article 4.";
        article.setAttribute('data-content', 'competence');
        break;
      case 'competence':
        h2.textContent = "Mes projets";
        p.textContent = "Description de l'article 6.";
        article.setAttribute('data-content', 'project');
        break;
      case 'project':
        h2.textContent = "Qui suis-je ?";
        p.textContent = "Description de l'article 1.";
        article.setAttribute('data-content', 'biographie');
        break;
      case 'etude':
        h2.textContent = "Mon Parcours scolaire";
        p.textContent = "Description de l'article 5.";
        article.setAttribute('data-content', 'parcours');
        break;
      case 'parcours':
        h2.textContent = "Que fais-je ?";
        p.textContent = "Description de l'article 2.";
        article.setAttribute('data-content', 'etude');
        break;
      // Ajouter des cas pour d'autres valeurs de data-content si nécessaire
      default:
        break;
    }
  }

  // Écouter les clics sur les boutons de changement d'article
  Array.from(switchButtons).forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.target;
      let article;

      if (clickedButton === switchArticle1) {
        article = document.querySelector(".article1");
      } else if (clickedButton === switchArticle2) {
        article = document.querySelector(".article2");
      } else if (clickedButton === switchArticle3) {
        article = document.querySelector(".article3");
      }

      if (article) {
        // Ajouter un délai pour permettre la transition de se terminer avant de changer de contenu
        article.classList.add('article-hidden');
        setTimeout(() => {
          toggleArticleContent(article);
          article.classList.remove('article-hidden');
        }, 500); // Ajuster ce délai selon la durée de transition CSS
      }
    });
  });

  // Écouter les clics sur les articles pour afficher un contenu détaillé
  articles.forEach(article => {
    article.addEventListener('click', async () => {
      square.classList.add('show');
      const content = article.getAttribute('data-content');
      square.innerHTML = await getContentHTML(content);
    });
  });

  // Ajouter les événements mouseenter et mouseleave pour chaque article
  articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
      article.classList.add('hover');
    });

    article.addEventListener('mouseleave', () => {
      article.classList.remove('hover');
    });
  });

  // Fermer le contenu détaillé
  document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'closeButton') {
      square.classList.remove('show');
      square.innerHTML = '';
    }
  });

  // Fonction asynchrone pour générer le HTML du contenu détaillé
  async function getContentHTML(content) {
    switch (content) {
      case 'biographie':
        try {
          const response = await fetch('http://localhost:5000/api/personal-info');
          const data = await response.json();
          const { name, email, phone, github } = data;

          return `
            <button id="closeButton">&#x1F5D9;</button>
            <section class="intro-section text-center py-5">
              <h1>${name}</h1>
            </section>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4 -mx-4">
              <div class="rounded bg-white p-4 col-span-6 rounded shadow-md text-dark article-container">  
                <p>Email: ${email}</p><br />
                <p>Téléphone: ${phone}</p><br /> 
                <p>Github: <a href="${github}" target="_blank">${github}</a></p>
              </div>
            </div>  
          `;
        } catch (error) {
          console.error('Error fetching personal info:', error);
          return '<p>Erreur de chargement des données</p>';
        }

      case 'competence':
        try {
          const response = await fetch('http://localhost:5000/api/skills');
          const data = await response.json();

          return `
            <button id="closeButton">&#x1F5D9;</button>
            <section class="intro-section text-center py-5">
              <h1>Compétences</h1>
            </section>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4 -mx-4">
              <div class="rounded bg-white p-4 col-span-6 rounded shadow-md text-dark article-container">
                <ul>${data.map(skill => `<li>${skill}</li>`).join('')}</ul>
              </div>
            </div>
          `;
        } catch (error) {
          console.error('Error fetching skills:', error);
          return '<p>Erreur de chargement des données</p>';
        }

      case 'project':
        try {
          const response = await fetch('http://localhost:5000/api/projects');
          const data = await response.json();

          return `
            <button id="closeButton">&#x1F5D9;</button>
            <section class="intro-section text-center py-5">
              <h1>Projets</h1>
            </section>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4 -mx-4 project">
              <div class="rounded bg-white p-4 col-span-6 rounded shadow-md text-dark article-container">
                ${data.map(project => `
                  <div class="project">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.github ? `<p><a href="${project.github}" target="_blank">GitHub</a></p>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        } catch (error) {
          console.error('Error fetching projects:', error);
          return '<p>Erreur de chargement des données</p>';
        }

      default:
        return '';
    }
  }
});
