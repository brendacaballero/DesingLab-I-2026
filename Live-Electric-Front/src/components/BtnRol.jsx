import { Link } from "wouter"

export function BtnRol(props) {
  return (
    <div className="col-md-4 mb-4">

      <Link href="/login" className="role-card">
        
        <div className="role-icon">
        {props.tipo === "Administrador" ? "👨‍💼" : "🛒"}
        </div>

        <h3>
          {props.tipo === "Administrador" ? "Administrador" : "Vendedor"}
        </h3>

      </Link>

    </div>

    
  )

}