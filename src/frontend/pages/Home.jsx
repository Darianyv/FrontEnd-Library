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
        <section className="hero py-5">
          <div className="hero-content text-center">
            <h2 className="fw-bold mb-3">Explora nuestro catálogo de libros</h2>
            <p className="mb-4">Encuentra tu próxima lectura favorita entre miles de títulos disponibles</p>
            <div className="search-bar d-flex justify-content-center mb-3">
              <input
                type="text"
                className="form-control w-auto me-2"
                placeholder="Buscar libros..."
                style={{ maxWidth: 300 }}
              />
              <button className="btn btn-light text-primary search-btn">
                <i className="fas fa-search"></i> Buscar
              </button>
            </div>
            <Link to="/prestamos" className="btn btn-outline-primary reserve-btn">
              <i className="fas fa-calendar-plus"></i> Reservar tu libro
            </Link>
          </div>
        </section>
        
        <div className="bg-white py-4">
          <CarruselLibros libros={libros} />
        </div>

        {/* Categorías */}
        <section className="categories py-5">
          <h2 className="fw-bold text-center mb-4">Explora por categorías</h2>
          <div className="categories-grid d-flex flex-wrap justify-content-center gap-4">
            {categorias.map((cat, index) => (
              <Link
                to={`/libros?categoria=${encodeURIComponent(cat.nombre)}`}
                key={index}
                className="category-card d-flex flex-column align-items-center justify-content-center bg-light text-primary rounded shadow-sm p-4"
                style={{ width: 160, minHeight: 140, textDecoration: 'none' }}
              >
                <i className={`${cat.icono} fa-2x mb-2`}></i>
                <h3 className="fs-5 fw-semibold mb-0">{cat.nombre}</h3>
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

