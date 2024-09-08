import {createMessage} from "@babelfish/broker";
import {NewUserEvent, SYSTEM} from "@babelfish/systems";
import {FastifyRequest} from "fastify";
import {v4} from "uuid";

import {UserWebhook} from "./interface";
import {InvalidMessageError} from "../../errors";

const pattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/ig

export const userCreated = async (req: FastifyRequest) => {

    const body = req.body as UserWebhook.Created;

    const addresses = body.text.match(pattern);

    if (!addresses) {
        throw new InvalidMessageError(`Could not extract email address from webhook text`);
    }

    const email = addresses[0];
    const createdBy = addresses[1];

    if (!email) {
        throw new InvalidMessageError(`Could not extract user email address from webhook text`);
    }

    if (!createdBy) {
        throw new InvalidMessageError(`Could not extract creator email address from webhook text`);
    }

    const event: NewUserEvent = {
        id: body.user_id,
        email,
        createdBy,
        createdAt: Date.now(),
    }

    return createMessage({
        system: SYSTEM.STORYBLOK_WEBHOOK,
        ip: req.headers['x-forwarded-for'] as string,
        requestId: v4(),
        event,
    })

}
