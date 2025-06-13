import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/libros.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import BookCard from '../components/BookCard';

const categories = ['Todos', 'Novela', 'Ciencia Ficción', 'Clásico', 'Fábula', 'Fantasía'];

function Libros() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cambia la URL por la de tu API real
    fetch('http://localhost:8080/libros')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los libros');
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredBooks =
    selectedCategory === 'Todos'
      ? books
      : books.filter(book => book.category === selectedCategory);

  return (
    <div className="app-container">
      <HeaderFront />

      <main className="main-content">
        <section className="books-gallery container py-5">
          <div className="gallery-header text-center mb-4">
            <h2 className="section-title fw-bold">Galería de Libros</h2>
            <p className="section-subtitle text-secondary">Explora nuestra colección completa</p>
          </div>

          <div className="gallery-filters d-flex justify-content-center mb-4 flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn btn-outline-primary ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && <p>Cargando libros...</p>}
          {error && <p className="text-danger">{error}</p>}

          <div className="row g-4 justify-content-center">
            {filteredBooks.map((book, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <BookCard
                  libro={{
                    titulo: book.nombre,
                    autor: book.autor?.nombre,            
                    categoria: book.categoria?.nombre,     
                    img: book.imagenUrl,                  
                    popularidad: book.popularidad
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Libros;