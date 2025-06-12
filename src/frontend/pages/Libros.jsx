import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/libros.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';

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
        <section className="books-gallery">
          <div className="gallery-header">
            <h2 className="section-title">Galería de Libros</h2>
            <p className="section-subtitle">Explora nuestra colección completa</p>
          </div>

          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-container">
            {filteredBooks.map((book, index) => (
              <div className="gallery-book-card" key={index}>
                <img className="book-cover" src={book.image} alt={book.title} />
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p className="author">{book.author}</p>
                  <div className="book-meta">
                    <span className="category">{book.category}</span>
                    <span className="rating"><i className="fas fa-star"></i> {book.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="btn pagination-btn disabled"><i className="fas fa-chevron-left"></i></button>
            <button className="btn pagination-btn active">1</button>
            <button className="btn pagination-btn">2</button>
            <button className="btn pagination-btn">3</button>
            <button className="btn pagination-btn"><i className="fas fa-chevron-right"></i></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Libros;
