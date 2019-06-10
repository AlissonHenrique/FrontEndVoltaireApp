import React, { Component } from "react";
import "./styles.css";
import api from "../../../services/api";

class Contrato extends Component {
  state = {
    url: "",
    name: "",
    curse: "",
    modalidade: ""
  };
  componentDidMount() {
    this.handleContrato();
  }
  handleContrato = async () => {
    const url = window.location.search.replace("?", "");
    const items = url.split("&");

    const arrayname = {
      name: items[1].replace("%20", " "),
      curse: items[2]
        .replace("%20", " ")
        .replace("%C3%AA", "ê")
        .replace("%C3%AD", "í")

        .replace("%C3%BA", "ú")
        .replace("%C3%B3", "ó")
        .replace("%C3%A3", "ã")
        .replace("%C3%A7", "ç"),
      modalidade: items[3]
        .replace("%C3%B3", "ó")
        .replace("%C3%A3", "ã")
        .replace("%C3%A7", "ç")
    };
    const mod = arrayname.modalidade;

    const chaves = [
      "Pós-Graduação",
      "Graduação",
      "Extensão",
      "Aperfeiçoamento",
      "Artigo"
    ];

    if (chaves.indexOf(mod) > -1) {
      this.setState({
        name: arrayname.name,
        curse: arrayname.curse,
        modalidade: mod,
        url: "https://eadvoltaire.com.br/pdf/contrato.pdf"
      });
    } else {
      this.setState({
        name: arrayname.name,
        curse: arrayname.curse,
        modalidade: mod,
        url: "https://eadvoltaire.com.br/pdf/contrato.pdf"
      });
    }
  };

  handleSubmit = async () => {
    const url = window.location.search.replace("?", "");
    const items = url.split("&");

    const arrayId = {
      _id: items[0].replace("_id:", "")
    };

    const array = {
      aceite: "Aceitou"
    };

    await api.put(`/ads/${arrayId._id}`, array);
    window.location.href = "http://www.fce.edu.br";
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="offset-md-3 col-md-6 card">
            <img
              src="https://eadvoltaire.com.br/img/voltaire-logo.svg"
              width="200"
              alt="logo"
            />
            <hr />
            <h1>Aceite do contrato</h1> <br />
            <p>Olá, {this.state.name},</p>
            <p>
              Você se inscreveu para o(s) curso(s) de {this.state.curse} na
              modalidade &nbsp;
              {this.state.modalidade} da Voltaire Educacional.
            </p>
            <p>
              Veja abaixo o seu contrato e clique em aceito para finalizar a sua
              matrícula.
            </p>
            <a href={this.state.url}>
              Ver contrato
            </a>
            <br />
            <button className="btn btn-success" onClick={this.handleSubmit}>
              Aceito o contrato
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contrato;
