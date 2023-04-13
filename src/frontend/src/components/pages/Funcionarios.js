import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

//Defino o Componente
function Funcionarios() {
  //Defino o estado inicial do formulário, com as propriedades do funcionário vazio.
  const [formValues, setFormValues] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    setor: "",
    cargo: "",
    dt_nascimento: "",
    nivel: ""
  });

  //Define o estado inicial da verificação do CPF como verdadeiro
  const [cpfValid, setCpfValid] = useState(true);
  const [telValid, SetTelValid] = useState(true)
  const [dtValid, SetDtValid] = useState(true)

  //Função que atualiza o estado do formulário quando o usuário inserir texto nos campos
  function handleChange(event) {
    const { name, value } = event.target;
    //Atualiza o estado do formulario com o novo valor do campo alterado,
    setFormValues({ ...formValues, [name]: value });

    if (name === "cpf") {
      const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
      setCpfValid(cpfRegex.test(value));
    }

    if(name === "telefone"){
      const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      SetTelValid(telRegex.test(value));

    if(name === "dt_nascimento"){
      const dtRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      SetDtValid(dtRegex.test(value));
    }
    }
  }

  //Função que é executado quando o usuário envia o cadastro
  function handleSubmit(event) {
    event.preventDefault();

    if (!cpfValid) {
      alert("CPF inválido, por favor digite um CPF válido.");
      return;
    }
    if(!telValid){
      alert("Telefone está inválido, insira um número no formato válido: (XX) XXXXX-XXXX")
    }

    if(!dtValid){
      alert("Data está incorreta, por favor insira o formato de data válido: dd/mm/yyyy")
    }

    if (formValues.nivel !== "1" && formValues.cargo === "Presidente") {
      alert("O nível selecionado não corresponde ao cargo selecionado");
      return;
    }
    if (formValues.nivel !== "2" && formValues.cargo === "Gerente") {
      alert("O nível selecionado não corresponde ao cargo selecionado");
      return;
    }
    if (formValues.nivel !== "3" && formValues.cargo === "Funcionário") {
      alert("O nível selecionado não corresponde ao cargo selecionado");
      return;
    }
    if (formValues.nivel !== "4" && formValues.cargo === "Estagiário") {
      alert("O nível selecionado não corresponde ao cargo selecionado");
      return;
    }
    //Define as opções para a requisição POST
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
        nivel: ""
      });
    }

    //Envia a requisição para a API e trata a resposta
    fetch("http://localhost:5000/create_funcionario", options)
      .then((res) => {
        if (res.ok) {
          alert("Funcionario cadastrado com sucesso");
          zeraSubmit();
        } else {
          alert(
            "Não foi possível cadastrar o usuário, provavelmente já existe um CPF existente em nosso banco, ou alguma informação inserida incorretamente!"
          );
          zeraSubmit();
        }
      })
      .catch((error) => {
        alert(
          "Não foi possível cadastrar o usuário, provavelmente já existe um CPF existente em nosso banco, ou alguma informação inserida incorretamente!"
        );
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
              required={true}
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
              required={true}
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
              isInvalid={!telValid}
              required={true}
            />
             <Form.Control.Feedback type="invalid">
             Telefone inválido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="FormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required={true}
            />
          </Form.Group>
          <Form.Group controlId="formSetor">
            <Form.Label>Setor</Form.Label>
            <Form.Control
              as="select"
              name="setor"
              value={formValues.setor}
              onChange={handleChange}
              required={true}
            >
              <option value="">Selecione o Setor</option>
              <option value="Setor de RH">Recursos Humanos</option>
              <option value="Departamento de TI">Departamento de TI</option>
              <option value="Administração">Administração</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCargo">
            <Form.Label>Cargo</Form.Label>
            <Form.Control
              as="select"
              name="cargo"
              value={formValues.cargo}
              onChange={handleChange}
              required={true}
            >
              <option value="">Selecione o Cargo</option>
              <option value="Presidente">Presidente</option>
              <option value="Gerente">Gerente</option>
              <option value="Funcionário">Funcionário</option>
              <option value="Estagiário">Estagiário</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formDt">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Digite sua Data de Nascimento"
              name="dt_nascimento"
              value={formValues.dt_nascimento}
              onChange={handleChange}
              isInvalid={!dtValid}
              required={true}
            />
             <Form.Control.Feedback type="invalid">
             Data de Nascimento inválida
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formNivel">
            <Form.Label>Nivel</Form.Label>
            <Form.Control
              as="select"
              name="nivel"
              value={formValues.nivel}
              onChange={handleChange}
              required={true}
            >
              <option value="">Selecione o nivel de prioridade</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Control>
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
