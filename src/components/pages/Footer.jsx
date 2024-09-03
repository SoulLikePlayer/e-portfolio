import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <h4>Me Contacter :</h4>
        <a href="https://www.instagram.com/louis._.26._.lazare/" rel="noreferrer" className="mr-3" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/SoulLikePlayer/" rel="noreferrer" className="mr-3" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
        <h4><i className="fa fa-copyright" aria-hidden="true"></i> Louis Lazare.</h4>
      </div>
    </footer>
  );
}

export default Footer;
