const User = require('./db/users')

const getByUsername = (username) =>
  User.getByUsername(username)

module.exports = {
  getByUsername
}
