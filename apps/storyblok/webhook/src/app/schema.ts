import type {FastifySchema} from "fastify";
import {AssetSchema} from "./events/asset";
import {DatasourceSchema} from "./events/datasource";
import {PipelineSchema} from "./events/pipeline";
import {ReleaseSchema} from "./events/release";
import {StorySchema} from "./events/story";
import {TaskSchema} from "./events/task";
import {WorkflowSchema} from "./events/workflow";
import {UserSchema} from "./events/user";

export const body = {
    type: 'object',
    anyOf: [
        AssetSchema,
        DatasourceSchema,
        PipelineSchema,
        ReleaseSchema,
        StorySchema,
        TaskSchema,
        UserSchema,
        WorkflowSchema,
    ]
}

export const headers = {
    type: 'object',
    properties: {
        'webhook-signature': {type: 'string'}
    },
    required: ['webhook-signature']
}

export const schema: FastifySchema = {
    body,
    headers,
}
