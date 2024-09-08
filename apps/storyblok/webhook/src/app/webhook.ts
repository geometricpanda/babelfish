import {FastifyReply, FastifyRequest} from "fastify";
import {BrokerMessage, dispatchMessage} from "@babelfish/broker";
import {userCreated, UserWebhook} from "./events/user";
import {StoryblokEvents} from "./events/storyblok.events";

export type StoryblokAction = (req: FastifyRequest) => Promise<BrokerMessage>;

const actions: Record<string, StoryblokAction> = {
    [UserWebhook.ACTION.CREATED]: (req) => userCreated(req),
};

export const webhook = async (request: FastifyRequest, reply: FastifyReply) => {

    const body = request.body as StoryblokEvents;
    const action = body.action as keyof typeof actions;
    const actionFn = actions[action] as StoryblokAction | undefined;

    if (!actionFn) {
        return reply.status(400).send({error: 'Invalid action or not implemented'});
    }

    try {
        const message = await actionFn(request);
        await dispatchMessage(message);

        return reply.send({
            status: 'success',
            data: null,
        });
    } catch (e) {

        return reply
            .status(500)
            .send(e);
    }
}
