const knex = require('knex')(require('./knexfile'))

const getByUsername = (username) =>
  knex.first('*').from('users').where('username', username)

const findById = (id) =>
  knex.first('*').from('users').where('id', id)

module.exports = {
  getByUsername,
  findById
}
