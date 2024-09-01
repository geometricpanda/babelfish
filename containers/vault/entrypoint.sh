#!/bin/bash

# Start Vault in the background
vault server -config=/vault/config/vault-config.hcl &


# Unseal Vault using the keys from /vault/keys.json
UNSEAL_KEYS=$(jq -r '.keys[]' /vault/keys.json)

for KEY in $UNSEAL_KEYS; do
  vault operator unseal $KEY
done

# Keep the container running with a sleep command
sleep infinity
