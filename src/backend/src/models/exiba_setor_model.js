const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    get_setores: ()=>{
        try {
            return knex('funcionarios')
            .distinct('setor')
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