import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../../assets/styles/home.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import BookCard from '../components/BookCard';
import AutorCard from '../components/AutorCard';

function Home() {
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);

  const [libros, setLibros] = useState([]);
  const [loadingLibros, setLoadingLibros] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/autores")
      .then((res) => res.json())
      .then((data) => {
        setAutores(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar autores:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/libros")
      .then((res) => res.json())
      .then((data) => {
        setLibros(Array.isArray(data) ? data : []);
        setLoadingLibros(false);
      })
      .catch((error) => {
        console.error("Error al cargar libros:", error);
        setLoadingLibros(false);
      });
  }, []);

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
        
        {/* Libros destacados en carrusel */}
        <section className="featured-books py-5">
          <h2 className="fw-bold text-center mb-4">Libros destacados</h2>
          {loadingLibros ? (
            <p className="text-center">Cargando libros...</p>
          ) : (
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
              }}
            >
              {libros.map((libro) => (
                <SwiperSlide key={libro.id}>
                  <BookCard libro={libro} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        {/* Autores en carrusel con navegación y slides parcialmente visibles */}
        <section className="autores-section py-5">
          <h2 className="fw-bold text-center mb-4">Autores</h2>
          {loading ? (
            <p className="text-center">Cargando autores...</p>
          ) : (
            <Swiper
              modules={[Navigation, Scrollbar]}
              navigation
              scrollbar={{ draggable: true }}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                576: { slidesPerView: 2.2 },
                768: { slidesPerView: 3.2 },
                1200: { slidesPerView: 4.2 }
              }}
              style={{ padding: '0 20px' }}
            >
              {autores.map((autor) => (
                <SwiperSlide key={autor.id}>
                  <AutorCard autor={autor} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

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
      <Footer />
    </div>
  );
}

export default Home;