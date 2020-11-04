import {IRoom} from '../interfaces';
import {roomModel} from '../database/models';

class RoomService {
  createRoom(room: IRoom): Promise<IRoom> {
    return roomModel.create(room) as any;
  }

  getRooms(): Promise<IRoom[]> {
    return roomModel.findAll() as any;
  }

  getRoomByLabel(label: string): Promise<IRoom> {
    return roomModel.findOne({
      where: {label}
    }) as any;
  }
}

export const roomService = new RoomService();
