const knex = require('knex')(require('./knexfile'))

const getByUsername = (username) =>
  knex.first('*').from('users').where('username', username)

const findById = (id) =>
  knex.first('*').from('users').where('id', id)

const create = (email, username, password) =>
  knex.insert({email, username, password}).into('users')

module.exports = {
  getByUsername,
  findById,
  create
}
