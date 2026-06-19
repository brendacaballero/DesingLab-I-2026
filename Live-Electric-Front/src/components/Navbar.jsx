import logo from '../assets/Logo.png'
import { Link, useLocation } from "wouter"
import catalogo2026 from '../assets/catalogo2026.pdf'

export function Navbar() {
  const [location] = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">

        <div className="container">

          <a className="navbar-brand" href="#">
            <img src={logo} alt="Live Electric" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">

            <span className="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse" id="menu">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href={catalogo2026} target='_blank' rel="noopener noreferrer">
                  Catálogo
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#" >
                  Tutorial
                </a>
              </li>

            </ul>

            {location === "/" ? <Link href="/roles" className="btn btn-login ms-3">Ingresar</Link> 
            : location === "/login" ? <></>
            :<Link href="/" className="btn btn-login ms-3">Inicio</Link>}

          </div>

        </div>

      </nav>
    </>
  )
}