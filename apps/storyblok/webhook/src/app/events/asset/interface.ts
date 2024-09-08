import {StoryblokWebhook} from "../storyblok.webhook";

export module AssetWebhook {

    export enum ACTION {
        CREATED = 'created',
        REPLACED = 'replaced',
        DELETED = 'deleted',
        RESTORED = 'restored',
    }

    export type Events = Created | Replaced | Deleted | Restored;

    export type Created = StoryblokWebhook<ACTION.CREATED> & {
        asset_id: number;
    };

    export type Replaced = StoryblokWebhook<ACTION.REPLACED> & {
        asset_id: number;
    };

    export type Deleted = StoryblokWebhook<ACTION.DELETED> & {
        asset_id: number;
    };

    export type Restored = StoryblokWebhook<ACTION.RESTORED> & {
        asset_id: number;
    };
}
