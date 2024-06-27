import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
            <div id="hamburger" className="animated-icon1 light-mode"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent20">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Préférence
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" id="light-mode-btn" href="#">Light mode</a>
                  <a className="dropdown-item" id="dark-mode-btn" href="#">Dark mode</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
