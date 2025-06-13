import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';
import AutorCard from '../components/AutorCard';

const autores = [
  {
    nombre: "Gabriel García Márquez",
    nacionalidad: "Colombiano",
    genero: "Realismo mágico",
    obra: "Cien años de soledad",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg"
  },
  {
    nombre: "Jorge Luis Borges",
    nacionalidad: "Argentino",
    genero: "Ficción literaria",
    obra: "El Aleph",
    img: "https://th.bing.com/th/id/OIP.0meSzd6CiMppgCYwb800dwAAAA?rs=1&pid=ImgDetMain"
  },
  {
    nombre: "Jane Austen",
    nacionalidad: "Británica",
    genero: "Novela romántica",
    obra: "Orgullo y prejuicio",
    img: "https://th.bing.com/th/id/OIP.yia_91SV_f10mjjYPD6FjgHaEm?rs=1&pid=ImgDetMain"
  },
  {
    nombre: "Miguel de Cervantes",
    nacionalidad: "Español",
    genero: "Literatura clásica",
    obra: "Don Quijote",
    img: "https://www.biografiasyvidas.com/monografia/cervantes/fotos/cervantes_miguel_1.jpg"
  },
  {
    nombre: "Pablo Neruda",
    nacionalidad: "Chileno",
    genero: "Poesía",
    obra: "Veinte poemas de amor",
    img: "https://poemanalysis.com/wp-content/uploads/2021/01/Pablo-Neruda-Portrait.jpg"
  },
  {
    nombre: "J.K. Rowling",
    nacionalidad: "Británica",
    genero: "Fantasía",
    obra: "Harry Potter",
    img: "https://th.bing.com/th/id/R.3d003398277860f6eec85aa831fec26b?rik=B40cKoLhavzHAw&pid=ImgRaw&r=0"
  }
];

function Autores() {
  return (
    <div className="app-container">
      <HeaderFront />

      {/* Main Content */}
      <main className="main-content py-5">
        <section className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">
              <i className="fas fa-user-edit me-2"></i>Autores Destacados
            </h2>
            <p className="text-secondary">Descubre a los escritores más influyentes de nuestra colección</p>
          </div>
          <div className="row g-4 justify-content-center">
            {autores.map((autor, idx) => (
              <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <AutorCard autor={autor} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Autores;
