exports.up = function(knex) {
    return knex.schema.table('funcionarios', function(table) {
      table.integer('setor_id').unsigned();
      table.foreign('setor_id').references('setores.id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('funcionarios', function(table) {
      table.dropForeign('setor_id');
      table.dropColumn('setor_id');
    });
  };
  