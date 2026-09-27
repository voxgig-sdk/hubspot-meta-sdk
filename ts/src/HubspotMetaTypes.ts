// Typed models for the HubspotMeta SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Advanced {
}

export interface AdvancedCreateData {
  subscription_id: number
  webhook_subscription_id: string
}

export interface Basic {
  id?: string
}

export interface BasicLoadMatch {
  direction?: any[]
  service?: any[]
}

export interface BasicRemoveMatch {
  app_id: string
  subscription_id: number
}

export interface OriginsCollectionResponseWebhookSubscriptionNoPaging {
  results: any[]
}

export interface OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch {
  app_id: string
}

export interface OriginsIpRange {
  cidr: string
  description: string
  direction: string
  service: string
}

export interface OriginsIpRangeListMatch {
  direction?: any[]
  service?: any[]
}

export interface WebhookSubscription {
  id?: string
  webhookUrl: string
}

export interface WebhookSubscriptionCreateData {
  id: string
  webhookUrl: string
}

