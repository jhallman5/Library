const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('new-review',  {session: req.session.passport})
})

router.delete('/:id', (req, res) => {
  console.log( "(>'')>  " )
})

module.exports = router
