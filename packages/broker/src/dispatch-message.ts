import {APIS, SYSTEM} from "@babelfish/systems";
import {BrokerMessage} from "./index";
import {DispatchMessageError} from "./error";

export const dispatchMessage = async (message: BrokerMessage) => {
    const request = await fetch(APIS[SYSTEM.BROKER], {
        method: 'POST',
        headers: {
            'x-request-id': message.origin.requestId,
            'x-forwarded-for': message.origin.ip,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message),
    })

    if (!request.ok) {
        throw new DispatchMessageError(request.statusText);
    }
}
