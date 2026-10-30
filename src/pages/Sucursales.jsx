import 'react';
import Header from '../Header';
import Target from '../Target';
import VideoOverlay from '../VideoOverlay';
import Tittle from '../Tittle';
import AboutCard from '../AboutCard';
import ServiceCard from '../ServiceCard';
import CategoryCard from '../CategoryCard';
import FooterSucursales from '../FooterSucursales';
import HeaderSucursales from '../HeaderSucursales';
function Sucursales() {
  return (  

    <div className="second-page">
        <HeaderSucursales />
        <Target />
        <VideoOverlay />
        <Tittle 
          badgeText="Refaccionaria y Taller en Tijuana"
          tituloPrincipal="Visita nuestras"
          textoResaltado="Sucursales"
          enlaceWhatsApp="https://wa.me/526643559157"
        />

  <section className="location-section" id="sucursales">
    {/* Título de la sección */}
    <div className="location-header">
        <h2>Nos ubicamos en...</h2>
        <p>Visítanos en nuestra sucursal para atención personalizada y servicios de taller.</p>
    </div>

    {/* Contenedor del Mapa */}
    <div className="location-map-container">
        {/* Mapa de Google Maps de Refaccionaria Evo Lution */}
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.001048735117!2d-116.980264!3d32.419129999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d93bfc6f8f326b%3A0xcddec1befb30a678!2sREFACCIONARIA%20EVO%20LUTION!5e0!3m2!1sen!2smx!4v1792771571983!5m2!1sen!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
  </section>

  <FooterSucursales />
  </div>

  );
}

export default Sucursales;