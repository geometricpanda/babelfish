import {privateDecrypt} from "node:crypto";
import {ENV} from "../environment";

export function decrypt(data: string) {
    const buffer = Buffer.from(data, 'base64url');
    const decrypted = privateDecrypt(
        {
            key: ENV.PRIVATE_KEY,
            passphrase: ENV.PRIVATE_KEY_PASSPRHASE
        },
        buffer
    );
    const decryptedString = decrypted.toString('utf8');
    const decryptedData = JSON.parse(decryptedString);
    return decryptedData;
}
