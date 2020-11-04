import { Socket } from 'socket.io';

import { errors } from '../../../errors';
import {IResponseSocket, ISocketExtended} from '../../../interfaces';
import {ResponseStatusCodeEnum} from '../../../constants';
import {roomController} from '../../../controlers';

export const isRoomExist = async (socket: Socket, events: ISocketExtended): Promise<IResponseSocket | Socket> => {
  const room = await roomController.getRoomByLabel(events.room.label);

  if (room) {
    return {
      status: ResponseStatusCodeEnum.BAD_REQUEST,
      code: errors.BAD_REQUEST_ROOM_ALREADY_EXIST.code,
      message: errors.BAD_REQUEST_WRONG_PARAMS.message};
  }

  return socket;
};
