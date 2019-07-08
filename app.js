const config = require('config')
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()
app.use(morgan('dev')) // logging

const PORT = config.get('App.webServer.port')

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

module.exports = app
