import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-contact" id="header">
      <div className="header-logo">
          <img src="/img/EVOLUTION (1).png" alt="Evo Lution Logo" />
      </div>
      
      <div className="header-content">
        <a href="#categories">Productos</a>
        <a href="#services">Servicios</a>
        <Link to="/sucursales">Sucursales</Link>
        <a href="#Nosotros">Nosotros</a>
        <a href="https://wa.me/526643559157" target="_blank" rel="noopener noreferrer">Contacto</a>
      </div>
      
      <div className="header-button-contact">
        <a href="https://wa.me/526643559157" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;