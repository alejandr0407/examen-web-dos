import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <NavLink to="/" className="brand">
          <div className="brand-badge">📚</div>
          <span>Librería Archivo</span>
        </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/">⌂ Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo">▦ Catálogo</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">✉ Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar