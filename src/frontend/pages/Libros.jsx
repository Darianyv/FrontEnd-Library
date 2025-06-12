import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/libros.css';

const booksData = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    category: 'Novela',
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/71tR3ZEQ2BL._AC_UF1000,1000_QL80_.jpg'
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
      <header className="header">
        <div className="logo">
          <i className="fas fa-book-open"></i>
          <h1>Biblioteca Digital</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link className="active" to="/libros">Libros</Link></li>
            <li><Link to="/autores">Autores</Link></li>
            <li><Link to="/categoria">Categorías</Link></li>
            <li><Link to="/prestamos">Préstamos</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="btn login">Iniciar sesión</button>
          <button className="btn register">Registrarse</button>
        </div>
      </header>

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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre nosotros</h3>
            <p>Biblioteca Digital es un proyecto dedicado a promover la lectura y el acceso al conocimiento.</p>
          </div>
          <div className="footer-section links">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos de servicio</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p><i className="fas fa-envelope"></i> contacto@bibliotecadigital.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Biblioteca Digital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Libros;
