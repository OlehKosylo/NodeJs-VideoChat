import {Router} from 'express';

import {roomController} from '../../controlers';

const router = Router();

router.get('/', roomController.getRooms);

export const roomRouter = router;
