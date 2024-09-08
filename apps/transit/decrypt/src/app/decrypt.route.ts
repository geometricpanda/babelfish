import {FastifyReply, FastifyRequest} from 'fastify';
import {decrypt} from "./decrypt";

export interface DecryptRequest {
    encrypted: string;
}

export const decryptRoute = async (request: FastifyRequest, reply: FastifyReply) => {
    const {encrypted} = request.body as DecryptRequest;
    const decrypted = decrypt(encrypted);
    return reply.send({
        status: 'success',
        data: decrypted
    })
}



