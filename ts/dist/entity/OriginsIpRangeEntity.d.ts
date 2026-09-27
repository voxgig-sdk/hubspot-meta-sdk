import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { OriginsIpRange, OriginsIpRangeListMatch } from '../HubspotMetaTypes';
declare class OriginsIpRangeEntity extends HubspotMetaEntityBase<OriginsIpRange> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: OriginsIpRangeEntity): OriginsIpRangeEntity;
    list(this: any, reqmatch?: OriginsIpRangeListMatch, ctrl?: Control): Promise<OriginsIpRangeEntity[]>;
}
export { OriginsIpRangeEntity };
