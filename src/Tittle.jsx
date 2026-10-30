import React from 'react';

function Tittle({ badgeText, tituloPrincipal, textoResaltado, enlaceWhatsApp }) {
  return (
    <section className="hero-section">
      <div className="badge-container">
        {/* Aquí se mostrará el texto dinámico del distintivo */}
        <span>{badgeText}</span>
      </div>
      
      <h1 className="hero-title">
        {tituloPrincipal} <span className="highlight-yellow">{textoResaltado}</span>
      </h1>
      
      <a href={enlaceWhatsApp} className="hero-cta" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i> Cotiza con nosotros
      </a>
    </section>
  );
}

export default Tittle;