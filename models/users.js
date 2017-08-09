const User = require('./db/users')

const getByUsername = (username) =>
  User.getByUsername(username)

const findById = (id) =>
  User.findById(id)
  
module.exports = {
  getByUsername,
  findById
}
