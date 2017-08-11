const router = require('express').Router()
const books = require('./books')
const users = require('./users')
const preAuth = require('./pre-auth')
const reviews = require('./reviews')
const { sessionChecker } = require('../middleware')

router.use(preAuth)
router.use(sessionChecker)
router.use('/user', users)
router.use('/book', books)
router.use('/review', reviews)

module.exports = { router }
