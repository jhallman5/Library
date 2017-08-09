const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/users')

passport.use('local', new LocalStrategy(
  (username, password, done) =>
    User.getByUsername(username)
      .then( user => {
        if(!user) return done(null, false)
        if(!password) return done(null, false)//TODO
        return done(null, user)
      })
      .catch( error => {
        console.log('Passport Error', {error, username, password})
        done(error)
      })
))

passport.serializeUser((user, done) =>
  done(null, user.id)
)

passport.deserializeUser((id, done) =>
  User.findById(id)
    .then(user =>  done(null, user))
    .catch(error => {
      console.log('Could not deserialize User', {userId: id})
      done(error)
    })
)

module.exports = passport
