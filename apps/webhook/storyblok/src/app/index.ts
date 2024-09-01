import {FastifyPluginCallback} from "fastify";
import {webhook} from "./webhook";
import {schema} from "./schema";
import {createHmac} from "node:crypto";
import {kv} from "./vault";

export const Routes: FastifyPluginCallback = async (fastify) => {

    const webhookSecret = await kv.read('webhook/storyblok', 'webhook-secret');

    fastify.addHook('preHandler', async (request, reply) => {

        const payload = request.rawBody as string;
        const signature = request.headers['webhook-signature']

        const generatedSignature = createHmac('sha1', webhookSecret)
            .update(payload)
            .digest('hex')

        if (!signature) {
            reply.code(401).send({error: 'Unauthorized'})
        }

        if (signature !== generatedSignature) {
            reply.code(403).send({error: 'Forbidden'})
        }

    });


    fastify.post('/', {schema}, webhook);


}
