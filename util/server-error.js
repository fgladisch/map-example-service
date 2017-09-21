class ServerError extends Error {

  constructor(status, message) {
    super(message || 'Unknown Error')
    this.status = status || 500
  }

}

module.exports = ServerError
