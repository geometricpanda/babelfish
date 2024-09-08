import {PipelineWebhook} from "./interface";

export const PipelineSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [PipelineWebhook.ACTION.DEPLOYED]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        branch_id: {type: 'number'},
    },
    required: ['action', 'text', 'space_id', 'branch_id'],
}
