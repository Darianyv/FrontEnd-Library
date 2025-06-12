import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-secondary me-3" aria-label="Abrir menú">
            ☰
          </button>
          <form className="d-flex" style={{ maxWidth: 250 }}>
            <input
              className="form-control form-control-sm me-2"
              type="text"
              placeholder="Buscar..."
              aria-label="Buscar"
            />
            <button className="btn btn-primary btn-sm" type="submit">
              🔍
            </button>
          </form>
        </div>
        <nav className="d-flex align-items-center gap-3">
          <button className="btn position-relative" aria-label="Alertas">
            <span role="img" aria-label="Campana">🔔</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3+
            </span>
          </button>
          <button className="btn position-relative" aria-label="Mensajes">
            <span role="img" aria-label="Mensaje">✉️</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              7
            </span>
          </button>
          <div className="d-flex align-items-center ms-3">
            <span className="me-2 fw-bold">Douglas McGee</span>
            <img
              src="img/undraw_profile.svg"
              alt="Usuario"
              className="rounded-circle border border-primary"
              style={{ width: 36, height: 36 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}