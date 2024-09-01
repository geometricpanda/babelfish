import {FastifyReply, FastifyRequest} from 'fastify';

export const broker = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({hello: 'world'})
}



