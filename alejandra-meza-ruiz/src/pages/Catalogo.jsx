import { useState } from "react"
import books from "../data/books"
import BookCard from "../components/BookCard"

function Catalogo() {
  const [busqueda, setBusqueda] = useState("")
  const [categoria, setCategoria] = useState("")

  const categorias = [
    ...new Set(books.map(book => book.categoria))
  ]

  const resultados = books.filter(book => {
    const texto = busqueda.toLowerCase()

    const coincideTexto =
      book.titulo.toLowerCase().includes(texto) ||
      book.autor.toLowerCase().includes(texto) ||
      book.resumen.toLowerCase().includes(texto) ||
      book.editorial.toLowerCase().includes(texto)

    const coincideCategoria =
      categoria === "" || book.categoria === categoria

    return coincideTexto && coincideCategoria
  })

  return (
    <>
      <section className="hero-banner">
        <h1 className="hero-title">
          Colección de Textos & Documentos
        </h1>

        <p className="hero-subtitle">
          Explora el catálogo completo de publicaciones,
          ensayos y tratados de diseño.
        </p>
      </section>

      <section className="filter-toolbar">
        <div className="search-group">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por título, autor o concepto..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
        </div>

        <select
          className="select-category"
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>

          {categorias.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="badge badge-neutral">
          {resultados.length} de {books.length} registros
        </span>
      </section>

      <section>
        <div className="cards-grid">
          {resultados.length > 0 ? (
            resultados.map(book => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <div className="empty-message">
              <p>
                No se encontraron registros con los filtros actuales.
              </p>

              <button
                className="btn btn-secondary"
                onClick={() => {
                  setBusqueda("")
                  setCategoria("")
                }}
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Catalogo