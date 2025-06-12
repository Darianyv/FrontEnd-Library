import { useParams } from 'react-router-dom';

function CategoriaDetalle() {
  const { nombre } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Categoría: {nombre.replace('-', ' ')}</h2>
      <p>Aquí puedes mostrar los libros de esta categoría.</p>
    </div>
  );
}

export default CategoriaDetalle;
