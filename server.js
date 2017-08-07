const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const { router } = require('./controllers/routes')

const server = express()
const PORT = process.env.NODE_ENV || 3000

require('ejs')
server.set('view engine', 'ejs')

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: false }))

server.use(router)

server.listen(PORT, () => {
  console.log('The server is listening on port ' + PORT)
})
