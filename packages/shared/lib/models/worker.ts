import type { NangoConnection } from './Connection';
import type { NangoIntegrationData } from './NangoConfig';

export interface InitialSyncArgs {
    syncId: string;
    syncJobId: number;
    syncName: string;
    nangoConnection: NangoConnection;
    debug?: boolean;
}

export interface ContinuousSyncArgs {
    syncId: string;
    syncName: string;
    syncData: NangoIntegrationData;
    nangoConnection: NangoConnection;
    debug?: boolean;
}

export interface ActionArgs {
    input: object;
    actionName: string;
    nangoConnection: NangoConnection;
    activityLogId: number;
}

export interface WebhookArgs {
    name: string;
    parentSyncName: string;
    nangoConnection: NangoConnection;
    input: object;
    activityLogId: number;
}

export interface PostConnectionScriptArgs {
    name: string;
    version: string;
    nangoConnection: NangoConnection;
    file_location: string;
    activityLogId: number;
}
