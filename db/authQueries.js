const knex = require('./connection')

function createUser(email, password) {
  return knex('users')
    .insert({ email, password })
    .returning('*')
}

function loginUser(params) {
  
}

function getUserByEmail(email) {
  return knex('users')
    .where('email', email)
}

module.exports = {
  createUser,
  getUserByEmail
}