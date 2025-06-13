import { Routes, Route } from 'react-router-dom';
import Home from './frontend/pages/Home';
import Autores from './frontend/pages/Autores';
import Categoria from './frontend/pages/Categoria';
import Libros from './frontend/pages/Libros';
import Prestamos from './frontend/pages/Prestamos';
import Login from './frontend/pages/Login';
import Registro from './frontend/pages/Registro';
import Aside from './admin/components/Aside';
import Content from './admin/components/Content';
import Header from './admin/components/Header';
import ProtectedRoute from './frontend/components/ProtectedRoute';
import './assets/styles/styles.css';
import ClienteDashboard from './frontend/components/ClienteDashboard';

function App() {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/prestamos" element={<Prestamos />} />

        {/* Ruta protegida para admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <div className="d-flex">
                <Aside />
                <div className="flex-grow-1">
                  <Header />
                  <Content />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        {/* Ruta protegida para cliente */}
        <Route
          path="/cliente"
          element={
            <ProtectedRoute role="cliente">
              <ClienteDashboard userName="Nombre del Cliente" />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;