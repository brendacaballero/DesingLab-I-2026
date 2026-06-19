
import { Carousel } from '../components/Carousel';
import catalogo2026 from '../assets/catalogo2026.pdf'

export function Main() {
  return (
    <>
      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <h1 className="hero-title">
                Vive la Energía del Futuro
              </h1>

              <p className="hero-text">
                Descubre scooters y motos eléctricas
                diseñadas para una movilidad moderna,
                eficiente y sostenible.
              </p>

              <a className="btn hero-btn" href={catalogo2026} target='_blank' rel="noopener noreferrer">
                Ver Catálogo
              </a>

            </div>
              <Carousel/>
          </div>

        </div>

      </section>
    </>
  )
}
