import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import api from "../../../services/api";
import { getSetId } from "../../../services/auth";
import "./styles.css";
import jsPDF from "jspdf";
import moment from "moment";
moment.locale("pt-br");
export default class List extends Component {
  state = {
    dados: [],
    info: [],
    page: 1
  };

  componentDidMount() {
    this.load();
  }
  load = async (page = 1) => {
    const id = getSetId();
    const response = await api.get(`/ads?id=${id}&page=${page}`);
    const { docs, ...info } = response.data;
    this.setState({ dados: docs, info, page });
  };
  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.load(pageNumber);
  };
  nextPage = () => {
    const { page, info } = this.state;

    if (page === info.page + 1) return;

    const pageNumber = page + 1;
    this.load(pageNumber);
  };
  handleDelete = async item => {
    try {
      await api.delete(`/ads/${item}`);
      this.load();
    } catch (err) {
      console.log(err + "erro");
    }
  };

  generatePdf = x => {
    let documento = new jsPDF();
    documento.setFont("Courier");
    documento.setFontStyle("bold");
    documento.setFontSize(20);
    documento.text("Ficha do Aluno", 65, 15);
    documento.setFillColor(50, 50, 50);
    documento.rect(10, 28, 30, 8, "FD");
    documento.rect(10, 36, 30, 8, "FD");
    documento.rect(10, 44, 30, 8, "FD");
    documento.rect(10, 52, 30, 8, "FD");
    documento.rect(10, 60, 30, 8, "FD");
    documento.rect(10, 68, 30, 8, "FD");
    documento.rect(10, 76, 30, 8, "FD");
    documento.rect(10, 84, 30, 8, "FD");
    documento.rect(10, 92, 30, 8, "FD");
    documento.rect(10, 100, 30, 8, "FD");
    documento.rect(10, 108, 30, 8, "FD");
    documento.rect(10, 116, 30, 8, "FD");
    documento.rect(10, 124, 30, 8, "FD");
    documento.rect(10, 132, 30, 8, "FD");
    documento.rect(10, 140, 30, 8, "FD");
    documento.rect(10, 148, 30, 8, "FD");
    documento.rect(10, 156, 30, 8, "FD");

    documento.setFontSize(12);
    documento.setTextColor(255, 255, 255);
    documento.text("Nome", 12, 33);
    documento.text("Email", 12, 41);
    documento.text("Celular", 12, 49);
    documento.text("Modalidade", 12, 57);
    documento.text("Curso", 12, 65);
    documento.text("Da. Nasc.", 12, 73);
    documento.text("CPF", 12, 81);
    documento.text("RG", 12, 89);
    documento.text("Cep", 12, 97);
    documento.text("Endreço", 12, 105);
    documento.text("Bairro", 12, 113);
    documento.text("Estado", 12, 121);
    documento.text("Cidade", 12, 129);
    documento.text("Número", 12, 137);
    documento.text("Aceitou ?", 12, 145);
    documento.text("Da. aceite", 12, 153);
    documento.text("Complemento", 12, 161);
    documento.setFontStyle("normal");
    documento.setTextColor(0, 0, 0);
    documento.text(x.name, 42, 33);
    documento.text(x.email, 42, 41);
    documento.text(x.celular, 42, 49);
    documento.text(x.modalidade, 42, 57);
    documento.text(x.curse, 42, 65);
    documento.text(x.datebirth, 42, 73);
    documento.text(x.cpf, 42, 81);
    documento.text(x.rg, 42, 89);
    documento.text(x.cep, 42, 97);
    documento.text(x.address, 42, 105);
    documento.text(x.neighborhood, 42, 113);
    documento.text(x.uf, 42, 121);
    documento.text(x.city, 42, 129);
    documento.text(x.number, 42, 137);
    documento.text(x.aceite, 42, 145);
    documento.text(moment(x.created_at_aceite).format("LLL"), 42, 153);
    documento.text(x.complement, 42, 161);
    documento.save("export.pdf");
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Aluno</th>
                      <th scope="col">Aceitou</th>
                      <th scope="col">Exportar</th>
                      <th scope="col">Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dados.map(val => (
                      <tr key={val._id}>
                        <td>{val.name}</td>
                        <td>{val.aceite}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={this.generatePdf.bind(this, val)}
                          >
                            Exportar
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={this.handleDelete.bind(this, val._id)}
                          >
                            Excluir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="actions">
                  <button className="btn btn-info" onClick={this.prevPage}>
                    Anterior
                  </button>
                  <button className="btn btn-info" onClick={this.nextPage}>
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
