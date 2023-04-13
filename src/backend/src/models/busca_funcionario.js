const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
  get_busca_funcionario: async (cpf_funcionario)=>{
      try {
          const cpfPesquisado = cpf_funcionario;

          const result = await knex('funcionarios')
              .select('*')
              .orderByRaw(` cpf = '${cpfPesquisado}' DESC,
              nivel ASC
              `);

          return result;

      } catch (error) {
          console.log(error)
      }
  }
}