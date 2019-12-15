env
node v10.16.3
npm 6.9.0
yarn 1.19.1
nest 6.12.2
vue @vue/cli 4.1.1

referencias
https://socket.io/
https://socket.io/docs/emit-cheatsheet/
https://docs.nestjs.com/
https://cli.vuejs.org/
https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md

server
npm install -g @nestjs/cli / yarn global add @nestjs/cli
nest new my-nest-project
yarn add @nestjs/websockets @nestjs/platform-socket.io
yarn add -D @types/socket.io
yarn add @nestjs/typeorm typeorm mongodb dotenv
yarn add -D nodemon ts-node
yarn start:dev
*nest g ga app
nest g mo users
nest g s users
nest g co users
nest g class users/user.entity

db
https://mlab.com/
mongodb://franko:franko1587@ds353358.mlab.com:53358/websockets

client
yarn global add @vue/cli
vue create my-project
yarn add socket.io-client vue-socket.io-extended
vue add vuetify
vue invoke vuetify
yarn serve