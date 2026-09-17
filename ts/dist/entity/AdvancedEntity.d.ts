import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { Advanced, AdvancedCreateData } from '../HubspotMetaTypes';
declare class AdvancedEntity extends HubspotMetaEntityBase<Advanced> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: AdvancedEntity): AdvancedEntity;
    create(this: any, reqdata?: AdvancedCreateData, ctrl?: Control): Promise<AdvancedEntity>;
}
export { AdvancedEntity };
