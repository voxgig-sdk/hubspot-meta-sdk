

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


describe('OriginsIpRangeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_META_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_META_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotMetaSDK.test()
    const ent = testsdk.OriginsIpRange()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_META_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'origins_ip_range.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cidr":{"a":true,"h":"Cidr","n":"cidr","r":true,"sh":"The CIDR notation representing the IP range.","t":"`$STRING`","key$":"cidr","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"A description of the IP range.","t":"`$STRING`","key$":"description","index$":1},"direction":{"a":true,"h":"Direction","n":"direction","r":true,"sh":"The direction of the IP traffic, which can be INGRESS or EGRESS.","t":"`$STRING`","key$":"direction","index$":2},"service":{"a":true,"h":"Service","n":"service","r":true,"sh":"The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.","t":"`$STRING`","key$":"service","index$":3}},"name":"origins_ip_range","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /meta/network-origins/2026-09/ip-ranges","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":null,"k":"query","n":"service","or":"service","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"GET","o":"/meta/network-origins/2026-09/ip-ranges","q":{"exist":["direction","service"]},"r":{},"s":[{"lit":"meta"},{"lit":"network-origins"},{"lit":"2026-09"},{"lit":"ip-ranges"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"origins_ip_range","name__orig":"origins_ip_range","Name":"OriginsIpRange","name_":"origins_ip_range","name-":"origins-ip-range","NAME":"ORIGINS_IP_RANGE","index$":3}, {"active":true,"entity":"origins_ip_range","key$":"BasicOriginsIpRangeFlow","kind":"basic","name":"BasicOriginsIpRangeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"origins_ip_range_ref01"}}],"index$":0}]}, 'OriginsIpRange', {"GET /meta/network-origins/2026-09/ip-ranges":{"protocol":"http","parameters":[{"name":"direction","in":"query","description":"An array of directions to filter the IP ranges. Valid values are INGRESS and EGRESS.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null,"enum":["INGRESS","EGRESS"]}},"index$":0},{"name":"service","in":"query","description":"An array of services to filter the IP ranges. Valid values are EMAIL, API, DNS, WEB_SCRAPING, and TEST_SERVICE.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null,"enum":["EMAIL","API","DNS","WEB_SCRAPING","TEST_SERVICE"]}},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let origins_ip_range_ref01_data = Object.values(setup.data.existing.origins_ip_range)[0] as any

    // LIST
    const origins_ip_range_ref01_ent = client.OriginsIpRange()
    const origins_ip_range_ref01_match: any = {}

    const origins_ip_range_ref01_list = (await origins_ip_range_ref01_ent.list(origins_ip_range_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/origins_ip_range/OriginsIpRangeTestData.json')

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
    ['origins_ip_range01','origins_ip_range02','origins_ip_range03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_META_TEST_ORIGINS_IP_RANGE_ENTID': idmap,
    'HUBSPOT_META_TEST_LIVE': 'FALSE',
    'HUBSPOT_META_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_META_APIKEY': '',
  })

  idmap = env['HUBSPOT_META_TEST_ORIGINS_IP_RANGE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_META_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_META_TEST_ORIGINS_IP_RANGE_ENTID']
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
  
