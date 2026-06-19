import { useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "../components/Navbar";
import Logo from "../assets/Logo.png"
import { Link } from "wouter"
import { hacerLogin } from "../services/login";

export function Login() {
  const [location, setLocation] = useLocation();
  const [correo, actualizarCorreo] = useState('');
  const [password, actualizarPassword] = useState('');

  function manejarCorreo(event) {
    const { value } = event.target;
    console.log('Correo ingresado:', value);
    actualizarCorreo(value);
  }

  function manejarPassword(event) {
    const { value } = event.target;
    actualizarPassword(value);
  }

  async function login() {
    const usuario = await hacerLogin(correo, password);

    if (usuario.correo) {
      sessionStorage.setItem("usuario", JSON.stringify(usuario));  // Guardar usuario
      setLocation("/portalventas");                                // Ir a portal de ventas
    } else {
      alert(usuario.mensaje);
    }

  }

  return (
    <>
      <Navbar />
      <section className="login-page">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-6 col-lg-5">

              <div className="login-card">

                <div className="text-center">

                  <img src={Logo} alt="Live Electric" className="login-logo" />

                  <h2 className="login-title">
                    Iniciar Sesión
                  </h2>

                </div>

                <form>

                  <div className="mb-3">

                    <label className="form-label">
                      Correo Electrónico
                    </label>

                    <input type="email" className="form-control" placeholder="correo@ejemplo.com" value={correo} onChange={manejarCorreo} />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Contraseña
                    </label>

                    <input type="password" className="form-control" placeholder="********" value={password} onChange={manejarPassword} />

                  </div>

                  <div className="text-end mb-4">

                    <Link href="#" className="forgot-password disabled">
                      ¿Olvidaste tu contraseña?
                    </Link>

                  </div>

                  <button type="button" className="btn btn-login w-100" onClick={login}>
                    Iniciar Sesión
                  </button>

                </form>

                <div className="text-center mt-4">

                  <Link href="/roles" className="btn btn-outline-secondary">

                    Regresar

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}