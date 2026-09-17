# HubspotMeta SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HubspotMeta",
            "slug": "hubspot-meta",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.hubapi.com",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "hapikey",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "advanced": {},
                "basic": {},
                "origins_collection_response_ip_range_no_paging": {},
                "origins_collection_response_webhook_subscription_no_paging": {},
                "origins_webhook_subscription": {},
            },
        },
        "entity": {
      "advanced": {
        "fields": [],
        "name": "advanced",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "webhook_subscription_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test",
                "rename": {
                  "param": {
                    "appId": "webhook_subscription_id",
                    "subscription-id": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                  {
                    "lit": "webhook-subscriptions",
                  },
                  {
                    "var": "webhook_subscription_id",
                  },
                  {
                    "var": "subscription_id",
                  },
                  {
                    "lit": "test",
                  },
                ],
                "select": {
                  "exist": [
                    "subscription_id",
                    "webhook_subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{webhook_subscription_id}",
                  "{subscription_id}",
                  "test",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "webhook_subscription",
            ],
          ],
        },
      },
      "basic": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "app_id",
            "subscription_id",
          ],
          "sep": "/",
        },
        "name": "basic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "service",
                      "orig": "service",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/meta/network-origins/2026-09/ip-ranges/simple",
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                  {
                    "lit": "simple",
                  },
                ],
                "select": {
                  "exist": [
                    "direction",
                    "service",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "simple",
                ],
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": None,
                      "kind": "param",
                      "name": "subscription_id",
                      "orig": "subscription_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}",
                "rename": {
                  "param": {
                    "appId": "app_id",
                    "subscription-id": "subscription_id",
                  },
                },
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                  {
                    "lit": "webhook-subscriptions",
                  },
                  {
                    "var": "app_id",
                  },
                  {
                    "var": "subscription_id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "subscription_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{app_id}",
                  "{subscription_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "webhook_subscription",
            ],
          ],
        },
      },
      "origins_collection_response_ip_range_no_paging": {
        "fields": [
          {
            "name": "cidr",
            "req": True,
            "short": "The CIDR notation representing the IP range.",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "req": True,
            "short": "A description of the IP range.",
            "type": "`$STRING`",
          },
          {
            "name": "direction",
            "req": True,
            "short": "The direction of the IP traffic, which can be INGRESS or EGRESS.",
            "type": "`$STRING`",
          },
          {
            "name": "service",
            "req": True,
            "short": "The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.",
            "type": "`$STRING`",
          },
        ],
        "name": "origins_collection_response_ip_range_no_paging",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": None,
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": None,
                      "kind": "query",
                      "name": "service",
                      "orig": "service",
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/meta/network-origins/2026-09/ip-ranges",
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                ],
                "select": {
                  "exist": [
                    "direction",
                    "service",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "origins_collection_response_webhook_subscription_no_paging": {
        "fields": [
          {
            "name": "results",
            "req": True,
            "short": "An array of webhook subscriptions.",
            "type": "`$ARRAY`",
          },
        ],
        "name": "origins_collection_response_webhook_subscription_no_paging",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
                "rename": {
                  "param": {
                    "appId": "app_id",
                  },
                },
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                  {
                    "lit": "webhook-subscriptions",
                  },
                  {
                    "var": "app_id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{app_id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "webhook_subscription",
            ],
          ],
        },
      },
      "origins_webhook_subscription": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "webhookUrl",
            "req": True,
            "short": "The URL to which webhook events will be sent.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "origins_webhook_subscription",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": None,
                      "kind": "param",
                      "name": "id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
                "rename": {
                  "param": {
                    "appId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "meta",
                  },
                  {
                    "lit": "network-origins",
                  },
                  {
                    "lit": "2026-09",
                  },
                  {
                    "lit": "ip-ranges",
                  },
                  {
                    "lit": "webhook-subscriptions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
