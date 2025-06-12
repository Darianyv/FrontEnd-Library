import { Routes, Route } from 'react-router-dom';
import Home from './frontend/pages/Home';
import Autores from './frontend/pages/Autores';
import Categoria from './frontend/pages/Categoria';
import Libros from './frontend/pages/Libros';
import Prestamos from './frontend/pages/Prestamos';
import CategoriaPage from './frontend/pages/CategoriaPage';
import CategoriaDetalle from './frontend/components/CategoriaDetalle';
import Login from './frontend/pages/Login';
import Registro from './frontend/pages/Registro';
import Footer from './admin/components/Footer';
import Aside from './admin/components/Aside';
import Content from './admin/components/Content';
import Header from './admin/components/Header';



function App() {
  return (
      <>
      
      <Header />
      <Aside />
      <Content />
      <Footer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/prestamos" element={<Prestamos />} />
        <Route path="/CategoriaPage" element={<CategoriaPage />} />
        <Route path="/CategoriaDetalle" element={<CategoriaDetalle />} />
      </Routes>
      
      </>
  );
}

export default App;
