const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)


module.exports = {   
    get_list_funcionarios : () => {
        return knex('funcionarios')
      }
}