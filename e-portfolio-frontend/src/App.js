import React from 'react';

import './styles/reset-tool.css';
import './styles/style.css';
import './styles/square.css';
import './styles/neon.css';
import './styles/animation-article.css';

// Import des fichiers JavaScript
<<<<<<< HEAD
import './scripts/app.js';
=======
import './scripts/app.js'; 
>>>>>>> Stable_version
import './scripts/header.js';
import './scripts/main.js';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-light">
      <div className="square"></div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
