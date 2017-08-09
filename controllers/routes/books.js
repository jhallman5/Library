const router = require('express').Router()
const Book = require('../../models/books')

router.get('/:id', (req, res) => {
  Book.getById(req.params.id)
    .then( book => res.render('book-page'))
})

module.exports = router
