import type {StoryblokWebhook} from "../storyblok.webhook";

export module UserWebhook {

    export enum ACTION {
        CREATED = 'added',
        REMOVED = 'removed',
        ROLES_UPDATED = 'roles_updated',
    }

    export type Events = Created | Removed | RolesUpdated;

    export type Created = StoryblokWebhook<ACTION.CREATED> & {
        user_id: number;
    };

    export type Removed = StoryblokWebhook<ACTION.REMOVED> & {
        user_id: number;
    };

    export type RolesUpdated = StoryblokWebhook<ACTION.ROLES_UPDATED> & {
        user_id: number;
    };

}
