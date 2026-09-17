<?php
declare(strict_types=1);

// HubspotMeta SDK utility: result_body

class HubspotMetaResultBody
{
    public static function call(HubspotMetaContext $ctx): ?HubspotMetaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
