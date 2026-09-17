package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-meta-sdk/go"
	"github.com/voxgig-sdk/hubspot-meta-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-meta-sdk/go/utility/struct"
)

func TestOriginsWebhookSubscriptionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OriginsWebhookSubscription(nil)
		if ent == nil {
			t.Fatal("expected non-nil OriginsWebhookSubscriptionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := origins_webhook_subscriptionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "origins_webhook_subscription." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_META_TEST_ORIGINS_WEBHOOK_SUBSCRIPTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		originsWebhookSubscriptionRef01Ent := client.OriginsWebhookSubscription(nil)
		originsWebhookSubscriptionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "origins_webhook_subscription"}), "origins_webhook_subscription_ref01"))
		originsWebhookSubscriptionRef01Data["app_id"] = setup.idmap["app01"]

		originsWebhookSubscriptionRef01DataResult, err := originsWebhookSubscriptionRef01Ent.Create(originsWebhookSubscriptionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		originsWebhookSubscriptionRef01Data = core.ToMapAny(entityData(originsWebhookSubscriptionRef01DataResult))
		if originsWebhookSubscriptionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if originsWebhookSubscriptionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func origins_webhook_subscriptionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "origins_webhook_subscription", "OriginsWebhookSubscriptionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read origins_webhook_subscription test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse origins_webhook_subscription test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"origins_webhook_subscription01", "origins_webhook_subscription02", "origins_webhook_subscription03", "app01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_META_TEST_ORIGINS_WEBHOOK_SUBSCRIPTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_META_TEST_ORIGINS_WEBHOOK_SUBSCRIPTION_ENTID": idmap,
		"HUBSPOT_META_TEST_LIVE":      "FALSE",
		"HUBSPOT_META_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_META_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_META_TEST_ORIGINS_WEBHOOK_SUBSCRIPTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_META_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_META_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotMetaSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_META_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_META_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
