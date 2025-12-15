import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
    return (
    <Router basename="/">
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>

        </main>
        <footer>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
