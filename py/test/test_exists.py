# HubspotMeta SDK exists test

import pytest
from hubspotmeta_sdk import HubspotMetaSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotMetaSDK.test(None, None)
        assert testsdk is not None
