import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { OriginsCollectionResponseWebhookSubscriptionNoPaging, OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch } from '../HubspotMetaTypes';
declare class OriginsCollectionResponseWebhookSubscriptionNoPagingEntity extends HubspotMetaEntityBase<OriginsCollectionResponseWebhookSubscriptionNoPaging> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: OriginsCollectionResponseWebhookSubscriptionNoPagingEntity): OriginsCollectionResponseWebhookSubscriptionNoPagingEntity;
    load(this: any, reqmatch?: OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch, ctrl?: Control): Promise<OriginsCollectionResponseWebhookSubscriptionNoPagingEntity>;
}
export { OriginsCollectionResponseWebhookSubscriptionNoPagingEntity };
