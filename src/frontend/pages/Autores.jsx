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
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Jorge_Luis_Borges_1951.jpg"
  },
  {
    nombre: "Jane Austen",
    nacionalidad: "Británica",
    genero: "Novela romántica",
    obra: "Orgullo y prejuicio",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Jane_Austen_coloured_version.jpg"
  },
  {
    nombre: "Miguel de Cervantes",
    nacionalidad: "Español",
    genero: "Literatura clásica",
    obra: "Don Quijote",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Miguel_de_Cervantes_%281605%29_by_Juan_de_J%C3%A1uregui.jpg"
  },
  {
    nombre: "Pablo Neruda",
    nacionalidad: "Chileno",
    genero: "Poesía",
    obra: "Veinte poemas de amor",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Pablo_Neruda_1963.jpg"
  },
  {
    nombre: "J.K. Rowling",
    nacionalidad: "Británica",
    genero: "Fantasía",
    obra: "Harry Potter",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/J._K._Rowling_2010.jpg"
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
