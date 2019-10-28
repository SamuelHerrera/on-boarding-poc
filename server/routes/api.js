import { Router } from 'express';
const router = Router();
import user from './user';
import client from './client';
import project from './project';

router.get('/', function (req, res, next){res.send('API')});
router.use('/user', user);
router.use('/client', client);
router.use('/project', project);

export default router;