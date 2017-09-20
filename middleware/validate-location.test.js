const validateLocation = require('./validate-location')
const httpMocks = require('node-mocks-http')
const { expect, assert } = require('chai')
const sinon = require('sinon')
const ServerError = require('../util/server-error')

describe('validateLocation', () => {

  let response
  let next

  beforeEach(() => {
    response = httpMocks.createResponse()
    next = sinon.spy()
  })

  it('should resolve as valid', () => {

    const request = httpMocks.createRequest({
      body: {
        name: 'TEST',
        latitude: '12.34',
        longitude: '12.34'
      }
    })

    validateLocation(request, response, next)

    assert(next.calledWith())
  })

  it('should not resolve as valid', () => {

    const request = httpMocks.createRequest({
      body: {
        name: 'TEST',
        latitude: true,
        longitude: null
      }
    })

    validateLocation(request, response, next)

    const serverError = next.getCall(0).args[0]

    expect(serverError.status).to.equal(400)
    expect(serverError.message).to.be.a('string')
  })

})