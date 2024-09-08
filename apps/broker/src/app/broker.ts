import {FastifyReply, FastifyRequest} from 'fastify';
import {BrokerMessage} from "@babelfish/broker";

export const broker = async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body as BrokerMessage;

    reply.send({
        status: 'success',
        data: null,
    })
}



