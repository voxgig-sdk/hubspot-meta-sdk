// Typed models for the HubspotMeta SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Advanced
 */

/**
 * @typedef {Object} AdvancedCreateData
 * @property {number} subscription_id
 * @property {string} webhook_subscription_id
 */

/**
 * @typedef {Object} Basic
 * @property {string} [id]
 */

/**
 * @typedef {Object} BasicLoadMatch
 * @property {Array} [direction]
 * @property {Array} [service]
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {string} app_id
 * @property {number} subscription_id
 */

/**
 * @typedef {Object} OriginsCollectionResponseIpRangeNoPaging
 * @property {string} cidr
 * @property {string} description
 * @property {string} direction
 * @property {string} service
 */

/**
 * @typedef {Object} OriginsCollectionResponseIpRangeNoPagingListMatch
 * @property {Array} [direction]
 * @property {Array} [service]
 */

/**
 * @typedef {Object} OriginsCollectionResponseWebhookSubscriptionNoPaging
 * @property {Array} results
 */

/**
 * @typedef {Object} OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch
 * @property {string} app_id
 */

/**
 * @typedef {Object} OriginsWebhookSubscription
 * @property {string} [id]
 * @property {string} webhookUrl
 */

/**
 * @typedef {Object} OriginsWebhookSubscriptionCreateData
 * @property {string} id
 * @property {string} webhookUrl
 */

