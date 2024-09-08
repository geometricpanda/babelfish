import {APIS, SYSTEM} from "@babelfish/systems";
import {MESSAGE_TYPE} from "./message.interface";
import {BrokerMessage,} from "./message.interface";
import {EncryptMessageError} from "./error";

export interface TransitEncryptResponse {
    status: 'success',
    data: string
}

export interface CreateMessageProps {
    system: SYSTEM;
    ip: string;
    requestId: string;
    event: unknown;
}

export type CreateMessage = ({}: CreateMessageProps) => Promise<BrokerMessage>;

export const createMessage: CreateMessage = async ({system, requestId, ip, event}) => {

    const req = await fetch(APIS[SYSTEM.TRANSIT_ENCRYPT], {
        method: 'POST',
        headers: {
            'x-request-id': requestId,
            'x-forwarded-for': ip,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event),
    });

    if (!req.ok) {
        throw new EncryptMessageError(req.statusText);
    }

    const {data}: TransitEncryptResponse = await req.json();

    return ({
        type: MESSAGE_TYPE.WEBHOOK_EVENT,
        origin: {
            timestamp: Date.now(),
            ip,
            system,
            requestId,
        },
        message: data,
    })
}
