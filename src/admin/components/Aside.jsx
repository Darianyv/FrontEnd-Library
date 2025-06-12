import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <aside
      className="bg-primary text-white vh-100 p-3"
      style={{ minWidth: 240, overflowY: 'auto' }}
    >
      <div className="d-flex align-items-center mb-4">
        <i className="fas fa-user-shield fa-2x me-2"></i>
        <span className="fs-5 fw-bold">Administrador</span>
      </div>
      <nav>
        <ul className="nav flex-column aside-menu">
          {/* Dashboard */}
          <li className="nav-item mb-2">
            <Link to="/admin" className="nav-link text-white">
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </Link>
          </li>
          {/* Libros */}
          <li className="nav-item mb-2 position-relative aside-dropdown">
            <span className="nav-link text-white aside-dropdown-toggle" tabIndex={0}>
              <i className="fas fa-book me-2"></i> Libros
            </span>
          </li>
          {/* Usuarios */}
          <li className="nav-item mb-2 position-relative aside-dropdown">
            <span className="nav-link text-white aside-dropdown-toggle" tabIndex={0}>
              <i className="fas fa-user me-2"></i> Usuarios
            </span>
          </li>
          {/* Préstamos */}
          <li className="nav-item mb-2 position-relative aside-dropdown">
            <span className="nav-link text-white aside-dropdown-toggle" tabIndex={0}>
              <i className="fas fa-handshake me-2"></i> Préstamos
            </span>
          </li>
          {/* Autores */}
          <li className="nav-item mb-2 position-relative aside-dropdown">
            <span className="nav-link text-white aside-dropdown-toggle" tabIndex={0}>
              <i className="fas fa-user-edit me-2"></i> Autores
            </span>
          </li>
          {/* Categorías */}
          <li className="nav-item mb-2 position-relative aside-dropdown">
            <span className="nav-link text-white aside-dropdown-toggle" tabIndex={0}>
              <i className="fas fa-tags me-2"></i> Categorías
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}