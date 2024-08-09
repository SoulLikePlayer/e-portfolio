import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Biographie from './components/article/Biographie';
import Competence from './components/article/Competence';
import Project from './components/article/Project';

function App() {
  const [content, setContent] = useState(null);
  const [data, setData] = useState(null);

  const handleContentChange = (newContent, newData) => {
    setContent(newContent);
    setData(newData);
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
          {content === 'biographie' && data && <Biographie data={data} closeSquare={closeSquare} />}
          {content === 'competence' && data && <Competence skills={data} closeSquare={closeSquare}/>}
          {content === 'project' && data && <Project projects={data} closeSquare={closeSquare}/>}
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Content onContentChange={handleContentChange} />} />
          <Route path="/ContactMe" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
