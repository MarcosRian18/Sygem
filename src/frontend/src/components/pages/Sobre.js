import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Sobre() {
  return (
    <Container className="text-white py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>Sobre</h2>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8} className="text-center">
          <p>A empresa SYGEM desenvolveu um sistema de gerenciamento de funcionários para facilitar o processo de gerenciamento de pessoas em empresas de médio e grande porte. Este sistema oferece aos administradores a capacidade de adicionar, pesquisar e visualizar funcionários em uma hierarquia organizacional.</p>

          <h3>Histórias de Usuário:</h3>

          <ul style={{ marginTop: '2rem', marginBottom: '5rem' }}>
            <li>Eu, como administrador de sistema, gostaria de acessar um formulário, preencher o nome do empregado, selecionar seu cargo em uma combo e sua área de atuação e salvar.</li>
            <li>Eu, como administrador do sistema, gostaria de pesquisar o nome de um empregado e visualizá-lo em destaque na hierarquia da empresa.</li>
            <li>Eu, como administrador do sistema, gostaria de visualizar os empregados de uma área.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;