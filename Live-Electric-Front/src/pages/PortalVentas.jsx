import { CardCliente } from "../components/CardCliente";
import { FormCliente } from "../components/FormCliente";
import { Navbar } from "../components/Navbar";
import { obtenerVisitas } from "../services/visitas";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export function PortalVentas() {
  const [visitas, actualizarVisitas] = useState([])

  useEffect(function () {

    async function obtenerVisitasAsincrono() {
      const visitasObtenidas = await obtenerVisitas()
      actualizarVisitas(visitasObtenidas)
    }

    obtenerVisitasAsincrono()

  }, [])

  return (
    <>
      <Navbar />
      <section className="">

        <div className="container d-flex justify-content-between align-items-center" style={{ height: '68px' }}>

          <h2 className="hero-title fs-2 mb-0">
            Portal de ventas
          </h2>

          <div>
            <div className="d-flex gap-3">
              <button className="btn hero-btn py-2 px-3" style={{ height: '40px' }} data-bs-toggle="modal" data-bs-target="#comprador-modal">
                Añadir Cliente
              </button>

              <Link href="/formvisita" className="btn hero-btn py-2 px-3" style={{ height: '40px' }}>
                Añadir Visita
              </Link>

            </div>
          </div>

        </div>

        <div className="container d-flex flex-wrap gap-4 justify-content-between ">
          {(visitas ?? []).map(visita => {
            return (
              <CardCliente
                id={visita.id}
                comprador={`${visita.nom_comprador} ${visita.ape_comprador}`}
                observaciones={visita.observaciones}
                telefono={visita.celular}
                presupuesto_max={visita.presupuesto_max}
                presupuesto_min={visita.presupuesto_min}
                modeloInteres={visita.modelos}
                estado={visita.estado}
              />
            )
          })}

        </div>

      </section>

      <FormCliente />
    </>

  )
}