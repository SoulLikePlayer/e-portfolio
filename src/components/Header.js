import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaHome, FaMoon, FaEnvelope, FaBars, FaCode } from 'react-icons/fa';
import '../styles/Header.css';

function Header({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <FaCode className="brand-icon" /> Mon E-Portfolio
          </Link>
          <button
            className={`navbar-toggler ${isOpen ? 'open' : ''}`}
            type="button"
            onClick={handleNavbarToggle}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <FaBars className="menu-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/">
                  <FaHome title="Accueil" className='brand-icon'/> Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/ContactMe">
                  <FaEnvelope title="Contact" className='brand-icon'/> Contactez moi
                </Link>
              </li>
            </ul>
            <div className="theme-toggle">
              <label className="theme-switch" htmlFor="theme-checkbox">
                <input
                  type="checkbox"
                  id="theme-checkbox"
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
                <div className="slider round">
                  <FaSun className={`theme-icon sun ${theme === 'dark' ? 'hidden' : ''}`} />
                  <FaMoon className={`theme-icon moon ${theme === 'light' ? 'hidden' : ''}`} />
                </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
