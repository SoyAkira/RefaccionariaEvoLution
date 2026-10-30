import React from 'react';

function CategoryCard({ href, imagen, altTexto, titulo }) {
  return (
    <a href={href} className="category-card">
      <div className="category-img-wrapper">
        {/* Usamos las variables (props) para la imagen y su descripción */}
        <img src={imagen} alt={altTexto} />
      </div>
      <div className="category-content">
        {/* El título también es dinámico */}
        <h3>{titulo}</h3>
        <span className="category-link">
          Ver categoría <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
    </a>
  );
}

export default CategoryCard;