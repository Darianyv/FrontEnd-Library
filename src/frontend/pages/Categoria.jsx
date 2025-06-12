import { Link } from 'react-router-dom';
import '../../assets/styles/categoria.css';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';

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

      <HeaderFront />   

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
      <Footer />
    </div>
  );
}

export default Categoria;
