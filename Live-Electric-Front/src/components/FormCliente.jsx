import { useState } from 'react';
import { crearComprador } from '../services/compradores';

export function FormCliente() {

  const [nombre, actualizarNombre] = useState('');
  const [apellido, actualizarApellido] = useState('');
  const [ci, actualizarCi] = useState('');
  const [celular, actualizarCelular] = useState('');
  const [procedencia, actualizarProcedencia] = useState('');

  function manejarNombre(event) {
    const { value } = event.target;
    console.log('Nombre ingresado:', value);
    actualizarNombre(value);
  }

  function manejarApellido(event) {
    const { value } = event.target;
    console.log('Apellido ingresado:', value);
    actualizarApellido(value);
  }

  function manejarCi(event) {
    const { value } = event.target;
    console.log('Carnet ingresado:', value);
    actualizarCi(value);
  }

  function manejarCelular(event) {
    const { value } = event.target;
    console.log('Celular ingresado:', value);
    actualizarCelular(value);
  }

  function manejarProcedencia(event) {
    const { value } = event.target;
    console.log('Procedencia ingresada:', value);
    actualizarProcedencia(value);
  }

  function limpiarForm() {
    actualizarNombre('')
    actualizarApellido('')
    actualizarCi('')
    actualizarCelular('')
    actualizarProcedencia('')
  }

  async function guardarCliente() {
    const response = await crearComprador(nombre, apellido, ci, celular, procedencia)
    if (response) {
      alert("Usuario creado correctamente");
      limpiarForm();
    }   
  }

  return (
    <div className="modal fade" id="comprador-modal" tabIndex="-1" aria-labelledby="compradorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="hero-title fs-4 mt-4 text center" id="compradorModalLabel">Registrar Nuevo Cliente</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>

          <div className="modal-body hero-text">
            <form className="">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputNombres">Nombres:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Nombres"
                    placeholder=""
                    value={nombre}
                    onChange={manejarNombre}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputApellidos">Apellidos:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Apellidos"
                    placeholder=""
                    value={apellido}
                    onChange={manejarApellido}
                  />
                </div>
              </div><br />

              <div className="form-group">
                <label htmlFor="inputCI">CI:</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCI"
                  placeholder="Carnet de Identidad"
                  value={ci}
                  onChange={manejarCi}
                />

              </div><br />

              <div className="form-group">
                <label htmlFor="inputPhone">Telefono Celular:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  placeholder="(591) 70707070"
                  value={celular}
                  onChange={manejarCelular}
                />
              </div><br />

              <fieldset className="form-group">
                <div className="row d-flex justify-content-center ">
                  <legend className="col-form-label pt-0">Red Social:</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="Whatsapp"
                        onChange={manejarProcedencia}
                        checked={procedencia==="Whatsapp"}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        WhatsApp
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="Instagram"
                        onChange={manejarProcedencia}
                        checked={procedencia==="Instagram"}
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Instagram
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="Facebook"
                        onChange={manejarProcedencia}
                        checked={procedencia==="Facebook"}
                      />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Facebook
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="TikTok"
                        onChange={manejarProcedencia}
                        checked={procedencia==="TikTok"}
                      />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Tik Tok
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn hero-btn-back" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn hero-btn" data-bs-dismiss="modal" onClick={guardarCliente}>Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  )
}