import React, { Fragment, useState } from "react";
import { Form, Input, Select } from "@rocketseat/unform";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import { getSetId } from "../../../services/auth";
import Header from "../../components/Header";
import api from "../../../services/api";
import "./styles.css";
import { phoneMask, dateMask, cepMask, cpfMask } from "../../../utils/masks";

const schema = Yup.object().shape({
  name: Yup.string().required("Preencha o campo Nome"),
  email: Yup.string()
    .email("Preencha com um email válido")
    .required("Preencha o campo email"),
  celular: Yup.string("Preencha com um número válido").required(
    "Preencha o campo Celular"
  ),
  modalidade: Yup.string().required("Selecione uma modalidade"),
  curse: Yup.string().required("Preencha o campo Curse"),
  datebirth: Yup.string().required("Preencha o campo Data de nascimento"),
  rg: Yup.string().required("Preencha o campo RG"),
  cpf: Yup.string().required("Preencha o campo CPF"),
  cep: Yup.string().required("Preencha o campo Cep"),
  address: Yup.string().required("Preencha o campo Endereço"),
  neighborhood: Yup.string().required("Preencha o campo Bairro"),
  city: Yup.string().required("Preencha o campo Cidade"),
  uf: Yup.string().required("Preencha o campo UF"),
  number: Yup.number().required("Preencha o campo número")
});

const options = [
  { id: "Graduação", title: "Graduação" },
  { id: "Pós-Graduação", title: "Pós-Graduação" },
  { id: "Extensão", title: "Extensão" },
  { id: "Aperfeiçoamento", title: "Aperfeiçoamento" },
  { id: "Artigo", title: "Artigo" },
  { id: "2ªLicenciatura", title: "2ªLicenciatura" },
  { id: "R2", title: "R2" }
];

const estados = [
  { id: "1", title: "Acre", sigla: "AC" },
  { id: "2", title: "Alagoas", sigla: "AL" },
  { id: "3", title: "Amapá", sigla: "AP" },
  { id: "4", title: "Amazonas", sigla: "AM" },
  { id: "5", title: "Bahia", sigla: "BA" },
  { id: "6", title: "Ceará", sigla: "CE" },
  { id: "7", title: "Distrito Federal", sigla: "DF" },
  { id: "8", title: "Espírito Santo", sigla: "ES" },
  { id: "9", title: "Goiás", sigla: "GO" },
  { id: "10", title: "Maranhão", sigla: "MA" },
  { id: "11", title: "Mato Grosso", sigla: "MT" },
  { id: "12", title: "Mato Grosso do Sul", sigla: "MS" },
  { id: "13", title: "Minas Gerais", sigla: "MG" },
  { id: "14", title: "Pará", sigla: "PA" },
  { id: "15", title: "Paraíba", sigla: "PB" },
  { id: "16", title: "Paraná", sigla: "PR" },
  { id: "17", title: "Pernambuco", sigla: "PE" },
  { id: "18", title: "Piauí", sigla: "PI" },
  { id: "19", title: "Rio de Janeiro", sigla: "RJ" },
  { id: "20", title: "Rio Grande do Norte", sigla: "RN" },
  { id: "21", title: "Rio Grande do Sul", sigla: "RS" },
  { id: "22", title: "Rondônia", sigla: "RO" },
  { id: "23", title: "Roraima", sigla: "RR" },
  { id: "24", title: "Santa Catarina", sigla: "SC" },
  { id: "25", title: "São Paulo", sigla: "SP" },
  { id: "26", title: "Sergipe", sigla: "SE" },
  { id: "27", title: "Tocantins", sigla: "TO" }
];
function Ad() {
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");

  function handleSubmit(data, { resetForm }) {
    const id = getSetId();

    const obj = { ...data, user_id: id };
    console.group(data.modalidade);
    api
      .post("/ads", obj)
      .then(function(response) {
        console.log(response);
        this.props.history.push("/list");
      })
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
            <div className="card-body">
              <Form onSubmit={handleSubmit} schema={schema}>
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
                    <Input
                      name="celular"
                      value={phoneMask(phone)}
                      onChange={e => setPhone(e.target.value)}
                      className="form-control"
                    />
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
                    <Input
                      name="datebirth"
                      value={dateMask(date)}
                      onChange={e => setDate(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">RG</label>
                    <Input name="rg" className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cpf">CPF</label>
                    <Input
                      name="cpf"
                      value={cpfMask(cpf)}
                      onChange={e => setCpf(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="zipcode">Cep</label>
                    <Input
                      name="cep"
                      value={cepMask(cep)}
                      onChange={e => setCep(e.target.value)}
                      className="form-control"
                    />
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
                    <Select
                      name="uf"
                      options={estados}
                      className="form-control"
                    />
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
export default withRouter(Ad);
