const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
  // Cria uma nova entrada na tabela funcionarios com as informações fornecidas
  create_funcionario: async (nome, cpf, telefone, email, setor, cargo, dt_nascimento, nivel) => {
    try {
      const funcionarioExistente = await knex('funcionarios').where('cpf', cpf).first();
      // Se já existir, lança um erro com uma mensagem informando
      if (funcionarioExistente) {
        throw new Error('Já existe um funcionário cadastrado com o CPF informado.');
      }

      // Cria um objeto com as informações do funcionário a serem inseridas na tabela
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

      // Se pelo menos uma linha foi inserida com sucesso, retorna a primeira linha inserida
      if (inserted.rowCount) {
        return inserted[0];
      } else {
        // Caso contrário, lança um erro com uma mensagem informando
        throw new Error('Falha ao criar o funcionario');
      }
    } catch (error) {
      throw error;
    }
  }
}