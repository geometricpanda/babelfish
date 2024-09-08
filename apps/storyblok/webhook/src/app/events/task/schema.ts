import {TaskWebhook} from "./interface";

export const TaskSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [TaskWebhook.ACTION.EXECUTION]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        dialog_values: {
            oneOf: [
                {type: 'null'},
                {type: 'object'}
            ]
        },
        task: {
            type: 'object',
            properties: {
                id: {type: 'number'},
                name: {type: 'string'},
            },
            required: ['id', 'name'],
        }
    },
    required: ['action', 'text', 'space_id', 'task'],
}
