// Typed models for the HubspotMeta SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-meta-sdk/go/core"
)

// Advanced is the typed data model for the advanced entity.
type Advanced struct {
}

// AdvancedCreateData is the typed request payload for Advanced.CreateTyped.
type AdvancedCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	WebhookSubscriptionId string `json:"webhook_subscription_id"`
}

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// BasicLoadMatch is the typed request payload for Basic.LoadTyped.
type BasicLoadMatch struct {
	Direction *[]any `json:"direction,omitempty"`
	Service *[]any `json:"service,omitempty"`
}

// BasicRemoveMatch is the typed request payload for Basic.RemoveTyped.
type BasicRemoveMatch struct {
	AppId string `json:"app_id"`
	SubscriptionId int `json:"subscription_id"`
}

// OriginsCollectionResponseWebhookSubscriptionNoPaging is the typed data model for the origins_collection_response_webhook_subscription_no_paging entity.
type OriginsCollectionResponseWebhookSubscriptionNoPaging struct {
}

// OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch is the typed request payload for OriginsCollectionResponseWebhookSubscriptionNoPaging.LoadTyped.
type OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch struct {
	AppId string `json:"app_id"`
}

// OriginsIpRange is the typed data model for the origins_ip_range entity.
type OriginsIpRange struct {
}

// OriginsIpRangeListMatch is the typed request payload for OriginsIpRange.ListTyped.
type OriginsIpRangeListMatch struct {
	Direction *[]any `json:"direction,omitempty"`
	Service *[]any `json:"service,omitempty"`
}

// WebhookSubscription is the typed data model for the webhook_subscription entity.
type WebhookSubscription struct {
}

// WebhookSubscriptionCreateData is the typed request payload for WebhookSubscription.CreateTyped.
type WebhookSubscriptionCreateData struct {
	Id string `json:"id"`
	WebhookUrl string `json:"webhookUrl"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
