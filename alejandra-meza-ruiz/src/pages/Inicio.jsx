import books from "../data/books"
import BookCard from "../components/BookCard"

function Inicio() {
  const totalLibros = books.length
  const categorias = new Set(books.map(book => book.categoria)).size
  const promedio = (
    books.reduce((total, book) => total + book.calificacion, 0) /
    books.length
  ).toFixed(1)

  const paginas = books.reduce((total, book) => total + book.paginas, 0)

  const destacados = books.filter(book => book.destacado)

  const stats = [
    { valor: totalLibros, texto: "Libros Indexados" },
    { valor: categorias, texto: "Categorías Temáticas" },
    { valor: promedio, texto: "Calificación Promedio" },
    { valor: paginas, texto: "Páginas Totales" }
  ]

  return (
    <>
      <section className="hero-banner">
        <h1 className="hero-title">
          Biblioteca de Diseño & Teoría Visual
        </h1>

        <p className="hero-subtitle">
          Colección y catálogo especializado en teoría visual,
          arquitectura, tipografía y diseño editorial.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">
            📊 Resumen del Repositorio
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map(stat => (
            <article className="stat-card" key={stat.texto}>
              <div className="stat-icon-wrapper">📚</div>

              <div className="stat-content">
                <span className="stat-number">
                  {stat.valor}
                </span>

                <span className="stat-label">
                  {stat.texto}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">
            ⭐ Obras Destacadas
          </h2>
        </div>

        <div className="cards-grid">
          {destacados.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Inicio