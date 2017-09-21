const ServerError = require('../util/server-error')

function errorHandler(err, req, res) {

  if (err instanceof ServerError) {
    return res.status(err.status).send(err.message)
  }

  res.status(500).send(err)
}

module.exports = errorHandler
