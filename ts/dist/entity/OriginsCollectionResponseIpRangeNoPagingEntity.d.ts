import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { OriginsCollectionResponseIpRangeNoPaging, OriginsCollectionResponseIpRangeNoPagingListMatch } from '../HubspotMetaTypes';
declare class OriginsCollectionResponseIpRangeNoPagingEntity extends HubspotMetaEntityBase<OriginsCollectionResponseIpRangeNoPaging> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: OriginsCollectionResponseIpRangeNoPagingEntity): OriginsCollectionResponseIpRangeNoPagingEntity;
    list(this: any, reqmatch?: OriginsCollectionResponseIpRangeNoPagingListMatch, ctrl?: Control): Promise<OriginsCollectionResponseIpRangeNoPagingEntity[]>;
}
export { OriginsCollectionResponseIpRangeNoPagingEntity };
