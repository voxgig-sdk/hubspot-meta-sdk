-- HubspotMeta SDK exists test

local sdk = require("hubspot-meta_sdk")

describe("HubspotMetaSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
