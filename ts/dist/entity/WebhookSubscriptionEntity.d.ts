import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { WebhookSubscription, WebhookSubscriptionCreateData } from '../HubspotMetaTypes';
declare class WebhookSubscriptionEntity extends HubspotMetaEntityBase<WebhookSubscription> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: WebhookSubscriptionEntity): WebhookSubscriptionEntity;
    create(this: any, reqdata?: WebhookSubscriptionCreateData, ctrl?: Control): Promise<WebhookSubscriptionEntity>;
}
export { WebhookSubscriptionEntity };
