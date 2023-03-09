const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)


module.exports = {
    create_funcionario: (id, nome, sobrenome, cpf, telefone,email, setor, cargo,dt_nascimento) => {
      const dado_funcionario = {
        id: id,
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        setor: setor,
        cargo: cargo,
        dt_nascimento: dt_nascimento
      }

      return knex('funcionarios').insert(dado_funcionario)
    }
}