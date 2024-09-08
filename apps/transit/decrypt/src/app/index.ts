import type {FastifyPluginCallback} from "fastify";
import {decryptRoute} from "./decrypt.route";

export const Routes: FastifyPluginCallback = async (instance, options) => {
    instance.post('/', decryptRoute);
}
