import { Router } from 'express';
const router = Router();
import { getAll, getByName, create } from '../services/client.service';

router.get('/', function (req, res, next) { res.send('CLIENT') });
router.get('/all', getAll);
router.get('/by-name/:name', getByName);
router.post('/create/', create);

export default router;