const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('home')
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
