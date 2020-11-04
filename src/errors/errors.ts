import {StatusesEnum} from '../constants/enums';

export const errors = {
  // 400
  BAD_REQUEST_WRONG_PARAMS: {
    message: StatusesEnum.BAD_REQUEST_WRONG_PARAMS,
    code: 4000
  },

  BAD_REQUEST_ROOM_ALREADY_EXIST: {
    message: StatusesEnum.BAD_REQUEST_ROOM_ALREADY_EXIST,
    code: 4001
  }
};
