# Setup

## Dependencies

- Run Docker Compose `docker-compose up`
- Install dependencies `yarn install`

## Transit Encryption

### Generate a private key
This will prompt you for a password

```shell
openssl genpkey \
  -out apps/transit/decrypt/private-key.pem \
  -algorithm RSA \
  -aes256
```

then create a `.env` file in `apps/transit/decrypt` with the following content

```dotenv
PRIVATE_KEY=private-key.pem
PRIVATE_KEY_PASSPHRASE=YOUR PASSWORD
```

### Generate a public key
This will prompt you for a password

```shell
openssl rsa \
  -in apps/transit/decrypt/private-key.pem \
  -out apps/transit/encrypt/public-key.pem \
  -pubout
```

then create a `.env` file in `apps/transit/encrypt` with the following content

```dotenv
PUBLIC_KEY=public-key.pem
```


## Storyblok Webbook

Generate a `.env` file in `apps/storyblok/webook`;

```shell
echo "WEBHOOK_SECRET=$(openssl rand -base64 32)" > ./apps/storyblok/webhook/.env
```

**Note:** This is the secret given to storyblok when creating the webhook.
The above one is just an example, working with the requests in the Storyblok docs example.

## Broker

Currently has no secrets.

