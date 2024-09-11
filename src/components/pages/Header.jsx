import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaHome, FaMoon, FaEnvelope, FaBars, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/page/Header.css';
import Button from '@mui/material/Button';

function Header({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <motion.div 
              className="brand-icon" 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <FaCode />
            </motion.div>
             Mon E-Portfolio
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
          <motion.div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarNav"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -30 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/">
                  <FaHome title="Accueil" className="brand-icon" /> Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/ContactMe">
                  <FaEnvelope title="Contact" className="brand-icon" /> Contactez moi
                </Link>
              </li>
            </ul>
            <div className="theme-toggle">
              <Button 
                variant="contained" 
                onClick={toggleTheme} 
                startIcon={theme === 'light' ? <FaMoon /> : <FaSun />}
                className="theme-toggle-button"
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
