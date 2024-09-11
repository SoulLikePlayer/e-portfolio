import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import RouteAnimer from './components/composents/RouteAnimer';

const Biographie = lazy(() => import('./components/article/Biographie'));
const Competence = lazy(() => import('./components/article/Competence'));
const Project = lazy(() => import('./components/article/Project'));
const Localisation = lazy(() => import('./components/article/Localisation'));
const Parcours = lazy(() => import('./components/article/Parcours'));

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
  const squareRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme; // Applique la classe sauvegardée
    } else {
      document.body.className = 'light'; // Applique le thème par défaut
    }
  }, []);



  const handleContentChange = (newContent) => {
    setContent(newContent);
    document.body.classList.add('square-open'); // Empêche le scroll sur le body
    if (squareRef.current) {
      squareRef.current.classList.add('show');
    }
  };

  const closeSquare = () => {
    if (squareRef.current) {
      squareRef.current.classList.remove('show');
    }
    document.body.classList.remove('square-open'); // Réactive le scroll sur le body
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Applique la nouvelle classe
    localStorage.setItem('theme', newTheme);
  };



  const SelectedComponent = componentsMap[content] || null;

  return (
    <Router>
      <div>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <div className="square" ref={squareRef}>
          <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
          <Suspense fallback={<div>Loading...</div>}>
            {SelectedComponent && <SelectedComponent closeSquare={closeSquare} />}
          </Suspense>
        </div>
        <RouteAnimer onContentChange={handleContentChange} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
