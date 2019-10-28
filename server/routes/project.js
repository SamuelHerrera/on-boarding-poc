import { Router } from 'express';
const router = Router();
import { getAll, getByName, create, getByClient } from '../services/project.service';

router.get('/', function (req, res, next) { res.send('PROJECT') });
router.get('/all', getAll);
router.get('/by-name/:name', getByName);
router.get('/by-client/:client', getByClient);
router.post('/create/', create);

export default router;