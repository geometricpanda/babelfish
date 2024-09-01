import {VaultConfig} from "../../vault.interface";
import {Transit} from "./interface";
import {VaultError} from "../../error";

export const transit = ({api, endpoint, token}: VaultConfig): Transit.Client => ({
    encrypt: async (name, {payload, ...options}) => {
        const url = new URL(`${api}/transit/encrypt/${name}`, endpoint);

        const body = <Transit.EncryptPayload>{
            ...options,
            plaintext: Buffer
                .from(JSON.stringify(payload), 'utf-8')
                .toString('base64'),
        };

        const req = await fetch(url, {
            method: 'POST',
            headers: {'X-Vault-Token': token},
            body: JSON.stringify(body),
        });

        if (!req.ok) {
            const response: Transit.EncryptError = await req.json();
            throw new VaultError(response.errors[0]);
        }

        const {data: {ciphertext}}: Transit.EncryptResponse = await req.json();
        return ciphertext;
    },

    decrypt: async (name, {payload, ...options}) => {
        const url = new URL(`${api}/transit/decrypt/${name}`, endpoint);

        const body = <Transit.DecryptPayload>{
            ...options,
            ciphertext: payload,
        };

        const req = await fetch(url, {
            method: 'POST',
            headers: {'X-Vault-Token': token},
            body: JSON.stringify(body),
        });

        if (!req.ok) {
            const response: Transit.DecryptError = await req.json();
            throw new VaultError(response.errors[0]);
        }

        const {data: {plaintext}}: Transit.DecryptResponse = await req.json();

        const buffer = Buffer
            .from(plaintext, 'base64')
            .toString('utf-8');

        return JSON.parse(buffer);
    },
});
