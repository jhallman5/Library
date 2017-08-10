const User = require('./db/users')
const bcrypt = require('bcrypt')

const getByUsername = (username) =>
  User.getByUsername(username)

const findById = (id) =>
  User.findById(id)

const create = (email, username, password) =>
  bcrypt.hash(password, 12)
    .then( hash =>
      User.create(email, username, hash)
    )

module.exports = {
  getByUsername,
  findById,
  create
}
