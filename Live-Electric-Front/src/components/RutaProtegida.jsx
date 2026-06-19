import { useEffect } from "react";
import { Route, useLocation } from "wouter";

export const RutaProtegida = ({ component: Component, ...rest }) => {
  const [location, setLocation] = useLocation();
  const estaAutenticado = !!sessionStorage.getItem("usuario");

  useEffect(() => {
    if (!estaAutenticado) {
      setLocation("/login");
    }
  }, [estaAutenticado, setLocation]);

  return estaAutenticado ? <Route {...rest} component={Component} /> : null;
};
