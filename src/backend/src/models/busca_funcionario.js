const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_busca_funcionario: (cpf_funcionario)=>{
        try {
            var query = knex.select('id','nome','cpf','telefone','email','cargo','setor','dt_nascimento').from('funcionarios').where('cpf', cpf_funcionario).orderBy("")
            var query2 = knex.select('*').from('funcionarios')
           
            console.log(query, query2)
            return query,query2

        } catch (error) {
            console.log(error.message)
        }
        
    }
}

