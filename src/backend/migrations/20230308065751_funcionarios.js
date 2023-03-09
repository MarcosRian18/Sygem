
exports.up = function(knex) {
  return knex.schema.createTable('funcionarios', function(table) {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.string('cpf').notNullable().unique();
    table.string('telefone').notNullable();
    table.string('email').notNullable();
    table.string('setor').notNullable();
    table.string('cargo').notNullable();
    table.string('dt_nascimento').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('funcionarios')
};
