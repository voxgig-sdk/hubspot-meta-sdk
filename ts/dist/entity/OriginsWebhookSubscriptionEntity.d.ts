import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { OriginsWebhookSubscription, OriginsWebhookSubscriptionCreateData } from '../HubspotMetaTypes';
declare class OriginsWebhookSubscriptionEntity extends HubspotMetaEntityBase<OriginsWebhookSubscription> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: OriginsWebhookSubscriptionEntity): OriginsWebhookSubscriptionEntity;
    create(this: any, reqdata?: OriginsWebhookSubscriptionCreateData, ctrl?: Control): Promise<OriginsWebhookSubscriptionEntity>;
}
export { OriginsWebhookSubscriptionEntity };
