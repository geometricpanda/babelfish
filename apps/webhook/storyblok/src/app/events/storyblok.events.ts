import {StoryWebhook} from "./story/interface";
import {AssetWebhook} from "./asset/interface";
import {DatasourceWebhook} from "./datasource/interface";
import {PipelineWebhook} from "./pipeline/interface";
import {ReleaseWebhook} from "./release/interface";
import {TaskWebhook} from "./task/interface";
import {UserWebhook} from "./user/interface";
import {WorkflowWebhook} from "./workflow/interface";

export type StoryblokEvents =
    | AssetWebhook.Events
    | DatasourceWebhook.Events
    | PipelineWebhook.Events
    | ReleaseWebhook.Events
    | StoryWebhook.Events
    | TaskWebhook.Events
    | UserWebhook.Events
    | WorkflowWebhook.Events;

