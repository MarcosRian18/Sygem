const model = require('../models/busca_funcionario')

module.exports = {
    busca_funcionario: (req,res)=>{
        try {
            const {cpf} = req.query
            model.get_busca_funcionario(cpf).then(funcionario =>{
                console.log(funcionario)
                return res.status(200).json(funcionario)
            })
        } catch (error) {
            console.log('O erro é esse: ',error.message)
        }    
    }
}