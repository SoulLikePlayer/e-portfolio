import React from 'react';

function Content() {
  return (
    <main>
      <section className="intro-section text-center py-5">
        <h2 className="text-4xl mb-4">Bienvenue sur mon e-portfolio</h2>
        <p className="text-gray-400">Découvrez mon parcours, mes compétences et mes projets.</p>
      </section>
      
      <section className="my-8">
        {/* Articles principaux */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 mt-3 -mx-3">
          <div className="bg-white p-4 rounded shadow-md neon-border animated-article article1 h-full" data-content="biographie">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 titre">Qui suis-je ?</h2>
            <div className="article-content">
              <p className="text-gray-600">Description de l'article 1.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md neon-border animated-article article2 h-full" data-content="etude">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 titre">Que fais-je ?</h2>
            <div className="article-content">
              <p className="text-gray-600">Description de l'article 2.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md neon-border animated-article article3 h-full" data-content="futur">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 titre">Qui je veux être ?</h2>
            <div className="article-content">
              <p className="text-gray-600">Description de l'article 3.</p>
            </div>
          </div>
        </div>

        {/* Boutons de commutation d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 mt-3 -mx-3">
          <button id="switch-article1" className="down-arrow">▼</button>
          <button id="switch-article2" className="down-arrow">▼</button>
          <button id="switch-article3" className="down-arrow">▼</button>
        </div>
      </section>
    </main>
  );
}

export default Content;
