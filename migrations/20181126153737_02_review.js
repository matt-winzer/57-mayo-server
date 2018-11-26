
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', (table) => {
    table.increments()
    table.timestamps(true, true)
    table.string('market').notNullable()
    table.string('state').notNullable()
    table.text('content').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review')
}
