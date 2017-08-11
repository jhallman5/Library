//Used to generate hashed password for db seeds

const bcrypt = require('bcrypt')
const saltRounds = 12

const passwordToHash = 'banana'

bcrypt.hash(passwordToHash, saltRounds)
  .then(hash => console.log('The hash of ' + passwordToHash + ' is ' + hash))
