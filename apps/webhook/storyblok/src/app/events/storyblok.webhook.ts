
export type StoryblokWebhook<T = string> = {
    action: T;
    text: string;
    space_id: number;
}
