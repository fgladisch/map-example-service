const Ajv = require('ajv')
const ajv = new Ajv()

const locationSchema = require('../schemas/location')
const ServerError = require('../util/server-error')

const validator = ajv.compile(locationSchema)

function validateLocation(req, res, next) {

  try {

    const valid = validator(req.body)

    if (!valid) {
      throw new ServerError(400, 'Location invalid.')
    }

  } catch (err) {
    return next(err)
  }

  return next()
}

module.exports = validateLocation
