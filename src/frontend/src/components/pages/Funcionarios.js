import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Funcionarios() {
  const [formValues, setFormValues] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    setor: "",
    cargo: "",
    dt_nascimento: "",
    nivel: "",
  });

  const [cpfValid, setCpfValid] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "cpf") {
      const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
      setCpfValid(cpfRegex.test(value));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!cpfValid) {
      alert("CPF inválido, por favor digite um CPF válido.");
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };

    function zeraSubmit() {
      setFormValues({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        setor: "",
        cargo: "",
        dt_nascimento: "",
        nivel: "",
      });
    }

    fetch("http://localhost:5000/create_funcionario", options)
      .then((res) => {
        if(res.ok){
           alert("Funcionario cadastrado com sucesso");
        zeraSubmit();
        }else {
          alert(
            "Não foi possível cadastrar o usuário, provavelmente já existe um CPF existente em nosso banco, ou alguma informação inserida incorretamente!");
          zeraSubmit();
        }
       
      })
      .catch((error) => {
        alert(
          "Não foi possível cadastrar o usuário, provavelmente já existe um CPF existente em nosso banco, ou alguma informação inserida incorretamente!");
        zeraSubmit();
      });
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form className="form" onSubmit={handleSubmit}>
          <h1 className="centralizar-h1">Cadastro de Funcionário</h1>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu CPF"
              name="cpf"
              value={formValues.cpf}
              onChange={handleChange}
              isInvalid={!cpfValid}
            />
            <Form.Control.Feedback type="invalid">
              CPF inválido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="FormTel">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu Telefone"
              name="telefone"
              value={formValues.telefone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="FormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formSetor">
            <Form.Label>Setor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu Setor"
              name="setor"
              value={formValues.setor}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCargo">
            <Form.Label>Cargo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu Cargo"
              name="cargo"
              value={formValues.cargo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDt">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite sua Data de Nascimento"
              name="dt_nascimento"
              value={formValues.dt_nascimento}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formNivel">
            <Form.Label>Nivel de Prioridade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Nivel de Prioridade"
              name="nivel"
              value={formValues.nivel}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="button-bottom" variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Funcionarios;
