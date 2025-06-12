
import React from 'react';
import { useParams } from 'react-router-dom';

const LIBROS = [
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoria: 'novela' },
  { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', categoria: 'fabula' },
  { titulo: '1984', autor: 'George Orwell', categoria: 'ciencia-ficcion' },
  { titulo: 'Don Quijote', autor: 'Miguel de Cervantes', categoria: 'clasico' },
  { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', categoria: 'fantasia' },
  { titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', categoria: 'ciencia-ficcion' },
  { titulo: 'Rayuela', autor: 'Julio Cortázar', categoria: 'novela' },
  { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', categoria: 'novela' }
];

function CategoriaPage() {
  const { categoria } = useParams();
  const librosFiltrados = LIBROS.filter(libro => libro.categoria === categoria);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Libros de la categoría: {categoria}</h2>
      <ul>
        {librosFiltrados.map((libro, idx) => (
          <li key={idx}>
            <strong>{libro.titulo}</strong> - {libro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaPage;
