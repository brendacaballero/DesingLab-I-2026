import { Navbar } from '../components/Navbar'
import Logo from '../assets/Logo.png'
import { Link } from "wouter"
import { BtnRol } from '../components/BtnRol'



export function Roles() {
  return (
    <>
      <Navbar />
      <section className="roles-page">

        <div className="container">

          <div className="text-center">

            <img src={Logo} alt="Live Electric" className="roles-logo" />

            <h1 className="roles-title">
              Selecciona tu Rol
            </h1>

            <p className="roles-subtitle">
              Elige el perfil con el que deseas ingresar al sistema.
            </p>

          </div>

          <div className="row justify-content-center mt-5">

            <BtnRol tipo="Administrador" />

            <BtnRol tipo="Vendedor" />

          </div>

          <div className="text-center mt-4">

            <Link href="/" className="btn btn-login">
              Regresar
            </Link>

          </div>

        </div>

      </section>
    </>
  )
}