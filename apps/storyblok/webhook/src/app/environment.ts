import {config} from "dotenv";

config();

const WEBHOOK_SECRET = (() => {
    const secret = process.env.WEBHOOK_SECRET;

    if (!secret) {
        throw new Error('WEBHOOK_SECRET is required');
    }

    return secret;
})();


export const ENV = {
    WEBHOOK_SECRET,
}
