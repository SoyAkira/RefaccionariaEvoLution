import React from 'react';
import { Link } from 'react-router-dom';

function HeaderSucursales() {
  return (
    <header className="header-contact" id="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/img/EVOLUTION (1).png" alt="Evo Lution Logo" />
        </Link>
      </div>
      
      <div className="header-content">
        <Link to="/">Inicio</Link>
        <Link to="/">Servicios</Link>
        
        {/* AQUÍ ESTÁ EL CAMBIO: Al darle clic estando en sucursales, te regresa al inicio */}
        <a href="#sucursales">Sucursales</a>

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

export default HeaderSucursales;