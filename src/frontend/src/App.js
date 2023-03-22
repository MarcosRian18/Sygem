import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";
import Funcionarios from "./components/pages/Funcionarios"
import BuscarFuncionario from "./components/pages/BuscarFuncionario"
import Contato from "./components/pages/Contato"
import Sobre from "./components/pages/Sobre"

import Footer from "./components/layouts/Footer"

export default function App() {
  return (
      <Router>
         <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/funcionarios" element={<Funcionarios />}/>
          <Route path="/busca_funcionario" element={<BuscarFuncionario />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/sobre" element={<Sobre />}/>
        </Routes>
        <Footer />
      </Router>
  );
}
