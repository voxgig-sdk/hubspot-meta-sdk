
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


describe('AdvancedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_META_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_META_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotMetaSDK.test()
    const ent = testsdk.Advanced()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"advanced","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"webhook_subscription_id","or":"app_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test","q":{"exist":["subscription_id","webhook_subscription_id"]},"r":{"param":{"appId":"webhook_subscription_id","subscription-id":"subscription_id"}},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"webhook-subscriptions"},{"var":"webhook_subscription_id"},{"var":"subscription_id"},{"lit":"test"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.webhook_subscription"]]},"key$":"advanced","name__orig":"advanced","Name":"Advanced","name_":"advanced","name-":"advanced","NAME":"ADVANCED","index$":0}, {"active":true,"entity":"advanced","key$":"BasicAdvancedFlow","kind":"basic","name":"BasicAdvancedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"advanced_ref01"},"m":{"subscription_id":"subscription01","webhook_subscription_id":"webhook_subscription01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Advanced', {"POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test":{"protocol":"http","parameters":[{"name":"appId","in":"path","required":true,"schema":{"pattern":".+","type":"string","example":null},"index$":0},{"name":"subscription-id","in":"path","description":"The unique identifier of the webhook subscription to test.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const advanced_ref01_ent = client.Advanced()
    let advanced_ref01_data = setup.data.new.advanced['advanced_ref01']
    advanced_ref01_data['subscription_id'] = setup.idmap['subscription01']
    advanced_ref01_data['webhook_subscription_id'] = setup.idmap['webhook_subscription01']

    advanced_ref01_data = (await advanced_ref01_ent.create(advanced_ref01_data)).data()
    assert(null != advanced_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/advanced/AdvancedTestData.json')

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
    ['advanced01','advanced02','advanced03','webhook_subscription01','webhook_subscription02','webhook_subscription03','subscription01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_META_TEST_ADVANCED_ENTID': idmap,
    'HUBSPOT_META_TEST_LIVE': 'FALSE',
    'HUBSPOT_META_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_META_APIKEY': '',
  })

  idmap = env['HUBSPOT_META_TEST_ADVANCED_ENTID']

  const live = 'TRUE' === env.HUBSPOT_META_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_META_TEST_ADVANCED_ENTID']
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
  
