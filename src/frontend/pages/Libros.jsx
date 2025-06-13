import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/libros.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import BookCard from '../components/BookCard';

const booksData = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Novela',
    rating: 4.8,
    image: 'https://www.alianzalibros.com/wp-content/uploads/2024/11/cien-anos-de-soledad.webp'
  },
  {
    title: '1984',
    author: 'George Orwell',
    category: 'Ciencia Ficción',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    category: 'Fábula',
    rating: 4.9,
    image: 'https://m.media-amazon.com/images/I/71X1p4TGlxL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'Don Quijote',
    author: 'Miguel de Cervantes',
    category: 'Clásico',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/91SZSW8qSsL._AC_UF1000,1000_QL80_.jpg'
  }
];

const categories = ['Todos', 'Novela', 'Ciencia Ficción', 'Clásico', 'Fábula', 'Fantasía'];

function Libros() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredBooks =
    selectedCategory === 'Todos'
      ? booksData
      : booksData.filter(book => book.category === selectedCategory);

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

          <div className="row g-4 justify-content-center">
            {filteredBooks.map((book, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <BookCard
                  libro={{
                    titulo: book.title,
                    autor: book.author,
                    categoria: book.category,
                    anio: book.rating, // Si tienes año, cámbialo aquí
                    img: book.image
                  }}
                />
              </div>
            ))}
          </div>

          <div className="pagination d-flex justify-content-center mt-4 gap-2">
            <button className="btn btn-outline-primary disabled"><i className="fas fa-chevron-left"></i></button>
            <button className="btn btn-primary active">1</button>
            <button className="btn btn-outline-primary">2</button>
            <button className="btn btn-outline-primary">3</button>
            <button className="btn btn-outline-primary"><i className="fas fa-chevron-right"></i></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Libros;