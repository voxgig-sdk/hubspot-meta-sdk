# HubspotMeta SDK feature factory

from hubspotmeta_sdk.feature.base_feature import HubspotMetaBaseFeature
from hubspotmeta_sdk.feature.debug_feature import HubspotMetaDebugFeature
from hubspotmeta_sdk.feature.idempotency_feature import HubspotMetaIdempotencyFeature
from hubspotmeta_sdk.feature.metrics_feature import HubspotMetaMetricsFeature
from hubspotmeta_sdk.feature.paging_feature import HubspotMetaPagingFeature
from hubspotmeta_sdk.feature.ratelimit_feature import HubspotMetaRatelimitFeature
from hubspotmeta_sdk.feature.retry_feature import HubspotMetaRetryFeature
from hubspotmeta_sdk.feature.test_feature import HubspotMetaTestFeature
from hubspotmeta_sdk.feature.timeout_feature import HubspotMetaTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotMetaBaseFeature(),
    "debug": lambda: HubspotMetaDebugFeature(),
    "idempotency": lambda: HubspotMetaIdempotencyFeature(),
    "metrics": lambda: HubspotMetaMetricsFeature(),
    "paging": lambda: HubspotMetaPagingFeature(),
    "ratelimit": lambda: HubspotMetaRatelimitFeature(),
    "retry": lambda: HubspotMetaRetryFeature(),
    "test": lambda: HubspotMetaTestFeature(),
    "timeout": lambda: HubspotMetaTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
