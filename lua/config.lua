-- HubspotMeta SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HubspotMeta",
      slug = "hubspot-meta",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.hubapi.com",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "hapikey",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["advanced"] = {},
        ["basic"] = {},
        ["origins_collection_response_webhook_subscription_no_paging"] = {},
        ["origins_ip_range"] = {},
        ["webhook_subscription"] = {},
      },
    },
    entity = {
      ["advanced"] = {
        ["fields"] = {},
        ["name"] = "advanced",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                  {
                    ["lit"] = "webhook-subscriptions",
                  },
                  {
                    ["var"] = "webhook_subscription_id",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                  {
                    ["lit"] = "test",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{webhook_subscription_id}",
                  "{subscription_id}",
                  "test",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "webhook_subscription_id",
                    ["subscription-id"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "webhook_subscription_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "subscription_id",
                    "webhook_subscription_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.webhook_subscription",
            },
          },
        },
      },
      ["basic"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
          ["parts"] = {
            "app_id",
            "subscription_id",
          },
          ["sep"] = "/",
        },
        ["name"] = "basic",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges/simple",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                  {
                    ["lit"] = "simple",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "simple",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "direction",
                      ["orig"] = "direction",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "service",
                      ["orig"] = "service",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "direction",
                    "service",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                  {
                    ["lit"] = "webhook-subscriptions",
                  },
                  {
                    ["var"] = "app_id",
                  },
                  {
                    ["var"] = "subscription_id",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{app_id}",
                  "{subscription_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                    ["subscription-id"] = "subscription_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "subscription_id",
                      ["orig"] = "subscription_id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                    "subscription_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.webhook_subscription",
            },
          },
        },
      },
      ["origins_collection_response_webhook_subscription_no_paging"] = {
        ["fields"] = {
          {
            ["name"] = "results",
            ["title"] = "Results",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "An array of webhook subscriptions.",
          },
        },
        ["name"] = "origins_collection_response_webhook_subscription_no_paging",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                  {
                    ["lit"] = "webhook-subscriptions",
                  },
                  {
                    ["var"] = "app_id",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{app_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "app_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "app_id",
                      ["orig"] = "app_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "app_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.webhook_subscription",
            },
          },
        },
      },
      ["origins_ip_range"] = {
        ["fields"] = {
          {
            ["name"] = "cidr",
            ["title"] = "Cidr",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The CIDR notation representing the IP range.",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "A description of the IP range.",
          },
          {
            ["name"] = "direction",
            ["title"] = "Direction",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The direction of the IP traffic, which can be INGRESS or EGRESS.",
          },
          {
            ["name"] = "service",
            ["title"] = "Service",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.",
          },
        },
        ["name"] = "origins_ip_range",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "direction",
                      ["orig"] = "direction",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "service",
                      ["orig"] = "service",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "direction",
                    "service",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webhook_subscription"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "webhookUrl",
            ["title"] = "Webhook Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The URL to which webhook events will be sent.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhook_subscription",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}",
                ["segments"] = {
                  {
                    ["lit"] = "meta",
                  },
                  {
                    ["lit"] = "network-origins",
                  },
                  {
                    ["lit"] = "2026-09",
                  },
                  {
                    ["lit"] = "ip-ranges",
                  },
                  {
                    ["lit"] = "webhook-subscriptions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "meta",
                  "network-origins",
                  "2026-09",
                  "ip-ranges",
                  "webhook-subscriptions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["appId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "app_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = nil,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
