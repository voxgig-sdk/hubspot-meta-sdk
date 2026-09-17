import { AdvancedEntity } from './entity/AdvancedEntity';
import { BasicEntity } from './entity/BasicEntity';
import { OriginsCollectionResponseIpRangeNoPagingEntity } from './entity/OriginsCollectionResponseIpRangeNoPagingEntity';
import { OriginsCollectionResponseWebhookSubscriptionNoPagingEntity } from './entity/OriginsCollectionResponseWebhookSubscriptionNoPagingEntity';
import { OriginsWebhookSubscriptionEntity } from './entity/OriginsWebhookSubscriptionEntity';
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
    OriginsCollectionResponseIpRangeNoPaging(entopts?: Record<string, any>): OriginsCollectionResponseIpRangeNoPagingEntity;
    OriginsCollectionResponseWebhookSubscriptionNoPaging(entopts?: Record<string, any>): OriginsCollectionResponseWebhookSubscriptionNoPagingEntity;
    OriginsWebhookSubscription(entopts?: Record<string, any>): OriginsWebhookSubscriptionEntity;
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
