```shell
vault write auth/approle/role/storyblok-webhook-incoming \
    secret_id_bound_cidrs="0.0.0.0/0" \
    secret_id_ttl=720h \
    secret_id_num_uses=0 \
    token_bound_cidrs="0.0.0.0/0" \
    token_num_uses=0\
    token_ttl=720h \
    token_max_ttl=720h \
    token_policies="transit/broker/encrypt"
```

```shell
vault read auth/approle/role/storyblok-webhook-incoming/role-id
```

```shell
vault write -f auth/approle/role/storyblok-webhook-incoming/secret-id
```

```shell
vault write auth/approle/role/storyblok-webhook-incoming policies=webhook/storyblok
```

````shell
vault write auth/approle/login role_id="XXX" secret_id="XXX"
```
