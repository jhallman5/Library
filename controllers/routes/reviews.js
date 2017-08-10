const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('new-review',  {session: req.session.passport})
})

module.exports = router
