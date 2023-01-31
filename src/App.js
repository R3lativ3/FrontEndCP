import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useContext } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./components/layout/Main";

import Cobradores from "./pages/Cobradores";
import create from "./pages/cobradores/create"
import IndexRutas from "./pages/rutas/Rutas";
import IndexCobros from './pages/cobros/Cobros'
import Sedes from './pages/sedes/Sedes'
import PrestamosPorRuta from "./pages/prestamos/PrestamosPorRuta";
import DetalleRuta from "./pages/rutas/DetalleRuta/DetalleRuta";
import Clientes from "./pages/clientes/Clientes";
import AgregarCliente from "./pages/clientes/AgregarCliente";
import { AuthContext } from './context/AuthContext'
import Prestamos from "./pages/prestamos/Prestamos";

function App() {
  const { isLoading, userToken } = useContext(AuthContext)


  if(isLoading){
    return <p>Loading...</p>
  }

  return userToken !== null ?
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Main>
            <Route exact path="/rutas/:id/detalle" component={DetalleRuta} /> 
            <Route exact path="/rutas/:id/prestamos" component={PrestamosPorRuta} /> 
            <Route exact path="/rutas/:id/cobros/:fecha" component={IndexCobros} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/rtl" component={Cobradores} />
            <Route exact path="/cobradores/crear" component={create} />
            <Route exact path="/clientes/crear" component={AgregarCliente} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/rutas/:id" component={IndexRutas} />
            <Route exact path="/sedes" component={Sedes} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/prestamos" component={Prestamos} />
            <Redirect from="*" to="/dashboard" />
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
    : <Login />
}

export default App;
