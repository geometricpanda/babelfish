import type {FastifyPluginCallback} from "fastify";
import {broker} from "./broker";

export const Routes: FastifyPluginCallback = async (instance, options) => {
    instance.get('/', broker);
}
