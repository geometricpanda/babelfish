import {StoryblokWebhook} from "../storyblok.webhook";

export module TaskWebhook {

    export enum ACTION {
        EXECUTION = 'task_execution',
    }

    export type Events = Execution;

    export type Execution = StoryblokWebhook<ACTION.EXECUTION> & {
        dialog_values: null | Record<string, string>;
        task: {
            id: number;
            name: string;
        },
    };

}
