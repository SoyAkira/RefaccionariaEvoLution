import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer-section">
        <div className="footer-container">
            
            {/* Extrema izquierda: Logotipo y descripción */}
            <div className="footer-col footer-brand">
                <img src="/img/EVOLUTION (1).png" alt="Evo Lution Logo" className="footer-logo" />
                <p className="footer-tagline">Tu refaccionaria y taller mecánico de confianza en Tijuana.</p>
            </div>

            {/* Columna 1: Evo Lution */}
            <div className="footer-col">
                <h3>Evo Lution</h3>
                <ul className="footer-links">
                    <li><a href="#categories">Nuestros Productos</a></li>
                    <li><Link to="/sucursales">Sucursales</Link></li>
                    <li><a href="#services">Servicios</a></li>
                </ul>
            </div>

            {/* Columna 2: Horario */}
            <div className="footer-col">
                <h3>Horario</h3>
                <ul className="footer-schedule">
                    <li><span>Lunes a Viernes:</span> 8:00 AM - 6:00 PM</li>
                    <li><span>Sábados:</span> 8:00 AM - 3:00 PM</li>
                    <li><span>Domingos:</span> Cerrado</li>
                </ul>
            </div>

            {/* Columna 3: Redes Sociales */}
            <div className="footer-col">
                <h3>Redes Sociales</h3>
                <p className="footer-social-text">Síguenos y contáctanos en nuestras plataformas:</p>
                <div className="footer-social-icons">
                    <a href="https://wa.me/526643559157" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.tiktok.com/@refaccionariaevolution" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61584352544487" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=evolutionrefaccionaria@gmail.com&su=Cotizaci%C3%B3n%20de%20Refacciones&body=Hola,%20quisiera%20cotizar%20la%20siguiente%20pieza:" target="_blank" aria-label="Gmail" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/evolution.refaccionaria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>

        </div>

        {/* Barra inferior con Copyright y Enlaces Legales */}
        <div className="footer-bottom">
            <p>2026 &copy; Refaccionaria Evo Lution. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
            </div>
        </div>
    </footer>
  );
}

export default Footer;