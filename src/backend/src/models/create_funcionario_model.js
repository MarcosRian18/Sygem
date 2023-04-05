const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
  create_funcionario: async (nome, cpf, telefone, email, setor, cargo, dt_nascimento, nivel) => {
    try {
      // Verifica se já existe algum registro com o CPF informado

      const funcionarioExistente = await knex('funcionarios').where('cpf', cpf).first();
      
      if (funcionarioExistente) {
        throw new Error('Já existe um funcionário cadastrado com o CPF informado.');
        
      }

      const dado_funcionario = {

        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        setor: setor,
        cargo: cargo,
        dt_nascimento: dt_nascimento,
        nivel: nivel,
      }

      const inserted = await knex('funcionarios').insert(dado_funcionario);
      console.log(inserted)
      if (inserted.rowCount) {
        return inserted[0];
      } else {
        throw new Error('Failed to create funcionario');
      }
    } catch (error) {
      throw error;
    }
  }
}