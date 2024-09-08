import {publicEncrypt} from "node:crypto";
import {ENV} from "../environment";

export function encrypt(data: unknown) {
    const dataString = JSON.stringify(data);
    const buffer = Buffer.from(dataString);
    const encrypted = publicEncrypt(ENV.PUBLIC_KEY, buffer)
    const encryptedString = encrypted.toString('base64url');
    return encryptedString;
}
