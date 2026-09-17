package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotMeta",
			"slug": "hubspot-meta",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"advanced": map[string]any{},
				"basic": map[string]any{},
				"origins_collection_response_ip_range_no_paging": map[string]any{},
				"origins_collection_response_webhook_subscription_no_paging": map[string]any{},
				"origins_webhook_subscription": map[string]any{},
			},
		},
		"entity": map[string]any{
			"advanced": map[string]any{
				"fields": []any{},
				"name": "advanced",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "webhook_subscription_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "webhook_subscription_id",
										"subscription-id": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
									map[string]any{
										"lit": "webhook-subscriptions",
									},
									map[string]any{
										"var": "webhook_subscription_id",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
										"webhook_subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
									"webhook-subscriptions",
									"{webhook_subscription_id}",
									"{subscription_id}",
									"test",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook_subscription",
						},
					},
				},
			},
			"basic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"app_id",
						"subscription_id",
					},
					"sep": "/",
				},
				"name": "basic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "service",
											"orig": "service",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/meta/network-origins/2026-09/ip-ranges/simple",
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
									map[string]any{
										"lit": "simple",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"service",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
									"simple",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "subscription_id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"subscription-id": "subscription_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
									map[string]any{
										"lit": "webhook-subscriptions",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "subscription_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"subscription_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
									"webhook-subscriptions",
									"{app_id}",
									"{subscription_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook_subscription",
						},
					},
				},
			},
			"origins_collection_response_ip_range_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cidr",
						"req": true,
						"short": "The CIDR notation representing the IP range.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "A description of the IP range.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "direction",
						"req": true,
						"short": "The direction of the IP traffic, which can be INGRESS or EGRESS.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service",
						"req": true,
						"short": "The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.",
						"type": "`$STRING`",
					},
				},
				"name": "origins_collection_response_ip_range_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "service",
											"orig": "service",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/meta/network-origins/2026-09/ip-ranges",
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"service",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"origins_collection_response_webhook_subscription_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of webhook subscriptions.",
						"type": "`$ARRAY`",
					},
				},
				"name": "origins_collection_response_webhook_subscription_no_paging",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
									map[string]any{
										"lit": "webhook-subscriptions",
									},
									map[string]any{
										"var": "app_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
									"webhook-subscriptions",
									"{app_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook_subscription",
						},
					},
				},
			},
			"origins_webhook_subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhookUrl",
						"req": true,
						"short": "The URL to which webhook events will be sent.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "origins_webhook_subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "meta",
									},
									map[string]any{
										"lit": "network-origins",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "ip-ranges",
									},
									map[string]any{
										"lit": "webhook-subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"meta",
									"network-origins",
									"2026-09",
									"ip-ranges",
									"webhook-subscriptions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
