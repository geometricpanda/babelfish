import {vaultClient} from "@babelfish/vault";
import {API_TOKENS} from "../environment";

// init vault server
export const {transit} = vaultClient({
    api: 'v1',
    endpoint: API_TOKENS.VAULT_ADDR,
    token: API_TOKENS.VAULT,
})

