const User = require('./db/users')

const threeMostRecentReviews = () => {
  User.getAllReviews()
}

const fullName = (user) => {
  return user.firstName + ' ' + user.lastName
}

return {DbUser}
