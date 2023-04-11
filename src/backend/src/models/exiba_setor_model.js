const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    // Este método retorna uma lista de setores distintos cadastrados na tabela de funcionários.
    get_setores: ()=>{
        try {
            return knex('funcionarios')
            .distinct('setor') // Seleciona apenas valores distintos do campo 'setor'.
            .select('setor')
        } catch (error) {
            console.log(error.message)
            return []
        }
    },

    get_funcionarios: ()=>{
        try {
            return knex('funcionarios')
            .select('nome', 'setor')
        } catch (error) {
            console.log(error.message)
            return []
        }
    }
}