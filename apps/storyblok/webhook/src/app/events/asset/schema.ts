import {AssetWebhook} from "./interface";

export const AssetSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [
                AssetWebhook.ACTION.CREATED,
                AssetWebhook.ACTION.RESTORED,
                AssetWebhook.ACTION.DELETED,
                AssetWebhook.ACTION.REPLACED,
            ]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        asset_id: {type: 'number'},
    },
    required: ['action', 'text', 'space_id', 'asset_id'],
}
