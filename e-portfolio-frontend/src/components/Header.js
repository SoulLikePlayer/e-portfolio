import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';


function Header() {
  useEffect(() => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;
    const hamburgerMenu = document.querySelector('.first-button');

    lightModeBtn.addEventListener('click', function handleLightMode() {
      body.classList.remove('bg-dark', 'text-light');
      hamburgerMenu.classList.remove('light-mode');
      body.classList.add('bg-light', 'text-dark');
      hamburgerMenu.classList.add('dark-mode');
    });

    darkModeBtn.addEventListener('click', function handleDarkMode() {
      body.classList.remove('bg-light', 'text-dark');
      hamburgerMenu.classList.remove('dark-mode');
      body.classList.add('bg-dark', 'text-light');
      hamburgerMenu.classList.add('light-mode');
    });

    document.querySelector('.first-button').addEventListener('click', function handleHamburgerClick() {
      document.querySelector('.animated-icon1').classList.toggle('open');
    });

  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
            <div id="hamburger" className="animated-icon1 light-mode"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent20">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-cog" title="Paramètre"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" id="light-mode-btn" href="#">Light mode</a>
                  <a className="dropdown-item" id="dark-mode-btn" href="#">Dark mode</a>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-home" title="Accueil"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactMe">
                  <i className="fas fa-envelope" title="Contact"></i>
                </Link>
              </li>
              </ul>
           </div>   
        </div>
      </nav>
    </header>
  );
}

export default Header;
