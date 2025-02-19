# NGINX Auth Proxy
nginx as an authentication proxy

> **NOTE:** This repository serves as a demonstration for auth proxy. It is not intended for production use.

## Development

```sh
# Install Dependecies
$ yarn

# start nginx
$ docker-compose up -d
# start api and authenticate
$ ./start.sh

# stop nginx
$ docker-compose down
```

- Replace the IP address with your PC's IP in the `nginx.conf` file before starting Nginx.

```conf
upstream api{
  server xx.xx.xx.xx:8002;
}
upstream authenticate{
  server xx.xx.xx.xx:8001;
}
```
> Running at http://localhost:8000
