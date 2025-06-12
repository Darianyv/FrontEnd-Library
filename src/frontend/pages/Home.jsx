import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/styles/home.css';
import AuthButtons from './AuthButtons';

function Home() {
  const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      categoria: "Novela",
      anio: 1967,
      img: "https://www.alianzalibros.com/wp-content/uploads/2024/11/cien-anos-de-soledad.webp"
    },
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      categoria: "Fábula",
      anio: 1943,
      img: "https://m.media-amazon.com/images/I/71X1p4TGlxL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      categoria: "Ciencia Ficción",
      anio: 1949,
      img: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      categoria: "Clásico",
      anio: 1605,
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL._AC_UF1000,1000_QL80_.jpg"
    }
  ];

  const categorias = [
    { nombre: "Literatura", icono: "fas fa-book" },
    { nombre: "Ciencia", icono: "fas fa-flask" },
    { nombre: "Tecnología", icono: "fas fa-laptop-code" },
    { nombre: "Psicología", icono: "fas fa-brain" },
    { nombre: "Negocios", icono: "fas fa-chart-line" },
    { nombre: "Historia", icono: "fas fa-history" },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <i className="fas fa-book-open"></i>
          <h1>Sombras & Letras</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/libros">Libros</Link></li>
            <li><Link to="/autores">Autores</Link></li>
            <li><Link to="/categoria">Categorías</Link></li>
            <li><Link to="/prestamos">Préstamos</Link></li>
          </ul>
        </nav>
        <AuthButtons />
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2>Explora nuestro catálogo de libros</h2>
            <p>Encuentra tu próxima lectura favorita entre miles de títulos disponibles</p>
            <div className="search-bar">
              <input type="text" placeholder="Buscar libros..." />
              <button className="btn search-btn">
                <i className="fas fa-search"></i> Buscar
              </button>
            </div>
            <Link to="/prestamos" className="btn reserve-btn">
              <i className="fas fa-calendar-plus"></i> Reservar tu libro
            </Link>
          </div>
        </section>

        {/* Featured Books Carousel */}
        <section className="featured-books">
          <h2>Libros destacados</h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {libros.map((libro, index) => (
              <SwiperSlide key={index}>
                <div className="book-card">
                  <div className="book-cover">
                    <img src={libro.img} alt={libro.titulo} />
                  </div>
                  <div className="book-info">
                    <h3>{libro.titulo}</h3>
                    <p className="author">{libro.autor}</p>
                    <div className="book-meta">
                      <span className="category">{libro.categoria}</span>
                      <span className="year">{libro.anio}</span>
                    </div>
                    <Link to="/prestamos" className="btn details-btn">Reservar</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Categorías */}
        <section className="categories">
          <h2>Explora por categorías</h2>
          <div className="categories-grid">
            {categorias.map((cat, index) => (
              <Link to={`/libros?categoria=${encodeURIComponent(cat.nombre)}`} key={index} className="category-card">
                <i className={cat.icono}></i>
                <h3>{cat.nombre}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre nosotros</h3>
            <p>Biblioteca Digital es un proyecto dedicado a promover la lectura y el acceso al conocimiento.</p>
          </div>

          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p><i className="fas fa-envelope"></i>contacto@sombrasyletras.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Sombras y letras. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

