import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Autores from './pages/Autores';
import Categoria from './pages/Categoria';
import Libros from './pages/Libros';
import Prestamos from './pages/Prestamos';
import CategoriaPage from './pages/CategoriaPage';
import CategoriaDetalle from './components/CategoriaDetalle';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autores" element={<Autores />} />
      <Route path="/categoria" element={<Categoria />} />
      <Route path="/libros" element={<Libros />} />
      <Route path="/prestamos" element={<Prestamos />} />
      <Route path="/CategoriaPage" element={<CategoriaPage />} />
      <Route path="/CategoriaDetalle" element={<CategoriaDetalle />} />
    

    </Routes>
  );
}

export default App;
