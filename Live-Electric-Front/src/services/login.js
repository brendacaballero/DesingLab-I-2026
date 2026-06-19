import { BACKEND_URL } from "../contstants";

export async function hacerLogin(correo, password) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    };

    const response = await fetch(`${BACKEND_URL}/login?correo=${encodeURIComponent(correo)}&password=${encodeURIComponent(password)}`, requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}