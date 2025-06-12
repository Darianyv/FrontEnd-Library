import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/styles/home.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import CarruselLibros from '../components/CarruselLibros';


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

      <HeaderFront />

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
        
        <CarruselLibros libros={libros} />

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
      <Footer />
    </div>

      

  );
}

export default Home;

