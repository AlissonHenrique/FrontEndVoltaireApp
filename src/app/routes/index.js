import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAutenticate } from "../config/auth";

import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Ad from "../pages/ad";

// autentica rotas
const PrivateRout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutenticate() ? (
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
      <Route path="/dashboard/register" component={Ad} />
      <Route path="/signup" component={Signup} />

      <PrivateRout path="/teste" component={() => <h1>Você está Logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
