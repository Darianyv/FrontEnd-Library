import React from 'react';

export default function ClienteDashboard({ userName }) {
  return (
    <div className="container py-4">
      {/* Bienvenida personalizada */}
      <h2 className="mb-4">¡Bienvenido/a, {userName}!</h2>

      {/* Accesos rápidos */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <button className="btn btn-primary w-100">
            <i className="bi bi-book me-2"></i> Biblioteca
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-success w-100">
            <i className="bi bi-clock-history me-2"></i> Historial de Lectura
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-warning w-100">
            <i className="bi bi-star me-2"></i> Favoritos
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button className="btn btn-info w-100">
            <i className="bi bi-chat-dots me-2"></i> Mensajes
          </button>
        </div>
      </div>

      {/* Resumen de actividad */}
      <div className="mb-4">
        <h4>Tu actividad reciente</h4>
        <ul>
          <li>Último libro leído: <strong>El Principito</strong></li>
          <li>Libros en progreso: <strong>2</strong></li>
          <li>Favoritos: <strong>8</strong></li>
          <li>Mensajes sin leer: <strong>1</strong></li>
        </ul>
      </div>

      {/* Notificaciones o mensajes importantes */}
      <div className="alert alert-info" role="alert">
        ¡Nuevos libros agregados esta semana! Explora las novedades en tu biblioteca.
      </div>

      {/* Soporte o ayuda */}
      <div className="mt-4">
        <button className="btn btn-outline-secondary">
          <i className="bi bi-question-circle me-2"></i> Ayuda y Soporte
        </button>
      </div>
    </div>
  );
}