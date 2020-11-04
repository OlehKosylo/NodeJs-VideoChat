import {Socket} from 'socket.io';
import {IResponseSocket, ISocketExtended} from '../interfaces';

const breakFunction = () => {
  return;
};

export const socketsMiddlewaresManager = async (middlewares: any[], socket: Socket, events?: ISocketExtended) => {
  let errorStatus: IResponseSocket = null as any;

  for await (const middleware of middlewares) {
    // eslint-disable-next-line no-unused-expressions
    errorStatus?.status ? breakFunction() : errorStatus = await middleware(errorStatus?.socket || socket, events);
  }

  return errorStatus;
};
