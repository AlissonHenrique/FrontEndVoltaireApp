import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Contrato from "../pages/contrato";
import Ad from "../pages/ad";

// autentica rotas
const PrivateRout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <PrivateRout path="/dashboard/register" component={Ad} />
      <Route path="/signup" component={Signup} />
      <Route path="/contrato" component={Contrato} />

      <PrivateRout path="/teste" component={() => <h1>Você está Logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
