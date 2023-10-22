import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="navbar-brand">Hacker-News</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/search" style={{ textDecoration: 'none' }}>
                  <span className="nav-link active" aria-current="page">Search</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
