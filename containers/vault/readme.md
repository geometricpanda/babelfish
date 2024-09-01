# Troubleshooting

If having problems initializing the vault:

```shell
docker run -it --rm -v babel-fish_vault-payload:/mnt busybox sh
ls -la /mnt
chmod -R 777 /mnt
exit
```

then

```shell
docker-compose down
docker-compose up --build
```
