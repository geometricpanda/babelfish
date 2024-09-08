import Fastify from "fastify";
import {Routes} from "./app";

const server = Fastify({trustProxy: true});
// await server.register(FastifyDotenv);
await server.register(Routes);

await server.ready();

export const main = async (request: Request, reply: Response) => {
    server.server.emit('request', request, reply)
}

export const serve = server;
