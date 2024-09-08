import {config} from "dotenv";
import {resolve} from "node:path";
import {readFile} from "node:fs/promises";

config();

const PRIVATE_KEY = await (() => {
    const key_path = process.env.PRIVATE_KEY;

    if (!key_path) {
        throw new Error('PRIVATE_KEY is required');
    }

    const certPath = resolve(key_path)
    return readFile(certPath, 'utf8')
})();

const PRIVATE_KEY_PASSPRHASE = (() => {
    const key_passphrase = process.env.PRIVATE_KEY_PASSPHRASE;

    if (!key_passphrase) {
        throw new Error('PRIVATE_KEY_PASSPHRASE is required');
    }

    return key_passphrase;
})();

export const ENV = {
    PRIVATE_KEY,
    PRIVATE_KEY_PASSPRHASE,
}
