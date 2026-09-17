export interface Advanced {
}
export interface AdvancedCreateData {
    subscription_id: number;
    webhook_subscription_id: string;
}
export interface Basic {
    id?: string;
}
export interface BasicLoadMatch {
    direction?: any[];
    service?: any[];
}
export interface BasicRemoveMatch {
    app_id: string;
    subscription_id: number;
}
export interface OriginsCollectionResponseIpRangeNoPaging {
    cidr: string;
    description: string;
    direction: string;
    service: string;
}
export interface OriginsCollectionResponseIpRangeNoPagingListMatch {
    direction?: any[];
    service?: any[];
}
export interface OriginsCollectionResponseWebhookSubscriptionNoPaging {
    results: any[];
}
export interface OriginsCollectionResponseWebhookSubscriptionNoPagingLoadMatch {
    app_id: string;
}
export interface OriginsWebhookSubscription {
    id?: string;
    webhookUrl: string;
}
export interface OriginsWebhookSubscriptionCreateData {
    id: string;
    webhookUrl: string;
}
