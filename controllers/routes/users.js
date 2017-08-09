const router = require('express').Router()
const Book = require('../../models/books')

router.get('/', (req, res) => {
  res.render('user-profile')
})

module.exports = router
