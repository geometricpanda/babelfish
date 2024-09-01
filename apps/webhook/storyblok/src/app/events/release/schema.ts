import {ReleaseWebhook} from "./interface";

export const ReleaseSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [ReleaseWebhook.ACTION.MERGED]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        release_id: {type: 'number'},
    },
    required: ['action', 'text', 'space_id', 'release_id'],
}
