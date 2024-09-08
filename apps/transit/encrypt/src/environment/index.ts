import {config} from "dotenv";
import {resolve} from "node:path";
import {readFile} from "node:fs/promises";
config();

const PUBLIC_KEY = await (() => {
    const key_path = process.env.PUBLIC_KEY;

    if (!key_path) {
        throw new Error('PUBLIC_KEY is required');
    }

    const certPath = resolve(key_path)
    return readFile(certPath, 'utf8')
})()

export const ENV = {
    PUBLIC_KEY,
}
