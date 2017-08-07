//punits example

const DbUser = require('./bookshelf').User

const fullName = (user) => {
  return user.firstName + ' ' + user.lastName
}

return {DbUser}
