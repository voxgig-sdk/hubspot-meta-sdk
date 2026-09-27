

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

    const live = 'TRUE' === process.env.HUBSPOT_META_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'origins_collection_response_webhook_subscription_no_paging.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"An array of webhook subscriptions.","t":"`$ARRAY`","key$":"results","index$":0}},"name":"origins_collection_response_webhook_subscription_no_paging","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"app_id","or":"app_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}","q":{"exist":["app_id"]},"r":{"param":{"appId":"app_id"}},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"},{"lit":"webhook-subscriptions"},{"var":"app_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.webhook_subscription"]]},"key$":"origins_collection_response_webhook_subscription_no_paging","name__orig":"origins_collection_response_webhook_subscription_no_paging","Name":"OriginsCollectionResponseWebhookSubscriptionNoPaging","name_":"origins_collection_response_webhook_subscription_no_paging","name-":"origins-collection-response-webhook-subscription-no-paging","NAME":"ORIGINS_COLLECTION_RESPONSE_WEBHOOK_SUBSCRIPTION_NO_PAGING","index$":2}, {"active":true,"entity":"origins_collection_response_webhook_subscription_no_paging","key$":"BasicOriginsCollectionResponseWebhookSubscriptionNoPagingFlow","kind":"basic","name":"BasicOriginsCollectionResponseWebhookSubscriptionNoPagingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"origins_collection_response_webhook_subscription_no_paging_ref01","srcdatavar":"origins_collection_response_webhook_subscription_no_paging_ref01_data","suffix":"_dt0"},"m":{"id":"origins_collection_response_webhook_subscription_no_paging01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-origins_collection_response_webhook_subscription_no_paging_ref01"}}],"index$":0}]}, 'OriginsCollectionResponseWebhookSubscriptionNoPaging', {"GET /meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}":{"protocol":"http","parameters":[{"name":"appId","in":"path","required":true,"schema":{"pattern":".+","type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let origins_collection_response_webhook_subscription_no_paging_ref01_data = Object.values(setup.data.existing.origins_collection_response_webhook_subscription_no_paging)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const origins_collection_response_webhook_subscription_no_paging_ref01_ent = client.OriginsCollectionResponseWebhookSubscriptionNoPaging()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
  
