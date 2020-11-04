import {DataTypes, Model} from 'sequelize';

import {sequelize} from '../../config';
import {ModelNameEnum} from '../../constants/enums';

class RoomModel extends Model {
}

RoomModel.init({
  label: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize,
  modelName: ModelNameEnum.ROOM
});

export const roomModel = RoomModel;
