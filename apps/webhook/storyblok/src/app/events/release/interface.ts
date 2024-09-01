import type {StoryblokWebhook} from "../storyblok.webhook";

export module ReleaseWebhook {

    export enum ACTION {
        MERGED = 'merged',
    }

    export type Events = Merged;

    export type Merged = StoryblokWebhook<ACTION.MERGED> & {
        release_id: number;
    };

}
