import {vaultClient} from "@babelfish/vault";
import {ENV} from "../environment";

// init vault server
export const {transit, kv} = vaultClient({
    api: 'v1',
    endpoint: ENV.VAULT_ADDR,
    token: ENV.VAULT,
})

