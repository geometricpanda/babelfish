import  {FastifyInstance} from "fastify";


export const helloWorld = async (fastify: FastifyInstance) => {
    fastify.get('/hello-world', async (request, reply) => {
        return {hello: 'world'}
    })
}

