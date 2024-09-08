import {SYSTEM} from "./system";

export const API = new URL('http://localhost:8000');

export const APIS: Record<SYSTEM, URL> = {
    [SYSTEM.BROKER]: new URL('broker', API),
    [SYSTEM.STORYBLOK_WEBHOOK]: new URL('webhook/storyblok', API),
    [SYSTEM.TRANSIT_ENCRYPT]: new URL('transit/encrypt', API),
    [SYSTEM.TRANSIT_DECRYPT]: new URL('transit/decrypt', API),
}
