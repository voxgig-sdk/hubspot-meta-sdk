
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


describe('WebhookSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_META_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_META_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotMetaSDK.test()
    const ent = testsdk.WebhookSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"webhookUrl":{"a":true,"h":"Webhook Url","n":"webhookUrl","r":true,"sh":"The URL to which webhook events will be sent.","t":"`$STRING`","key$":"webhookUrl","index$":1}},"id":{"field":"id","name":"id"},"name":"webhook_subscription","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"app_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","q":{"exist":["id"]},"r":{"param":{"appId":"id"}},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"webhook-subscriptions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"webhook_subscription","name__orig":"webhook_subscription","Name":"WebhookSubscription","name_":"webhook_subscription","name-":"webhook-subscription","NAME":"WEBHOOK_SUBSCRIPTION","index$":4}, {"active":true,"entity":"webhook_subscription","key$":"BasicWebhookSubscriptionFlow","kind":"basic","name":"BasicWebhookSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_subscription_ref01"},"m":{"app_id":"app01"},"o":"create","s":[],"v":[],"index$":0}]}, 'WebhookSubscription', {"POST /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["webhookUrl"],"type":"object","properties":{"webhookUrl":{"type":"string","description":"The URL to which webhook events will be sent. This must be a valid URL in string format.","example":null,"key$":"webhookUrl"}},"example":null,"x-ref":"#/components/schemas/OriginsWebhookSubscriptionRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"appId","in":"path","required":true,"schema":{"pattern":".+","type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_subscription_ref01_ent = client.WebhookSubscription()
    let webhook_subscription_ref01_data = setup.data.new.webhook_subscription['webhook_subscription_ref01']
    webhook_subscription_ref01_data['app_id'] = setup.idmap['app01']

    webhook_subscription_ref01_data = (await webhook_subscription_ref01_ent.create(webhook_subscription_ref01_data)).data()
    assert(null != webhook_subscription_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhook_subscription/WebhookSubscriptionTestData.json')

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
    ['webhook_subscription01','webhook_subscription02','webhook_subscription03','app01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_META_TEST_WEBHOOK_SUBSCRIPTION_ENTID': idmap,
    'HUBSPOT_META_TEST_LIVE': 'FALSE',
    'HUBSPOT_META_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_META_APIKEY': '',
  })

  idmap = env['HUBSPOT_META_TEST_WEBHOOK_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.HUBSPOT_META_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_META_TEST_WEBHOOK_SUBSCRIPTION_ENTID']
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
  
