<?php
declare(strict_types=1);

// Typed models for the HubspotMeta SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Advanced entity data model. */
class Advanced
{
}

/** Request payload for Advanced#create. */
class AdvancedCreateData
{
    public int $subscription_id;
    public string $webhook_subscription_id;
}

/** Basic entity data model. */
class Basic
{
    public ?string $id = null;
}

/** Request payload for Basic#load. */
class BasicLoadMatch
{
    public ?array $direction = null;
    public ?array $service = null;
}

/** Request payload for Basic#remove. */
class BasicRemoveMatch
{
    public string $app_id;
    public int $subscription_id;
}

/** OriginsCollectionResponseWebhookSubscriptionNoPaging entity data model. */
class OriginsCollectionResponseWebhookSubscriptionNoPaging
{
    public array $results;
}

/** Request payload for OriginsCollectionResponseWebhookSubscriptionNoPaging#load. */
class OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch
{
    public string $app_id;
}

/** OriginsIpRange entity data model. */
class OriginsIpRange
{
    public string $cidr;
    public string $description;
    public string $direction;
    public string $service;
}

/** Request payload for OriginsIpRange#list. */
class OriginsIpRangeListMatch
{
    public ?array $direction = null;
    public ?array $service = null;
}

/** WebhookSubscription entity data model. */
class WebhookSubscription
{
    public ?string $id = null;
    public string $webhookUrl;
}

/** Request payload for WebhookSubscription#create. */
class WebhookSubscriptionCreateData
{
    public string $id;
    public string $webhookUrl;
}

