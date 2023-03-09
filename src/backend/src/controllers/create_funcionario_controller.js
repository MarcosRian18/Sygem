 model = require('../models/create_funcionario_model')

module.exports = {
    create_funcionarios: (req,res) => {
    const {id, nome, sobrenome, cpf, telefone,email, setor, cargo,dt_nascimento} = req.body
    model.create_funcionario(id, nome, sobrenome, cpf, telefone,email, setor, cargo,dt_nascimento).then(dado_funcionario => {
      console.log(dado_funcionario)
      return res.status(201).json(dado_funcionario)
    })
  }
}