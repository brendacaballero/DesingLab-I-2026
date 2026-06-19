import './styles/App.css'

import { Route, Switch } from "wouter";
import { Home } from './pages/Home';
import { Roles } from './pages/Roles';
import { Login } from './pages/Login';
import { PortalVentas } from './pages/PortalVentas';
import { FormVisita } from './pages/FormVisita';

import { RutaProtegida } from './components/RutaProtegida';



function App() {
  return (
    <>
      <Switch>

        <Route path="/roles" component={Roles} />
        <Route path="/login" component={Login} />
        <RutaProtegida path="/portalventas" component={PortalVentas} />
        <RutaProtegida path="/formvisita" component={FormVisita} />

        <RutaProtegida path="/formvisita/:visita">
          {(visita) => <FormVisita visita={visita} />}
        </RutaProtegida>

        <Route path="/" component={Home} />
        {/* Default route in a switch */}
        <Route>404: Pagina no encontrada!</Route>

      </Switch>

    </>
  )
}

export default App
