const knex = require('knex')(require('./knexfile'))

const getAllByDescDate = () =>
  knex.select('reviews.id','content','user_id','book_id', 'created_on', 'username', 'title')
    .from('reviews')
    .leftOuterJoin('users','reviews.user_id', 'users.id')
    .leftOuterJoin('books','reviews.book_id', 'books.id')
    .orderBy('created_on', 'desc')

module.exports = {
  getAllByDescDate
}
