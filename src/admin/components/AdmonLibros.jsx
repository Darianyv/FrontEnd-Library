import React, { useEffect, useState } from 'react';

export default function AdmonLibros() {
  const [books, setBooks] = useState([]);
  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [nombre, setNombre] = useState('');
  const [autorId, setAutorId] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [editando, setEditando] = useState(null);

  // Configuración común para las peticiones fetch
  const fetchConfig = {
    baseUrl: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  useEffect(() => {
    const cargarDatosIniciales = async () => {
      try {
        setLoading(true);
        await Promise.all([
          cargarLibros(),
          cargarAutores(),
          cargarCategorias()
        ]);
      } catch (error) {
        setError('Error al cargar datos iniciales');
      } finally {
        setLoading(false);
      }
    };

    cargarDatosIniciales();
  }, []);

  const cargarLibros = async () => {
    try {
      const response = await fetch(`${fetchConfig.baseUrl}/libros`, {
        headers: fetchConfig.headers
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setBooks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    }
  };

  const cargarAutores = async () => {
    try {
      const response = await fetch(`${fetchConfig.baseUrl}/api/autores`, {
        headers: fetchConfig.headers
      });
      
      if (!response.ok) {
        throw new Error('Error al cargar autores');
      }
      
      const data = await response.json();
      setAutores(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const cargarCategorias = async () => {
    try {
      const response = await fetch(`${fetchConfig.baseUrl}/api/categorias`, {
        headers: fetchConfig.headers
      });
      
      if (!response.ok) {
        throw new Error('Error al cargar categorías');
      }
      
      const data = await response.json();
      setCategorias(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const resetFormulario = () => {
    setNombre('');
    setAutorId('');
    setCategoriaId('');
    setImagenUrl('');
    setEditando(null);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (libro) => {
    setNombre(libro.nombre);
    setAutorId(libro.autor?.id?.toString() || '');
    setCategoriaId(libro.categoria?.id?.toString() || '');
    setImagenUrl(libro.imagenUrl || '');
    setEditando(libro.id);
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este libro?')) {
      try {
        setLoading(true);
        const response = await fetch(`${fetchConfig.baseUrl}/libros/${id}`, {
          method: 'DELETE',
          headers: fetchConfig.headers
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error ${response.status}`);
        }

        setSuccess('Libro eliminado correctamente');
        await cargarLibros();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!nombre || !autorId || !categoriaId) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const libro = {
      nombre,
      autor: { id: parseInt(autorId) },  // Convertir a número
      categoria: { id: parseInt(categoriaId) },  // Convertir a número
      imagenUrl: imagenUrl || null
    };

    try {
      setLoading(true);
      const url = editando 
        ? `${fetchConfig.baseUrl}/libros/${editando}` 
        : `${fetchConfig.baseUrl}/libros`;
      
      const method = editando ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: fetchConfig.headers,
        body: JSON.stringify(libro),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      setSuccess(editando 
        ? 'Libro actualizado correctamente' 
        : 'Libro agregado correctamente');
      
      await cargarLibros();
      resetFormulario();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          📚 Gestión de Libros
          {editando && <span className="badge bg-warning text-dark ms-3">Editando</span>}
        </h2>
        <button 
          className="btn btn-success" 
          onClick={resetFormulario} 
          type="button"
          disabled={loading}
        >
          {editando ? 'Cancelar edición' : '+ Crear Libro'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del libro"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={autorId}
            onChange={(e) => setAutorId(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Seleccione autor</option>
            {autores.map(a => (
              <option key={a.id} value={a.id}>
                {a.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
            disabled={loading}
          >
            <option value="">Seleccione categoría</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
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
            disabled={loading}
          />
        </div>
        <div className="col-md-2">
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            disabled={loading}
          >
            {loading ? 'Procesando...' : editando ? 'Guardar' : 'Agregar'}
          </button>
        </div>
      </form>

      {loading && <div className="alert alert-info py-2">Cargando...</div>}
      {error && (
        <div className="alert alert-danger py-2">
          <strong>Error:</strong> {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success py-2">
          <strong>Éxito:</strong> {success}
        </div>
      )}

      <div className="row g-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={book.imagenUrl || 'https://placehold.co/220x260?text=Libro'}
                  alt={book.nombre || 'Sin título'}
                  className="card-img-top"
                  style={{ height: 220, objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.nombre || 'Sin título'}</h5>
                  <p><strong>Autor:</strong> {book.autor?.nombre || 'Desconocido'}</p>
                  <p><strong>Categoría:</strong> {book.categoria?.nombre || 'Sin categoría'}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleEdit(book)}
                    disabled={loading}
                  >
                    <i className="fas fa-pen"></i> Editar
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(book.id)}
                    disabled={loading}
                  >
                    <i className="fas fa-trash"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <div className="col-12">
              <div className="alert alert-warning">
                No se encontraron libros. ¡Agrega uno nuevo!
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}