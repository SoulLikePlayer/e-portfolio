import React from 'react';
import '../../styles/page/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-contact">
          <h4>Me Contacter :</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/louis._.26._.lazare/" rel="noreferrer" target="_blank" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/SoulLikePlayer/" rel="noreferrer" target="_blank" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <h4>
            <i className="fa fa-copyright" aria-hidden="true"></i> Louis Lazare. Tous droits réservés.
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
