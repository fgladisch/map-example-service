import ServerError from '../util/server-error'

export default (err, req, res, next) => {

  if (err instanceof ServerError) {
    return res.status(err.status).send(err.message)
  }

  res.status(500).send(err.message)
}
