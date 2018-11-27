const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 4;')
    .then(function () {
      const users = [{
        id: 1,
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', 12),
        is_admin: true
      }, {
        id: 2,
        email: 'ingo@ingo.com',
        password: bcrypt.hashSync('ingo', 12),
        is_admin: true
      }, {
        id: 3,
        email: 'jim@jim.com',
        password: bcrypt.hashSync('jim', 12),
      }]

      return knex('users').insert(users)
    })
}
