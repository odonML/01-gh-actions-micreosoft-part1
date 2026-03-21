#.github/actions/docker-tool/Dockerfile
FROM alpine:3.18
# Instalamos curl, que no viene en los runners por defecto a veces en versiones específicas
RUN apk add --no-cache curl 
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]