const knex = require('knex')(require('../knexfile'))

const getAllReviews = () =>
  knex.select('*').from('users').leftOuterJoin('reviews', 'users.id', 'reviews.user_id')

module.exports = {
  getAllReviews
}
