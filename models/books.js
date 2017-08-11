const Book = require('./db/books')

const getAll = () =>
  Book.getAll()

const getById = (id) =>
  Book.getById(id)

const search = (searchTerm) =>
  Book.search(searchTerm)
  
module.exports = {
  getAll,
  getById,
  search
}
