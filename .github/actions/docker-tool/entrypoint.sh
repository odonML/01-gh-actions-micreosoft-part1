#!/bin/sh -l

# 1. Detener el script si hay errores
set -e

# 2. Obtener los inputs (GitHub los pasa como variables de entorno)
# Si en action.yml definiste un input llamado "who-to-greet"
# GitHub lo convierte a INPUT_WHO-TO-GREET (en mayúsculas)
NAME=$1

# 3. Lógica de la acción
echo "Hola $NAME, estamos ejecutando desde un contenedor Alpine 3.18"

# Ejemplo usando curl (que instalamos en el Dockerfile)
RESPONSE=$(curl -s https://api.github.com/zen)
echo "Frase del día desde la API de GitHub: $RESPONSE"

# 4. Definir un output (opcional)
# Esto permite que otros pasos del workflow usen este dato
echo "time=$(date)" >> $GITHUB_OUTPUT