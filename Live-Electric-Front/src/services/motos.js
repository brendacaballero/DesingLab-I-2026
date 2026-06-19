import { BACKEND_URL } from "../contstants";

export async function obtenerMotos() {
  try {
    const requestOptions = {
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${BACKEND_URL}/motos`, requestOptions);
    const result = await response.json();
    console.log(result);
    
    return result;
  } catch (error) {
    console.error(error);
  }
}