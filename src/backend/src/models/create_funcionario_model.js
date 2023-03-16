const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)


module.exports = {
    create_funcionario: (id, nome, cpf, telefone,email, setor, cargo,dt_nascimento,nivel) => {
      const dado_funcionario = {
        id: id,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        setor: setor,
        cargo: cargo,
        dt_nascimento: dt_nascimento,
        nivel: nivel,
      }

      return knex('funcionarios').insert(dado_funcionario)
    }
}