
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotMetaSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotMetaSDK.test()
    equal(testsdk instanceof HubspotMetaSDK, true,
      'HubspotMetaSDK.test() must return a client synchronously')
  })

})
