import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/autores.css';

function Autores() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <i className="fas fa-book-open"></i>
          <h1>Biblioteca Digital</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/libros">Libros</Link></li>
            <li><Link className="active" to="/autores">Autores</Link></li>
            <li><Link to="/categoria">Categorías</Link></li>
            <li><Link to="/prestamos">Préstamos</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="btn login">Iniciar sesión</button>
          <button className="btn register">Registrarse</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="featured-authors">
          <div className="section-header">
            <h2 className="section-title">Autores Destacados</h2>
            <p className="section-subtitle">Descubre a los escritores más influyentes de nuestra colección</p>
          </div>
          <div className="authors-grid">

            {/* Autor 1 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg"
                alt="Gabriel García Márquez"
                className="author-image"
              />
              <div className="author-info">
                <h3>Gabriel García Márquez</h3>
                <p className="nationality">Colombiano</p>
                <span className="genre">Realismo mágico</span>
                <p className="book-link">
                  <Link to="/libros">Cien años de soledad</Link>
                </p>
              </div>
            </div>

            {/* Autor 2 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Jorge_Luis_Borges_1951.jpg"
                alt="Jorge Luis Borges"
                className="author-image"
              />
              <div className="author-info">
                <h3>Jorge Luis Borges</h3>
                <p className="nationality">Argentino</p>
                <span className="genre">Ficción literaria</span>
                <p className="book-link">
                  <Link to="/libros">El Aleph</Link>
                </p>
              </div>
            </div>

            {/* Autor 3 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Jane_Austen_coloured_version.jpg"
                alt="Jane Austen"
                className="author-image"
              />
              <div className="author-info">
                <h3>Jane Austen</h3>
                <p className="nationality">Británica</p>
                <span className="genre">Novela romántica</span>
                <p className="book-link">
                  <Link to="/libros">Orgullo y prejuicio</Link>
                </p>
              </div>
            </div>

            {/* Autor 4 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Miguel_de_Cervantes_%281605%29_by_Juan_de_J%C3%A1uregui.jpg"
                alt="Miguel de Cervantes"
                className="author-image"
              />
              <div className="author-info">
                <h3>Miguel de Cervantes</h3>
                <p className="nationality">Español</p>
                <span className="genre">Literatura clásica</span>
                <p className="book-link">
                  <Link to="/libros">Don Quijote</Link>
                </p>
              </div>
            </div>

            {/* Autor 5 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Pablo_Neruda_1963.jpg"
                alt="Pablo Neruda"
                className="author-image"
              />
              <div className="author-info">
                <h3>Pablo Neruda</h3>
                <p className="nationality">Chileno</p>
                <span className="genre">Poesía</span>
                <p className="book-link">
                  <Link to="/libros">Veinte poemas de amor</Link>
                </p>
              </div>
            </div>

            {/* Autor 6 */}
            <div className="author-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/J._K._Rowling_2010.jpg"
                alt="J.K. Rowling"
                className="author-image"
              />
              <div className="author-info">
                <h3>J.K. Rowling</h3>
                <p className="nationality">Británica</p>
                <span className="genre">Fantasía</span>
                <p className="book-link">
                  <Link to="/libros">Harry Potter</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Autores;
