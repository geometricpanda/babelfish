import type {FastifyPluginCallback} from "fastify";
import {encryptRoute} from "./encrypt.route";

export const Routes: FastifyPluginCallback = async (instance, options) => {
    instance.post('/', encryptRoute);
}
