const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('books')

const getById = (id) =>
  knex.select('*')
    .from('books')
    .where('id', '=', id)

module.exports = {
  getAll,
  getById
}
