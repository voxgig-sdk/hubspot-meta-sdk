<?php
declare(strict_types=1);

// HubspotMeta SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotMetaMakeContext
{
    public static function call(array $ctxmap, ?HubspotMetaContext $basectx): HubspotMetaContext
    {
        return new HubspotMetaContext($ctxmap, $basectx);
    }
}
