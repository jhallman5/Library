const router = require('express').Router()

router.get('/:id', (req, res) => {
  res.render('user-profile')
})

module.exports = router
