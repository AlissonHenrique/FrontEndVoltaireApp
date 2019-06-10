import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import { withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login, username, setId } from "../../../services/auth";

import "./styles.css";
class Signup extends Component {
  state = {
    message: ""
  };
  componentDidMount() {}
  handleSubmit = async data => {
    try {
      const response = await api.post("/session", data);
      const { name, _id } = response.data.user;
      login(response.data.token);
      username(name);
      setId(_id);
      this.props.history.push("/register");
    } catch (err) {
      this.setState({ message: err.response.data.error });
    }
  };

  render() {
    return (
      <div className="auth-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <img
            src="https://eadvoltaire.com.br/img/voltaire-logo.svg"
            width="200"
            alt=""
          />
          <br />
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

export default withRouter(Signup);
