import {DatasourceWebhook} from "./interface";

export const DatasourceSchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [
                DatasourceWebhook.ACTION.DATASOURCE_ENTRY_SAVED,
                DatasourceWebhook.ACTION.ENTRIES_UPDATED,
            ]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        datasource_slug: {type: 'string'},
    },
    required: ['action', 'text', 'space_id', 'datasource_slug'],
}
