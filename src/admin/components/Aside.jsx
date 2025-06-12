import { Link } from 'react-router-dom';
import '../../assets/styles/aside.css'; // Import your custom styles

export default function Aside() {
  return (
    <aside className="custom-sidebar">
      <div className="sidebar-brand">
        <i className="fas fa-laugh-wink"></i>
        <span>Panel Administrador</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li>
            <span className="sidebar-heading">Módulos</span>
          </li>
          <li>
            <Link to="/admin/productos">
              <i className="fas fa-cog"></i> Productos
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/admin/productos/listado">Ver Productos</Link>
              </li>
              <li>
                <Link to="/admin/productos/crear">Crear Productos</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}