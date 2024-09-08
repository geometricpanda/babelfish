import {StoryWebhook} from "./story";
import {AssetWebhook} from "./asset";
import {DatasourceWebhook} from "./datasource";
import {PipelineWebhook} from "./pipeline";
import {ReleaseWebhook} from "./release";
import {TaskWebhook} from "./task";
import {UserWebhook} from "./user";
import {WorkflowWebhook} from "./workflow";

export type StoryblokEvents =
    | AssetWebhook.Events
    | DatasourceWebhook.Events
    | PipelineWebhook.Events
    | ReleaseWebhook.Events
    | StoryWebhook.Events
    | TaskWebhook.Events
    | UserWebhook.Events
    | WorkflowWebhook.Events;
