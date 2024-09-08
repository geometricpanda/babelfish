import type {StoryblokWebhook} from "../storyblok.webhook";

export module StoryWebhook {

    export enum ACTION {
        PUBLISHED = 'published',
        UNPUBLISHED = 'unpublished',
        DELETED = 'deleted',
        MOVED = 'moved',
    }

    export type Events = Published | Unpublished | Deleted | Moved;

    export type Published = StoryblokWebhook<ACTION.PUBLISHED> & {
        story_id: number;
        full_slug: string;
    };

    export type Unpublished = StoryblokWebhook<ACTION.UNPUBLISHED> & {
        story_id: number;
        full_slug: string;
    };

    export type Deleted = StoryblokWebhook<ACTION.DELETED> & {
        story_id: number;
    }

    export type Moved = StoryblokWebhook<ACTION.MOVED> & {
        story_id: number;
    }

}
