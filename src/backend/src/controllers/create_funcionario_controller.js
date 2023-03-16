const model = require('../models/create_funcionario_model')

module.exports = {
    create_funcionarios: (req,res) => {
    const {id, nome, cpf, telefone,email, setor, cargo,dt_nascimento, nivel} = req.body
    if(nome == null || nome == ' '|| cpf == null || cpf == ' '|| telefone == null || telefone == ' '|| email == null || email== ' '||
     setor == null || setor == ' '|| cargo == null || cargo == ' '|| dt_nascimento == null || dt_nascimento == ' '|| nivel == null || nivel == ' '){
      res.status(400).json("Não foi possivel criar o usuário existe alguma informação incorreta, por favor verifique novamente os seus dados!")
      
     }
     else {
      model.create_funcionario(id, nome, cpf, telefone,email, setor, cargo,dt_nascimento,nivel).then(dado_funcionario => {
      console.log(dado_funcionario)
      return res.status(201).json(dado_funcionario)
    })
  }
     }
    
}
