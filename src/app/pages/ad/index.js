import React, { Fragment } from "react";
import { Form, Input, Select } from "@rocketseat/unform";
//import * as Yup from "yup";
import { getSetId } from "../../../services/auth";

import Header from "../../components/Header";
import api from "../../../services/api";

const options = [
  { id: "1", title: "Graduação" },
  { id: "2", title: "Pós-Graduação" },
  { id: "3", title: "Extensão" },
  { id: "4", title: "Aperfeiçoamento" }
];
function Ad() {
  function handleSubmit(data, { resetForm }) {
    const id = getSetId();
    const obj = Object.assign(data, { user_id: id }); 
    // try {
    //   const response = api.post("/ads", data);
    //   login(response.data.token);
    //   this.props.history.push("/dashboard/register");
    // } catch (error) {
    //   this.setState({ message: error.response.data.error });
    // }
    console.log(obj);
    api
      .post("/ads", obj)
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
    resetForm();
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 card">
            <div className="card-header">
              <h1>Titulo</h1>
            </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Nome</label>
                    <Input name="name" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="">Email</label>
                    <Input name="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Celular</label>
                    <Input name="phone" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Modalidade</label>
                    <Select
                      name="modalidade"
                      options={options}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">curse</label>
                    <Input name="curse" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Data de Nascimento</label>
                    <Input name="datebirth" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">RG</label>
                    <Input name="rg" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cpf">CPF</label>
                    <Input name="cpf" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="zipcode">Cep</label>
                    <Input name="zipcode" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Endereço</label>
                    <Input name="address" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">Bairro</label>
                    <Input name="neighborhood" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Cidade</label>
                    <Input name="city" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">UF</label>
                    <Input name="uf" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Número</label>
                    <Input name="number" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="">Complemento</label>
                    <Input name="complement" className="form-control" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Ad;
