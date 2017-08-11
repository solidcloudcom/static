import * as express from 'express';
import { Request, Response } from 'express';

import authRouter from './auth';

import indexController from '../controllers/indexController';
import identificationController from '../controllers/identificationController';

const router: express.Router = express.Router();

router.use('/auth', authRouter);

router.get('/login', (req: Request, res: Response) => {
    res.render('index');
});

router.get('/me', identificationController);

router.get('*', indexController);

export default router;
