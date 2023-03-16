const model = require('../models/exiba_setor_model.js')

module.exports = {
    exiba_setor: (req,res) => {
        try {
            const {setor} = req.query;
            model.get_busca_setor(setor).then(result => {
                console.log(result)
                return res.status(200).json(result)
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}