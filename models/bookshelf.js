const knex = require('knex')(require('./knexfile'))
const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
  tableName: 'users',
  reviews: function(){
    return this.hasMany(Reviews)
  }
})

const Book = bookshelf.Model.extend({
  tableName: 'books',
  reviews: function() {
    return this.hasMany(Reviews)
  }
})

const Reviews = bookshelf.Model.extend({
  tableName: 'reviews',
  user: function() {
    return this.belongsTo(User)
  },
  book: function() {
    return this.belongsTo(Book)
  }
})

module.exports = {
  User,
  Book,
  Reviews
}
