import Fastify from "fastify";
import {helloWorld} from "./hello-world";

const server = Fastify({trustProxy: true});
await server.register(helloWorld);
await server.ready();

export const main = async (request: Request, reply: Response) => {
    server.server.emit('request', request, reply)
}

export const serve = server;
