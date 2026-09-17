<?php
declare(strict_types=1);

// HubspotMeta SDK configuration

class HubspotMetaConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HubspotMeta",
                "slug" => "hubspot-meta",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.hubapi.com",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "hapikey",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "advanced" => [],
                    "basic" => [],
                    "origins_collection_response_ip_range_no_paging" => [],
                    "origins_collection_response_webhook_subscription_no_paging" => [],
                    "origins_webhook_subscription" => [],
                ],
            ],
            "entity" => [
        'advanced' => [
          'fields' => [],
          'name' => 'advanced',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'subscription_id',
                        'orig' => 'subscription_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'webhook_subscription_id',
                        'orig' => 'app_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test',
                  'rename' => [
                    'param' => [
                      'appId' => 'webhook_subscription_id',
                      'subscription-id' => 'subscription_id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                    [
                      'lit' => 'webhook-subscriptions',
                    ],
                    [
                      'var' => 'webhook_subscription_id',
                    ],
                    [
                      'var' => 'subscription_id',
                    ],
                    [
                      'lit' => 'test',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'subscription_id',
                      'webhook_subscription_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                    'webhook-subscriptions',
                    '{webhook_subscription_id}',
                    '{subscription_id}',
                    'test',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'webhook_subscription',
              ],
            ],
          ],
        ],
        'basic' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'app_id',
              'subscription_id',
            ],
            'sep' => '/',
          ],
          'name' => 'basic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => null,
                        'kind' => 'query',
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => null,
                        'kind' => 'query',
                        'name' => 'service',
                        'orig' => 'service',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges/simple',
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                    [
                      'lit' => 'simple',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'direction',
                      'service',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                    'simple',
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'subscription_id',
                        'orig' => 'subscription_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}',
                  'rename' => [
                    'param' => [
                      'appId' => 'app_id',
                      'subscription-id' => 'subscription_id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                    [
                      'lit' => 'webhook-subscriptions',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                    [
                      'var' => 'subscription_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'app_id',
                      'subscription_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                    'webhook-subscriptions',
                    '{app_id}',
                    '{subscription_id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'webhook_subscription',
              ],
            ],
          ],
        ],
        'origins_collection_response_ip_range_no_paging' => [
          'fields' => [
            [
              'name' => 'cidr',
              'req' => true,
              'short' => 'The CIDR notation representing the IP range.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'req' => true,
              'short' => 'A description of the IP range.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'direction',
              'req' => true,
              'short' => 'The direction of the IP traffic, which can be INGRESS or EGRESS.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'service',
              'req' => true,
              'short' => 'The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'origins_collection_response_ip_range_no_paging',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => null,
                        'kind' => 'query',
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => null,
                        'kind' => 'query',
                        'name' => 'service',
                        'orig' => 'service',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges',
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'direction',
                      'service',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'origins_collection_response_webhook_subscription_no_paging' => [
          'fields' => [
            [
              'name' => 'results',
              'req' => true,
              'short' => 'An array of webhook subscriptions.',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'origins_collection_response_webhook_subscription_no_paging',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'app_id',
                        'orig' => 'app_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}',
                  'rename' => [
                    'param' => [
                      'appId' => 'app_id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                    [
                      'lit' => 'webhook-subscriptions',
                    ],
                    [
                      'var' => 'app_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'app_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                    'webhook-subscriptions',
                    '{app_id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'webhook_subscription',
              ],
            ],
          ],
        ],
        'origins_webhook_subscription' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'webhookUrl',
              'req' => true,
              'short' => 'The URL to which webhook events will be sent.',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'origins_webhook_subscription',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => null,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'app_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}',
                  'rename' => [
                    'param' => [
                      'appId' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'meta',
                    ],
                    [
                      'lit' => 'network-origins',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'ip-ranges',
                    ],
                    [
                      'lit' => 'webhook-subscriptions',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'meta',
                    'network-origins',
                    '2026-09',
                    'ip-ranges',
                    'webhook-subscriptions',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HubspotMetaFeatures::make_feature($name);
    }
}
