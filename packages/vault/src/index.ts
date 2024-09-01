import {transit} from "./functions/transit";
import {VaultConfig} from "./vault.interface";
import {kv} from "./functions/kv";

export const vaultClient = (config: VaultConfig) => {
    return {
        transit: transit(config),
        kv: kv(config),
    }
}
