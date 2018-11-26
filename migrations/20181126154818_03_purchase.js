
exports.up = function (knex, Promise) {
  return knex.schema.createTable('purchase', (table) => {
    table.increments()
    table.timestamps(true, true)
    table.integer('user_id').references('user.id').unsigned().onDelete('CASCADE')
    table.integer('review_id').references('review.id').unsigned().onDelete('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('purchase')
}
