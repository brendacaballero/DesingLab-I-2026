import { Navbar } from "../components/Navbar";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { obtenerCompradores } from "../services/compradores";
import { obtenerMotos } from "../services/motos";
import Select from 'react-select';
import { upsertVisitas } from "../services/visitas";

export function FormVisita(props) {
  const [location, setLocation] = useLocation();
  const esParaActualizar = !!props.visita;
  const usuario = sessionStorage.getItem("usuario");

  const visitaASerActualizada = esParaActualizar ? JSON.parse(props.visita[0]) : null;

  const [opCompradores, actualizarOpCompradores] = useState([])
  const [opMotos, actualizarOpMotos] = useState([])

  const [comprador, actualizarComprador] = useState(visitaASerActualizada?.comprador ?? '');
  const [presupuestoMin, actualizarPresupuestoMin] = useState(visitaASerActualizada?.presupuesto_min ?? '');
  const [presupuestoMax, actualizarPresupuestoMax] = useState(visitaASerActualizada?.presupuesto_max ?? '');
  const [motosInteres, actualizarMotosInteres] = useState(visitaASerActualizada?.modeloInteres.split(', ').map(function (modelo) {
    return ({ value: modelo, label: modelo })
  }) ?? '');
  const [observaciones, actualizarObservaciones] = useState(visitaASerActualizada?.observaciones ?? '');

  useEffect(function () {

    async function obtenerCompradoresAsincrono() {
      const compradoresObtenidos = await obtenerCompradores()
      actualizarOpCompradores(compradoresObtenidos)
    }

    obtenerCompradoresAsincrono()

  }, [])

  useEffect(function () {

    async function obtenerMotosAsincrono() {
      const motosObtenidas = await obtenerMotos()
      actualizarOpMotos(motosObtenidas)
    }

    obtenerMotosAsincrono()

  }, [])

  function manejarComprador(event) {
    const { value } = event.target;
    console.log('Comprador ingresado:', value);
    actualizarComprador(value);
  }

  function manejarPresupuestoMin(event) {
    const { value } = event.target;
    console.log('Presupuesto minimo ingresado:', value);
    actualizarPresupuestoMin(value);
  }

  function manejarPresupuestoMax(event) {
    const { value } = event.target;
    console.log('Presupuesto maximo ingresado:', value);
    actualizarPresupuestoMax(value);
  }

  function manejarMotosInteres(value) {
    console.log('Motos/Moto interes ingresado:', value);
    actualizarMotosInteres(value);
  }

  function manejarObservaciones(event) {
    const { value } = event.target;
    console.log('Observaciones ingresadas:', value);
    actualizarObservaciones(value);
  }

  async function guardarVisita() {
    let nuevoEstado = 'Primera';
    if (visitaASerActualizada?.estado === 'Primera' || visitaASerActualizada?.estado === 'En Proceso') {
      nuevoEstado = 'En Proceso'
    }
    
    const visitaGuardada = await upsertVisitas(
      visitaASerActualizada?.id,
      JSON.parse(usuario).correo,
      motosInteres.map(function (moto) {
        return moto.value;
      }).join(', '),
      comprador.split(' ')[0],
      comprador.split(' ')[1],
      presupuestoMin,
      presupuestoMax,
      nuevoEstado,
      observaciones);

    setLocation('/portalventas')
  }

  return (
    <>
      <Navbar />
      <section className="formulario visita m-4">
        <div className="container">
          <h2 className="hero-title fs-2 mt-4 text-center">Registro de Visita</h2>

          <form className="hero-text">
            <fieldset>
              <div>
                <label htmlFor="exampleDataList" className="form-label">Comprador:</label>
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Seleccione un comprador ..."
                  value={comprador}
                  onChange={manejarComprador}
                  disabled={esParaActualizar}
                />
                <datalist id="datalistOptions">
                  {(opCompradores ?? []).map(function (comprador) {
                    return (
                      <option value={`${comprador.nombres} ${comprador.apellidos}`} key={`${comprador.nombres} ${comprador.apellidos}`} />
                    )
                  })}
                </datalist>
              </div><br />

              <div className="row">
                <div className="col">
                  <label htmlFor="disabledTextInput">Presupuesto:</label>

                  <div className="row">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Minimo"
                        value={presupuestoMin}
                        onChange={manejarPresupuestoMin}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maximo"
                        value={presupuestoMax}
                        onChange={manejarPresupuestoMax}
                      />
                    </div>
                  </div>

                </div>
              </div><br />

              <div className="mb-3">
                <label htmlFor="inputGroupSelect01" className="form-label">Motos de interes:</label>
                <Select
                  isMulti
                  options={(opMotos ?? []).map(function (moto) {
                    return {
                      value: moto.modelo, label: moto.modelo
                    }
                  })}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Selecciona la moto o motos de interes..."
                  value={motosInteres}
                  onChange={manejarMotosInteres}
                />
              </div><br />

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Observaciones: </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={observaciones}
                  onChange={manejarObservaciones}
                ></textarea>
              </div>

              <div className="d-flex d-flex justify-content-between mt-4">
                <Link href="/portalventas" className="btn hero-btn-back m-2">Regresar</Link>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn hero-btn m-2" onClick={guardarVisita}>Guardar</button>
                  <button type="button" className="btn hero-btn-vender m-2" disabled>Vender</button>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </section>
    </>
  )
}