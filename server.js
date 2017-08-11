const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const { router } = require('./controllers/routes')
const passport = require('./auth/passport')

const server = express()
const PORT = process.env.NODE_ENV || 3000

require('ejs')
server.set('view engine', 'ejs')

server.use('/bulma', express.static(path.join(__dirname, '/node_modules/bulma/css')))
server.use('/public', express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(session({
  secret:'SHHHHHHII'
}))

server.use(passport.initialize())
server.use(passport.session())

server.use(router)

server.listen(PORT, () => {
  console.log('The server is listening on port ' + PORT)
})
