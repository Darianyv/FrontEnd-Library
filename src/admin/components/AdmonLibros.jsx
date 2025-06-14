import React, { useEffect, useState } from 'react';

export default function AdmonLibros() {
  const [books, setBooks] = useState([]);
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [titulo, setTitulo] = useState('');
  const [autorId, setAutorId] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    cargarLibros();
    fetch('http://localhost:8080/api/autores')
      .then(res => res.json())
      .then(data => setAutores(data))
      .catch(() => setError('Error al cargar autores'));

    fetch('http://localhost:8080/api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(() => setError('Error al cargar categorías'));
  }, []);

  const cargarLibros = () => {
    setLoading(true);
    fetch('http://localhost:8080/libros')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los libros');
        return res.json();
      })
      .then(data => {
        setBooks(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const resetFormulario = () => {
    setTitulo('');
    setAutorId('');
    setCategoriaId('');
    setImagenUrl('');
    setEditando(null);
    setError(null);
  };

  const handleEdit = (libro) => {
    setTitulo(libro.titulo);
    setAutorId(libro.autor?.id || '');
    setCategoriaId(libro.categoria?.id || '');
    setImagenUrl(libro.imagenUrl || '');
    setEditando(libro.id);
    setError(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este libro?')) {
      fetch(`http://localhost:8080/libros/${id}`, { method: 'DELETE' })
        .then(res => {
          if (!res.ok) throw new Error('Error al eliminar el libro');
          cargarLibros();
        })
        .catch(err => setError(err.message));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!titulo || !autorId || !categoriaId) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const libro = {
      titulo,
      autor: { id: autorId },
      categoria: { id: categoriaId },
      imagenUrl,
    };

    const url = editando
      ? `http://localhost:8080/libros/${editando}`
      : 'http://localhost:8080/libros';
    const method = editando ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(libro),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar el libro');
        cargarLibros();
        resetFormulario();
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="container py-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📚 Gestión de Libros</h2>
        <button className="btn btn-success" onClick={resetFormulario}>
          {editando ? 'Cancelar edición' : '+ Crear Libro'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={autorId}
            onChange={(e) => setAutorId(e.target.value)}
            required
          >
            <option value="">Seleccione autor</option>
            {autores.map(a => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
          >
            <option value="">Seleccione categoría</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="URL de la imagen"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            {editando ? 'Guardar' : 'Agregar'}
          </button>
        </div>
      </form>

      {loading && <p>Cargando libros...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="card shadow-sm h-100">
              <img
                src={book.imagenUrl || 'https://placehold.co/220x260?text=Libro'}
                alt={book.titulo || 'Sin título'}
                className="card-img-top"
                style={{ height: 220, objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.titulo || 'Sin título'}</h5>
                <p><strong>Autor:</strong> {book.autor?.nombre}</p>
                <p><strong>Categoría:</strong> {book.categoria?.nombre}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleEdit(book)}
                >
                  <i className="fas fa-pen"></i> Editar
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(book.id)}
                >
                  <i className="fas fa-trash"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}