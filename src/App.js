import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/page/homepage';


function App() {
    return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
           </Routes>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
