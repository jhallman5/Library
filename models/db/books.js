const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('books')

const getById = (id) =>
  knex.select('*')
    .from('books')
    .leftOuterJoin('reviews','books.id', 'reviews.book_id')
    .where('books.id', '=', id)

const search = (searchTerm) =>
  knex.select('*')
    .from('books')
    .where(function() {
      this.where('title', 'ilike', `%${searchTerm}%`)
        .orWhere('author', 'ilike', `%${searchTerm}%`)
    })

module.exports = {
  getAll,
  getById,
  search
}
