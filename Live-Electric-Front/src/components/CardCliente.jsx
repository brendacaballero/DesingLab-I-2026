import { Link } from "wouter"

export function CardCliente(props) {
  return (
    <div className="card flex-fill border border-primary-1 border-2 mb-3" style={{ width: '24%', minWidth: '18rem' }} id="card">
      <div className="card-body">
        <h4 className="card-title text-uppercase text-primary-1 pb-3">{props.comprador}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Observaciones:</h6>
        <p>{props.observaciones}</p>
        <h6 className="card-subtitle mb-2 text-muted">Telefono:</h6>
        <p>{props.telefono}</p>
        <h6 className="card-subtitle mb-2 text-muted">Pesupuesto:</h6>
        <p>{props.presupuesto_min} $us - {props.presupuesto_max} $us </p>
        <h6 className="card-subtitle mb-2 text-muted">Motos de Interes:</h6>
        <p>{props.modeloInteres}</p>
        <h6 className="card-subtitle mb-2 text-muted">Estado:</h6>
        <p>{props.estado}</p>
      </div>
      <div className="card-footer d-flex justify-content-center gap-2">
        <Link href={`/formvisita/${JSON.stringify(props)}`} type="button" className="btn btn-login py-2 px-3">Nueva Visita</Link>
        <button type="button" className="btn btn-login py-2 px-3 bg-success">Vender</button>
      </div>
    </div>
  )
}          
