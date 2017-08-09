const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('books')

const getById = (id) =>
  knex.select('*')
    .from('books')
    .leftOuterJoin('reviews','books.id', 'reviews.book_id')
    .where('books.id', '=', id)

module.exports = {
  getAll,
  getById
}
