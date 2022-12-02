/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";

import Cobradores from "./pages/Cobradores";
import create from "./pages/cobradores/create"
import IndexRutas from "./pages/rutas/Rutas";
import Sedes from './pages/sedes/Sedes'
import PrestamosPorRuta from "./pages/prestamos/PrestamosPorRuta";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Cobradores} />
          <Route exact path="/cobradores/crear" component={create} />
          <Route exact path="/rutas/:id" component={IndexRutas} />
          <Route path="/rutas/:id/prestamos" component={PrestamosPorRuta} />
          <Route exact path="/sedes" component={Sedes} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
