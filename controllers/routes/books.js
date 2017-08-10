const router = require('express').Router()
const Book = require('../../models/books')


router.get('/search?:query', (req, res) => {
  Book.search(req.query.searchTerm)
  .then( books => res.render('search', {books}))
})

router.get('/:id', (req, res) => {
  Book.getById(req.params.id)
  .then( book => res.render('book-page',{ book: book[0], reviews: book}))
  .catch( error => res.render('error', {error}))
})

module.exports = router
