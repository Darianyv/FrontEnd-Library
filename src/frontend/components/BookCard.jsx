import React from 'react';

export default function BookCard({ libro }) {
  return (
    <div className="card h-100 shadow-sm border-0" style={{ width: 220, minHeight: 400 }}>
      <img
        src={libro.img}
        alt={libro.titulo}
        className="card-img-top object-fit-cover"
        style={{ height: 260, objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title mb-1">{libro.titulo}</h5>
        <p className="mb-1 text-muted">{libro.autor}</p>
        <span className="badge bg-primary mb-2">{libro.categoria}</span>
        <div className="mb-0">
          <span className="text-warning"><i className="fas fa-star"></i></span> {libro.popularidad}
        </div>
      </div>
    </div>
  );
}