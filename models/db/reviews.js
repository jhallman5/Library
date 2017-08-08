const knex = require('knex')(require('../knexfile'))

const getAllByDescDate = () =>
  knex.select('*')
    .from('reviews')
    .leftOuterJoin('users','reviews.user_id', 'users.id')
    .leftOuterJoin('books','reviews.book_id', 'books.id')
    .orderBy('created_on', 'desc')

module.exports = {
  getAllByDescDate
}
