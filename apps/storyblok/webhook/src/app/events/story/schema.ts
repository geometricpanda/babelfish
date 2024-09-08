import {StoryWebhook} from "./interface";

export const StorySchema = {
    type: 'object',
    properties: {
        action: {
            type: 'string',
            enum: [
                StoryWebhook.ACTION.DELETED,
                StoryWebhook.ACTION.PUBLISHED,
                StoryWebhook.ACTION.UNPUBLISHED,
                StoryWebhook.ACTION.MOVED,
            ]
        },
        text: {type: 'string'},
        space_id: {type: 'number'},
        story_id: {type: 'number'},
        full_slug: {type: 'string'},
    },
    required: ['action', 'text', 'space_id', 'story_id'],
}
