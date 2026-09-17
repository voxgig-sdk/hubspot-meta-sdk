
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { HubspotMetaSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HubspotMetaSDK.test()
    equal(null !== testsdk, true)
  })

})
