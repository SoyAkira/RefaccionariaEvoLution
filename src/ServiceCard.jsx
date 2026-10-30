import React from 'react';

function ServiceCard({ iconClass, titulo, descripcion }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {/* Recibimos la clase del icono de FontAwesome de forma dinámica */}
        <i className={iconClass}></i>
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default ServiceCard;