import React from 'react';
import "../styles/Header.css"

function Header() {
  return (
    <div id="main-header"> 
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand"  id = "header-text">Kayla Aguilera</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  id = "header-text">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id = "header-text">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id = "header-text">Contact Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id = "header-text">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
