import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import RouteAnimer from './components/composents/RouteAnimer';
import Biographie from './components/article/Biographie';
import Competence from './components/article/Competence';
import Project from './components/article/Project';
import Localisation from './components/article/Localisation';
import Parcours from './components/article/Parcours';

const componentsMap = {
  'biographie': Biographie,
  'competence': Competence,
  'project': Project,
  'localisation': Localisation,
  'parcours': Parcours,
};

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

  const SelectedComponent = componentsMap[content] || null;

  return (
    <Router>
      <div>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <div className="square">
          <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
          {SelectedComponent && <SelectedComponent closeSquare={closeSquare} />}
        </div>
        <RouteAnimer onContentChange={handleContentChange} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
