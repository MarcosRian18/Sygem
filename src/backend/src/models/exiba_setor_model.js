const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_busca_setor: (setor)=>{
        try {
            const setor_buscado = setor
            return knex('funcionarios')
            .select('nome', 'cpf', 'setor','cargo')
            .orderByRaw(`setor = '${setor_buscado}' DESC, nivel ASC`)
        } catch (error) {
            console.log(error.message)
        }
    }
}