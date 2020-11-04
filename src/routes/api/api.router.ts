import { Router } from 'express';

import {roomRouter} from '../room';

const router = Router();

router.use('/rooms', roomRouter);

export const apiRouter = router;
