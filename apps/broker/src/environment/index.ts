export class API_TOKENS {
    static get VAULT() {
        const {VAULT} = process.env;
        if (!VAULT) throw new Error('VAULT is required');
        return VAULT;
    }

    static get VAULT_ADDR() {
        const {VAULT_ADDR} = process.env;
        if (!VAULT_ADDR) throw new Error('VAULT_ADDR is required');
        return VAULT_ADDR;
    }
}
