-- Typed models for the HubspotMeta SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Advanced

---@class AdvancedCreateData
---@field subscription_id number
---@field webhook_subscription_id string

---@class Basic
---@field id? string

---@class BasicLoadMatch
---@field direction? table
---@field service? table

---@class BasicRemoveMatch
---@field app_id string
---@field subscription_id number

---@class OriginsCollectionResponseIpRangeNoPaging
---@field cidr string
---@field description string
---@field direction string
---@field service string

---@class OriginsCollectionResponseIpRangeNoPagingListMatch
---@field direction? table
---@field service? table

---@class OriginsCollectionResponseWebhookSubscriptionNoPaging
---@field results table

---@class OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch
---@field app_id string

---@class OriginsWebhookSubscription
---@field id? string
---@field webhookUrl string

---@class OriginsWebhookSubscriptionCreateData
---@field id string
---@field webhookUrl string

local M = {}

return M
