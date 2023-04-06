import React, { useState, useEffect } from "react";
import Graph from "react-vis-network-graph";


function Setores() {
  // Define os estados que armazenarão a lista de funcionários e setores
  const [funcionarios, setFuncionarios] = useState([]);
  const [setores, setSetores] = useState([]);

  // Busca a lista de funcionários e setores do banco de dados
  useEffect(() => {
    fetch(`http://localhost:5000/busca_funcionario`)
      .then((res) => res.json())
      .then((res) => {
        // Armazena a lista de funcionários no estado 'funcionarios'
        setFuncionarios(res);

        // Filtra os setores únicos da lista de funcionários e armazena no estado 'setores'
        const newSetores = Array.from(
          new Set(res.map((funcionario) => funcionario.setor))
        );
        setSetores(newSetores);
      });
  }, []);

  // Define um array de objetos que representam os nós do grafo
  const nodes = [
    // Adiciona um nó para cada setor
    ...setores.map((setor) => ({
      id: setor,
      label: setor,
      shape: "box",
      level: 0,
      size: 30
    })),
    // Adiciona um nó para cada funcionário
    ...funcionarios.map((funcionario) => ({
      id: `${funcionario.nome} (${funcionario.cpf})`,
      label: `${funcionario.nome} (${funcionario.cpf}), ${funcionario.cargo}`,
      shape: "circle",
      level: 1,
      size: 10
    })),
  ];

  // Define um array de objetos que representam as arestas do grafo
  const edges = [
    // Adiciona uma aresta para cada funcionário, ligando-o ao seu setor correspondente
    ...funcionarios.map(({ setor, nome, cpf, cargo }) => ({
      from: setor,
      to: `${nome} (${cpf})`,
      color: { color: '#efefef'}
    })),
  ];

  // Define um objeto que contém as configurações do grafo
  const graph = {
    nodes,
    edges,
  };

  // Define um objeto que contém as opções de exibição e configuração do grafo
  const options = {
    layout: {
      hierarchical:{
          levelSeparation: 300
      }
    },
    height: "1000px",
    nodes: {
      font: {
        size: 20
      },

      widthConstraint: {
        minimum: 150,
        maximum: 150
      },
      heightConstraint: {
        minimum: 100,
        maximum: 100
      },
      scaling: {
        min: 10,
        max: 30
      },
      shapeProperties: {
        interpolation: true
      },
      borderWidth: 2
    }
  };

  // Define um objeto que contém os eventos do grafo
  const events = {
    select: function (event) {},
  };

  // Renderiza o grafo usando o componente Graph 
  
    return (
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
        }}
      />
    );
}

export default Setores;