const routes = require('express').Router()

routes.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

module.exports = routes
