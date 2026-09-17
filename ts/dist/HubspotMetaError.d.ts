import { Context } from './Context';
declare class HubspotMetaError extends Error {
    isHubspotMetaError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotMetaError };
