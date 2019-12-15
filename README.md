# Servidor websockets con NestJs

Ejemplo sobre desarrollo de un servidor websockets con NestJS para comunicación en tiempo real.

## Entorno de desarrollo

* node v10.16.3
* npm 6.9.0
* yarn 1.19.1
* nest 6.12.2

### Referencias

* [Socket.io](https://socket.io/) - Documentación sobre socket client-server.
* [Emit cheatsheet](https://socket.io/docs/emit-cheatsheet/) - Lista de los "emit" de socket.io.
* [NestJs](https://docs.nestjs.com/) - Documentación sobre el framework del server.
* [TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md) - Documentación de typeorm sobre mongo.

## Commandos y librerías

Instalación de NestJs forma global.
```
npm install -g @nestjs/cli / yarn global add @nestjs/cli
```

Genera un nuevo proyecto.
```
nest new my-nest-project
````

Librerías importtantes para el websocket.
```
yarn add @nestjs/websockets @nestjs/platform-socket.io
yarn add -D @types/socket.io
````

Librerías para el ORM, driver de mongo, lectura del archivo .env
```
yarn add @nestjs/typeorm typeorm mongodb dotenv
yarn add -D nodemon ts-node
````

Generamos un archivo gateway en el servidor.
```
nest g ga app
```
Short cuts para crear , model, service, controller, clase para la entidad.
```
nest g mo users
nest g s users
nest g co users
nest g class users/user.entity
```

Levanta el servidor en modo desarrolador.
```
yarn start:dev
```

# Base de datos
Mi instancia de la base de datos en mongo fue creada en [mlab](https://mlab.com/).
Cadena de conexión.
```
mongodb://franko:franko1587@ds353358.mlab.com:53358/websockets
```

# Vue para el lado del cliente

> Esta parte del cliente es para el framework de vue, por el momento usaremos un html para las pruebas

Instalación de manera global, creación del proyecto, librerias para conexión al server, librería para componentes de material y levantar el server.
```shell
$ yarn global add @vue/cli
$ vue create my-project
$ yarn add socket.io-client vue-socket.io-extended
$ vue add vuetify
$ vue invoke vuetify
$ yarn serve
```