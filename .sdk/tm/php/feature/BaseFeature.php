<?php
declare(strict_types=1);

// HubspotMeta SDK base feature

class HubspotMetaBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotMetaContext $ctx, array $options): void {}
    public function PostConstruct(HubspotMetaContext $ctx): void {}
    public function PostConstructEntity(HubspotMetaContext $ctx): void {}
    public function SetData(HubspotMetaContext $ctx): void {}
    public function GetData(HubspotMetaContext $ctx): void {}
    public function GetMatch(HubspotMetaContext $ctx): void {}
    public function SetMatch(HubspotMetaContext $ctx): void {}
    public function PrePoint(HubspotMetaContext $ctx): void {}
    public function PreSpec(HubspotMetaContext $ctx): void {}
    public function PreRequest(HubspotMetaContext $ctx): void {}
    public function PreResponse(HubspotMetaContext $ctx): void {}
    public function PreResult(HubspotMetaContext $ctx): void {}
    public function PreDone(HubspotMetaContext $ctx): void {}
    public function PreUnexpected(HubspotMetaContext $ctx): void {}
}
