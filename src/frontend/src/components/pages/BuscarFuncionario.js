import React, {useState, useEffect} from "react";

import  {Form, InputGroup , Table}  from "react-bootstrap";
function BuscarFuncionario(){
  
  const [funcionarios, setFuncionarios] = useState([])
  const [cpf, setCpf] = useState()

  //Realiza a busca do funcionário no banco de dados sempre que houver uma mudança no cpf
  useEffect(() => {
    fetch(`http://localhost:5000/busca_funcionario?cpf=${cpf}`).then(res => res.json()).then((res)=>{
      setFuncionarios(res)
    })
  })
  
  
  return(
        <div className="table-wrapper">
          <h1 className="cons-func">Consulta de Funcionários</h1>
            <InputGroup className="mx-auto" style={{width: '1300px'}} value={cpf} onChange={(e) => setCpf(e.target.value)}>
              <InputGroup.Text className="input-top " id="basic-addon1">CPF do Funcionario</InputGroup.Text>
              <Form.Control className="form-tam"
                placeholder="insira o cpf Ex:(xxx.xxx.xxx-xx)"
                aria-label="cpf"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

          <Table className="mx-auto" style={{width: '1250px'}} striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Setor</th>
                <th>Cargo</th>
                <th>Data de Nascimento</th>
              </tr>
            </thead>
            <tbody>
              { funcionarios.map(funcionario =>
                  <tr>
                    <td>{funcionario.id}</td>
                    <td>{funcionario.nome}</td>
                    <td>{funcionario.cpf}</td>
                    <td>{funcionario.telefone}</td>
                    <td>{funcionario.email}</td>
                    <td>{funcionario.setor}</td>
                    <td>{funcionario.cargo}</td>
                    <td>{funcionario.dt_nascimento}</td>
                  </tr>
                
                )}
            </tbody>
          </Table>
        </div>
    )
}

export default BuscarFuncionario