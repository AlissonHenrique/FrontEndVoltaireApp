import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import { Redirect } from "react-router-dom";
import api from "../../../services/api";
import "./styles.css";
class Signup extends Component {
  handleSubmit = async data => {
    await api
      .post("/users", data)
      .then(function(response) {
        console.log(response);
        return <Redirect to="/" />;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <Input type="text" name="name" placeholder="Nome completo" />
          <Input type="email" name="email" placeholder="Seu e-mail" />
          <Input type="password" name="password" placeholder="Senha secreta" />

          <button type="submit">Criar conta</button>

          <a href="/">Já possuo conta</a>
        </Form>
      </div>
    );
  }
}

export default Signup;
