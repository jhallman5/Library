const router = require('express').Router()
const Review = require('../../models/reviews')
const Book = require('../../models/books')
const User = require('../../models/users')
const passport = require('../../auth/passport')

router.get('/', (req, res) => {
  Review.threeMostRecentReviews()
    .then( reviews => {
      Book.getAll()
        .then( books => {
          res.render('home', {reviews: reviews, books: books, session: req.session.passport})
        })
    })
    .catch( error => res.render('error', {error: error}))
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-in', (req, res) => {
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/sign-in' })(req, res)
})

router.get('/sign-up', (req, res) => {
  res.render('sign-up')
})

router.post('/sign-up', (req, res) => {
  const{email, username, password} = req.body
  User.create(email, username, password)
    .then( (user) => res.redirect(`/user/${user.id}`))
})

router.get('/error', (req, res) => {
  res.render('error')
})

module.exports = router
