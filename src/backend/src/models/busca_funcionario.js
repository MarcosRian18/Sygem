const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_busca_funcionario: (cpf_funcionario)=>{
       
        try {
        const cpfPesquisado = cpf_funcionario;

        return knex('funcionarios')
        .select('*')
        .orderByRaw(`cpf = '${cpfPesquisado}' DESC, nivel ASC`)
        
        } catch (error) {
            console.log(error)
        }
        
    }
}
