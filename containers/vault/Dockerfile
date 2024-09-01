FROM hashicorp/vault:1.10.3

# Install jq using apk (Alpine package manager)
RUN apk add --no-cache jq

WORKDIR /vault

# Copy the entrypoint script and keys.json
COPY ./entrypoint.sh ./entrypoint.sh
COPY ./keys.json ./keys.json

# Make sure the script is executable
RUN chmod +x entrypoint.sh

# Use the custom entrypoint script
ENTRYPOINT ["/bin/sh", "/vault/entrypoint.sh"]
