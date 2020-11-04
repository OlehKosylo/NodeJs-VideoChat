import {Socket} from 'socket.io';

import {io} from '../../index';
import {ISocketExtended} from '../../interfaces';
import {createRoom} from './room.helpers';

export default (): void => {
  io.on('connection', (socket: Socket) => {
    socket.on('create.room',(e: ISocketExtended) => createRoom(socket, e));

  });
};
