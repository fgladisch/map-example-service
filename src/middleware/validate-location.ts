import * as Ajv from 'ajv'
import ServerError from '../util/server-error'

const locationSchema = require('../schemas/location')

const ajv = new Ajv()

const validator = ajv.compile(locationSchema)

export default (req, res, next) => {

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
