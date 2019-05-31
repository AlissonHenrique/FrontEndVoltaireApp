import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";

import api from "../../../services/api";
import "./styles.css";
class Signup extends Component {
  state = {
    message: ""
  };
  componentDidMount() {}
  handleSubmit = async data => {
    var self = this;
    await api
      .post("/session", data)
      .then(function(response) {
        if (response.status === 200) {
          window.location.href = "/dashboard/register";
        }
      })
      .catch(function(error) {
        if (error.response.status === 404) {
          console.log(error.response.data);
          self.setState({ message: error.response.data.error });
        }
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <Form onSubmit={this.handleSubmit}>
          {this.state.message.length > 1 ? (
            <p className="alert alert-danger text-center">
              {this.state.message}
            </p>
          ) : (
            <span />
          )}

          <Input type="email" name="email" placeholder="Seu e-mail" />
          <Input type="password" name="password" placeholder="Senha secreta" />

          <button type="submit">Logar</button>
        </Form>
      </div>
    );
  }
}

export default Signup;
