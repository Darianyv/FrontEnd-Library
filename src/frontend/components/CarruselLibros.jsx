import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function CarruselLibros({ libros }) {
  return (
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

    );
}

