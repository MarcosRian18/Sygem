const model = require('../models/exiba_setor_model.js')

module.exports = {
  exiba_setor: async (req,res) => {
    try {
        const setores = await model.get_setores();
        const funcionarios = await model.get_funcionarios();
        const nodes = setores.map(setor => ({
            id: setor.setor, 
            label: setor.setor
        }));
        const edges = funcionarios.map(funcionario => ({
            from: funcionario.setor, 
            to: funcionario.nome
        }));

        return res.status(200).json({ nodes, edges });
    } catch (error) {
        console.log(error.message)
        return res.status(500).send('Ocorreu um erro ao buscar os dados.')
    }
  }
}
