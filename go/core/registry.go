package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAdvancedEntityFunc func(client *HubspotMetaSDK, entopts map[string]any) HubspotMetaEntity

var NewBasicEntityFunc func(client *HubspotMetaSDK, entopts map[string]any) HubspotMetaEntity

var NewOriginsCollectionResponseIpRangeNoPagingEntityFunc func(client *HubspotMetaSDK, entopts map[string]any) HubspotMetaEntity

var NewOriginsCollectionResponseWebhookSubscriptionNoPagingEntityFunc func(client *HubspotMetaSDK, entopts map[string]any) HubspotMetaEntity

var NewOriginsWebhookSubscriptionEntityFunc func(client *HubspotMetaSDK, entopts map[string]any) HubspotMetaEntity

