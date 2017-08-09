const knex = require('knex')(require('./knexfile'))

const getByUsername = (username) =>
  knex.first('*').from('users').where('username', username)

module.exports = {
  getByUsername
}
