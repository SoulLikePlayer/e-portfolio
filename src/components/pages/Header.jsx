import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaHome, FaMoon, FaEnvelope, FaBars, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/page/Header.css';
import Button from '@mui/material/Button';

function Header({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  document.addEventListener('scroll', console.log("scroll detected"));

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 992); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavbarToggle = () => {
    if (window.innerWidth <= 992) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <header className={`custom-header ${theme}`}>
      <nav className={`navbar navbar-expand-lg ${theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          {theme === 'dark' ? (
            <motion.div 
              className={`brand-icon ${theme}`}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
            >               
              <FaCode />
            </motion.div>
            ): (
            <div>
              <FaCode />
            </div>
          )}
            <span className="name"> Louis LAZARE</span>
          </Link>
          <button
            className={`navbar-toggler ${isOpen ? 'open' : ''} ${theme}`}
            type="button"
            onClick={handleNavbarToggle}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <FaBars className={`menu-icon ${theme}`} />
          </button>
          <motion.div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''} ${theme}`}
            id="navbarNav"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -30 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${theme}`} to="/">
                  <FaHome title="Accueil" className={`nav-icon ${theme}`} /> Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${theme}`} to="/ContactMe">
                  <FaEnvelope title="Contact" className={`nav-icon ${theme}`} /> Contactez moi
                </Link>
              </li>
            </ul>
            <div className="theme-toggle">
              <Button 
                variant="contained" 
                onClick={toggleTheme} 
                startIcon={theme === 'light' ? <FaMoon /> : <FaSun />}
                className={`theme-toggle-button ${theme}`}
              >
                {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
              </Button>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
