import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="menu" href="/">CH-TECH</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/funcionarios">Funcionarios</Nav.Link>
            <Nav.Link href="/busca_funcionario">Buscar Funcionarios</Nav.Link>
            <Nav.Link href="/contato"> Contato</Nav.Link>
            <Nav.Link href="/sobre"> Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    
  );
}

export default Header;