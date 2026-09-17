import { HubspotMetaEntityBase } from '../HubspotMetaEntityBase';
import type { HubspotMetaSDK } from '../HubspotMetaSDK';
import type { Control } from '../types';
import type { Basic, BasicLoadMatch, BasicRemoveMatch } from '../HubspotMetaTypes';
declare class BasicEntity extends HubspotMetaEntityBase<Basic> {
    constructor(client: HubspotMetaSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
    load(this: any, reqmatch?: BasicLoadMatch, ctrl?: Control): Promise<BasicEntity>;
    remove(this: any, reqmatch?: BasicRemoveMatch, ctrl?: Control): Promise<BasicEntity>;
}
export { BasicEntity };
