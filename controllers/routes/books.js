const router = require('express').Router()
const Book = require('../../models/books')

router.get('/search?:query', (req, res) => {
  Book.search(req.query.searchTerm)
  .then( books => res.render('search', {books,  session: req.session.passport}))
  .catch( error => res.render('error', {error}))
})

router.get('/:id', (req, res) => {
  Book.getById(req.params.id)
  .then( book => res.render('book-page',{ book: book[0], reviews: book,  session: req.session.passport}))
  .catch( error => res.render('error', {error}))
})

module.exports = router
