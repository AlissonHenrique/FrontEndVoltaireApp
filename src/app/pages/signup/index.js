import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import "./styles.css";
class Signup extends Component {
  state = {
    message: ""
  };
  handleSubmit = async data => {
    try {
      await api.post("/users", data);

      this.props.history.push("/");
    } catch (err) {
      this.setState({ message: err.response.data.error });
    }

    // await api
    //   .post("/users", data)
    //   .then(function(response) {
    //     console.log(response);

    //     this.props.history.push("/");
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
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

          <Input type="text" name="name" placeholder="Nome" />
          <Input type="email" name="email" placeholder="Seu e-mail" />
          <Input type="password" name="password" placeholder="Senha secreta" />

          <button type="submit">Criar conta</button>

          <Link to={"/"}>Já possuo conta</Link>
        </Form>
      </div>
    );
  }
}

export default withRouter(Signup);
