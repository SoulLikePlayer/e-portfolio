import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Biographie from './components/article/Biographie';
import Competence from './components/article/Competence';
import Project from './components/article/Project';
import Localisation from './components/article/Localisation';
import Parcours from './components/article/Parcours';
import RouteAnimer from './components/RouteAnimer';

function App() {
  const [content, setContent] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const handleContentChange = (newContent) => {
    setContent(newContent);
    document.querySelector('.square').classList.add('show');
  };

  const closeSquare = () => {
    document.querySelector('.square').classList.remove('show');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <div className="square">
          <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
          {content === 'biographie' && <Biographie closeSquare={closeSquare} />}
          {content === 'competence' && <Competence closeSquare={closeSquare} />}
          {content === 'project' && <Project closeSquare={closeSquare} />}
          {content === 'localisation' && <Localisation closeSquare={closeSquare} />}
          {content === 'parcours' && <Parcours closeSquare={closeSquare} />}
        </div>
        <RouteAnimer onContentChange={handleContentChange} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
