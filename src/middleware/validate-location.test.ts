import { createRequest, createResponse, MockResponse } from 'node-mocks-http'
import { expect, assert } from 'chai'
import { spy, SinonSpy } from 'sinon'

import validateLocation from './validate-location'
import ServerError from '../util/server-error'

describe('validateLocation', () => {

  let response: MockResponse
  let next: SinonSpy

  beforeEach(() => {
    response = createResponse()
    next = spy()
  })

  it('should resolve as valid', () => {

    const request = createRequest({
      body: {
        name: 'TEST',
        latitude: '12.34',
        longitude: '12.34'
      }
    })

    validateLocation(request, response, next)

    assert(next.calledWith())
  })

})
