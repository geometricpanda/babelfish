import {FastifyReply, FastifyRequest} from 'fastify';
import {encrypt} from "./encrypt";


export const encryptRoute = async ({body}: FastifyRequest, reply: FastifyReply) => {
    const encrypted = encrypt(body);
    return reply.send({
        status: 'success',
        data: encrypted,
    });
}



