const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const viewEngine = require('ejs')

const server = express()
const PORT = process.env.NODE_ENV || 3000

server.set('view engine', viewEngine)

server.use(bodyParser.urlencoded({ extended: false })

server.listen(PORT, () => {
  console.log('The server is listening on port ' + PORT)
})
