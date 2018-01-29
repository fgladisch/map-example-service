export default class ServerError extends Error {

  public status: string;

  constructor(status, message) {
    super(message || 'Unknown Error')
    this.status = status || 500
  }

}
