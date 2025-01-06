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
const Etude = lazy(() => import('./components/article/Etude'));
const Passion = lazy(() => import('./components/article/Passions'));

const componentsMap = {
  'biographie': Biographie,
  'competence': Competence,
  'project': Project,
  'localisation': Localisation,
  'parcours': Parcours,
  'etude': Etude,
  'hobbit': Passion
};

function App() {
  const [content, setContent] = useState(null);
  const [theme, setTheme] = useState('light');
  const squareRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = 'light';
    }
  }, []);

  useEffect(() => {
    // Émettre un événement lorsque le thème change
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  }, [theme]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
    document.body.classList.add('square-open');
    if (squareRef.current) {
      squareRef.current.classList.add('show');
    }
  };

  const closeSquare = () => {
    if (squareRef.current) {
      squareRef.current.classList.remove('show');
    }
    document.body.classList.remove('square-open');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const SelectedComponent = componentsMap[content] || null;

  return (
    <Router basename="/e-portfolio">
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
