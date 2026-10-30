import { Routes, Route } from 'react-router-dom';
import './App.css'; // Esto conecta tus estilos automáticamente
import './index.css';
import Sucursales from './pages/Sucursales';
import Header from './Header';
import Target from './Target';
import VideoOverlay from './VideoOverlay';
import Tittle from './Tittle';
import AboutCard from './AboutCard';
import ServiceCard from './ServiceCard';
import CategoryCard from './CategoryCard';
import Footer from './Footer';

// AQUÍ VA TODO TU CÓDIGO DE LA PÁGINA PRINCIPAL
function PaginaInicio() {
  return (
    <div className="pagina-principal">
      <Header />

      <div className="hero-container">
        <Target />
        <VideoOverlay />
        <Tittle 
          badgeText="Refaccionaria y Taller en Tijuana"
          tituloPrincipal="Venta de"
          textoResaltado="refacciones automotrices de alta calidad"
          enlaceWhatsApp="https://wa.me/526643559157"
        />
      </div>

      <section className="about-section" id="Nosotros">
        {/* Encabezado superior */}
        <div className="about-header">
            <h2>Somos Refaccionaria Evo Lution</h2>
            <p>
                Somos un negocio de Taller Mecánico con Instalación Profesional de Refacciones Automotrices que busca lo mejor para el cuidado óptimo de tu carro. Entendemos que el buen funcionamiento de tu vehículo depende tanto de piezas de calidad como de servicios mecánicos especializados.
            </p>
        </div>

        {/* Grilla de 3 Tarjetas (Misión, Visión y Valores) */}
        <div className="about-grid">
            
            <AboutCard 
              imagen="/img/2148826523-1.jpg"
              altTexto="Misión Evo Lution"
              tituloOverlay="Nuestra Misión"
              subtituloOverlay="Garantía y Seguridad"
              tituloContenido="Proveer soluciones automotrices integrales"
              descripcion="Ofrecer refacciones de la más alta calidad y servicios mecánicos de precisión en Tijuana, asegurando el óptimo rendimiento de cada vehículo y la tranquilidad de nuestros clientes en el camino."
            />

            <AboutCard 
              imagen="/img/servicio-automotriz-que-debe-incluir-y-que-tipos-existen (1).jpg" 
              altTexto="Visión Evo Lution"
              tituloOverlay="Nuestra Visión"
              subtituloOverlay="Innovación y Confianza"
              tituloContenido="Ser la refaccionaria y taller líder"
              descripcion="Consolidarnos como el centro automotriz de referencia en la región por nuestra honestidad, uso de tecnología de vanguardia y excelencia constante en la atención al cliente."
            />

            <AboutCard 
              imagen="/img/WhatsApp Image 2026-10-22 at 12.18.40 PM.jpeg" 
              altTexto="Valores Evo Lution"
              tituloOverlay="Nuestros Valores"
              subtituloOverlay="Compromiso y Transparencia"
              tituloContenido="Compromiso con la excelencia"
              descripcion="Nos regimos por la honestidad en cada diagnóstico, la responsabilidad en el manejo de tu vehículo y la pasión por entregar un trabajo duradero y profesional."
            />

        </div>
      </section>

      <section className="services-section" id='services'>
        <h2 className="services-title">Nuestros Servicios y Catálogo</h2>
        <div className="services-grid">
            
            {/* SERVICIO 1: Partes Eléctricas */}
            <ServiceCard 
              iconClass="fa-solid fa-car-battery"
              titulo="Partes Eléctricas"
              descripcion="Baterías, alternadores, marchas y sensores para todas las marcas y modelos."
            />

            {/* SERVICIO 2: Aceites y Filtros */}
            <ServiceCard 
              iconClass="fa-solid fa-oil-can"
              titulo="Aceites y Filtros"
              descripcion="Lubricantes sintéticos, multigrado, filtros de aire, aceite y combustible."
            />

            {/* SERVICIO 3: Frenos y Suspensión */}
            <ServiceCard 
              iconClass="fa-solid fa-compact-disc"
              titulo="Frenos y Suspensión"
              descripcion="Balatas, discos, amortiguadores y repuestos de alta durabilidad."
            />

            {/* SERVICIO 4: Servicio Mecanico */}
            <ServiceCard 
              iconClass="fa-solid fa-gear"
              titulo="Servicio Mecanico"
              descripcion="Equipo experto en su trabajo, trabajo eficiente que brinda calidad."
            />

            {/* SERVICIO 5: Servicio Menor */}
            <ServiceCard 
              iconClass="fa-solid fa-gears"
              titulo="Servicio Menor"
              descripcion="Servicio esencial incluye el cambio de aceite y filtro. Diagnostico por computadora."
            />

            {/* SERVICIO 6: Variedad de Productos */}
            <ServiceCard 
              iconClass="fa-solid fa-basket-shopping"
              titulo="Variedad de Productos"
              descripcion="Anticongelantes, desengrasantes, aceites, lubricante y mas para diferentes marcas y modelos."
            />

        </div>
      </section>

      <section className="categories-section" id="categories">
        {/* Título con líneas decorativas amarillas */}
        <div className="categories-header">
            <span className="decorative-line"></span>
            <h2>Categorías destacadas</h2>
            <span className="decorative-line"></span>
        </div>

        {/* Grilla de 6 tarjetas de categorías */}
        <div className="categories-grid">

          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20Afinaci%C3%B3n"
            imagen="/img/1706264331_7465_fd4eb1e5b153f1909e6430682930cf1b_Nero_AI_Background_Remover_transparent.png"
            altTexto="Afinación Automotriz"
            titulo="Afinación"
          />
          
          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20suspension%20y%20direcci%C3%B3n"
            imagen="/img/suspension-banner.png"
            altTexto="Suspensión y Dirección"
            titulo="Suspensión y Dirección"
          />

          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20frenos"
            imagen="/img/sistema-frenos-disco-freno-coche-pinza-aislado-sobre-fondo-blanco_708636-433_Nero_AI_Background_Remover_transparent.png"
            altTexto="Frenos"
            titulo="Frenos"
          />

          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20enfriamiento%20y%20calentamiento"
            imagen="/img/pngtree-high-performance-car-radiator-png-image_18388279.jpg"
            altTexto="Enfriamiento y Calentamiento Automotriz"
            titulo="Enfriamiento y Calentamiento Automotriz"
          />

          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20full%20inyection"
            imagen="/img/pngtree-automotive-fuel-injection-system-component-png-image_18387971.jpg"
            altTexto="Full Inyection"
            titulo="Full Inyection"
          />
              
          <CategoryCard 
            href="https://wa.me/526643559157?text=Hola,%20quisiera%20cotizar%20piezas%20de%20Afinaci%C3%B3n"
            imagen="/img/concepto-mantenimiento-vehiculos-suministros-automotores-3d-render-blanco-sombra_268321-3792_Nero_AI_Background_Remover_transparent.png"
            altTexto="Todos los productos"
            titulo="Todos los productos"
          />

        </div>
      </section>

      <section className="contact-banner-section">
        <div className="contact-banner-container">
            
            {/* Lado Izquierdo: Título, botones de acción y redes sociales */}
            <div className="contact-banner-info">
                <h2 className="contact-banner-title">Pide tu pieza o servicio con nosotros, contactanos por...</h2>
                
                {/* Botones de Gmail y WhatsApp */}
                <div className="contact-buttons-group">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=evolutionrefaccionaria@gmail.com&su=Cotizaci%C3%B3n%20de%20Refacciones&body=Hola,%20quisiera%20cotizar%20la%20siguiente%20pieza:" target="_blank" rel="noopener noreferrer" className="action-btn email-btn">
                        <i className="fa-solid fa-envelope"></i> Escribir por Gmail
                    </a>
                    <a href="https://wa.me/526643559157" className="action-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i> Escribir por WhatsApp
                    </a>
                </div>

                {/* Texto de redes sociales */}
                <p className="social-prompt-text">O envianos un mensaje en nuestras redes sociales.</p>

                {/* Iconos de redes sociales */}
                <div className="contact-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61584352544487" rel="noopener noreferrer" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/evolution.refaccionaria/" rel="noopener noreferrer" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@refaccionariaevolution" rel="noopener noreferrer" target="_blank" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>

            {/* Lado Derecho: Imagen decorativa de refacciones con sombra de silueta */}
            <div className="contact-banner-img-wrapper">
                <img src="/img/brakes-on-transparent-background-free-png.jpg" alt="Refacciones Automotrices Evo Lution" />
            </div>

        </div>
      </section>

      <section className="mechanic-services-section">
        {/* Título Principal */}
        <h2 className="mechanic-main-title">Soluciones Especializadas para tu Vehículo</h2>

        {/* Contenedor Bento Grid */}
        <div className="mechanic-bento-grid">
            
            {/* TARJETA IZQUIERDA (Tarjeta alta / Destacada en oscuro) */}
            <div className="bento-card bento-card-large">
                <div className="bento-text">
                    <h3>Servicio Mecanico</h3>
                    <p>Soluciones confiables para que nunca te detengas. Nos encargamos de la reparación y mantenimiento integral de tu vehículo con mano de obra calificada. Resolvemos desde ruidos extraños hasta fallas complejas, asegurando que tu auto ruede con total suavidad y confianza.</p>
                </div>
                <div className="bento-img-container">
                    <img src="/img/pngtree-isolated-wrench-and-spanner-set-on-white-background-top-view-mechanic-png-image_15091547.png" alt="Taller Mecánico Especializado" />
                </div>
            </div>

            {/* COLUMNA DERECHA (2 Tarjetas apiladas) */}
            <div className="bento-right-column">
                
                {/* TARJETA DERECHA SUPERIOR */}
                <div className="bento-card bento-card-small">
                    <div className="bento-icon-tag">
                        <i className="fa-solid fa-oil-can"></i>
                    </div>
                    <div className="bento-img-container-right">
                        <img src="/img/pngtree-a-collection-of-automotive-oil-bottles-and-funnel-designed-for-vehicle-png-image_15863351.png" alt="Diagnóstico Computarizado" />
                    </div>
                    <div className="bento-text">
                        <h3>Servicio Menor</h3>
                        <p>Protege la vida útil de tu motor con lo esencial. Ideal para el cuidado regular de tu auto; incluye cambio de aceite, filtros y una revisión de puntos clave de seguridad. La forma más rápida y económica de mantener tu garantía vigente y prevenir costosas reparaciones futuras.</p>
                    </div>
                </div>

                {/* TARJETA DERECHA INFERIOR */}
                <div className="bento-card bento-card-small">
                    <div className="bento-icon-tag">
                        <i className="fa-solid fa-gears"></i>
                    </div>
                    <div className="bento-img-container-right">
                        {/* Contenedor de imagen vacío tal como lo tenías */}
                    </div>
                    <div className="bento-text">
                        <h3>Servicio de Motor y Frenos con Diagnostico por Escáner</h3>
                        <p>Precisión tecnológica para tu máxima seguridad. Combinamos la última tecnología de diagnóstico por escáner con la reparación experta de motor y frenos. Detectamos fallas electrónicas al instante y garantizamos un frenado impecable para proteger lo que más importa.</p>
                    </div>
                </div>

            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

// AQUÍ SOLAMENTE CONTROLAMOS LAS RUTAS
function App() {
  return (
    <Routes>
      {/* Ruta para la página principal "/" */}
      <Route path="/" element={<PaginaInicio />} />

      {/* Ruta para la pestaña sucursales "/sucursales" */}
      <Route path="/sucursales" element={<Sucursales />} />
    </Routes>
  );
}
export default App;