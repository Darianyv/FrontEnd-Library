import React from 'react';
import { Link } from 'react-router-dom';

const HeaderFront = () => (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <i className="fas fa-book-open fa-lg me-2"></i>
                <span className="fw-bold fs-4">Sombras & Letras</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home me-1"></i> Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/libros" className="nav-link">
                            <i className="fas fa-book me-1"></i> Libros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/autores" className="nav-link">
                            <i className="fas fa-user-edit me-1"></i> Autores
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria" className="nav-link">
                            <i className="fas fa-tags me-1"></i> Categorías
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prestamos" className="nav-link">
                            <i className="fas fa-handshake me-1"></i> Préstamos
                        </Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <Link to="/login" className="btn btn-outline-light me-2">
                        <i className="fas fa-sign-in-alt me-1"></i> Iniciar sesión
                    </Link>
                    <Link to="/registro" className="btn btn-light text-primary">
                        <i className="fas fa-user-plus me-1"></i> Registrarse
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

export default HeaderFront;