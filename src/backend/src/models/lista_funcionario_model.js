const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)


module.exports = {
    // insert_data: (id, nome, cpf, telefone, cargo, setor, dt_nascimento) => {
    //   const dado_funcionario = {
    //     id: id,
    //     nome: nome,
    //     cpf: cpf,
    //     telefone: telefone,
    //     cargo: cargo,
    //     setor: setor,
    //     dt_nascimento: dt_nascimento
    //   }

    //   return knex('funcionarios').insert(dado_funcionario)
    // },
    
    get_list_funcionarios : () => {
        return knex('funcionarios')
      }
}