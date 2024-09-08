import {APIS, SYSTEM} from "@babelfish/systems";
import {BrokerMessage} from "./index";
import {DispatchMessageError} from "./error";

export type ReadMessage = (props: BrokerMessage) => unknown;

export interface TransitDecryptResponse<T = unknown> {
    status: 'success',
    data: T
}

export const readMessage: ReadMessage = async ({origin, message}) => {
    const request = await fetch(APIS[SYSTEM.TRANSIT_DECRYPT], {
        method: 'POST',
        headers: {
            'x-request-id': origin.requestId,
            'x-forwarded-for': origin.ip,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({encrypted: message}),
    })

    if (!request.ok) {
        throw new DispatchMessageError(request.statusText);
    }

    const {data} = await request.json() as TransitDecryptResponse;
    return data;
}
