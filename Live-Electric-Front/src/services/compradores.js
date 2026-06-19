import { BACKEND_URL } from "../contstants";

export async function obtenerCompradores() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${BACKEND_URL}/compradores`, requestOptions);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function crearComprador(nombres, apellidos, ci, celular, procedencia) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombres,
        apellidos,
        ci,
        celular,
        procedencia
      })
    };

    const response = await fetch(`${BACKEND_URL}/compradores`, requestOptions);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}