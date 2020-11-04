import { Socket } from 'socket.io';

import { errors } from '../../../errors';
import {IResponseSocket, ISocketExtended} from '../../../interfaces';
import {ResponseStatusCodeEnum} from '../../../constants';
import {roomValidator} from '../../../validators';

export const isRoomDataValid = (socket: Socket, events: ISocketExtended): IResponseSocket | Socket => {
  const {error} = roomValidator.validate(events.room);

  if (error) {
    return {
      status: ResponseStatusCodeEnum.BAD_REQUEST,
      code: errors.BAD_REQUEST_WRONG_PARAMS.code,
      message: errors.BAD_REQUEST_WRONG_PARAMS.message};
  }

  return socket;
};
