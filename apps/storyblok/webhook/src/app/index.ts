import {FastifyPluginCallback} from "fastify";
import {webhook} from "./webhook";
import {schema} from "./schema";
import {createHmac} from "node:crypto";
import {ENV} from "./environment";

export const Routes: FastifyPluginCallback = async (fastify) => {

    const webhookSecret = ENV.WEBHOOK_SECRET;

    fastify.addHook('preHandler', async (request, reply) => {

        const payload = request.rawBody as string;
        const signature = request.headers['webhook-signature']

        const generatedSignature = createHmac('sha1', webhookSecret)
            .update(payload)
            .digest('hex')

        if (signature !== generatedSignature) {
            reply.code(403).send({error: 'Forbidden', generatedSignature})
        }

    });


    fastify.post('/', {schema}, webhook);


}
