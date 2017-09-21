const ServerError = require('../util/server-error')

function errorHandler(err, req, res, next) {

  if (err instanceof ServerError) {
    return res.status(err.status).send(err.message)
  }

  res.status(500).send(err.message)
}

module.exports = errorHandler
