const router = require('express').Router()
const { Reviews } = require('../../models/bookshelf')

router.get('/', (req, res) => {
  Reviews.forge()
    .fetchAll()
    .then( reviews => {
      res.render('home', {reviews: reviews})
    })
})
router.get('/user-profile', (req, res) => {
  res.render('user-profile')
})

router.get('/new-review', (req, res) => {
  res.render('new-review')
})

router.get('/error', (req, res) => {
  res.render('error')
})

router.get('/book', (req, res) => {
  res.render('book')
})
module.exports = { router }
