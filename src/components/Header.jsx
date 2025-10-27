import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fs-4 fw-bold text-primary" href="/">TuHost.</a>
        
        {/* Botón CTA Principal */}
        <a href="#planes" className="btn btn-primary fw-bold ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          Ver Planes
        </a>
      </div>
    </nav>
  </header>
);

export default Header;