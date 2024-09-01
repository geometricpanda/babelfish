import {FastifyReply, FastifyRequest} from "fastify";

export const webhook = async (request: FastifyRequest, reply: FastifyReply) => {

    return reply.send(request.body);


}


//
// try {
//
// } catch (e) {
//     console.log(e);
//     return reply
//         .code(500)
//         .send({error: 'Internal Server Error'})
// }
