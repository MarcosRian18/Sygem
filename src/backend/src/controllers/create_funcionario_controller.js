const model = require("../models/create_funcionario_model");
const knex = require("knex");

module.exports = {
  create_funcionarios: async (req, res) => {
    const {
      nome,
      cpf,
      telefone,
      email,
      setor,
      cargo,
      dt_nascimento,
      nivel,
    } = req.body;

    if (
      nome == null ||
      nome == " " ||
      cpf == null ||
      cpf == " " ||
      telefone == null ||
      telefone == " " ||
      email == null ||
      email == " " ||
      setor == null ||
      setor == " " ||
      cargo == null ||
      cargo == " " ||
      dt_nascimento == null ||
      dt_nascimento == " " ||
      nivel == null ||
      nivel == " "
    ) {
      res
        .status(400)
        .json(
          "Não foi possível criar o usuário. Existe alguma informação incorreta, por favor verifique novamente os seus dados!"
        );
    } else {
      try {
       
        const dado_funcionario = await model.create_funcionario(
          nome,
          cpf,
          telefone,
          email,
          setor,
          cargo,
          dt_nascimento,
          nivel
        ); 
        return res.status(201).json(dado_funcionario);
      } catch (err) {
          return res.status(500).json({
            error: "Internal Server Error",
            message: err.message
          })
      }
    }
  },
};
