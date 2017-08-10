const router = require('express').Router()
const User = require('../../models/users')

router.get('/logout', (req, res) => {
  req.session.destroy( res.redirect('/'))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then( user =>
      res.render('user-profile', {user,  session: req.session.passport} ))
})

module.exports = router
