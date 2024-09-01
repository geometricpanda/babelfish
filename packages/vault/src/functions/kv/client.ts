import {VaultConfig} from "../../vault.interface";
import {Kv} from "./interface";
import {VaultError} from "../../error";

export const kv = ({api, endpoint, token}: VaultConfig): Kv.Client => ({
    read: async (path, name) => {
        const url = new URL(`${api}/kv/data/${path}`, endpoint);

        const req = await fetch(url, {
            method: 'GET',
            headers: {'X-Vault-Token': token},
        });

        if (!req.ok) {
            const response: Kv.ReadError = await req.json();
            throw new VaultError(response.errors[0]);
        }

        const {data: {data}}: Kv.ReadResponse = await req.json();

        const value = data[name];

        if(!value) {
            throw new Error(`Secret: "${name}" not found`);
        }

        return value;
    }
})
