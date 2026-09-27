

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotMetaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BasicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_META_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_META_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotMetaSDK.test()
    const ent = testsdk.Basic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_META_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'basic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id","parts":["app_id","subscription_id"],"sep":"/"},"name":"basic","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /meta/network-origins/2026-09/ip-ranges/simple","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":null,"k":"query","n":"service","or":"service","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"GET","o":"/meta/network-origins/2026-09/ip-ranges/simple","q":{"exist":["direction","service"]},"r":{},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"simple"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}","q":{"exist":["app_id","subscription_id"]},"r":{"param":{"appId":"app_id","subscription-id":"subscription_id"}},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"webhook-subscriptions"},{"var":"app_id"},{"var":"subscription_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.webhook_subscription"]]},"key$":"basic","name__orig":"basic","Name":"Basic","name_":"basic","name-":"basic","NAME":"BASIC","index$":1}, {"active":true,"entity":"basic","key$":"BasicBasicFlow","kind":"basic","name":"BasicBasicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"basic_ref01","srcdatavar":"basic_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-basic_ref01"}}],"index$":0}]}, 'Basic', {"GET /meta/network-origins/2026-09/ip-ranges/simple":{"protocol":"http","parameters":[{"name":"direction","in":"query","description":"An array specifying the direction of the IP traffic. Valid values are 'INGRESS' and 'EGRESS'.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null,"enum":["INGRESS","EGRESS"]}},"index$":0},{"name":"service","in":"query","description":"An array specifying the service type for which the IP ranges are applicable. Valid values include 'EMAIL', 'API', 'DNS', 'WEB_SCRAPING', and 'TEST_SERVICE'.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null,"enum":["EMAIL","API","DNS","WEB_SCRAPING","TEST_SERVICE"]}},"index$":1}]},"DELETE /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}":{"protocol":"http","parameters":[{"name":"appId","in":"path","required":true,"schema":{"pattern":".+","type":"string","example":null},"index$":0},{"name":"subscription-id","in":"path","description":"The unique identifier of the webhook subscription to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let basic_ref01_data = Object.values(setup.data.existing.basic)[0] as any

    // LOAD
    const basic_ref01_ent = client.Basic()
    const basic_ref01_match_dt0: any = {}
    basic_ref01_match_dt0.id = basic_ref01_data.id
    const basic_ref01_data_dt0 = (await basic_ref01_ent.load(basic_ref01_match_dt0)).data()
    assert(basic_ref01_data_dt0.id === basic_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/basic/BasicTestData.json')

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
    ['basic01','basic02','basic03','webhook_subscription01','webhook_subscription02','webhook_subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_META_TEST_BASIC_ENTID': idmap,
    'HUBSPOT_META_TEST_LIVE': 'FALSE',
    'HUBSPOT_META_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_META_APIKEY': '',
  })

  idmap = env['HUBSPOT_META_TEST_BASIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_META_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_META_TEST_BASIC_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
