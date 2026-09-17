# HubspotMeta SDK utility: make_context

from hubspotmeta_sdk.core.context import HubspotMetaContext


def make_context_util(ctxmap, basectx):
    return HubspotMetaContext(ctxmap, basectx)
