import type {StoryblokWebhook} from "../storyblok.webhook";

export module DatasourceWebhook {

    export enum ACTION {
        ENTRIES_UPDATED = 'entries_updated',
        DATASOURCE_ENTRY_SAVED = 'datasource_entry_saved',
    }

    export type Events = Updated | EntrySaved;

    export type Updated = StoryblokWebhook<ACTION.ENTRIES_UPDATED> & {
        datasource_slug: string;
    };

    export type EntrySaved = StoryblokWebhook<ACTION.DATASOURCE_ENTRY_SAVED> & {
        datasource_slug: string;
    };

}
