import {SYSTEM} from "@babelfish/systems";

export enum MESSAGE_TYPE {
    WEBHOOK_EVENT = 'WEBHOOK_EVENT',
}

export interface BrokerMessage {
    origin: {
        system: SYSTEM;
        ip: string;
        timestamp: number;
        requestId: string;
    },
    type: MESSAGE_TYPE;
    message: string;
}
