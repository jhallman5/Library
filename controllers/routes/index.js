const router = require('express').Router()
// const { User, Book, Review } = require('../../models/bookshelf')
const User = require('../../models/db/users')
const Review = require('../../models/reviews')

router.get('/', (req, res) => {
  Review.threeMostRecentReviews()
    .then( reviews => {
      console.log( "=-=-=-> reviews", reviews )
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
