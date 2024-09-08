import Fastify from "fastify";
import fastifyRawBody from 'fastify-raw-body';

import {Routes} from "./app";

const app = Fastify({trustProxy: true});

await app.register(fastifyRawBody, {
    field: 'rawBody',
    global: true,
    encoding: 'utf8',
    runFirst: true,
})

app.register(Routes);

await app.ready();

export const main = async (request: Request, reply: Response) => {
    app.server.emit('request', request, reply)
}

export const serve = app;
