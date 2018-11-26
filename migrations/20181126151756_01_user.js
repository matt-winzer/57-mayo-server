
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments()
    table.timestamps(true, true)
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.boolean('is_admin').defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
}