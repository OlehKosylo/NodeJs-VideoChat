import {Socket} from 'socket.io';

import {IResponseSocket, IRoom, ISocketExtended} from '../../../interfaces';
import {socketsMiddlewaresManager} from '../../../helpers';
import {errorHandlerSockets} from '../../../errors';
import {isRoomDataValid, isRoomExist} from '../../../middlewares';
import {roomController} from '../../../controlers';
import {io} from '../../../index';

export const createRoom = async (socket: Socket, event: ISocketExtended): Promise<void> => {
  const middlewares = [isRoomDataValid, isRoomExist];
  const errorStatus: IResponseSocket | undefined = await socketsMiddlewaresManager(middlewares, socket, event);

  if (errorStatus?.status) {
    errorHandlerSockets(errorStatus.message, errorStatus.code, socket);
  } else {
    const room: IRoom = await roomController.createRoom(event.room);

    io.emit('get new created room', room);
  }
};
