import React from 'react';

function AboutCard({ imagen, altTexto, tituloOverlay, subtituloOverlay, tituloContenido, descripcion }) {
  return (
    <div className="about-card">
      <div className="about-card-image">
        {/* Usamos las variables (props) entre llaves {} */}
        <img src={imagen} alt={altTexto} />
        <div className="about-card-overlay">
          <h3>{tituloOverlay}</h3>
          <span>{subtituloOverlay}</span>
        </div>
      </div>
      <div className="about-card-content">
        <h4>{tituloContenido}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default AboutCard;