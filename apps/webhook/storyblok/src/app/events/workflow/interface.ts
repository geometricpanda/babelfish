import type {StoryblokWebhook} from "../storyblok.webhook";

export module WorkflowWebhook {

    export enum ACTION {
        STAGE_CHANGED = 'stage.changed',
    }

    export type Events = StageChanged;

    export type StageChanged = StoryblokWebhook<ACTION.STAGE_CHANGED> & {
        story_id: number;
        workflow_name: string;
        workflow_stage_name: string;
    };



}
