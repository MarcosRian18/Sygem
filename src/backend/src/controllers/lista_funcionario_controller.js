const model = require('../models/lista_funcionario_model')

module.exports = {
    lista_funcionarios: (req,res)=> {
        model.get_list_funcionarios().then(funcionario =>{
            console.log(funcionario)
            return res.status(200).json(funcionario)
        })
    }
}