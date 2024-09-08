import {UserWebhook} from "./interface";

export const UserSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [
                UserWebhook.ACTION.CREATED,
                UserWebhook.ACTION.REMOVED,
                UserWebhook.ACTION.ROLES_UPDATED,
            ]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        user_id: {type: 'number'},
    },
    required: ['action', 'text', 'space_id', 'user_id'],
}
