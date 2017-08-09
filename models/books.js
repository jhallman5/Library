const Book = require('./db/books')

const getAll = () =>
  Book.getAll()

const getById = (id) =>
  Book.getById(id)

module.exports = {
  getAll,
  getById
}
