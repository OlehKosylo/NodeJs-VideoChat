import {NextFunction, Request, Response} from 'express';
import {IRoom} from '../interfaces';
import {roomService} from '../services';

class RoomController {
  async getRooms(req: Request, res: Response, next: NextFunction) {
    const rooms: IRoom[] = await roomService.getRooms();

    res.json(rooms);
  }

  getRoomById(req: Request, res: Response, next: NextFunction) {
    // const room_id: number = req.query;
    //
    // const room: IRoom = await roomService.getRoomById(room_id);

    res.json(null);
  }

  // Sockets
  createRoom(room: IRoom) {
    return roomService.createRoom(room);
  }

  getRoomByLabel(label: string) {
    return roomService.getRoomByLabel(label);
  }
}

export const roomController = new RoomController();
