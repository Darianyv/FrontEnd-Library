import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/prestamos.css';
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
      <main className="main-content">
        <section className="prestamo-section">
          <h2>Formulario de Préstamo</h2>
          <form className="prestamo-form" onSubmit={guardarDatos}>
            <table className="form-table">
              <tbody>
                <tr>
                  <th>Nombre del lector</th>
                  <td><input type="text" name="nombre" required /></td>
                </tr>
                <tr>
                  <th>Título del libro</th>
                  <td><input type="text" name="libro" required /></td>
                </tr>
                <tr>
                  <th>Fecha de préstamo</th>
                  <td>
                    <input
                      type="date"
                      value={fechaPrestamo}
                      onChange={(e) => setFechaPrestamo(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>Días de préstamo</th>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={dias}
                      onChange={(e) => setDias(e.target.value)}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="btn-group">
              <button type="button" className="btn calcular-btn" onClick={calcularFechaDevolucion}>
                Calcular devolución
              </button>
              <button type="submit" className="btn guardar-btn">Guardar datos</button>
              <button type="button" className="btn reservar-btn">Reservar libro</button>
              <button type="button" className="btn cambiar-btn">Cambiar libro</button>
            </div>

            {fechaDevolucion && (
              <p className="resultado-fecha">
                Fecha estimada de devolución: <strong>{fechaDevolucion}</strong>
              </p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Prestamos;
