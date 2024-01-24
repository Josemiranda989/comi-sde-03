# Proyecto de Desarrollo Full Stack Node con Sequelize y MySQL

Este proyecto es una aplicación Node.js con Sequelize para el desarrollo full stack. Incluye modelos para usuarios y países, así como seeders para poblar la base de datos con datos de ejemplo.

## Requisitos previos

Asegúrate de tener Node.js y npm instalados en tu máquina.

# Instalar dependencias
```bash
npm install
```

Crear db
Ejecuta el comando para crear la base de datos.
# Ejecutar migraciones
```bash
npx sequelize-cli db:create
```
Migraciones
Ejecuta las migraciones para crear las tablas en la base de datos.
# Ejecutar migraciones
```bash
npx sequelize-cli db:migrate
```
Seeders
Ejecuta los seeders para poblar la base de datos con datos de ejemplo.
# Ejecutar seeders
```bash
npx sequelize-cli db:seed:all
```
Iniciar la aplicación

# Iniciar la aplicación
```bash
npm start
```