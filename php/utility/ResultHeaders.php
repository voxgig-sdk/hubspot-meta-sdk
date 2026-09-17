<?php
declare(strict_types=1);

// HubspotMeta SDK utility: result_headers

class HubspotMetaResultHeaders
{
    public static function call(HubspotMetaContext $ctx): ?HubspotMetaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
