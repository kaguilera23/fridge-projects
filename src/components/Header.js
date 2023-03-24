import React from 'react';
import "./styles/Header.css"

function Header({currentPage, handlePageChange}) {
  return (
    <div id="main-header"> 

        <nav id="nav-bar">
          <ul>

            <li className="nav-item nav-links">
              <a href="#AboutMe" id="header-text" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? 'nav-link nav-item nav-links activated' : 'nav-link nav-item nav-links'}>About Me</a>
            </li> 

            <li className="nav-item nav-links">
              <a href="#Portfolio" id="header-text" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? 'nav-link nav-item nav-links activated' : 'nav-link nav-item nav-links'}>Portfolio</a>
            </li>

            <li className="nav-item nav-links">
              <a href="#FunFacts" id="header-text" onClick={() => handlePageChange("FunFacts")} className={currentPage === "FunFacts" ? 'nav-link nav-item activated' : 'nav-link nav-item nav-links'}>Fun Facts</a>
            </li>

          </ul>
        </nav>
    </div>
  );
}

export default Header;