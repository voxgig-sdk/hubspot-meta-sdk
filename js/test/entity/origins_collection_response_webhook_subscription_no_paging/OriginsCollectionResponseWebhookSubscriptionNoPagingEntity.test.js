
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotMetaSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('OriginsCollectionResponseWebhookSubscriptionNoPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_META_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_META_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotMetaSDK.test()
    const ent = testsdk.OriginsCollectionResponseWebhookSubscriptionNoPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"results","req":true,"short":"An array of webhook subscriptions.","type":"`$ARRAY`","index$":0}],"name":"origins_collection_response_webhook_subscription_no_paging","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","json":"{\"operationId\":\"get-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}\",\"parameters\":[{\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"pattern\":\".+\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of webhook subscriptions. Each item in the array is a WebhookSubscription object.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"appId\":{\"description\":\"The unique identifier of the application that owns the webhook subscription. It is an integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"createdAt\":{\"description\":\"The timestamp when the webhook subscription was created, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"createdByUserId\":{\"description\":\"The unique identifier of the user who created the webhook subscription. It is an integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier of the webhook subscription. It is an integer formatted as int64.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"portalId\":{\"description\":\"The unique identifier of the HubSpot portal associated with the webhook subscription. It is an integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"The timestamp when the webhook subscription was last updated, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"webhookUrl\":{\"description\":\"The URL to which the webhook events will be sent. It is a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"appId\",\"createdAt\",\"id\",\"portalId\",\"updatedAt\",\"webhookUrl\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"origins.ip_ranges.webhook.read\"]},{\"oauth2\":[\"origins.ip_ranges.webhook.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"origins.ip_ranges.webhook.read\":\"\",\"origins.ip_ranges.webhook.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","rename":{"param":{"appId":"app_id"}},"segments":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"webhook-subscriptions"},{"var":"app_id"}],"select":{"exist":["app_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["webhook_subscription"]]},"key$":"origins_collection_response_webhook_subscription_no_paging","name__orig":"origins_collection_response_webhook_subscription_no_paging","Name":"OriginsCollectionResponseWebhookSubscriptionNoPaging","name_":"origins_collection_response_webhook_subscription_no_paging","name-":"origins-collection-response-webhook-subscription-no-paging","NAME":"ORIGINS_COLLECTION_RESPONSE_WEBHOOK_SUBSCRIPTION_NO_PAGING","index$":3}, {"active":true,"entity":"origins_collection_response_webhook_subscription_no_paging","key$":"BasicOriginsCollectionResponseWebhookSubscriptionNoPagingFlow","kind":"basic","name":"BasicOriginsCollectionResponseWebhookSubscriptionNoPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"origins_collection_response_webhook_subscription_no_paging_ref01","srcdatavar":"origins_collection_response_webhook_subscription_no_paging_ref01_data","suffix":"_dt0"},"match":{"id":"origins_collection_response_webhook_subscription_no_paging01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-origins_collection_response_webhook_subscription_no_paging_ref01"}}],"index$":0}]}, 'OriginsCollectionResponseWebhookSubscriptionNoPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let origins_collection_response_webhook_subscription_no_paging_ref01_data = Object.values(setup.data.existing.origins_collection_response_webhook_subscription_no_paging)[0]

    // LOAD
    const origins_collection_response_webhook_subscription_no_paging_ref01_ent = client.OriginsCollectionResponseWebhookSubscriptionNoPaging()
    const origins_collection_response_webhook_subscription_no_paging_ref01_match_dt0 = {}
    const origins_collection_response_webhook_subscription_no_paging_ref01_data_dt0 = (await origins_collection_response_webhook_subscription_no_paging_ref01_ent.load(origins_collection_response_webhook_subscription_no_paging_ref01_match_dt0)).data()
    assert(null != origins_collection_response_webhook_subscription_no_paging_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/origins_collection_response_webhook_subscription_no_paging/OriginsCollectionResponseWebhookSubscriptionNoPagingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotMetaSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['origins_collection_response_webhook_subscription_no_paging01','origins_collection_response_webhook_subscription_no_paging02','origins_collection_response_webhook_subscription_no_paging03','webhook_subscription01','webhook_subscription02','webhook_subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_META_TEST_ORIGINS_COLLECTION_RESPONSE_WEBHOOK_SUBSCRIPTION_NO_PAGING_ENTID': idmap,
    'HUBSPOT_META_TEST_LIVE': 'FALSE',
    'HUBSPOT_META_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_META_APIKEY': '',
  })

  idmap = env['HUBSPOT_META_TEST_ORIGINS_COLLECTION_RESPONSE_WEBHOOK_SUBSCRIPTION_NO_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_META_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_META_TEST_ORIGINS_COLLECTION_RESPONSE_WEBHOOK_SUBSCRIPTION_NO_PAGING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotMetaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_META_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HUBSPOT_META_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
