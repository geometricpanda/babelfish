import {config} from "dotenv";
config();

const {VAULT, VAULT_ADDR} = process.env;

if (!VAULT) {
    throw new Error('VAULT is required');
}

if (!VAULT_ADDR) {
    throw new Error('VAULT_ADDR is required');
}

export const ENV = {
    VAULT,
    VAULT_ADDR,
}
