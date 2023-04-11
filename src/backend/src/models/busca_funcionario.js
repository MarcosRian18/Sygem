const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_busca_funcionario: (cpf_funcionario)=>{
       
        try {
        const cpfPesquisado = cpf_funcionario;

        // Ordena o resultado primeiro por CPF igual ao consultado em ordem decrescente.
        // e depois por nível do funcionário em ordem crescente.
        return knex('funcionarios')
        .select('*')
        .orderByRaw(`cpf = '${cpfPesquisado}' DESC, nivel ASC`)
        
        } catch (error) {
            console.log(error)
        }
        
    }
}
