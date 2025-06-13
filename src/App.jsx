import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './frontend/components/ProtectedRoute';
import Aside from './frontend/components/Aside';
import Header from './frontend/components/Header';
import Content from './frontend/components/Content';
import ClienteDashboard from './frontend/components/ClienteDashboard';
// Importa aquí otros componentes y páginas según tu estructura

function App() {
  return (
    <>
      <Routes>
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
        {/* Agrega aquí tus rutas públicas, por ejemplo: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registro" element={<Registro />} /> */}
      </Routes>
    </>
  );
}

export default App;