import * as http from 'http';
import {connection} from './sockets';
import * as socketIo from 'socket.io';

import { app } from './app';
import { config, sequelize } from './config';

const server = http.createServer(app);

export const io = socketIo(server);
connection();

sequelize.sync().then(() => {
  server.listen(config.PORT, () => {
    console.log(`listen on ${config.PORT} port`);
  });
}).catch(error => {
  console.log('Filed to start DB: ',error.parent.sqlMessage || error);
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on('uncaughtException', error => {
  console.log(error);
});
process.on('unhandledRejection', error => {
  console.log(error);
});
