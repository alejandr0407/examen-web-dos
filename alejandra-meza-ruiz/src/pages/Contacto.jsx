import { useState } from "react"

function Contacto() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [asunto, setAsunto] = useState("")
  const [mensaje, setMensaje] = useState("")

  const limpiarFormulario = () => {
    setNombre("")
    setEmail("")
    setAsunto("")
    setMensaje("")
  }

  return (
    <>
      <section className="hero-banner">
        <h1 className="hero-title">
          Contacto & Consultas del Archivo
        </h1>

        <p className="hero-subtitle">
          Ponte en comunicación con el equipo de curaduría
          bibliográfica o solicita acceso a títulos.
        </p>
      </section>

      <section className="contact-layout">
        <article className="contact-card">
          <h2>Canales de Atención</h2>

          <p>
            Nuestros bibliotecarios e investigadores responden
            consultas en días hábiles.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box">✉</div>
              <div>
                <strong>Correo Electrónico</strong>
                <span>contacto@libreria-archivo.org</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">☎</div>
              <div>
                <strong>Teléfono de Sala</strong>
                <span>+57 (604) 444-2020</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">📍</div>
              <div>
                <strong>Sede Principal</strong>
                <span>Calle 48 #72-10, Edificio Bauhaus</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">🕐</div>
              <div>
                <strong>Horario de Consulta</strong>
                <span>Lunes a Viernes: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </article>

        <article className="contact-card">
          <h2>Enviar Mensaje</h2>

          <p>
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <div className="form-group">
            <label className="form-label">
              Nombre Completo
            </label>

            <input
              className="form-control"
              type="text"
              placeholder="Ej. Ana María Gómez"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Correo Electrónico
            </label>

            <input
              className="form-control"
              type="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Motivo de Consulta
            </label>

            <select
              className="form-control"
              value={asunto}
              onChange={e => setAsunto(e.target.value)}
            >
              <option value="">Selecciona un motivo...</option>
              <option value="prestamo">
                Consulta de libro en sala
              </option>
              <option value="donacion">
                Donación de archivo
              </option>
              <option value="investigacion">
                Apoyo en investigación académica
              </option>
              <option value="general">
                Información general
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Mensaje
            </label>

            <textarea
              className="form-control"
              placeholder="Describe brevemente tu solicitud..."
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={limpiarFormulario}
          >
            Enviar Formulario
          </button>
        </article>
      </section>
    </>
  )
}

export default Contacto