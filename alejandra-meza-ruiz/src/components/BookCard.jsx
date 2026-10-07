function BookCard({ book }) {
  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">📖</div>

          <span className="card-rating-badge">
            ⭐ {book.calificacion.toFixed(1)}
          </span>
        </div>

        <span className="badge badge-neutral">
          {book.categoria}
        </span>

        <h3 className="card-title">{book.titulo}</h3>

        <p className="card-author">
          Por {book.autor} ({book.anio})
        </p>

        <p className="card-summary">
          {book.resumen}
        </p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{book.editorial}</strong>
          </span>

          <span>
            ISBN: <code>{book.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          📚 {book.paginas} páginas
        </span>

        <span className="card-meta">
          Edición {book.anio}
        </span>
      </div>
    </article>
  )
}

export default BookCard