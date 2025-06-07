import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/categoria.css';

const categorias = [
  {
    icono: 'fas fa-book',
    nombre: 'Literatura',
    ruta: '/libros?categoria=literatura',
  },
  {
    icono: 'fas fa-flask',
    nombre: 'Ciencia',
    ruta: '/libros?categoria=ciencia',
  },
  {
    icono: 'fas fa-laptop-code',
    nombre: 'Tecnología',
    ruta: '/libros?categoria=tecnologia',
  },
  {
    icono: 'fas fa-brain',
    nombre: 'Psicología',
    ruta: '/libros?categoria=psicologia',
  },
  {
    icono: 'fas fa-chart-line',
    nombre: 'Negocios',
    ruta: '/libros?categoria=negocios',
  },
  {
    icono: 'fas fa-history',
    nombre: 'Historia',
    ruta: '/libros?categoria=historia',
  },
];

function Categoria() {
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
            <li><Link to="/libros">Libros</Link></li>
            <li><Link to="/autores">Autores</Link></li>
            <li><Link className="active" to="/categoria">Categorías</Link></li>
            <li><Link to="/prestamos">Préstamos</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="btn login">Iniciar sesión</button>
          <button className="btn register">Registrarse</button>
        </div>
      </header>

      <main className="main-content">
        <section className="categories">
          <h2>Explora por Categorías</h2>
          <div className="categories-grid">
            {categorias.map((cat, index) => (
              <Link to={cat.ruta} className="category-card" key={index}>
                <i className={cat.icono}></i>
                <h3>{cat.nombre}</h3>
              </Link>
            ))}
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

export default Categoria;
