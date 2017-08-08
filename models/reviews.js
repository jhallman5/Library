const Review = require('./db/reviews')

const threeMostRecentReviews = () =>
  Review.getAllByDescDate()
    .then(reviews => reviews.filter( (review, index) => index < 3))

const fullName = (user) => {
  return user.firstName + ' ' + user.lastName
}

module.exports = {
  threeMostRecentReviews
}
