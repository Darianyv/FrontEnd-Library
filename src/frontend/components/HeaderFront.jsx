import React from 'react';
import { Link } from 'react-router-dom';

const HeaderFront = () => (
    <header className="header">
        <div className="logo">
            <i className="fas fa-book-open"></i>
            <h1>Sombras & Letras</h1>
        </div>
        <nav className="nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/libros">Libros</Link></li>
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
);

export default HeaderFront;