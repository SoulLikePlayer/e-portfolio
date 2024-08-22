import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Biographie from './components/article/Biographie';
import Competence from './components/article/Competence';
import Project from './components/article/Project';
import RouteAnimer from './components/RouteAnimer';

function App() {
  const [content, setContent] = useState(null);
  const handleContentChange = (newContent) => {
    setContent(newContent);
    document.querySelector('.square').classList.add('show');
  };

  const closeSquare = () => {
    document.querySelector('.square').classList.remove('show');
  };

  return (
    <Router>
      <div>
        <div className="square">
          <button id="closeButton" onClick={closeSquare}>&#x1F5D9;</button>
          {content === 'biographie' && <Biographie closeSquare={closeSquare} />}
          {content === 'competence' && <Competence closeSquare={closeSquare} />}
          {content === 'project' && <Project closeSquare={closeSquare} />}
        </div>
        <Header />
        <RouteAnimer onContentChange={handleContentChange}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
