import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderFront from '../components/HeaderFront';

function Prestamos() {
  const [dias, setDias] = useState('');
  const [fechaPrestamo, setFechaPrestamo] = useState('');
  const [fechaDevolucion, setFechaDevolucion] = useState('');

  const calcularFechaDevolucion = () => {
    if (!fechaPrestamo || !dias) return;
    const fecha = new Date(fechaPrestamo);
    fecha.setDate(fecha.getDate() + parseInt(dias));
    setFechaDevolucion(fecha.toISOString().split('T')[0]);
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    alert('Datos guardados correctamente.');
    // Aquí podrías enviar los datos a una API si luego deseas conectar con backend.
  };

  return (
    <div className="app-container">
      <HeaderFront />

       {/* Main Content */}
      <main className="main-content min-vh-100 py-5">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="card shadow-lg border-0">
                <div className="card-body bg-white text-primary rounded">
                  <h2 className="fw-bold mb-4 text-center">
                    <i className="fas fa-handshake me-2"></i>Formulario de Préstamo
                  </h2>
                  <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-user me-2"></i>Nombre del lector
                      </label>
                      <input type="text" name="nombre" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-book me-2"></i>Título del libro
                      </label>
                      <input type="text" name="libro" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-calendar-alt me-2"></i>Fecha de préstamo
                      </label>
                      <input
                        type="date"
                        value={fechaPrestamo}
                        onChange={(e) => setFechaPrestamo(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-clock me-2"></i>Días de préstamo
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                      <button type="button" className="btn btn-primary text-white" onClick={calcularFechaDevolucion}>
                        <i className="fas fa-calendar-check me-1"></i> Calcular devolución
                      </button>
                      <button type="submit" className="btn btn-outline-primary text-primary">
                        <i className="fas fa-save me-1"></i> Guardar datos
                      </button>
                      <button type="button" className="btn btn-outline-primary text-primary">
                        <i className="fas fa-calendar-plus me-1"></i> Reservar libro
                      </button>
                      <button type="button" className="btn btn-outline-primary text-primary">
                        <i className="fas fa-exchange-alt me-1"></i> Cambiar libro
                      </button>
                    </div>
                    {fechaDevolucion && (
                      <div className="alert alert-primary text-center fw-semibold mt-3 mb-0" role="alert">
                        <i className="fas fa-calendar-day me-2"></i>
                        Fecha estimada de devolución: <strong>{fechaDevolucion}</strong>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Prestamos;
