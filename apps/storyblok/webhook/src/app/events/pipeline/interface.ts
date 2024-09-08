import type {StoryblokWebhook} from "../storyblok.webhook";

export module PipelineWebhook {

    export enum ACTION {
        DEPLOYED = 'deployed',
    }

    export type Events = Deployed;

    export type Deployed = StoryblokWebhook<ACTION.DEPLOYED> & {
        branch_id: number;
    };

}
