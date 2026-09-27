import { AdvancedEntity } from './entity/AdvancedEntity';
import { BasicEntity } from './entity/BasicEntity';
import { OriginsCollectionResponseWebhookSubscriptionNoPagingEntity } from './entity/OriginsCollectionResponseWebhookSubscriptionNoPagingEntity';
import { OriginsIpRangeEntity } from './entity/OriginsIpRangeEntity';
import { WebhookSubscriptionEntity } from './entity/WebhookSubscriptionEntity';
export type * from './HubspotMetaTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HubspotMetaEntityBase } from './HubspotMetaEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HubspotMetaSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Advanced(entopts?: Record<string, any>): AdvancedEntity;
    Basic(entopts?: Record<string, any>): BasicEntity;
    OriginsCollectionResponseWebhookSubscriptionNoPaging(entopts?: Record<string, any>): OriginsCollectionResponseWebhookSubscriptionNoPagingEntity;
    OriginsIpRange(entopts?: Record<string, any>): OriginsIpRangeEntity;
    WebhookSubscription(entopts?: Record<string, any>): WebhookSubscriptionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HubspotMetaSDK;
    tester(testopts?: any, sdkopts?: any): HubspotMetaSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HubspotMetaSDK;
export { stdutil, config, BaseFeature, HubspotMetaEntityBase, HubspotMetaSDK, SDK, };
