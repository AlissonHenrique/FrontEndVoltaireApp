import React, { Component } from "react";
import "./styles.css";
//import api from "../../../services/api";
class Contrato extends Component {
  handleSubmit = async => {
    const url = window.location.search.replace("?", "");
    const items = url.split("&");

    const array = {
      id: items[0],
      name: items[1],
      email: items[2],
      aceite: items[3]
    };

    console.log(array);
  };

  render() {
    const url = window.location.search.replace("?", "");
    const items = url.split("&");

    const arrayname = {
      name: items[1]
    };

    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 card">
            <h1>Contrato</h1> <br />
            <p>
              Olá {arrayname.name} realizou uma matrícula num curso da Voltaire
              Educacional.
              <br /> Veja abaixo seu contrato e clique em aceito para finalizar
              a sua matrícula.
            </p>
            <a href="#">Contrato</a>
            <br />
            <button className="btn" onClick={this.handleSubmit}>
              Aceito o contrato
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contrato;
