import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={book.image}
        alt={book.title}
        className="card-img-top object-fit-cover"
        style={{ height: 260 }}
      />
      <div className="card-body text-center">
        <h3 className="card-title mb-1">{book.title}</h3>
        <p className="mb-1 text-muted">{book.author}</p>
        <span className="badge bg-primary mb-2">{book.category}</span>
        <div className="mb-0">
          <span className="text-warning"><i className="fas fa-star"></i></span> {book.rating}
        </div>
      </div>
    </div>
  );
}