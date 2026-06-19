import { BACKEND_URL } from "../contstants";

export async function obtenerVisitas() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${BACKEND_URL}/visitas`, requestOptions);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}

// upsert = UPdate + inSERT -> es una palabra que nos indica que actualiza o crea
export async function upsertVisitas(id, correo_vendedor, modelos, nom_comprador, ape_comprador, presupuesto_min, presupuesto_max, estado, observaciones) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        correo_vendedor,
        modelos,
        nom_comprador,
        ape_comprador,
        presupuesto_min,
        presupuesto_max,
        estado,
        observaciones
      })
    };

    const response = await fetch(`${BACKEND_URL}/visitas`, requestOptions);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}
